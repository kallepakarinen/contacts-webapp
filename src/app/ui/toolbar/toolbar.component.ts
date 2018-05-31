import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToolbarService} from './toolbar.service';
import {ToolbarOptions} from './toolbar-options';
import {Location} from '@angular/common';
import {TokenService} from '../../user/services/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'cw-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() MenuClick: EventEmitter<any>;
  options: ToolbarOptions;

  constructor(private location: Location, private toolbar: ToolbarService, private tokenService: TokenService, private router: Router) {
    this.MenuClick = new EventEmitter<any>();
  }

  ngOnInit() {
    this.toolbar.getToolbarOptions().subscribe((options: ToolbarOptions) => {
      this.options = options;
    });
  }

  onMenuClick() {
    this.MenuClick.emit();
  }

  onNavigateBack() {
    this.location.back();
  }

/*  onLogOut () {
    this.tokenService.clearToken();
    this.router.navigate(['/login']);
  }*/
}
