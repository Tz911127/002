<template>
<<<<<<< HEAD
  <section>
    <mu-appbar style="width: 100%;position:fixed;background:#FFFFFF" title="商户审核">
      <mu-button icon slot="left" @click="goBack">
        <mu-icon></mu-icon>
      </mu-button>
    </mu-appbar>
    <div class="main_check">
      <div v-for="item in checkData" :key="item.id" class="nav" @click="detail(item)">
        <div class="title">
          <div class="left">{{item.createTime|filter(item.createTime)}}</div>
          <div class="right">
            <div class="main_nav_check">{{item.status ==0?"待审核":item.status ==1?"通过":"不通过"}}</div>
          </div>
        </div>
        <div class="main_nav clearfix">
          <div class="left">
            <div>公司名称</div>
            <div>联系人</div>
            <div>手机</div>
            <div>授权编码</div>
          </div>
          <div class="right">
            <div>{{item.domainName}}</div>
            <div>{{item.contact}}</div>
            <div>{{item.phone}}</div>
            <div>{{item.licenseNo}}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import {getMerchantInfoList} from "../api/api";
  export default {
    data() {
      return {
        checkData: [],
        start: 0
      };
    },
    methods: {
      getCheckModelData() {
        let param = {
          length: 10,
          start: 0,
          status: 0
        };
        getMerchantInfoList(param).then(res => {
          this.checkData = res.data.content.data;
        });
      },
      //滚动加载数据
      scrollBottom() {
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        var windowHeight =
          document.documentElement.clientHeight || document.body.clientHeight;
        var scrollHeight =
          document.documentElement.scrollHeight || document.body.scrollHeight;
        if (Math.round(scrollTop) + windowHeight == scrollHeight) {
          //写后台加载数据的函数
          let param = {
            length: 10,
            start: (this.start += 10),
            status: 0
          };
          getMerchantInfoList(param).then(res => {
            this.checkData = this.checkData.concat(res.data.content.data);
          });
        }
      },
      goBack() {
        javascript: history.back(-1);
      },
      detail(data) {
        this.$router.push({
          path: "/infoDetail",
          query: {
            data: data
          }
        });
      }
    },
    mounted() {
      this.getCheckModelData();
      window.addEventListener("scroll", this.scrollBottom);
    },
    filters: {
      filter(str_time) {
        var date = new Date(str_time),
          year = date.getFullYear(), //年
          month = date.getMonth() + 1, //月
          day = date.getDate(), //日
          hour = date.getHours(), //时
          min = date.getMinutes(), //分
          sen = date.getSeconds(), //秒
          msen = date.getMilliseconds(), //毫秒
          time =
            year +
            "-" +
            (month < 10 ? "0" + month : month) +
            "-" +
            (day < 10 ? "0" + day : day) +
            " " +
            (hour < 10 ? "0" + hour : hour) +
            ":" +
            (min < 10 ? "0" + min : min) +
            ":" +
            (sen < 10 ? "0" + sen : sen);

        return time;
      }
    }
  };
