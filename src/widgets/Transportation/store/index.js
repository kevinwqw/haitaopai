import { makeAutoObservable } from 'mobx';

class Store {
    storesList = [
        {
            key: 'kiehls-1',
            name: '欧罗巴巴',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/55ht/2020/11/11/55a949b42a706d39efb42e0445ef01ba.png',
            link: ''
        },
        {
            key: 'kiehls-2',
            name: '欧罗巴巴',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/55ht/2020/11/11/55a949b42a706d39efb42e0445ef01ba.png',
            link: ''
        },
        {
            key: 'kiehls-3',
            name: '欧罗巴巴',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/55ht/2020/11/11/55a949b42a706d39efb42e0445ef01ba.png',
            link: ''
        },
        {
            key: 'kiehls-4',
            name: '欧罗巴巴',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/55ht/2020/11/11/55a949b42a706d39efb42e0445ef01ba.png',
            link: ''
        },
        {
            key: 'kiehls-5',
            name: '欧罗巴巴',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/55ht/2020/11/11/55a949b42a706d39efb42e0445ef01ba.png',
            link: ''
        },
        {
            key: 'kiehls-6',
            name: '欧罗巴巴',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/55ht/2020/11/11/55a949b42a706d39efb42e0445ef01ba.png',
            link: ''
        },
        {
            key: 'kiehls-7',
            name: '欧罗巴巴',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/55ht/2020/11/11/55a949b42a706d39efb42e0445ef01ba.png',
            link: ''
        },
        {
            key: 'kiehls-8',
            name: '欧罗巴巴',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/55ht/2020/11/11/55a949b42a706d39efb42e0445ef01ba.png',
            link: ''
        },
        {
            key: 'kiehls-9',
            name: '欧罗巴巴',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/55ht/2020/11/11/55a949b42a706d39efb42e0445ef01ba.png',
            link: ''
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
