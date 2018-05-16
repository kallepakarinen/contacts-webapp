import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';
import {Contact} from '../contact';


@Injectable({
  providedIn: 'root'
})
export class ContactHttpService {
  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:3000/contacts';
  }

  getContacts(): Observable<Contact[]> {
    return this.httpClient.get(this.url).pipe(map(response => {
      return response as Contact[];
    }));
  }

}
