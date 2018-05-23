import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../services/contact.service';
import {Contact} from '../contact';
import {ToolbarService} from '../../ui/toolbar/toolbar.service';
import {ToolbarOptions} from '../../ui/toolbar/toolbar-options';
import {ToolbarAction} from '../../ui/toolbar/toolbar-action';

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
              private contactService: ContactService, private toolbar: ToolbarService) {
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
    this.toolbar.toolbarOptions.next(
      new ToolbarOptions(
        'Contact', toolbarActions));
  }

  onNavigateBack(): void {
    this.router.navigate(['/contacts']);
  }

  onSave(): void {
    if (this.contactId == null) {
      this.editingEnabled = false;
      this.contactService.createContact(this.contact).subscribe(response => {
        this.contact = response;
        const toolbarActions: ToolbarAction[] = [new ToolbarAction(this.onEdit.bind(this), 'edit')];
        this.toolbar.toolbarOptions.next(
          new ToolbarOptions('Contact', toolbarActions));
      });
    } else {
      this.editingEnabled = false;
      this.contactService.updateContact(this.contact).subscribe(response => {
        this.contact = response;
        // this.router.navigate(['/contacts']);
      });
    }
  }

  onEdit() {
    this.editingEnabled = !this.editingEnabled;
  }
}
