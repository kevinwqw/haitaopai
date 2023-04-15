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
        },{
            key: 'kiehls-13',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-14',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        },
        {
            key: 'kiehls-15',
            name: 'kiehls',
            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220616092608.png',
            link: '',
            rebateRate: 16
        }
    ];

    carouselItems = [
        [
            {
                key: 'prod1-1',
                title: 'prod1-1',
                imgSrc: 'https://cdn.55haitao.com/bbs/data/attachment/deal/2023/04/09/15382cb2d4ee12c5ca0731e0e61757d22c83.jpg',
                desc: '买1送1！Clinique 倩碧 100H 水磁场面 30ml'
            },
            {
                key: 'prod1-2',
                title: 'prod1-2',
                imgSrc: 'https://cdn.55haitao.com/bbs/data/attachment/deal/2023/04/13/1685912d056b78b4531c3cfdba2501a076fe.png',
                desc: 'Coach Outlet：多款包袋降价！Mini Dempsey $111'
            },
            {
                key: 'prod1-3',
                title: 'prod1-3',
                imgSrc: 'https://cdn.55haitao.com/bbs/data/attachment/deal/2023/04/11/1685b9142030c6274d1b95c2c4ec3995cf6e.png',
                desc: '升级！雅顿美网：满额6.5折'
            },
            {
                key: 'prod1-4',
                title: 'prod1-4',
                imgSrc: 'https://cdn.55haitao.com/bbs/data/attachment/deal/2023/04/11/16853c3e5f2b955c2c49d925714d89e2d870.png',
                desc: '买1送1！Clinique 倩碧 100H 水磁场面 30ml'
            }
        ],
        [
            {
                key: 'prod2-1',
                title: 'prod2-1',
                imgSrc: 'https://cdn.55haitao.com/bbs/data/attachment/deal/2023/04/14/16859fbdb5d1009500b8206eeca2deae671b.png',
                desc: '买1送1！Clinique 倩碧 100H 水磁场面 30ml'
            },
            {
                key: 'prod2-2',
                title: 'prod2-2',
                imgSrc: 'https://cdn.55haitao.com/bbs/data/attachment/deal/2023/04/11/16853c3e5f2b955c2c49d925714d89e2d870.png',
                desc: 'Coach Outlet：多款包袋降价！Mini Dempsey $111'
            },
            {
                key: 'prod2-3',
                title: 'prod2-3',
                imgSrc: 'https://cdn.55haitao.com/bbs/data/attachment/deal/2023/04/09/15382cb2d4ee12c5ca0731e0e61757d22c83.jpg',
                desc: '买1送1！Clinique 倩碧 100H 水磁场面 30ml'
            },
            {
                key: 'prod2-4',
                title: 'prod2-4',
                imgSrc: 'https://cdn.55haitao.com/bbs/data/attachment/deal/2023/04/13/1685912d056b78b4531c3cfdba2501a076fe.png',
                desc: 'Coach Outlet：多款包袋降价！Mini Dempsey $111'
            }
        ],
        [
            {
                key: 'prod3-1',
                title: 'prod3-1',
                imgSrc: 'https://cdn.55haitao.com/bbs/data/attachment/deal/2023/04/11/16853c3e5f2b955c2c49d925714d89e2d870.png',
                desc: '买1送1！Clinique 倩碧 100H 水磁场面 30ml'
            },
            {
                key: 'prod3-2',
                title: 'prod3-2',
                imgSrc: 'https://cdn.55haitao.com/bbs/data/attachment/deal/2023/04/14/16859fbdb5d1009500b8206eeca2deae671b.png',
                desc: 'Coach Outlet：多款包袋降价！Mini Dempsey $111'
            },
            {
                key: 'prod3-3',
                title: 'prod3-3',
                imgSrc: 'https://cdn.55haitao.com/bbs/data/attachment/deal/2023/04/13/1685912d056b78b4531c3cfdba2501a076fe.png',
                desc: '买1送1！Clinique 倩碧 100H 水磁场面 30ml'
            },
            {
                key: 'prod3-4',
                title: 'prod3-4',
                imgSrc: 'https://cdn.55haitao.com/bbs/data/attachment/deal/2023/04/09/15382cb2d4ee12c5ca0731e0e61757d22c83.jpg',
                desc: 'Coach Outlet：多款包袋降价！Mini Dempsey $111'
            }
        ]
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
