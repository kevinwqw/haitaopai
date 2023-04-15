import { makeAutoObservable } from 'mobx';

class Store {
    storeList = [
        {
            key: 'kiehls-1',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20210910181502.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-2',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-3',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-4',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20210910181502.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-5',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-6',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-7',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-8',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-9',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-12',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        }
    ];
    bestDiscountList = [
        {
            key: 'kiehls-1',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-2',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220803110115.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-3',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-4',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-5',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220803110115.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-10',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-11',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-12',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        }
    ];
    bestSellerlist = [
        {
            key: 'kiehls-1',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220803110115.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-2',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-3',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220803110115.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-4',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-5',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20210910181502.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-6',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-7',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-8',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20210910181502.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-9',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-10',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220803110115.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-11',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-12',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        }
    ];
    transportList = [
        {
            key: 'kiehls-1',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-2',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-3',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-4',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        }
    ];

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    hydrate(data) {
        Object.assign(this, data);
    }

    async init(params) {}
}

export default Store;
