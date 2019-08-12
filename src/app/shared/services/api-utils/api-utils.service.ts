import { Injectable } from '@angular/core';
import { HttpUrlEncodingCodec } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiUtilsService {

    public buildFilterParams(filterParams: ParamMap): ParamMap {
        const params: ParamMap = {};

        Object.keys(filterParams).forEach(key => {
            if (filterParams[key]) {
                params[`filter[${key}]`] = filterParams[key];
            }
        });

        return params;
    }

    public buildPaginationParams(paginationOptions: PaginationOptions): ParamMap {
        return {
            'page[number]': (paginationOptions.number || 1).toString(),
            'page[size]': (paginationOptions.size || 10).toString(),
        };
    }

}

export class CustomHttpUrlEncodingCodec extends HttpUrlEncodingCodec {
    encodeKey(k: string): string {
        return super.encodeKey(k)
            .replace(new RegExp('%5B', 'g'), '[')
            .replace(new RegExp('%5D', 'g'), ']');
    }
}

export interface ParamMap {[key: string]: string; }
export interface PaginationOptions {
    number: number;
    size: number;
}

