import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'

import { ApiService } from './api.service'

@Injectable()
export class AuthService {

    constructor(private apiService: ApiService){}    

    public isLoggedIn(): boolean {
        return localStorage.getItem("accessToken") != null;
    }

    public getAccessToken() : string {
        return localStorage.getItem("accessToken");
    }

    public getRefreshToken() : string {
        return localStorage.getItem("refreshToken");
    }

    public login(email: string, password: string) : Observable<any> {
        return this.apiService.getAccessToken(email, password)
            .mergeMap(tokenResponse => {
                //save the token and refresh token
                localStorage.setItem("accessToken", tokenResponse.access_token);
                localStorage.setItem("refreshToken", tokenResponse.refresh_token);

                return Observable.of({});
            });
    }

    public logout() {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
    }
}