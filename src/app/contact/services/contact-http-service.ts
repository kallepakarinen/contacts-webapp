import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';
import {Contact} from '../contact';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactHttpService {
  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.apiEndpointUrl;
  }

  getContacts(): Observable<Contact[]> {
    return this.httpClient.get(this.url).pipe(map(response => {
      return response as Contact[];
    }));
  }

  getById(id): Observable<Contact> {
    return this.httpClient.get(this.url + '/' + id).pipe(map(response => {
      return response as Contact;
    }));
  }

  put(contact): Observable<Contact> {
    return this.httpClient.put(this.url + '/' + contact.id, contact).pipe(map(response => {
      return response as Contact;
    }));
  }

  post(contact): Observable<Contact> {
    return this.httpClient.post(this.url, contact).pipe(map(response => {
      return response as Contact;
    }));
  }

}
