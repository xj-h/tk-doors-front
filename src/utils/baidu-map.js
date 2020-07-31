/**
*  基于百度地图的Api封装
*
*  http://lbsyun.baidu.com/index.php?title=jspopular/guide/geolocation
*/

const BAIDU_MAP_CONFIG = {
  api: 'https://api.map.baidu.com/api',
  v: '2.0',
  ak: 'qaHv1ASHKazGKMPuMp9feXbm4WpSRL',
  STATUS_SUCCESS: 0
}
export default {
  BMap: null,
  init () {
    return new Promise((resolve, reject) => {
      window._initBaiduMap = () => {
        this.BMap = window.BMap
        resolve(window.BMap)
      }
      if (!this.BMap) {
        const $script = document.createElement('script')
        $script.src = `${BAIDU_MAP_CONFIG.api}?v=${BAIDU_MAP_CONFIG.v}&ak=${BAIDU_MAP_CONFIG.ak}&callback=_initBaiduMap`
        window.document.body.appendChild($script)
      } else {
        resolve(this.BMap)
      }
    })
  },
  // 创建地图
  createdMap ({ domId, center, zoom }, callback) {
    this.init().then((BMap) => {
      const map = new BMap.Map(domId)
      // map.centerAndZoom(center, zoom)
      map.centerAndZoom(new BMap.Point(...center), zoom)
      map.enableScrollWheelZoom(true)

      callback && callback(map, BMap)
    })
  },
  // 地图瞄点
  createPoint (map, area, callback) {
    this.init().then((BMap) => {
      // 创建地址解析器实例
      const myGeo = new BMap.Geocoder()
      // 将地址解析结果显示在地图上
      myGeo.getPoint(area, function (point) {
        if (point) {
          const marker = new BMap.Marker(point)
          map.addOverlay(marker)
          callback && callback(marker, BMap)
        }
      })
    })
  }
}
