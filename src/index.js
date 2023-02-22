import { API_URL, PARAMS } from './constants';

import { get } from 'https';
import { stringify } from 'querystring';

class ExoPlanet {
    httpGet = (requestOptions, callback) => get(requestOptions, callback);

    onResult = (resolve, reject, data) => (res) => {
        res.setEncoding('utf8');
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => {
            try {
                const parsedData = JSON.parse(data);
                resolve(parsedData);
            } catch (error) {
                reject(`${data} | ${error}`);
            }
        });
    };

    /**
     * @returns {Promise<any[]>} 
     */
    getAllPlanets = (params = PARAMS) => {
        // eslint-disable-next-line no-undef
        const promise = new Promise((resolve, reject) => {
            let data = '';
            const queryString = stringify(params);
            const endPoint = `${API_URL}?${queryString}`;
            const onResultCallback = this.onResult(resolve, reject, data);

            const req = this.httpGet(endPoint, onResultCallback);
            req.on('error', (e) => reject(e));
            req.end();
        });
        return promise;
    };
}

export {
    ExoPlanet
};
