import { FILE_EXTENSION, IDENTATION_SPACE, OUTPUT_FILE_PATH } from './constants';

import { promisify } from 'util';
import { writeFile } from 'fs';
import { URL } from 'url';

const sufixBuilder = () => new Date().getTime();

/**
 * @param {Object[]} data
 * @param {string} sufix
 * @returns {Promise<void>}
 */
const writeFilePromised = (data, sufix = sufixBuilder()) => {
    const stringifiedData = JSON.stringify(data, null, IDENTATION_SPACE);
    const filePromise = promisify(writeFile);
    const url = new URL(`${OUTPUT_FILE_PATH}-${sufix}${FILE_EXTENSION}`, import.meta.url);

    return filePromise(url, stringifiedData);
};

export {
    writeFilePromised,
    sufixBuilder,
};
