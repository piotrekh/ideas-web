import { Injectable } from '@angular/core'
import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'

import { environment } from '../../../environments/environment'
import { Category } from '../models/category.model'

@Injectable()
export class ApiService {
    constructor(private http: Http){ }

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