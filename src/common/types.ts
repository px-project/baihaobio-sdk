export interface Api {
    path: string;
    desc: string;
    token?: string;
}

export type Param = any;
export type Params = Param[];

export type Query = any;
export type Body = any;
export type Headers = any;

export type Method = 'GET' | 'POST';
export const Methods: {[method in Method]: Method } = {
    GET: 'GET',
    POST: 'POST',
};

export type Env = 'dev' | 'production';

export interface Server {
    entry: string;
}
export type ServerConfig = {[env in Env]: Server};
