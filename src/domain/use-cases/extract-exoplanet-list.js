import { ExtractedExoplanetModel } from '../models/extracted-exoplanet';

class ExtractExoplanetList {
    /**
     * @param {string} data 
     * @returns {ExtractedExoplanetModel[]}
     */
    extract = (data) => JSON.parse(data);
};

export {
    ExtractExoplanetList
};
