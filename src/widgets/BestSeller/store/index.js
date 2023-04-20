import { makeAutoObservable } from 'mobx';

class Store {
    bestSellerList = [
        {
            key: '1',
            name: `LANCÔME L'Absolu Gloss, 0.27 oz.`,
            imgSrc: 'https://slimages.macysassets.com/is/image/MCY/products/6/optimized/9189676_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp',
            link: 'https://slooks.top/6wcp/65',
            originalPrice: '$27.00',
            currentPrice: '$14.85'
        },
        {
            key: '2',
            name: `LANCÔME 3-Pc. La vie est belle Eau de Parfum Mother's Day Gift Set`,
            imgSrc: `https://slimages.macysassets.com/is/image/MCY/products/5/optimized/23960545_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp`,
            link: `https://slooks.top/6wcq/65`,
            originalPrice: `$197.00`,
            currentPrice: `$152.00`
        },
        {
            key: '3',
            name: `MAC COSMETICS Studio Fix Powder Plus Foundation`,
            imgSrc: `https://slooks.top/6wct/65`,
            link: `https://n.nordstrommedia.com/id/sr3/7cba6e2f-b498-430d-8c90-745dbdeeee5f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2`,
            originalPrice: `$39.00`,
            currentPrice: `$29.00`
        },
        {
            key: '4',
            name: `KIEHL'S SINCE 1851 Rare Earth Deep Pore Cleansing Face Mask`,
            imgSrc: `https://n.nordstrommedia.com/id/sr3/5954eba0-1daa-4786-8377-0248a07f0553.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2`,
            link: `https://slooks.top/6wcu/65`,
            originalPrice: `$45.00`,
            currentPrice: `$33.75`
        },
        {
            key: '5',
            name: `BOBBI BROWN Lunar New Year Luxe Lipstick`,
            imgSrc: `https://n.nordstrommedia.com/id/sr3/d46edd55-d1d3-4bbc-b6d8-65ebdbd13380.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2`,
            link: `https://slooks.top/6wcv/65`,
            originalPrice: `$40.00`,
            currentPrice: `$24.97`
        },
        {
            key: '6',
            name: `Morgan Crossbody In Signature Chambray`,
            imgSrc: `https://images.coach.com/is/image/Coach/ch150_imdei_a0?$desktopProduct$`,
            link: `https://slooks.top/6wcy/65`,
            originalPrice: `$328.00`,
            currentPrice: `$131.20`
        },
        {
            key: '7',
            name: `Mini Rowan File Bag In Signature Canvas`,
            imgSrc: `https://images.coach.com/is/image/Coach/cf340_imdqc_a0?$desktopProduct$`,
            link: `https://slooks.top/6wcx/65`,
            originalPrice: `$247.50`,
            currentPrice: `$99`
        },
        {
            key: '8',
            name: `Ethique丰盈蓬松活力洗发皂 油性发质适用 110g`,
            imgSrc: `https://source-feelunique.azoyacdn.com/media/catalog/product/e/t/ethique_sweet_spicy_volumising_solid_shampoo_110g_1660729721.jpg?imageMogr2/thumbnail/438x438/extent/438x438/background/d2hpdGU=`,
            link: `https://cn.feelunique.com/product/1377923.html`,
            originalPrice: `£12.99`,
            currentPrice: `£9.70`
        },
        {
            key: '9',
            name: `Murad 慕勒/慕拉 视黄醇青春复活修护精华液 30ml`,
            imgSrc: ``,
            link: `https://cn.feelunique.com/product/1362019.html`,
            originalPrice: `£86.00`,
            currentPrice: ``
        },
        {
            key: '10',
            name: `PAUL & JOE 防晒妆前隔离霜 30ml 01 Dagree`,
            imgSrc: `https://source-feelunique.azoyacdn.com/media/catalog/product/p/a/paul_amp_joe_protecting_foundation_primer_30ml_1574851912_184.jpg?imageMogr2/thumbnail/438x438/extent/438x438/background/d2hpdGU=`,
            link: `https://cn.feelunique.com/product/1361758.html`,
            originalPrice: `£26.00`,
            currentPrice: `£19.50`
        },
        {
            key: '11',
            name: `BY TERRY 泰利 玻尿酸保湿散粉10g+散粉刷套装`,
            imgSrc: `https://source-feelunique.azoyacdn.com/media/catalog/product/b/y/by_terry_hyaluronic_hydra_powder_kabuki_set_1602666477_49.jpg?imageMogr2/thumbnail/438x438/extent/438x438/background/d2hpdGU=`,
            link: `https://cn.feelunique.com/product/1369051.html`,
            originalPrice: `£42.00`,
            currentPrice: `£29.40`
        },
        {
            key: '12',
            name: `Nike Air Force 1 '07 Next Nature`,
            imgSrc: `https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d86cc16f-67d2-4781-a01f-7ea19eeba5cd/air-force-1-07-next-nature-womens-shoes-fvxZ0g.png`,
            link: `https://www.nike.com/t/air-force-1-07-next-nature-womens-shoes-fvxZ0g/DN1430-106`,
            originalPrice: `$115`,
            currentPrice: `$92`
        },
        {
            key: '13',
            name: `Belk & Co. 1/4 ct. t.w. Pear Shaped Diamond Pendant Necklace with 18" Cable Chain in Sterling Silver`,
            imgSrc: `https://belk.scene7.com/is/image/Belk?layer=0&src=5400453_DA4948ZZW8SG0_A_040&$DWP_PRODUCT_PDP_LARGE$`,
            link: `https://www.belk.com/p/belk-co.-1-4-ct.-t.w.-pear-shaped-diamond-pendant-necklace-with-18-cable-chain-in-sterling-silver/5400453DA4948ZZW8SG0.html`,
            originalPrice: `$225.00`,
            currentPrice: `$67.50`
        },
        {
            key: '14',
            name: `Belk & Co. 1/3 ct. t.w. Diamond Anniversary Band in 14K Gold`,
            imgSrc: `https://belk.scene7.com/is/image/Belk?layer=0&src=5400466_11749664_A_041&layer=comp&$DWP_PRODUCT_PDP_LARGE$`,
            link: `https://www.belk.com/p/belk-co.-1-3-ct.-t.w.-diamond-anniversary-band-in-14k-gold/540046611749664.html`,
            originalPrice: `$1,225.00`,
            currentPrice: `$367.50`
        },
        {
            key: '15',
            name: `Effy 14K White Gold 3/8 ct. t.w. Diamond Stud Earrings`,
            imgSrc: `https://belk.scene7.com/is/image/Belk?layer=0&src=5400452_EF0EY88DD3_A_044&$DWP_PRODUCT_PDP_LARGE$`,
            link: `https://www.belk.com/p/effy-14k-white-gold-3-8-ct.-t.w.-diamond-stud-earrings-/5400452EF0EY88DD3.html`,
            originalPrice: `$1,300.00`,
            currentPrice: `$455.00`
        },
        {
            key: '16',
            name: `Belk & Co. 1/2 ct. t.w. Diamond Necklace in 10K White Gold`,
            imgSrc: `https://belk.scene7.com/is/image/Belk?layer=0&src=5400453_DA6511ZZ16DG0_A_100&$DWP_PRODUCT_PDP_LARGE$`,
            link: `https://www.belk.com/p/belk-co.-1-2-ct.-t.w.-diamond-necklace-in-10k-white-gold/5400453DA6511ZZ16DG0.html`,
            originalPrice: `$2,825.00`,
            currentPrice: `$847.50 `
        },
        {
            key: '17',
            name: `Belk & Co. 0.033 ct. t.w. Diamond Cross Pendant in Sterling Silver`,
            imgSrc: `https://belk.scene7.com/is/image/Belk?layer=0&src=5400453_SBX41869CHBK_A_040_T10L00&layer=comp&$DWP_PRODUCT_PDP_LARGE$`,
            link: `https://www.belk.com/p/belk-co.-0.033-ct.-t.w.-diamond-cross-pendant-in-sterling-silver/5400453SBX41869CHBK.html`,
            originalPrice: `$225.00`,
            currentPrice: `$67.50`
        }
    ];

