import { BaseAPI } from './_base';

export interface Service {
    id?: string;
}

export class ServiceAPI extends BaseAPI {
    static list(row = 20, page = 1) {
        return this.http.get<Service[]>({
            api: this.apis.service.list,
            params: [row, page],
        });
    }

    static detail(service_id: string) {
        return this.http.get<Service>({
            api: this.apis.service.detail,
            params: [service_id],
        });
    }

    static create(service: Service) {
        return this.http.post<Service>({
            api: this.apis.service.create,
            body: service,
        });
    }

    static update(service_id: string, service: Service) {
        return this.http.post<Service>({
            api: this.apis.service.update,
            body: service,
        });
    }

    static delete(service_id: string) {
        return this.http.post<Service>({
            api: this.apis.service.detail,
            query: { _id: service_id },
        });
    }

    static sortList() {
        return this.http.get<Service>({
            api: this.apis.service.sortList,
        });
    }
}
