import { LoadPipeline } from './load';

// EXTRACT/TRANSFORM/LOAD
// FULL PIPELINE
const main = () => {
    const loadPipeline = new LoadPipeline();
    loadPipeline.loadAllTransformedPlanets();
};

main();
