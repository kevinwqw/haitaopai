import { makeAutoObservable } from 'mobx';

class Store {
    noteList = [
        {
            imgSrc: 'https://www.jellycat.com/images/products/large/A2A.jpg',
            title: 'Jellycat有185款玩偶要退休?附Jellycat海淘攻略',
            description:
                '官方宣布2023年185款jellycat玩偶即将退休，其中包括一些热⻔的熊猫、牛油果、兔子、茄子、狮子等玩偶会陆续在官网下架啦',
            href: '/article/1'
        },
        {
            imgSrc: 'https://www.sephora.com/contentimages/promo/promolp/2023/041423-savings-event-savenow/desktop/2023-04-14-sse-site-desktop-buying-guide-banner-is-here.jpg?imwidth=1960',
            title: '北美SEPHORA丝芙兰春季8折大促!有什么值得买，进来抄作业',
            description:
                'Rouge会员真的有很多特权有木有!如果不是Rouge会员也没关系，可以看看身边有没有rouge的， 可以请rouge朋友邀请你(每个rouge号仅限一个邀请名额)一起进入8折买买买哦!',
            href: '/article/2'
        },
        {
            imgSrc: 'Reformation-1.jpg',
            title: '小清新碎花裙Reformation哪里买?款式最全最优惠的购买渠道介绍',
            description:
                '喜欢法式和小清新⻛格的宝子们绝对不能错过的品牌~迪丽热巴，杨采钰，Lisa，Jennie，虞书欣， 刘亦菲等女星都爱的连衣裙Reformation在哪里买款式最全、最划算呢?我来给大家一一介绍吧!',
            href: '/article/3'
        },
        {
            imgSrc: 'Toryburch-1.jpeg',
            title: 'Tory Burch春季大促!低至4折!1k+买TB包包的快乐来啦',
            description:
                'Tory burch官网的活动已经开启啦，折扣区低至4折，很多经典款和热⻔款的包包参加，还可以叠加 官网新人码85折哦~到手价低至1000+!',
            href: '/article/4'
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
