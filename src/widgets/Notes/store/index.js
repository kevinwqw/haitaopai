import { makeAutoObservable } from 'mobx';

class Store {
    noteList = [
        {
            imgSrc: 'https://cdn.55haitao.com/bbs/data/attachment/deal/2023/04/14/3860f3254dcc4d67dc72c7b73db47ab0f5a.png@!show282',
            title: '海淘办什么信用卡好？2023信用卡境外消费返现活动汇总',
            description:
                '更新啦！各大银行境外消费返现活动更新啦！主要针对2023年Q2季度4月-6月的银行返现情况进行汇总，如果你是海淘萌新，又不知道海淘办什么信用卡比较好，那这篇海淘信用卡返现攻略帖一定要仔细阅读，内容仅供',
            href: '/note?note_id=1'
        },
        {
            imgSrc: 'https://cdn.55haitao.com/bbs/data/attachment/deal/2023/04/14/3860f3254dcc4d67dc72c7b73db47ab0f5a.png@!show282',
            title: '海淘办什么信用卡好？2023信用卡境外消费返现活动汇总',
            description:
                '更新啦！各大银行境外消费返现活动更新啦！主要针对2023年Q2季度4月-6月的银行返现情况进行汇总，如果你是海淘萌新，又不知道海淘办什么信用卡比较好，那这篇海淘信用卡返现攻略帖一定要仔细阅读，内容仅供',
            href: '/note?note_id=1'
        },
        {
            imgSrc: 'https://cdn.55haitao.com/bbs/data/attachment/deal/2023/04/14/3860f3254dcc4d67dc72c7b73db47ab0f5a.png@!show282',
            title: '海淘办什么信用卡好？2023信用卡境外消费返现活动汇总',
            description:
                '更新啦！各大银行境外消费返现活动更新啦！主要针对2023年Q2季度4月-6月的银行返现情况进行汇总，如果你是海淘萌新，又不知道海淘办什么信用卡比较好，那这篇海淘信用卡返现攻略帖一定要仔细阅读，内容仅供',
            href: '/note?note_id=1'
        },
        {
            imgSrc: 'https://cdn.55haitao.com/bbs/data/attachment/deal/2023/04/14/3860f3254dcc4d67dc72c7b73db47ab0f5a.png@!show282',
            title: '海淘办什么信用卡好？2023信用卡境外消费返现活动汇总',
            description:
                '更新啦！各大银行境外消费返现活动更新啦！主要针对2023年Q2季度4月-6月的银行返现情况进行汇总，如果你是海淘萌新，又不知道海淘办什么信用卡比较好，那这篇海淘信用卡返现攻略帖一定要仔细阅读，内容仅供',
            href: '/note?note_id=1'
        },
        {
            imgSrc: 'https://cdn.55haitao.com/bbs/data/attachment/deal/2023/04/14/3860f3254dcc4d67dc72c7b73db47ab0f5a.png@!show282',
            title: '海淘办什么信用卡好？2023信用卡境外消费返现活动汇总',
            description:
                '更新啦！各大银行境外消费返现活动更新啦！主要针对2023年Q2季度4月-6月的银行返现情况进行汇总，如果你是海淘萌新，又不知道海淘办什么信用卡比较好，那这篇海淘信用卡返现攻略帖一定要仔细阅读，内容仅供',
            href: '/note?note_id=1'
        },
        {
            imgSrc: 'https://cdn.55haitao.com/bbs/data/attachment/deal/2023/04/14/3860f3254dcc4d67dc72c7b73db47ab0f5a.png@!show282',
            title: '海淘办什么信用卡好？2023信用卡境外消费返现活动汇总',
            description:
                '更新啦！各大银行境外消费返现活动更新啦！主要针对2023年Q2季度4月-6月的银行返现情况进行汇总，如果你是海淘萌新，又不知道海淘办什么信用卡比较好，那这篇海淘信用卡返现攻略帖一定要仔细阅读，内容仅供',
            href: '/note?note_id=1'
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
