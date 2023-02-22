import { LoadExoplanetList } from '../../domain/use-cases/load-exoplanet-list';
import { TransformPipeline } from '../transform';

class LoadPipeline {
    constructor() {
        this.transformPipeline = new TransformPipeline();
        this.loadExoplanetList = new LoadExoplanetList();
    }

    /**
     * @returns {Promise<void>} 
     */
    loadAllTransformedPlanets = async (params) => {
        const planetList = await this.transformPipeline.getAllTransformedPlanets(params);
        await this.loadExoplanetList.load(planetList);
    };
}

export {
    LoadPipeline
};
