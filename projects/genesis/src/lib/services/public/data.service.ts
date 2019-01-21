import {
    Injectable
} from "@angular/core";
import {
    HttpClient,
    HttpEvent,
    HttpHeaders
} from '@angular/common/http';
import { StorageService } from "../Storage.service";
import {
    Observable,
    of
} from "rxjs";
import {
    HttpOptions
} from "../../models/HttpOptions";
import {
    KeyValue
} from "@angular/common";
import {
    catchError
} from "rxjs/operators";


export class DataService {

    private _baseUrl: string;
    private _options: HttpOptions;
    constructor(
        protected http: HttpClient,
        protected storage: StorageService,
        protected localStorageKey: string | null) {
        this._options = new HttpOptions()
            .setHeader({ key: 'Content-Type', value: 'application/json' });

        this._baseUrl = "https://my-json-server.typicode.com/bugMaker-237/angular7-starter-db/";
    }

    protected get<T>(
        path: string,
        ...params: KeyValue<string, string>[]): Observable<T> {

        return this.http.get<T>(this._baseUrl + path,
            this._options
                .addParams(...params)
                .getOptions()
        ).pipe(
            catchError(this.errorHandler<T>(`get`)));
    }

    protected put<T>(
        path: string,
        body: any = null,
        ...params: KeyValue<string, string>[]): Observable<T> {

        return this.http.put<T>(this._baseUrl + path,
            body,
            this._options
                .addParams(...params)
                .getOptions()
        ).pipe(
            catchError(this.errorHandler<T>(`put`)));
    }

    protected post<T>(
        path: string,
        body: any = null,
        ...params: KeyValue<string, string>[]): Observable<T> {

        return this.http.post<T>(this._baseUrl + path,
            body,
            this._options
                .addParams(...params)
                .getOptions()
        ).pipe(
            catchError(this.errorHandler<T>(`post`)));
    }

    protected patch<T>(
        path: string,
        body: any = null,
        ...params: KeyValue<string, string>[]): Observable<T> {

        return this.http.patch<T>(this._baseUrl + path,
            body,
            this._options
                .addParams(...params)
                .getOptions()
        ).pipe(
            catchError(this.errorHandler<T>(`patch`)));
    }

    protected head<T>(
        path: string,
        ...params: KeyValue<string, string>[]): Observable<T> {

        return this.http.head<T>(this._baseUrl + path,
            this._options
                .addParams(...params)
                .getOptions()
        ).pipe(
            catchError(this.errorHandler<T>(`head`)));
    }

    protected options<T>(
        path: string,
        ...params: KeyValue<string, string>[]): Observable<T> {

        return this.http.options<T>(this._baseUrl + path,
            this._options
                .addParams(...params)
                .getOptions()
        ).pipe(
            catchError(this.errorHandler<T>(`options`)));
    }

    protected jsonp(
        path: string,
        callBackParam: string): Observable<Object> {

        return this.http.jsonp(this._baseUrl + path, callBackParam);
    }

    protected delete<T>(
        path: string,
        ...params: KeyValue<string, string>[]): Observable<T> {

        return this.http.delete<T>(this._baseUrl + path,
            this._options
                .addParams(...params)
                .getOptions()
        ).pipe(
            catchError(this.errorHandler<T>(`delete`)));
    }




    private errorHandler<T>(op: string):
        (err: any, caught: Observable<T>) => Observable<T> {
        return (err: Error, caught: Observable<T>): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(err); // log to console instead

            // TODO: better job of transforming error for user consumption
            // this.log(`${op} failed: ${err.message}`);

            // Let the app keep running by returning an empty result.
            return of({} as T);
        };
    }

}