    carouselItems = [
        {
            prodList: [
                {
                    desc: 1,
                    imgSrc: 'https://image.s5a.com/is/image/saks/0400018494645_SPRINGBOUQUETFLORAL?wid=968&hei=1292&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
                    key: 'prod26',
                    link: 'https://slooks.top/6wQS/65',
                    originalPrice: '$298',
                    currentPrice: '$298',
                    title: 'D Ô E N Hathaway Floral-Printed Midi-Dress'
                },
                {
                    desc: 2,
                    imgSrc: 'https://image.s5a.com/is/image/saks/0400018517214_CREAM?wid=968&hei=1292&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
                    key: 'prod27',
                    link: 'https://slooks.top/6wQV/65',
                    originalPrice: '$1,980',
                    currentPrice: '$1,980',
                    title: 'Khaite Bruna Draped Off-The-Shoulder Dress'
                },
                {
                    desc: 3,
                    imgSrc: 'https://image.s5a.com/is/image/saks/0400018923415_NOCOLOR?wid=968&hei=1292&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
                    key: 'prod28',
                    link: 'https://slooks.top/6wQR/65',
                    originalPrice: '$460',
                    currentPrice: '$460',
                    title: 'Bond No.9 New York New York Flowers'
                },
                {
                    desc: 4,
                    imgSrc: 'https://image.s5a.com/is/image/saks/0400018517289_NATURAL?wid=968&hei=1292&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
                    key: 'prod29',
                    link: 'https://slooks.top/6wQU/65',
                    originalPrice: '$980',
                    currentPrice: '$980',
                    title: 'Khaite Sicily Sleeveless Floral Midi-Dress'
                },
                {
                    desc: 5,
                    imgSrc: 'https://image.s5a.com/is/image/saks/0400018517439_BLACK?wid=968&hei=1292&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
                    key: 'prod30',
                    link: 'https://slooks.top/6wQT/65',
                    originalPrice: '$980',
                    currentPrice: '$980',
                    title: 'Khaite Sicily Pleated Silk Midi-Dress'
                }
            ],
            store: 'Saks Fifth Avenue'
        },
        {
            prodList: [
                {
                    desc: 1,
                    imgSrc: 'https://static.thgcdn.cn/images/large/webp/productimg/1600/1600/11324284-4711006554928086.jpg',
                    key: 'prod36',
                    link: 'https://www.lookfantastic.cn/maybelline-fit-me-matte-and-poreless-foundation-30ml-various-shades/11324284.html',
                    originalPrice: '￥66.72',
                    currentPrice: '¥50.04',
                    title: '美宝莲 Fit Me 粉底液 30ml'
                },
                {
                    desc: 2,
                    imgSrc: 'https://static.thgcdn.cn/images/large/webp//productimg/1600/1600/11863661-1454927815465798.jpg',
                    key: 'prod37',
                    link: 'https://www.lookfantastic.cn/kora-organics-noni-glow-face-oil-10ml/11863661.html',
                    originalPrice: '￥192.05',
                    currentPrice: '¥144.03',
                    title: 'Kora Organics Noni Glow Face Oil 10ml'
                },
                {
                    desc: 3,
                    imgSrc: 'https://static.thgcdn.cn/images/large/webp//productimg/1600/1600/12635437-1314911951568611.jpg',
                    key: 'prod38',
                    link: 'https://www.lookfantastic.cn/christophe-robin-cleansing-purifying-scrub-with-sea-salt-250ml/12635437.html',
                    originalPrice: '￥350.70',
                    currentPrice: '¥263.02',
                    title: 'Christophe Robin 海盐头皮洗发磨砂膏'
                },
                {
                    desc: 4,
                    imgSrc: 'https://static.thgcdn.cn/images/large/webp//productimg/1600/1600/11234137-1494896385147875.jpg',
                    key: 'prod39',
                    link: 'https://www.lookfantastic.cn/chantecaille-just-skin-tinted-moisturizer-spf-15-50g-various-shades/11234137.html',
                    originalPrice: '￥609.55',
                    currentPrice: '¥457.16',
                    title: '香缇卡隔离 | 有色面霜SPF15 - 50g'
                },
                {
                    desc: 5,
                    imgSrc: 'https://static.thgcdn.cn/images/large/webp//productimg/1600/1600/11234111-3134931961042939.jpg',
                    key: 'prod40',
                    link: 'https://www.lookfantastic.cn/chantecaille-future-skin-oil-free-foundation-30g-various-shades/11234111.html',
                    originalPrice: '￥601.20',
                    currentPrice: '¥450.90',
                    title: '香缇卡粉霜 | 无油粉底 30G'
                }
            ],
            store: 'Lookfantastic'
        },
        {
            prodList: [
                {
                    desc: 1,
                    imgSrc: 'https://cdn-images.farfetch-contents.com/17/54/74/04/17547404_38805680_1000.jpg',
                    key: 'prod56',
                    link: 'https://www.farfetch.com/shopping/women/jacquemus-le-bob-logo-bucket-hat-item-17547404.aspx?storeid=13537',
                    originalPrice: '$125',
                    currentPrice: '$125',
                    title: 'Jacquemus Le Bob logo bucket hat'
                },
                {
                    desc: 1,
                    imgSrc: 'https://cdn-images.farfetch-contents.com/18/21/05/38/18210538_38770110_1000.jpg',
                    key: 'prod57',
                    link: 'https://www.farfetch.com/shopping/women/miu-miu-patent-leather-penny-loafers-item-18210538.aspx?storeid=11251',
                    originalPrice: '$1,150',
                    currentPrice: '$1,150',
                    title: 'Miu Miu patent leather penny loafers'
                },
                {
                    desc: 1,
                    imgSrc: 'https://cdn-images.farfetch-contents.com/17/69/44/27/17694427_38639854_1000.jpg',
                    key: 'prod58',
                    link: 'https://www.farfetch.com/shopping/women/saint-laurent-opyum-110mm-slingback-pumps-item-17694427.aspx?storeid=13824',
                    originalPrice: '$1,290',
                    currentPrice: '$1,290',
                    title: 'Saint Laurent Opyum 110mm slingback pumps'
                },
                {
                    desc: 1,
                    imgSrc: 'https://cdn-images.farfetch-contents.com/18/08/45/89/18084589_38547441_1000.jpg',
                    key: 'prod59',
                    link: 'https://www.farfetch.com/shopping/women/jacquemus-neve-logo-plaque-cropped-cardigan-item-18084589.aspx?storeid=13161',
                    originalPrice: '$300',
                    currentPrice: '$300',
                    title: 'Jacquemus Neve logo plaque cropped cardigan'
                },
                {
                    desc: 1,
                    imgSrc: 'https://cdn-images.farfetch-contents.com/17/55/40/69/17554069_38067255_1000.jpg',
                    key: 'prod60',
                    link: 'https://www.farfetch.com/shopping/women/longchamp-le-pliage-filet-tote-bag-item-17554069.aspx?storeid=14434',
                    originalPrice: '$110',
                    currentPrice: '$110',
                    title: 'Longchamp Le Pliage Filet tote bag'
                }
            ],
            store: 'Farfetch'
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
