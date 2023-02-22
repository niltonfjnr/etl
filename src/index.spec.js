import { describe, it, expect, jest } from '@jest/globals';
import { ExoPlanet } from '.';

const makeSut = () => new ExoPlanet();

describe(ExoPlanet.getAllPlanets, () => {
    it('should get all planets', async () => {
        const sut = makeSut();
        const httpGetSpy = jest.spyOn(sut, 'httpGet');
        const mockResult = () => ({
            on: () => {},
            end: () => {}
        });
        httpGetSpy.mockImplementationOnce(mockResult);
        
        sut.getAllPlanets();

        expect(httpGetSpy).toHaveBeenCalledTimes(1);
    });
    it('should throw an error', async () => {
        const sut = makeSut();
        const httpGetSpy = jest.spyOn(sut, 'httpGet');
        const mockResult = () => ({
            on: () => {},
            end: () => { throw new Error('any_error'); }
        });
        httpGetSpy.mockImplementationOnce(mockResult);
        
        try {
            await sut.getAllPlanets();
        } catch (error) {
            expect(error.includes('any_error')).toBe(true);
        }
    });
});
