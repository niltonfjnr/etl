import { TransformedExoplanetModel } from '../models/transformed-exoplanet';

import { writeFilePromised } from '../../infra/write-file';

class LoadExoplanetList {
    /**
     * @param {TransformedExoplanetModel[]} data
     * @param {string} sufix
     * @returns {Promise<void>}
     */
    load = (data, sufix) => writeFilePromised(data, sufix);
};

export {
    LoadExoplanetList
};
