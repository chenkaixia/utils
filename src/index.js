/**
 * Created by chenkaixia on 2016/11/28.
 */
/**
 * JSON对象专为URL字符串
 */
export const JSON2URL = (json) => {

    var return_url = ''

    for (var item in json) {
        if (json.hasOwnProperty(item)) {
            return_url += ('&' + item + '=' + json[item])
        }
    }

    return return_url

}

/**
 * 判断浏览器类型
 */
var u = navigator.userAgent.toLowerCase()
export const browser = {
    isAndroid: u.indexOf('android') > -1 || u.indexOf('linux') > -1,
    isIPhone: u.indexOf('iphone') > -1,
    isIPad: u.indexOf('ipad') > -1,
    isWeixin: u.indexOf('micromessenger') > -1,
    isApp: u.indexOf('59store') > -1
}

/*
 * 获取URL参数
 */
export const getUrlParam = (param, url = window.location.search) => {

    let reg = new RegExp("(^|/?|&)" + param + "=([^&]*)(&|$)")
    let r = url.substr(1).match(reg)
    return r != null ? unescape(r[2]) : null

}

/*
 * 时间格式化
 */
export const formatTime = (timestamp, fmt = 'yyyy-MM-dd hh:mm:ss', ms = false) => {

    let data = new Date()
    data.setTime(ms ? timestamp : timestamp * 1000)

    var o = {
        "M+" : data.getMonth() + 1,
        "d+" : data.getDate(),
        "h+" : data.getHours(),
        "m+" : data.getMinutes(),
        "s+" : data.getSeconds(),
        "q+" : Math.floor((data.getMonth() + 3) / 3),
        "S" : data.getMilliseconds()
    }

    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (data.getFullYear() + "").substr(4 - RegExp.$1.length))
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
        }
    }

    return fmt;

}
