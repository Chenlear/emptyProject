<template>
  <div class="hello">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="@/assets/logo.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="@/assets/logo.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="@/assets/logo.png" alt="">
        </div>
      </div>
    </div>
    <van-button type="info">信息按钮</van-button>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    <p>{{this.$store.state.token}}</p>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import { Button, Cell, CellGroup } from 'vant'
export default {
  name: 'index',
  components: {
    [Button.name]: Button,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data () {
    return {
    }
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    async getInfo () {
      try {
        let res = await this.$http.get('/web/service/firends/pc/info-hotContext')
      } catch (err) {
        this.$toast.fail(`${err.status}\n 数据请求失败`)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .swiper-slide{
    img{
      width: 375px;
    }
  }
</style>
