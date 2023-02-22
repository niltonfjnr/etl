// https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?format=json&table=cumulative
const API_URL = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI';
const PARAMS = {
    table: 'cumulative',
    format: 'json'
};

const ENCODING = 'utf8';

const EVENT_NAME_ERROR = 'error';
const EVENT_NAME_DATA = 'data';
const EVENT_NAME_END = 'end';

export {
    API_URL,
    PARAMS,
    ENCODING,

    EVENT_NAME_ERROR,
    EVENT_NAME_DATA,
    EVENT_NAME_END
};
