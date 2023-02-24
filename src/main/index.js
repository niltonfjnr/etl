import { LoadPipeline } from './load';

// eslint-disable-next-line no-undef
global.process.env.NODE_ENV = 'production';

// EXTRACT/TRANSFORM/LOAD
// FULL PIPELINE
const main = () => {
    const loadPipeline = new LoadPipeline();
    loadPipeline.loadAllTransformedPlanets();
};

main();
