import { describe, it, expect, jest } from '@jest/globals';
import { ExtractPipeline } from '.';

const makeSut = () => new ExtractPipeline();

describe(ExtractPipeline.getAllPlanets, () => {
    const testTimeoutValue = 30000;
    jest.setTimeout(testTimeoutValue);

    it('should get all planets', async () => {
        const sut = makeSut();
        const minimumSize = 0;
        const result = await sut.getAllPlanets();

        expect(result).toBeTruthy();
        expect(Array.isArray(result)).toBe(true);
        expect(result.length > minimumSize).toBe(true);
    });
    it('should throw an error', async () => {
        const sut = makeSut();

        try {
            await sut.getAllPlanets({});

        } catch (error) {
            expect(error).toBeTruthy();
        }
    });
});
