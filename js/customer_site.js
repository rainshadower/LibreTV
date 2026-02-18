const CUSTOMER_SITES = {
     dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com', 
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
    },
    xiaomaomi: {
        api: 'https://zy.xmm.hk/api.php/provide/vod',
        name: '小猫咪资源',
    },
    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
        detail: 'http://ffzy5.tv', 
    },
    heimuer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳',
        detail: 'https://heimuer.tv', 
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源',
    },
    iqiyi: {
        api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
        name: 'iqiyi资源',
    },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    }, 
    hwba: {
        api: 'https://cjhwba.com/api.php/provide/vod',
        name: '华为吧资源',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        detail: 'https://jszyapi.com', 
    },
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
    },
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源',
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源'
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源'
    },
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度云资源'
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源'
    },
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺短剧'
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源'
    },
    lzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '量子资源站'
    },
   ckzy: {
        api: 'https://ckzy.me/api.php/provide/vod/',
        name: 'CK资源',
        detail: 'https://www.ckzy1.com',
        adult: true
    },
    jkun: {
        api: 'https://www.jkunzyapi.com/api.php/provide/vod/',
        name: 'jkun资源',
        detail: 'https://jkunzyapi.com',
        adult: true
    },
    souav: {
        api: 'https://api.souavzy.vip/api.php/provide/vod/',
        name: 'souav资源',
        detail: 'https://api.souavzy.vip',
        adult: true
    },   
    huangcang: {
        api: 'https://hsckzy888.com/api.php/provide/vod/from/hsckm3u8/at/json/',
        name: '黄色仓库',
        detail: 'https://hsckzy.vip',
        adult: true
    },
    yutu: {
        api: 'https://apiyutu.com/api.php/providedao/vod/',
        name: '玉兔资源',
        detail: 'https://yutuzy10.com',
        adult: true
    },
    155: {
        api: 'https://155api.com/api.php/provide/vod',
        name: 'AV-155资源',
        detail: 'https://155api.com',
        adult: true
    },
    shayu: {
          api: 'https://shayuapi.com/api.php/provide/vod',
          name: 'AV-鲨鱼资源',
          detail: 'https://shayuapi.com',
          adult: true          
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
