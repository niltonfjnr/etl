import { ExtractedExoplanetModel } from '../models/extracted-exoplanet';
import { TransformedExoplanetModel } from '../models/transformed-exoplanet';

class TransformExoplanetList {
    /**
     * @param {ExtractedExoplanetModel[]} data 
     * @returns {TransformedExoplanetModel[]}
     */
    transform = (data) => {
        if (Array.isArray(data)) {
            data.forEach(element => {
                const transformedData = new TransformedExoplanetModel({});
                transformedData.name = element.kepoi_name;
                transformedData.orbitsInDays = element.koi_period;
                transformedData.size = element.koi_prad;
                transformedData.status = element.koi_disposition;
                element = transformedData;
            });
        }
    };
};

export {
    TransformExoplanetList
};
