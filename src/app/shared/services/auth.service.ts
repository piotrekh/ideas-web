import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { StorageService } from './storage.service';
import { ApiService } from './api.service';

@Injectable()
export class AuthService {

    constructor(private apiService: ApiService,
        private storageService: StorageService){}    

    public isLoggedIn(): boolean {
        return this.storageService.getAccessToken() != null;
    }

    public login(email: string, password: string) : Observable<any> {
        return this.apiService.getAccessToken(email, password)
            .mergeMap(tokenResponse => {
                //save the token and refresh token
                this.storageService.setAccessToken(tokenResponse.access_token);
                this.storageService.setRefreshToken(tokenResponse.refresh_token);

                return Observable.of({});
            });
    }

    public logout() {
        this.storageService.deleteAccessToken();
        this.storageService.deleteRefreshToken();
    }
}