import { ExtractedExoplanetModel } from '../../domain/models/extracted-exoplanet';
import { ExtractExoplanetList } from '../../domain/use-cases/extract-exoplanet-list';

import { API_URL, ENCODING, EVENT_NAME_DATA, EVENT_NAME_END, EVENT_NAME_ERROR, PARAMS } from './constants';

import { get } from 'https';
import { stringify } from 'querystring';

class ExtractPipeline {
    constructor() {
        this.extractExoplanetList = new ExtractExoplanetList();
    }

    httpGet = (requestOptions, callback) => get(requestOptions, callback);

    /**
     * @returns {Promise<ExtractedExoplanetModel[]>} 
     */
    getAllExtractedPlanets = (params = PARAMS) => {
        // eslint-disable-next-line no-undef
        const promise = new Promise((resolve, reject) => {
            let data = '';
            const queryString = stringify(params);
            const endPoint = `${API_URL}?${queryString}`;
            const onResultCallback = (res) => {
                res.setEncoding(ENCODING);
                res.on(EVENT_NAME_DATA, (chunk) => data += chunk);
                res.on(EVENT_NAME_END, () => {
                    try {
                        const parsedData = this.extractExoplanetList.extract(data);
                        resolve(parsedData);
                    } catch (error) {
                        reject(`${data} | ${error}`);
                    }
                });
            };

            const req = this.httpGet(endPoint, onResultCallback);
            req.on(EVENT_NAME_ERROR, (e) => reject(e));
            req.end();
        });
        return promise;
    };
}

export {
    ExtractPipeline
};
