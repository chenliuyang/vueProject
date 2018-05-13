<template>
  <div id="home">
    <Banner></Banner>
    <div class="copyrights">Collect from <a href="http://www.zzfuzhikang.com/" >郑州福之康科技有限公司</a></div>
    <SpecialProduct></SpecialProduct>
  </div>
</template>
<script>
  import Banner from './Banner.vue'
  import SpecialProduct from './SpecialProduct.vue'
  export default {
    components:{
      Banner,
      SpecialProduct
    }
  }
</script>
