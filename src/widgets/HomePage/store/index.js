import { makeAutoObservable } from 'mobx';

class Store {
    bestSellerlist = [
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

    hotStoresList = [
        { imgSrc: `1`, link: `https://www.24s.com` },
        { imgSrc: `3`, link: `https://www.agoda.com` },
        { imgSrc: `9`, link: `https://www.bergdorfgoodman.com` },
        { imgSrc: `11`, link: `https://www.bloomingdale's.com` },
        { imgSrc: `20`, link: `https://www.coach.com` },
        { imgSrc: `21`, link: `https://www.colourpop.com` },
        { imgSrc: `22`, link: `https://www.cos.com` },
        { imgSrc: `23`, link: `https://www.cultbeauty.com` },
        { imgSrc: `24`, link: `https://www.dvf.com` },
        { imgSrc: `30`, link: `https://www.farfetch.com` },
        { imgSrc: `31`, link: `https://cn.feelunique.com` },
        { imgSrc: `32`, link: `https://www.finishline.com` },
        { imgSrc: `45`, link: `https://www.jomashop.com` },
        { imgSrc: `51`, link: `https://www.cremedelamer.com` },
        { imgSrc: `54`, link: `https://www.lookfantastic.cn` },
        { imgSrc: `59`, link: `https://www.macys.com` },
        { imgSrc: `65`, link: `https://www.mytheresa.com` },
        { imgSrc: `70`, link: `https://www.nordstrom.com` },
        { imgSrc: `77`, link: `https://www.saksfifthavenue.com` },
        { imgSrc: `80`, link: `https://www.selfridges.com` },
        { imgSrc: `81`, link: `https://www.sephora.com` },
        { imgSrc: `82`, link: `https://www.sephora.com/ca/en/` },
        { imgSrc: `89`, link: `https://www.ssense.com` }
    ];

    transList = [
        { imgSrc: 'images/transportation/59转运.png', href: 'https://59express.com/' },
        { imgSrc: 'images/transportation/傲天转运.jpg', href: 'https://www.ats-ex.com/' },
        { imgSrc: 'images/transportation/168美中快运.png', href: 'http://www.mzkd168.com/' },
        { imgSrc: 'images/transportation/八达网.jpg', href: 'http://www.8dexpress.com/' },
        { imgSrc: 'images/transportation/吉祥邮.png', href: 'https://www.jixiangyou.com/' },
        { imgSrc: 'images/transportation/可乐送海淘转运.png', href: 'https://www.cokeps.com/' },
        { imgSrc: 'images/transportation/老友记转运.png', href: 'https://www.happyht.com/' },
        { imgSrc: 'images/transportation/铭瑄海淘.jpg', href: 'https://www.happyht.com/' },
        { imgSrc: 'images/transportation/轻速国际.png', href: 'https://www.qingsuus.com/' },
        { imgSrc: 'images/transportation/润东国际快线.jpg', href: 'http://www.rundongex.com/' },
        { imgSrc: 'images/transportation/建翼速运.jpg', href: 'http://www.jianyisuyun.com/' },
        { imgSrc: 'images/transportation/天翼转运.jpg', href: 'http://www.tykd.com/' },
        { imgSrc: 'images/transportation/友家速递.jpg', href: 'ttp://www.youjiaus.net/' },
        { imgSrc: 'images/transportation/中环转运.jpg', href: 'http://www.zhonghuanus.com/' },
        { imgSrc: 'images/transportation/转运国际.png', href: 'http://www.zygjex.com/' },
        { imgSrc: 'images/transportation/天福转运.png', href: 'https://www.tianfuex.net/' },
        { imgSrc: 'images/transportation/转运中国.jpg', href: 'https://www.uszcn.com/' },
        { imgSrc: 'images/transportation/EMS海外购.jpg', href: 'http://buy.ems.com.cn/' }
    ];

    carouselItems = [
        {
            prodList: [
                {
                    desc: 1,
                    imgSrc: 'https://static.nike.com.cn/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/31c7fc77-983e-42b5-9fb6-83378a06cefa/wearallday-%E5%A5%B3%E5%AD%90%E8%BF%90%E5%8A%A8%E9%9E%8B-NpQ9lz.png',
                    key: 'Nike-1',
                    link: 'https://www.nike.com.cn/t/wearallday-%E5%A5%B3%E5%AD%90%E8%BF%90%E5%8A%A8%E9%9E%8B-NpQ9lz/CJ1677-100',
                    originalPrice: '¥499.00',
                    currentPrice: '¥399',
                    title: 'Nike Wearallday 女子运动鞋'
                },
                {
                    desc: 2,
                    imgSrc: 'https://static.nike.com.cn/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/194ce632-1c1f-4f55-b237-3f2be82a06cb/dunk-low-retro-prm-%E7%94%B7%E5%AD%90%E8%BF%90%E5%8A%A8%E9%9E%8B-d1BSZj.png',
                    key: 'Nike-2',
                    link: 'https://www.nike.com.cn/t/dunk-low-retro-prm-%E7%94%B7%E5%AD%90%E8%BF%90%E5%8A%A8%E9%9E%8B-d1BSZj/DQ7681-001',
                    originalPrice: '¥849.00',
                    currentPrice: '¥599',
                    title: 'Nike Dunk Low Retro PRM 男子运动鞋'
                },
                {
                    desc: 3,
                    imgSrc: 'https://static.nike.com.cn/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cd8228c4-4280-4bdd-9cd9-465afe8e3841/sportswear-club-%E7%94%B7%E5%AD%90%E5%88%BA%E7%BB%A3%E6%9F%94%E8%BD%AF%E7%BA%AF%E6%A3%89t%E6%81%A4-w9mvm8.png',
                    key: 'Nike-3',
                    link: 'https://www.nike.com.cn/t/sportswear-club-%E7%94%B7%E5%AD%90%E5%88%BA%E7%BB%A3%E6%9F%94%E8%BD%AF%E7%BA%AF%E6%A3%89t%E6%81%A4-w9mvm8/AR4999-064',
                    originalPrice: '¥199.00',
                    currentPrice: '¥129',
                    title: 'Nike Sportswear Club 男子刺绣柔软纯棉T恤'
                },
                {
                    desc: 4,
                    imgSrc: 'https://static.nike.com.cn/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5eb3f240-d722-4652-bbe0-046de40c8067/pegasus-38-%E5%A5%B3%E5%AD%90%E5%85%AC%E8%B7%AF%E8%B7%91%E6%AD%A5%E9%9E%8B-2n7k0Z.png',
                    key: 'Nike-4',
                    link: 'https://www.nike.com.cn/t/pegasus-38-%E5%A5%B3%E5%AD%90%E5%85%AC%E8%B7%AF%E8%B7%91%E6%AD%A5%E9%9E%8B-2n7k0Z/CW7358-002',
                    originalPrice: '￥899',
                    currentPrice: '¥629',
                    title: 'Nike Pegasus 38 女子公路跑步鞋'
                },
                {
                    desc: 5,
                    imgSrc: 'https://static.nike.com.cn/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9cab9ff7-ac96-4327-987d-50dfb9d83fcf/sportswear-essential-%E5%A5%B3%E5%AD%90%E5%8A%A0%E7%BB%92%E9%95%BF%E8%A3%A4-fsWSnt.png',
                    key: 'Nike-5',
                    link: 'https://www.nike.com.cn/t/sportswear-essential-%E5%A5%B3%E5%AD%90%E5%8A%A0%E7%BB%92%E9%95%BF%E8%A3%A4-fsWSnt/BV4090-010',
                    originalPrice: '￥449',
                    currentPrice: '¥249',
                    title: 'Nike Sportswear Essential 女子加绒长裤'
                }
            ],
            store: 'Nike(CN)'
        },
        {
            prodList: [
                {
                    desc: 1,
                    imgSrc: '/images/SSENSE-1.jpg',
                    key: 'SSENSE-1',
                    link: 'https://www.ssense.com/en-cn/women/product/gucci/white-interlocking-g-1921-t-shirt/13622901',
                    originalPrice: '$565',
                    currentPrice: '$565',
                    title: 'GUCCI White Interlocking G 1921 T-Shirt'
                },
                {
                    desc: 2,
                    imgSrc: '/images/SSENSE-2.jpg',
                    key: 'SSENSE-2',
                    link: 'https://www.ssense.com/en-cn/women/product/marni/brown-micro-tropicalia-tote/11753761',
                    originalPrice: '$550',
                    currentPrice: '$550',
                    title: 'MARNI Brown Micro Tropicalia Tote'
                },
                {
                    desc: 3,
                    imgSrc: '/images/SSENSE-3.jpg',
                    key: 'SSENSE-3',
                    link: 'https://www.ssense.com/en-cn/women/product/lemaire/black-small-croissant-bag/12319631',
                    originalPrice: '$805',
                    currentPrice: '$805',
                    title: 'LEMAIRE Black Small Croissant Bag'
                },
                {
                    desc: 4,
                    imgSrc: '/images/SSENSE-4.jpg',
                    key: 'SSENSE-4',
                    link: 'https://www.ssense.com/en-cn/women/product/skims/tan-soft-lounge-slip-dress/11444531',
                    originalPrice: '$110',
                    currentPrice: '$110',
                    title: 'SKIMS Tan Soft Lounge Slip Dress'
                },
                {
                    desc: 5,
                    imgSrc: '/images/SSENSE-5.jpg',
                    key: 'SSENSE-5',
                    link: 'https://www.ssense.com/en-cn/women/product/maison-margiela/off-white-and-gray-replica-sneakers/12095481',
                    originalPrice: '$560',
                    currentPrice: '$560',
                    title: 'MAISON MARGIELA Off-White & Gray Replica Sneakers'
                }
            ],
            store: 'SSENSE'
        },
        {
            prodList: [
                {
                    desc: 1,
                    imgSrc: 'https://www.sephora.com/productimages/sku/s2640241-main-zoom.jpg?imwidth=612',
                    key: 'prod44',
                    link: 'https://www.sephora.com/product/rare-beauty-by-selena-gomez-soft-pinch-liquid-blush-P97989778?skuId=2640241&icid2=products%20grid:p97989778:product',
                    originalPrice: '$23.00',
                    currentPrice: '$18.40',
                    title: 'Rare Beauty by Selena Gomez Soft Pinch Liquid Blush'
                },
                {
                    desc: 2,
                    imgSrc: 'https://www.sephora.com/productimages/sku/s2640209-main-zoom.jpg?imwidth=612',
                    key: 'prod45',
                    link: 'https://www.sephora.com/product/rare-beauty-by-selena-gomez-soft-pinch-tinted-lip-oil-P505568?skuId=2640209',
                    originalPrice: '$20.00',
                    currentPrice: '$16.00',
                    title: 'Rare Beauty by Selena Gomez Soft Pinch Tinted Lip Oil'
                },
                {
                    desc: 3,
                    imgSrc: 'https://www.sephora.com/productimages/sku/s2514859-main-zoom.jpg?imwidth=612',
                    key: 'prod46',
                    link: 'https://www.sephora.com/product/nars-afterglow-lip-shine-gloss-P479337?skuId=2514859',
                    originalPrice: '$26.00',
                    currentPrice: '$20.80',
                    title: 'NARS Afterglow Lip Shine Gloss'
                },
                {
                    desc: 4,
                    imgSrc: 'https://www.sephora.com/productimages/sku/s2670875-main-zoom.jpg?imwidth=612',
                    key: 'prod47',
                    link: 'https://www.sephora.com/product/mini-eyeshadow-palette-sublime-smoke-P505667?icid2=bestsellersmakeup_us_skugrid_ufe:p505667:product',
                    originalPrice: '$29.00',
                    currentPrice: '$23.20',
                    title: 'PAT McGRATH LABS\nMini Eye Shadow Palette: Sublime Smoke'
                },
                {
                    desc: 5,
                    imgSrc: 'https://www.sephora.com/productimages/sku/s2070712-main-zoom.jpg?imwidth=612',
                    key: 'prod48',
                    link: 'https://www.sephora.com/product/backstage-face-body-foundation-P432500?skuId=2070712',
                    originalPrice: '$40.00',
                    currentPrice: '$32.00',
                    title: 'Dior BACKSTAGE Face & Body Foundation'
                }
            ],
            store: 'SEPHORA'
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
