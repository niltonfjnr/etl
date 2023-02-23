import { IDENTATION_SPACE, OUTPUT_FILE_PATH } from './constants';

import { promisify } from 'util';
import * as fs from 'fs';

const sufixBuilder = () => new Date().getTime();

/**
 * @param {Object[]} data
 * @param {string} sufix
 * @returns {Promise<void>}
 */
const writeFilePromised = (data, sufix = sufixBuilder()) => {
    const stringifiedData = JSON.stringify(data, null, IDENTATION_SPACE);
    const filePromise = promisify(fs.writeFile);
    return filePromise(`${OUTPUT_FILE_PATH}-${sufix}.json`, stringifiedData);
};

export {
    writeFilePromised,
    sufixBuilder,
};
