import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { Category } from '../models/category.model';
import { TokenResponse } from '../models/token-response.model';
import { TokenRequest } from '../models/token-request.model';
import { ItemsResult } from '../models/items-result.model';
import { Idea } from '../models/idea.model';
import * as constants from '../const/constants';

import { StorageService } from './storage.service';

@Injectable()
export class ApiService {
    constructor(private http: Http,
        private storageService: StorageService){ }

    /**
     * Creates http request options with Authorization header
     */
    private createHttpOptions() : RequestOptionsArgs {
        let requestHeaders = new Headers();
        requestHeaders.append('Authorization', 'bearer ' + this.storageService.getAccessToken());  

        let requestOptions: RequestOptionsArgs = {
            headers: requestHeaders
        };

        return requestOptions;
    }

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

    //#region Categories

    getCategories() : Observable<Category[]>{
        let url: string = `${environment.apiUrl}/categories`;

        return this.http.get(url, this.createHttpOptions())
            .map((r: Response) => { return r.json().items as Category[]; });
    }

    //#endregion

    //#region Ideas

    getNewestIdeas() : Observable<Idea[]> {
        let url: string = `${environment.apiUrl}/ideas/newest`;

        return this.http.get(url, this.createHttpOptions())
            .map((r: Response) => { return r.json().items as Idea[]; });
    }

    getIdeasFromCategory(categoryId: string) : Observable<Idea[]> {
        let url: string = `${environment.apiUrl}/categories/${categoryId}/ideas`;

        return this.http.get(url, this.createHttpOptions())
            .map((r: Response) => { return r.json().items as Idea[]; });
    }

    //#endregion
}