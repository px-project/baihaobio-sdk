import { Env, Http, Server } from '../common';
import { APIs, SERVERs } from '../config';

const env = process.env.NODE_ENV as Env;

export class BaseAPI {
    static apis = APIs;
    static http = new Http({
        server: SERVERs[env],
        apis: APIs,
    });
}
