<template>
    <section>
        <!-- <mu-appbar style="width: 100%;background:#F5F7FB" title="首页"></mu-appbar> -->
        <mu-appbar style="width: 100%;position:fixed;background:#FFFFFF" title="首页">
           <mu-button icon slot="left" @click="goBack">
            <mu-icon></mu-icon>
          </mu-button>
         </mu-appbar>
      <div class="main">
        <mu-ripple class="check" color="#fff" :opacity="0.5" @click="checkNav">
            <img src="../assets/bule@3x.png" alt="">
            <div class="checkDetail">
                <div class="checkTotal">{{checkTotal}}</div>
                <div class="checkNav">待审核内容</div>
            </div>
        </mu-ripple>
        
        <mu-ripple class="check" color="#fff" :opacity="0.5" @click="checkInfo">
            <img src="../assets/yellow@3x.png" alt="">
            <div class="checkDetail">
                <div class="checkTotal">{{infoTotal}}</div>
                <div class="checkNav">待审核商户</div>
            </div>
        </mu-ripple>

        <mu-ripple class="check" color="#fff" :opacity="0.5" @click="addDomain">
            <img src="../assets/cyan@3x.png" alt="">
            <div class="checkDetail">
                <div class="checkTotal"><img src="../assets/icon_1@3x.png" alt=""></div>
                <div class="checkNav">开账户</div>
            </div>
        </mu-ripple>
    </div>
    </section>
</template>
<script>
import { getCheckModelList, getMerchantInfoList } from "../api/api";
// import Qs from "qs";
// import axios from "axios";
export default {
  data() {
    return {
      checkTotal: 0,
      infoTotal: 0
    };
  },
  methods: {
    //   内容审核
    getCheckModelData() {
      let param = {
        length: 10,
        start: 0,
        status: 0
      };
      getCheckModelList(param).then(res => {
        console.log(res);
        this.checkTotal = res.data.content.recordsTotal;
      });
    },
    //商户审核
    getMerchantInfoData() {
      let param = {
        length: 10,
        start: 0,
        status: 0
      };
      getMerchantInfoList(param).then(res => {
        this.infoTotal = res.data.content.recordsTotal;
      });
    },
    //跳转审核内容页面
    checkNav() {
      this.$router.push("/checkNav");
    },
    //跳转审核商户
    checkInfo() {
      this.$router.push("/checkInfo");
    },
    //开账户
    addDomain() {
      this.$router.push("/addDomain");
    },
    goBack() {
      javascript: history.back(-1);
    }
  },
  mounted() {
    this.getCheckModelData();
    this.getMerchantInfoData();
  }
};
</script>
<style>
.mu-appbar-title {
  margin-right: 3.5rem;
}
.mu-appbar-left {
  background: url("../assets/icon_return@3x.png") no-repeat;
  background-size: 1.5rem;
  background-position: 0.75rem 1rem;
}
.check {
  position: relative;
  margin-bottom: 0.5rem;
}
.checkDetail {
  position: absolute;
  top: 30%;
  left: 40%;
  color: #fff;
}
.checkTotal {
  font-size: 2rem;
}
.checkTotal img {
  width: 3rem;
}
.checkNav {
  font-size: 1rem;
}
img {
  width: 100%;
}
.main {
  padding: 68px 1rem 1rem 1rem;
  background: #f5f7fb;
}
/* .mu-elevation-4 {
  box-shadow: 0 1px 10px 0 rgba(233, 237, 246, 0.12);
} */
</style>
