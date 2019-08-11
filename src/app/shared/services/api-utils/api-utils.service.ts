import { Injectable } from '@angular/core';

@Injectable()
export class ApiUtilsService {

    public buildFilterParams(filterParams: ParamMap): ParamMap {
        const params: ParamMap = {};

        Object.keys(filterParams).forEach(key => {
            params[`[filter]${key}`] = filterParams[key];
        });

        return params;
    }

    public buildPaginationParams(paginationOptions: PaginationOptions): ParamMap {
        return {
            number: (paginationOptions.number || 1).toString(),
            size: (paginationOptions.size || 50).toString(),
        };
    }

}

export interface ParamMap {[key: string]: string; }
export interface PaginationOptions {
    number: number;
    size: number;
}