</script>
<style>
  /* .left {
    float: left;
  }
  .right {
    text-align: right;
  }
  .mu-appbar-left {
    background: url("../assets/icon_return@3x.png") no-repeat;
    background-size: 1.5rem;
    background-position: 0.75rem 1rem;
  }*/
  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .left {
    float: left;
    color: #2b344a;
    text-align: justify;
    text-align-last: justify;
  }

  .right {
    text-align: right;
    color: #98a0b3;
  }

  .right div,
  .left div {
    margin: 0.5rem 0;
  }

  .nav {
    background: #fff;
    padding: 1rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
  }

  .mu-appbar-left {
    background: url("../assets/icon_return@3x.png") no-repeat;
    background-size: 1.5rem;
    background-position: 0.75rem 1rem;
  }

  .mu-appbar-title {
    margin-right: 3.5rem;
    font-size: 1.25rem;
  }

  .main_check {
    background: #f5f7fb;
    padding: 68px 1rem 1rem 1rem;
  }

  .main_nav_check {
    background: #fa8c16;
    color: #fff;
    padding: 0 0.5rem;
    border-radius: 1rem;
    display: inline-block;
    margin: 0 !important;
  }

  .main_nav {
    padding-top: 0.5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .title {
    margin-bottom: 1rem;
  }

  /* .mu-elevation-4 {
    box-shadow: 0 1px 10px 0 rgba(233, 237, 246, 0.12);
  } */
=======
    <section>
        <mu-appbar style="width: 100%;position:fixed;background:#FFFFFF" title="商户审核">
          <mu-button icon slot="left" @click="goBack">
          <mu-icon></mu-icon>
        </mu-button>
        </mu-appbar>
        <div class="main_check"> 
        <div v-for="item in checkData" :key="item.id" class="nav" @click="detail(item)">
            <div class="title">
              <div class="left">{{item.createTime|filter(item.createTime)}}</div>
              <div class="right"><div class="main_nav_check">{{item.status ==0?"待审核":item.status ==1?"通过":"不通过"}}</div></div>
            </div>
            <div class="main_nav clearfix">
                <div class="left">
                    <div>公司名称</div>
                    <div>联系人</div>
                    <div>手机</div>
                    <div>授权编码</div>
                </div>
                <div class="right">
                    <div>{{item.domainName}}</div>
                    <div>{{item.contact}}</div>
                    <div>{{item.phone}}</div>
                    <div>{{item.licenseNo}}</div>
                </div>
            </div>
        </div>
        </div>
    </section>
</template>
<script>
import { getMerchantInfoList } from "../api/api";
export default {
  data() {
    return {
      checkData: [],
      start: 0
    };
  },
  methods: {
    getCheckModelData() {
      let param = {
        length: 10,
        start: 0,
        status: 0
      };
      getMerchantInfoList(param).then(res => {
        this.checkData = res.data.content.data;
      });
    },
    //滚动加载数据
    scrollBottom() {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      if (Math.round(scrollTop) + windowHeight == scrollHeight) {
        //写后台加载数据的函数
        let param = {
          length: 10,
          start: (this.start += 10),
          status: 0
        };
        getMerchantInfoList(param).then(res => {
          this.checkData = this.checkData.concat(res.data.content.data);
        });
      }
    },
    goBack() {
      javascript: history.back(-1);
    },
    detail(data) {
      this.$router.push({
        path: "/infoDetail",
        query: {
          data: data
        }
      });
    }
  },
  mounted() {
    this.getCheckModelData();
    window.addEventListener("scroll", this.scrollBottom);
  },
  filters: {
    filter(str_time) {
      var date = new Date(str_time),
        year = date.getFullYear(), //年
        month = date.getMonth() + 1, //月
        day = date.getDate(), //日
        hour = date.getHours(), //时
        min = date.getMinutes(), //分
        sen = date.getSeconds(), //秒
        msen = date.getMilliseconds(), //毫秒
        time =
          year +
          "-" +
          (month < 10 ? "0" + month : month) +
          "-" +
          (day < 10 ? "0" + day : day) +
          " " +
          (hour < 10 ? "0" + hour : hour) +
          ":" +
          (min < 10 ? "0" + min : min) +
          ":" +
          (sen < 10 ? "0" + sen : sen);

      return time;
    }
  }
};
</script>
<style>
/* .left {
  float: left;
}
.right {
  text-align: right;
}
.mu-appbar-left {
  background: url("../assets/icon_return@3x.png") no-repeat;
  background-size: 1.5rem;
  background-position: 0.75rem 1rem;
}*/
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.left {
  float: left;
  color: #2b344a;
  text-align: justify;
  text-align-last: justify;
}
.right {
  text-align: right;
  color: #98a0b3;
}
.right div,
.left div {
  margin: 0.5rem 0;
}
.nav {
  background: #fff;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
}
.mu-appbar-left {
  background: url("../assets/icon_return@3x.png") no-repeat;
  background-size: 1.5rem;
  background-position: 0.75rem 1rem;
}
.mu-appbar-title {
  margin-right: 3.5rem;
  font-size: 1.25rem;
}
.main_check {
  background: #f5f7fb;
  padding: 68px 1rem 1rem 1rem;
}
.main_nav_check {
  background: #fa8c16;
  color: #fff;
  padding: 0 0.5rem;
  border-radius: 1rem;
  display: inline-block;
  margin: 0!important;
}
.main_nav {
  padding-top: 0.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.title {
  margin-bottom: 1rem;
}
/* .mu-elevation-4 {
  box-shadow: 0 1px 10px 0 rgba(233, 237, 246, 0.12);
} */
>>>>>>> 80260da3eeb32dee0bfb832702fc7841b664e99d
</style>
