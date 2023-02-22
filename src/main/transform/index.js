import { TransformedExoplanetModel } from '../../domain/models/transformed-exoplanet';
import { TransformExoplanetList } from '../../domain/use-cases/transform-exoplanet-list';

import { ExtractPipeline } from '../extract';

class TransformPipeline {
    constructor() {
        this.transformExoplanetList = new TransformExoplanetList();
        this.extractPipeline = new ExtractPipeline();
    }

    /**
     * @returns {Promise<TransformedExoplanetModel[]>} 
     */
    getAllTransformedPlanets = async (params) => {
        const planetList = await this.extractPipeline.getAllExtractedPlanets(params);
        this.transformExoplanetList.transform(planetList);
        return planetList;
    };
}

export {
    TransformPipeline
};
