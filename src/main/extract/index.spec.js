import { describe, it, expect, jest } from '@jest/globals';
import { ExtractPipeline } from '.';

const makeSut = () => new ExtractPipeline();
const functionsReference = makeSut();

describe(functionsReference.httpGet.name, () => {
    it('should get http response', () => {
        const sut = makeSut();
        const mockResult = 'any_value';
        const httpGetSpy = jest.spyOn(sut, functionsReference.httpGet.name);
        httpGetSpy.mockReturnValueOnce(mockResult);

        const result = sut.httpGet();

        expect(result).toBe(mockResult);
    });
});

describe(functionsReference.getAllExtractedPlanets.name, () => {
    it('should get all planets', () => {
        const sut = makeSut();
        const expectedTimes = 1;
        const mockResult = {
            on: () => {},
            end: () => {}
        };
        const httpGetSpy = jest.spyOn(sut, functionsReference.httpGet.name);
        httpGetSpy.mockReturnValueOnce(mockResult);
        
        sut.getAllExtractedPlanets();

        expect(httpGetSpy).toHaveBeenCalledTimes(expectedTimes);
    });
    it('should throw an error', async () => {
        const sut = makeSut();
        const mockResult = 'any_error';
        const httpGetSpy = jest.spyOn(sut, functionsReference.httpGet.name);
        const mockResultCallback = {
            on: () => {},
            end: () => { throw mockResult; }
        };
        httpGetSpy.mockReturnValueOnce(mockResultCallback);
        
        try {
            await sut.getAllExtractedPlanets();
        } catch (error) {
            expect(error).toBe(mockResult);
        }
    });
});
