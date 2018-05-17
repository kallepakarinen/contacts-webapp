import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {Observable} from 'rxjs/internal/Observable';
import {ContactHttpService} from './contact-http-service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private contactHttpService: ContactHttpService) {
  }

  getContacts(): Observable<Contact[]> {
    return this.contactHttpService.getContacts();
  }

  getContactById(id): Observable<Contact> {
    return this.contactHttpService.getById(id);
  }

}
