import { ApiUtilsService, ParamMap } from './api-utils.service';
import { HttpParams } from '@angular/common/http';

describe('ApiUtilsService', () => {

    it('should return a query string for a single filter key', () => {
        const input = { foo: 'bar' };
        const urlOutput = 'filter[foo]=bar';

        testFilterParamsInputOutput(input, urlOutput);
    });

    it('should return a query string for a multiple filter keys', () => {
        const input = { one: '1', two: '2' };
        const urlOutput = 'filter[one]=1&filter[two]=2';

        testFilterParamsInputOutput(input, urlOutput);
    });

    it('should return an empty query string', () => {
        const input = {};
        const urlOutput = '';

        testFilterParamsInputOutput(input, urlOutput);
    });

});

function testFilterParamsInputOutput(input: ParamMap, output: string) {
    const apiUtils = new ApiUtilsService();

    const params = new HttpParams({fromObject: apiUtils.buildFilterParams(input)});

    expect(decodeURI(params.toString())).toEqual(output);
}
