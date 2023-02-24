import { LoadPipeline } from '.';
import { sufixBuilder } from '../../infra/write-file';

import { describe, it, expect, jest } from '@jest/globals';
import { existsSync, rmSync } from 'fs';
import { URL } from 'url';

const makeSut = () => new LoadPipeline();
const functionsReference = makeSut();

describe(functionsReference.loadAllTransformedPlanets.name, () => {
    const testTimeoutValue = 30000;
    jest.setTimeout(testTimeoutValue);

    it('should get all planets', async () => {
        const sut = makeSut();
        const fileSufix = sufixBuilder();
        const testFilePath = `../../../loaded/out-${fileSufix}.json`;
        const url = new URL(testFilePath, import.meta.url);
        
        await sut.loadAllTransformedPlanets(fileSufix);
        const exists = existsSync(url);
        rmSync(url);

        expect(exists).toBe(true);
    });
    it('should throw an error', async () => {
        const sut = makeSut();

        try {
            await sut.loadAllTransformedPlanets(undefined, {});

        } catch (error) {
            expect(error).toBeTruthy();
        }
    });
});
