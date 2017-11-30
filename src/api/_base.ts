import { Http } from '../common';
import { APIs } from '../config';

export class BaseAPI {
    static apis = APIs;
    static http = new Http({});
}
