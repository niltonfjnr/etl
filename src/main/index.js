import { LoadPipeline } from './load';

/**
 * EXTRACT/TRANSFORM/LOAD
 * FULL PIPELINE
 * @returns {Promise<void>}
 */
const main = () => new LoadPipeline().loadAllTransformedPlanets();
void main();
