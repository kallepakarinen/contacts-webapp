import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {Observable} from 'rxjs/internal/Observable';
import {ContactHttpService} from './contact-http-service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // contacts: Contact[];


  constructor(private contactHttpService: ContactHttpService) {}


  getContacts(): Observable<Contact[]> {
    return this.contactHttpService.getContacts();
  }
}
