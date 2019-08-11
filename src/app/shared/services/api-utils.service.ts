import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class ApiUtilsService {

    buildFilterParams(filterParams: {[key: string]: string}) {
        const params = new HttpParams();

        Object.keys(params).forEach(key => {
            params.set(`[filter]${key}`, filterParams[key]);
        });

        return params;
    }

}
