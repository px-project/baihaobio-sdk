
export const APIs = {

    // 服务
    service: {
        list: {
            path: '/service/serviceList/rows/:row/page/:page',
            desc: '服务列表',
        },
        detail: {
            path: '/service/detail/_id/:service_id',
            desc: '服务详情',
        },
        create: {
            path: '/service/create',
            desc: '创建服务',
        },
        update: {
            path: '/service/update',
            desc: '更新服务',
        },
        sortList: {
            path: '/service/sortList',
            desc: '类别列表',
        },
    },

};

export const SERVERs = {
    dev: {
        entry: 'http://baihaobio.com/Admin',
    },
    production: {
        entry: 'http://baihaobio.com/Admin',
    },
};
