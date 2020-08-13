<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <!-- 导航栏 -->
      <a-layout-header>
        <a-row>
          <a-col :span="0" />
          <a-col :span="5">
            <img src="../../assets/imgs/logo.jpg" width="88px" height="64px">  <span class="logoname">
              中国驰名
            </span>
          </a-col>
          <a-col :span="12" />
          <a-col :span="7">
            <a v-for="(item,index) in headerurl" :key="index" target="_black" :href="item.link" class="fontcolorgrey fontsize12">
              {{ item.name +`&nbsp;&nbsp;` }}
            </a>
          </a-col>
          <a-col :span="0" />
        </a-row>
      </a-layout-header>
      <!-- 主体内容 -->
      <a-layout-content>
        <a-carousel>
          <div v-for="(item,index) in bannerimg" :key="index">
            <div class="backgroundimg" :style="{'background-image': 'url('+item.name+')'}">
              <a-row>
                <a-col :span="2" />
                <a-col :span="12">
                  <a :href="item.link" :style="{'background-image': 'url('+item.name2+')'}" class="bannerlink" target="_black" width="200px" height="650px" />
                </a-col>
                <a-col :span="8">
                  <div class="wxqrcode">
                    <h2 class="titleqr">
                      微信扫码 关注我们
                    </h2>
                    <div>
                      <img class="wxqrimg text_align_center" src="../../assets/imgs/mywechatjpg.jpg" width="200px" height="200px">
                    </div>

                    <div class="qrico" :style="{'background': 'linear-gradient(to bottom right, '+item.color1+','+item.color2+')'}">
                      <div class="qrintro">
                        <h3 class="qrh3">
                          会员用户
                        </h3>
                        全程记录，售后无忧
                      </div>
                      <a-row :gutter="2">
                        <a-col :span="8" style="left: 25px; margin-top:20px">
                          <a-icon class="commonicosty" type="laptop" />
                          <p class="qrp">
                            O2O预购
                          </p>
                        </a-col>
                        <a-col :span="8" style="margin-top:20px">
                          <a-icon class="commonicosty" type="border" />
                          <p class="qrp">
                            上门量尺
                          </p>
                        </a-col>
                        <a-col :span="8" style="right: 25px;margin-top:20px">
                          <a-icon class="commonicosty" type="scissor" />
                          <p class="qrp">
                            方案设计
                          </p>
                        </a-col>
                      </a-row>
                      <a-row :gutter="[2,35]">
                        <a-col :span="8" style="left: 25px">
                          <a-icon class="commonicosty" type="user" />
                          <p class="qrp">
                            安装预约
                          </p>
                        </a-col>
                        <a-col :span="8">
                          <a-icon class="commonicosty" type="insurance" />
                          <p class="qrp">
                            2年质保
                          </p>
                        </a-col>
                        <a-col :span="8" style="right: 25px">
                          <a-icon class="commonicosty" type="setting" />
                          <p class="qrp">
                            终生维护
                          </p>
                        </a-col>
                      </a-row>
                    </div>
                  </div>
                </a-col>
                <a-col :span="2" />
              </a-row>
            </div>
          </div>
        </a-carousel>
      </a-layout-content>
      <!-- 页脚 -->
      <a-layout-footer>
        <a-row>
          <a-col :span="8" />
          <a-col :span="8">
            <a v-for="(item,index) in footerurl" :key="index" target="_black" :href="item.link" class="fontcolorgrey fontsize12">
              {{ item.name +`&nbsp;&nbsp;` }}
            </a>
          </a-col>
          <a-col :span="8" />
        </a-row>
        <a-row>
          <a-col :span="2" />
          <a-col :span="20">
            <span v-for="(item,index) in footrecord" :key="index" class="fontcolorgrey fontsize12">
              {{ item.name +`&nbsp;&nbsp;` }}
            </span>
          </a-col>
          <a-col :span="2" />
        </a-row>
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logo: '../../assets/imgs/logo.jpg',
      headerurl: [
        { name: '帮助', link: 'https://www.baidu.com' },
        { name: '反馈', link: 'https://fanyi.baidu.com/' },
        { name: '关于我们', link: 'https://www.baidu.com' },
        { name: '关注微信', link: 'https://www.baidu.com' }],
      bannerimg: [
        { color1: '#00CED1', color2: '#AFEEEE', name: require('../../assets/imgs/back2.png'), name2: require('../../assets/imgs/banneremail.png'), link: 'https://reg1.vip.163.com/newReg1/reg?from=LoginBackgroundShow_01&utm_source=LoginBackgroundShow_01' },
        { color1: 'red', color2: '#AFEEEE', name: require('../../assets/imgs/background2.jpg'), name2: require('../../assets/imgs/background.jpg'), link: 'https://fanyi.baidu.com/' },
        { color1: '#00CED1', color2: '#AFEEEE', name: require('../../assets/imgs/background.jpg'), name2: require('../../assets/imgs/background.jpg'), link: 'https://www.baidu.com' },
        { color1: '#00CED1', color2: '#AFEEEE', name: require('../../assets/imgs/background2.jpg'), name2: require('../../assets/imgs/background.jpg'), link: 'https://www.baidu.com' }],
      footerurl: [
        { name: '首页', link: 'https://www.baidu.com' },
        { name: '隐私策略', link: 'https://fanyi.baidu.com/' },
        { name: '公益', link: 'https://www.baidu.com' },
        { name: '安全策略', link: 'https://www.baidu.com' }],
      footrecord: [
        { name: '公司版权所有©1997-2020', link: '#' },
        { name: 'ICP备案 AB2-2004426644-18', link: 'https://beian.miit.gov.cn/' },
        { name: '公网安备 44010602506299 ', link: '#' },
        { name: '增值电信业务许可证 粤B2-20090191  B2-20090058', link: '#' }]
    }
  }
}
</script>
<style scoped>
#components-layout-demo-basic {
    min-width: 280px;
    text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
    background: #fff;
    color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
    line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-content {
    background: #fff;
    color: #fff;
    min-height: 650px;
    line-height: 650px;
}
.logoname{
    font-size: 16px;
    line-height: 64px;
    color: #888;
}
.wxqrimg{
    text-align: center;
    margin-top: 20px;
    margin-left: 100px;
}
.qrintro{
    padding-top: 12px;
    margin-top: 20px;
    font-size: 15px;
    color: #fff;
    position: relative;
}
.qrh3{
    color: #fff;
}
.commonicosty{
    font-size: 42px;
    color: #fff;
}
.qrico{
    position: relative;
    width: 400px;
    height: 233px;
    top: 33px;
    border-radius: 0 0 5px 5px;
}
.qrp{
    margin-top: 5px;
    font-size: 12px;
    color: #fff;
}
.wxqrcode{
    border-radius: 5px;
    position: absolute;
    margin-top: 45px;
    width: 400px;
    height: 540px;
    background: #fff;
    z-index: 2;
}
.bannerlink{
    display: block;
    width: 659px;
    left: 100px;
    position: relative;
    height: 650px;
    float: left;
    z-index: 3;
    height:650px;
    background-size:100% 100%;
}
.titleqr{
    padding: 40px 0 0;
    color: #333;
    font-size: 20px;
}
.backgroundimg{
    width:100%;
    height:650px;
    background-size:100% 100%;
    z-index: 1;
}
/* For demo */
.ant-carousel >>> .slick-slide {
    text-align: center;
    height: 650px;
    line-height: 100%;
    background: #fff;
    overflow: hidden;
}
</style>
