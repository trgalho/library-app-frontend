export * as StyleSheetHelper from "./StyleSheetHelper.js";

import env from '../libs/.env.js';

export const api = {
    url: `http://localhost:${env.BACKEND_PORT}/${env.BASE_API_SCHEMA}`,
    get book(){
      return this.url+"book";
    }
};