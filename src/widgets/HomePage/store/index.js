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
            imgSrc: `https://n.nordstrommedia.com/id/sr3/7cba6e2f-b498-430d-8c90-745dbdeeee5f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2`,
            link: `https://slooks.top/6wct/65`,
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
            name: `CHANEL GABRIELLE CHANEL ESSENCE Eau de Parfum`,
            imgSrc: `https://www.sephora.com/productimages/sku/s2238145-main-zoom.jpg?imwidth=315`,
            link: `https://www.sephora.com/product/gabrielle-chanel-essence-eau-de-parfum-P449555?skuId=2238145&icid2=products%20grid:p449555:product`,
            originalPrice: `$160.00`,
            currentPrice: `$128`
        },
        {
            key: '7',
            name: `CHANEL COCO MADEMOISELLE Eau de Parfum`,
            imgSrc: `https://www.sephora.com/productimages/sku/s513168-main-zoom.jpg?imwidth=315`,
            link: `https://www.sephora.com/product/coco-mademoiselle-P12495?skuId=513168&icid2=products%20grid:p12495:product`,
            originalPrice: `$122.00`,
            currentPrice: `$97.60`
        },
        {
            key: '8',
            name: `KVD Beauty Lock-It Refillable Mattifying Pressed Finishing Powder`,
            imgSrc: `https://www.sephora.com/productimages/sku/s1914472-main-zoom.jpg?imwidth=315`,
            link: `https://www.sephora.com/product/lock-it-blotting-powder-P418800?skuId=1914472&icid2=products%20grid:p418800:product`,
            originalPrice: `$35.00`,
            currentPrice: `$28.00`
        },

        {
            key: '9',
            name: `"SEPHORA COLLECTION Outrageous Plumping Lip Gloss"`,
            imgSrc: `https://www.sephora.com/productimages/sku/s2234177-main-zoom.jpg?imwidth=315`,
            link: `https://www.sephora.com/product/outrageous-effect-volume-lip-gloss-P417985?skuId=2234177`,
            originalPrice: `$13.00`,
            currentPrice: `$9.10`
        },

        {
            key: '10',
            name: `CHANEL CHANCE EAU TENDRE Eau de Toilette`,
            imgSrc: `https://www.sephora.com/productimages/sku/s1237379-main-zoom.jpg?imwidth=315`,
            link: `https://www.sephora.com/product/chance-eau-tendre-P258612?skuId=1237379&icid2=products%20grid:p258612:product`,
            originalPrice: `$100.00`,
            currentPrice: `$80.00`
        },
        {
            key: '11',
            name: `Morgan Crossbody In Signature Chambray`,
            imgSrc: `https://images.coach.com/is/image/Coach/ch150_imdei_a0?$desktopProduct$`,
            link: `https://slooks.top/6wcy/65`,
            originalPrice: `$328.00`,
            currentPrice: `$131.20`
        },
        {
            key: '12',
            name: `Mini Rowan File Bag In Signature Canvas`,
            imgSrc: `https://images.coach.com/is/image/Coach/cf340_imdqc_a0?$desktopProduct$`,
            link: `https://slooks.top/6wcx/65`,
            originalPrice: `$247.50`,
            currentPrice: `$99`
        },
        {
            key: '13',
            name: `Ethique丰盈蓬松活力洗发皂 油性发质适用 110g`,
            imgSrc: `https://source-feelunique.azoyacdn.com/media/catalog/product/e/t/ethique_sweet_spicy_volumising_solid_shampoo_110g_1660729721.jpg?imageMogr2/thumbnail/438x438/extent/438x438/background/d2hpdGU=`,
            link: `https://cn.feelunique.com/product/1377923.html`,
            originalPrice: `£12.99`,
            currentPrice: `£9.70`
        },
        {
            key: '14',
            name: `Murad 慕勒/慕拉 视黄醇青春复活修护精华液 30ml`,
            imgSrc: `https://source-feelunique.azoyacdn.com/media/catalog/product/m/u/murad_resurgence_retinol_youth_renewal_serum_30ml_1582797841_75.jpg?imageMogr2/thumbnail/438x438/extent/438x438/background/d2hpdGU=`,
            link: `https://cn.feelunique.com/product/1362019.html`,
            originalPrice: `£86.00`,
            currentPrice: ``
        },
        {
            key: '15',
            name: `PAUL & JOE 防晒妆前隔离霜 30ml 01 Dagree`,
            imgSrc: `https://source-feelunique.azoyacdn.com/media/catalog/product/p/a/paul_amp_joe_protecting_foundation_primer_30ml_1574851912_184.jpg?imageMogr2/thumbnail/438x438/extent/438x438/background/d2hpdGU=`,
            link: `https://cn.feelunique.com/product/1361758.html`,
            originalPrice: `£26.00`,
            currentPrice: `£19.50`
        },
        {
            key: '16',
            name: `BY TERRY 泰利 玻尿酸保湿散粉10g+散粉刷套装`,
            imgSrc: `https://source-feelunique.azoyacdn.com/media/catalog/product/b/y/by_terry_hyaluronic_hydra_powder_kabuki_set_1602666477_49.jpg?imageMogr2/thumbnail/438x438/extent/438x438/background/d2hpdGU=`,
            link: `https://cn.feelunique.com/product/1369051.html`,
            originalPrice: `£42.00`,
            currentPrice: `£29.40`
        },
        {
            key: '17',
            name: `Nike Air Force 1 '07 Next Nature`,
            imgSrc: `https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d86cc16f-67d2-4781-a01f-7ea19eeba5cd/air-force-1-07-next-nature-womens-shoes-fvxZ0g.png`,
            link: `https://www.nike.com/t/air-force-1-07-next-nature-womens-shoes-fvxZ0g/DN1430-106`,
            originalPrice: `$115`,
            currentPrice: `$92`
        },
        {
            key: '18',
            name: `Belk & Co. 1/4 ct. t.w. Pear Shaped Diamond Pendant Necklace with 18" Cable Chain in Sterling Silver`,
            imgSrc: `https://belk.scene7.com/is/image/Belk?layer=0&src=5400453_DA4948ZZW8SG0_A_040&$DWP_PRODUCT_PDP_LARGE$`,
            link: `https://www.belk.com/p/belk-co.-1-4-ct.-t.w.-pear-shaped-diamond-pendant-necklace-with-18-cable-chain-in-sterling-silver/5400453DA4948ZZW8SG0.html`,
            originalPrice: `$225.00`,
            currentPrice: `$67.50`
        },
        {
            key: '19',
            name: `Belk & Co. 1/3 ct. t.w. Diamond Anniversary Band in 14K Gold`,
            imgSrc: `https://belk.scene7.com/is/image/Belk?layer=0&src=5400466_11749664_A_041&layer=comp&$DWP_PRODUCT_PDP_LARGE$`,
            link: `https://www.belk.com/p/belk-co.-1-3-ct.-t.w.-diamond-anniversary-band-in-14k-gold/540046611749664.html`,
            originalPrice: `$1,225.00`,
            currentPrice: `$367.50`
        },
        {
            key: '20',
            name: `Effy 14K White Gold 3/8 ct. t.w. Diamond Stud Earrings`,
            imgSrc: `https://belk.scene7.com/is/image/Belk?layer=0&src=5400452_EF0EY88DD3_A_044&$DWP_PRODUCT_PDP_LARGE$`,
            link: `https://www.belk.com/p/effy-14k-white-gold-3-8-ct.-t.w.-diamond-stud-earrings-/5400452EF0EY88DD3.html`,
            originalPrice: `$1,300.00`,
            currentPrice: `$455.00`
        },
        {
            key: '21',
            name: `Belk & Co. 1/2 ct. t.w. Diamond Necklace in 10K White Gold`,
            imgSrc: `https://belk.scene7.com/is/image/Belk?layer=0&src=5400453_DA6511ZZ16DG0_A_100&$DWP_PRODUCT_PDP_LARGE$`,
            link: `https://www.belk.com/p/belk-co.-1-2-ct.-t.w.-diamond-necklace-in-10k-white-gold/5400453DA6511ZZ16DG0.html`,
            originalPrice: `$2,825.00`,
            currentPrice: `$847.50 `
        },
        {
            key: '22',
            name: `Belk & Co. 0.033 ct. t.w. Diamond Cross Pendant in Sterling Silver`,
            imgSrc: `https://belk.scene7.com/is/image/Belk?layer=0&src=5400453_SBX41869CHBK_A_040_T10L00&layer=comp&$DWP_PRODUCT_PDP_LARGE$`,
            link: `https://www.belk.com/p/belk-co.-0.033-ct.-t.w.-diamond-cross-pendant-in-sterling-silver/5400453SBX41869CHBK.html`,
            originalPrice: `$225.00`,
            currentPrice: `$67.50`
        },
        {
            key: '23',
            name: `MCM Logo Heathered Tee`,
            imgSrc: `https://image.s5a.com/is/image/saksoff5th/0400018759670?dpr=on,2`,
            link: `https://www.saksoff5th.com/product/mcm-logo-heathered-tee-0400018759670.html?dwvar_0400018759670_color=HEATHER_GREY`,
            originalPrice: `$250.00`,
            currentPrice: `$149.99`
        },
        {
            key: '24',
            name: `MCM Stark Leather Crossbody Backpack`,
            imgSrc: `https://image.s5a.com/is/image/saksoff5th/0400018864452_BLACK?dpr=on,2`,
            link: `https://www.saksoff5th.com/product/mcm-stark-leather-crossbody-backpack-0400018864452.html?dwvar_0400018864452_color=BLACK`,
            originalPrice: `$990.00`,
            currentPrice: `$549.99`
        },
        {
            key: '25',
            name: `MCM Munchen Leather Tote`,
            imgSrc: `https://image.s5a.com/is/image/saksoff5th/0400018864429?dpr=on,2`,
            link: `https://www.saksoff5th.com/product/mcm-munchen-leather-tote-0400018864429.html?dwvar_0400018864429_color=RUBY_RED`,
            originalPrice: `$850.00`,
            currentPrice: `$479.99`
        },
        {
            key: '26',
            name: `MCM Embroidered Logo Hoodie`,
            imgSrc: `https://image.s5a.com/is/image/saksoff5th/0400018776735?dpr=on,2`,
            link: `https://www.saksoff5th.com/product/mcm-%E2%80%8Bembroidered-logo-hoodie-0400018776735.html?dwvar_0400018776735_color=BLACK`,
            originalPrice: `$490.00`,
            currentPrice: `$249.99`
        },
        {
            key: '27',
            name: `MCM Tipped Zip Up Track Jacket`,
            imgSrc: `https://image.s5a.com/is/image/saksoff5th/0400018759469?dpr=on,2`,
            link: `https://www.saksoff5th.com/product/mcm-tipped-zip-up-track-jacket-0400018759469.html?dwvar_0400018759469_color=BLACK`,
            originalPrice: `$530.00`,
            currentPrice: `$319.99`
        },
        {
            key: '28',
            name: `Mothership VI: Midnight Sun Star Wars™ Edition`,
            imgSrc: `https://cdn.shopify.com/s/files/1/1463/9662/products/PMG_STAR-WARS-22_MS6_HERO_OPEN_1_600x.jpg?v=1670972409`,
            link: `https://www.patmcgrath.com/collections/xclusiv-offers/products/mothership-vi-midnight-sun-star-wars-edition?variant=40450251489349`,
            originalPrice: `$128.00`,
            currentPrice: `$90.00`
        },
        {
            key: '29',
            name: `LUST: Gloss™ Star Wars™ Edition`,
            imgSrc: `https://cdn.shopify.com/s/files/1/1463/9662/products/PMG_STAR-WARS-22_GLOSS_CARNAL-DESIRE_CAPOFF_600x.jpg?v=1670971699`,
            link: `https://www.patmcgrath.com/products/lust-gloss-star-wars-edition?variant=40450272067653`,
            originalPrice: `$29.00`,
            currentPrice: `$20.00`
        },
        {
            key: '30',
            name: `Limited Edition Venus in Fleurs Luxe Quad: Voyeuristic Vixen`,
            imgSrc: `https://cdn.shopify.com/s/files/1/1463/9662/products/PDP_PMG_LNY-22_QUAD_HERO_OPEN_600x.jpg?v=1672630984`,
            link: `https://www.patmcgrath.com/products/limited-edition-venus-in-fleurs-luxe-quad-voyeuristic-vixen?variant=40469748711493`,
            originalPrice: `$58.00`,
            currentPrice: `$41.00`
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

    carouselItems1 = [
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

    carouselItems2 = [
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
