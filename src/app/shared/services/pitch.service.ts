import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pitch, PaginatedResponse } from '../models';
import { environment } from 'src/environments/environment';
import { ApiUtilsService } from './api-utils.service';

export interface PitchFilter {
    sport: string;
    city: string;
    format: string;
    location: string;
    starts: string;
    ends: string;
}

@Injectable()
export class PitchService {

    constructor(private http: HttpClient, private apiUtils: ApiUtilsService) {}

    fetchAll(filters: Partial<PitchFilter>): Observable<PaginatedResponse<Pitch>> {
        const params = this.apiUtils.buildFilterParams(filters);

        return this.http.get<PaginatedResponse<Pitch>>(`${environment.apiUrl}pitches`, {params});
    }

    fetchOne(pitchId: string): Observable<Pitch> {
        return this.http.get<{data: Pitch}>(`${environment.apiUrl}pitches/${pitchId}`)
            .pipe(map(response => response.data));
    }

}
