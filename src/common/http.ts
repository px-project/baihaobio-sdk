import 'isomorphic-fetch';
import { Api, Body, Env, Headers, Method, Methods, Params, Query, Server } from './types';
import { Url } from './url';

export interface HttpOptions {
    server: Server;
    apis: any;
}

export interface FetchOptions {
    api: Api;
    params?: Params;
    query?: Query;
    body?: Body;
}

export class Http {
    private _url: Url;

    constructor(private _options: HttpOptions) {
        this._url = new Url({
            server: _options.server,
            apis: _options.apis,
        });
    }

    get<T>(options: FetchOptions) { return this._buildMethod<T>(Methods.GET, options); }
    post<T>(options: FetchOptions) { return this._buildMethod<T>(Methods.POST, options); }

    private async _buildMethod<T>(method: Method, options: FetchOptions) {
        const { api, params, query, body } = options;

        const reqInit: RequestInit = { method };
        if ([Methods.POST].includes(method)) reqInit.body = body;

        const req = new Request(this._url.create(api, params, query), reqInit);

        const res = await fetch(req);

        const json: T = await res.json();

        return { req, res, result: json };
    }
}
