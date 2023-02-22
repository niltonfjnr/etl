import { describe, it, expect, jest } from '@jest/globals';
import { ExoPlanet } from '.';

const makeSut = () => new ExoPlanet();

describe(ExoPlanet.getAllPlanets, () => {
    jest.setTimeout(30000);

    it('should get all planets', async () => {
        const sut = makeSut();

        const result = await sut.getAllPlanets();

        expect(result).toBeTruthy();
        expect(Array.isArray(result)).toBe(true);
        expect(result.length > 0).toBe(true);
    });
    it.only('should throw an error', async () => {
        const sut = makeSut();

        try {
            await sut.getAllPlanets({});
            
        } catch (error) {
            expect(error).toBeTruthy();
        }
    });
});
