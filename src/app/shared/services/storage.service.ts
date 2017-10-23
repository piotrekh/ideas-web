import { Injectable } from '@angular/core';

@Injectable()
export class StorageService
{
    static readonly accessTokenKey = "accessToken";
    static readonly refreshTokenKey = "refreshToken";

    public getAccessToken() : string {
        return localStorage.getItem(StorageService.accessTokenKey);
    }

    public setAccessToken(token: string) {
        localStorage.setItem(StorageService.accessTokenKey, token);
    }

    public deleteAccessToken() {
        localStorage.removeItem(StorageService.accessTokenKey);
    }

    public getRefreshToken() : string {
        return localStorage.getItem(StorageService.refreshTokenKey);
    }

    public setRefreshToken(token: string) {
        localStorage.setItem(StorageService.refreshTokenKey, token);
    }

    public deleteRefreshToken() {
        localStorage.removeItem(StorageService.refreshTokenKey);
    }
}