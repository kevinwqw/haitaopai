import { makeAutoObservable } from 'mobx';

class Store {
    transList = [
        { imgSrc: 'images/transportation/59转运.png', href: 'https://59express.com/' },
        { imgSrc: 'images/transportation/傲天转运.jpg', href: 'https://www.ats-ex.com/' },
        { imgSrc: 'images/transportation/168美中快运.png', href: 'http://www.mzkd168.com/' },
        { imgSrc: 'images/transportation/八达网.jpg', href: 'http://www.8dexpress.com/' },
        { imgSrc: 'images/transportation/吉祥邮.png', href: 'https://www.jixiangyou.com/' },
        { imgSrc: 'images/transportation/可乐送海淘转运.png', href: 'https://www.cokeps.com/' },
        { imgSrc: 'images/transportation/铭瑄海淘.jpg', href: 'https://www.happyht.com/' },
        { imgSrc: 'images/transportation/轻速国际.png', href: 'https://www.qingsuus.com/' },
        { imgSrc: 'images/transportation/润东国际快线.jpg', href: 'http://www.rundongex.com/' },
        { imgSrc: 'images/transportation/建翼速运.jpg', href: 'http://www.jianyisuyun.com/' },
        { imgSrc: 'images/transportation/友家速递.jpg', href: 'ttp://www.youjiaus.net/' },
        { imgSrc: 'images/transportation/中环转运.jpg', href: 'http://www.zhonghuanus.com/' },
        { imgSrc: 'images/transportation/转运国际.png', href: 'http://www.zygjex.com/' },
        { imgSrc: 'images/transportation/天福转运.png', href: 'https://www.tianfuex.net/' },
        { imgSrc: 'images/transportation/转运中国.jpg', href: 'https://www.uszcn.com/' },
        { imgSrc: 'images/transportation/EMS海外购.jpg', href: 'http://buy.ems.com.cn/' }
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
