import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../services/contact.service';
import {Contact} from '../contact';
import {ToolbarService} from '../../ui/toolbar/toolbar.service';
import {ToolbarOptions} from '../../ui/toolbar/toolbar-options';
import {ToolbarAction} from '../../ui/toolbar/toolbar-action';
import {MatDialog, MatSnackBar} from '@angular/material';
import {DialogComponent} from '../dialog/dialog.component';
import {SnackbarComponent} from '../snackbar/snackbar.component';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  editingEnabled: boolean;
  contactId: any;

  constructor(private router: Router, private route: ActivatedRoute,
              private contactService: ContactService, private toolbar: ToolbarService, public dialog: MatDialog,
              public snackBar: MatSnackBar) {
    this.contact = new Contact();
    this.editingEnabled = false;
  }

  ngOnInit() {
    this.contactId = this.route.snapshot.paramMap.get('id');
    let toolbarActions: ToolbarAction[];

    if (this.contactId == null) {
      this.editingEnabled = true;
      toolbarActions = [];
    } else {
      toolbarActions = [new ToolbarAction(this.onEdit.bind(this), 'edit')];
      this.contactService.getContactById(this.contactId).subscribe(response => {
        this.contact = response;
      }, error => {
        this.router.navigate(['/contacts']);
      });
    }
    this.toolbar.setToolbarOptions(new ToolbarOptions(true, 'Contact', toolbarActions));
  }

  onSave(): void {
    if (this.contactId == null) {
      this.editingEnabled = false;
      if ((this.contact.firstName
        && this.contact.lastName
        && this.contact.phoneNumber
        && this.contact.postalCode
        && this.contact.emailAddress
        && this.contact.streetAddress
        && this.contact.city
      ) === undefined) {
        this.openDialog();
      } else {
        this.openSnackBar();
        this.contactService.createContact(this.contact).subscribe(response => {
          this.router.navigate(['/contacts']);
        });
      }
    } else {
      this.editingEnabled = false;
      this.contactService.updateContact(this.contact).subscribe(response => {
        this.contact = response;
        this.router.navigate(['/contacts']);
      });
    }
  }

  onEdit() {
    let toolbarActions: ToolbarAction[];
    this.editingEnabled = !this.editingEnabled;
    if (this.editingEnabled === true) {
      toolbarActions = [
        new ToolbarAction(this.onEdit.bind(this), 'delete'),
        new ToolbarAction(this.onEdit.bind(this), 'edit')
      ];
    } else {
      toolbarActions = [new ToolbarAction(this.onEdit.bind(this), 'edit')];
    }
    this.toolbar.setToolbarOptions(new ToolbarOptions(true, 'Contact', toolbarActions));
  }

  onDelete() {
    this.editingEnabled = false;
    this.contactService.deleteContact(this.contact).subscribe(() => {
      this.router.navigate(['/contacts']);
    });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      role: 'alertdialog',
      data: 'Fill all fields'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  openSnackBar() {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: 'Save complete',
      duration: 2000,
    });
  }

}
