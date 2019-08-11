import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class ApiUtilsService {

    buildFilterParams(filterParams: FilterParams): HttpParams {
        let params = new HttpParams();

        Object.keys(filterParams).forEach(key => {
            params = params.set(`[filter]${key}`, filterParams[key]);
        });

        return params;
    }

}

export interface FilterParams {[key: string]: string; }
