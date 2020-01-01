<template>
  <div class="hello">
    第一页
    <!--<div class="swiper-container">-->
      <!--<div class="swiper-wrapper">-->
        <!--<div class="swiper-slide">-->
          <!--<img v-lazy="data.img" alt="">-->
        <!--</div>-->
        <!--<div class="swiper-slide">-->
          <!--<img v-lazy="data.img" alt="">-->
        <!--</div>-->
        <!--<div class="swiper-slide">-->
          <!--<img v-lazy="data.img" alt="">-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<img v-lazy="data.img" alt="">-->
    <!--<img v-lazy="data.img" alt="">-->
    <!--<img v-lazy="data.img" alt="">-->
    <!--<img v-lazy="data.img" alt="">-->
    <!--<img v-lazy="data.img" alt="">-->
    <!--<img v-lazy="data.img" alt="">-->
    <!--<img v-lazy="data.img" alt="">-->
    <!--<van-button type="info">信息按钮</van-button>-->
    <!--<van-cell-group>-->
      <!--<van-cell title="单元格" value="内容" />-->
      <!--<van-cell title="单元格" value="内容" label="描述信息" />-->
    <!--</van-cell-group>-->
    <!--<p>{{this.$store.state.token}}</p>-->
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
      data:{

      },
    }
  },
  created () {

  },
  mounted () {
    this.getInfo()
  },
  methods: {
    async getInfo () {
      try {
        let { code, data } = await this.$http.get(this.$api.test)
      } catch (err) {
        console.log(err)
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
