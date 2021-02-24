export * as StyleSheetHelper from "./StyleSheetHelper.js";

import * as env from '../libs/.env.json';

export const api = {
    url: `http://localhost:${env.BACKEND_PORT}/${env.BASE_API_SCHEMA}`,
    get book(){
      return this.url+"book";
    }
};