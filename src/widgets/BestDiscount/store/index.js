import { makeAutoObservable } from 'mobx';

class Store {
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

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    hydrate(data) {
        Object.assign(this, data);
    }

    async init() {}
}

export default Store;
