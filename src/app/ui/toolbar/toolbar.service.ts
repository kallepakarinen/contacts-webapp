import {Injectable} from '@angular/core';
import {ToolbarOptions} from './toolbar-options';
import {BehaviorSubject} from 'rxjs';
import {Observable} from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  toolbarOptions: BehaviorSubject<ToolbarOptions>;

  constructor() {
    this.toolbarOptions = new BehaviorSubject<ToolbarOptions>(
      new ToolbarOptions(false, 'Contact Applications', []));
  }

  getToolbarOptions(): Observable<ToolbarOptions> {
    return this.toolbarOptions.asObservable();
  }

  setToolbarOptions(options: ToolbarOptions): void {
    this.toolbarOptions.next(options);
  }

}
