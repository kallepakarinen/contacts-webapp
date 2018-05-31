import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {UserCredientials} from '../user-credientials';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';
import {TokenService} from './token.service';
import {of} from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url: string;

  constructor(private http: HttpClient, private tokenservice: TokenService) {
    this.url = environment.apiEndpointUrl + '/api/authentication';
  }

  // auth. user
  signInUser(userCredentials: UserCredientials): Observable<any> {
    return this.http.post(this.url, userCredentials).pipe(map(result => {
      this.tokenservice.setToken(result);
      return of(true);
    }));
  }

  signOutUser(): void {
    sessionStorage.clear();
  }
}
