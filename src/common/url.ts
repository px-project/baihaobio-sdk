import { Api, Env, Params, Query } from './types';

export interface UrlOptions {
    server: any;
    apis: any;
}

export class Url {
    private _config: { [token: string]: Api } = {};

    constructor(private _options: UrlOptions) {
        const { apis, server } = _options;

        Object.keys(apis).forEach(group => {
            Object.keys(apis[group]).forEach((apiName: any) => {
                const api: Api = apis[group][apiName];
                const token = api.token = `${group}_${api}`;
                api.path = server.entry + api.path;
                this._config[token] = api;
            });
        });

    }

    create(api: Api, params?: Params, query?: Query) {
        const { token = '' } = api;
        let result = this._config[token].path;

        result += '';

        return result;
    }
}
