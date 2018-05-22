import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {ToolbarOptions} from './toolbar-options';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  toolbarOptions: BehaviorSubject<ToolbarOptions>;

  constructor() {
    this.toolbarOptions = new BehaviorSubject<ToolbarOptions>(
      new ToolbarOptions('Contact Applications', []));
  }
}
