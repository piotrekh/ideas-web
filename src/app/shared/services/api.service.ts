import { Injectable } from '@angular/core'
import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'

import { environment } from '../../../environments/environment'
import { Category } from '../models/category.model'
import { TokenResponse } from '../models/token-response.model'
import { TokenRequest } from '../models/token-request.model'
import * as constants from '../const/constants'

@Injectable()
export class ApiService {
    constructor(private http: Http){ }

    getAccessToken(email: string, password: string) : Observable<TokenResponse> {
        let url: string = `${environment.apiUrl}/auth/token`;
        let body: TokenRequest = {
            client_id: environment.clientId,
            grant_type: constants.grantTypes.password,
            password: password,
            refresh_token: null,
            username: email
        };

        return this.http.post(url, body)
            .map((r: Response) => { return r.json() as TokenResponse; });
    }

    refreshAccessToken(refreshToken: string) : Observable<TokenResponse> {
        let url: string = `${environment.apiUrl}/auth/token`;
        let body: TokenRequest = {
            client_id: environment.clientId,
            grant_type: constants.grantTypes.refreshToken,
            password: null,
            refresh_token: refreshToken,
            username: null
        };

        return this.http.post(url, body)
            .map((r: Response) => { return r.json() as TokenResponse; });
    }

    getCategories() : Observable<Category[]>{
        let url: string = `${environment.apiUrl}/categories`;

        let requestHeaders = new Headers();
        requestHeaders.append('Authorization', 'bearer <TOKEN>');  

        let requestOptions: RequestOptionsArgs = {
            headers: requestHeaders
        };

        return this.http.get(url, requestOptions)
            .map((r: Response) => { return r.json().items as Category[]; });
    }
}