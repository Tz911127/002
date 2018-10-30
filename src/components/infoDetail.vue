<template>
    <section>
        <mu-appbar style="width: 100%;position:fixed;background:#FFFFFF;" title="审核详情">
          <mu-button icon slot="left" @click="goBack">
          <mu-icon></mu-icon>
        </mu-button>
        </mu-appbar>
        <div class="info_check">
          <div class="nav">
            <img :src='data.businessLicense' alt="" style="width:100%">
            <div class="clearfix">
                <div class="left">
                    <div>公司名称</div>
                    <div>联系人</div>
                    <div>手机</div>
                    <div>邮箱</div>
                    <div>授权码</div>
                </div>
                <div class="right">
                    <div style="padding-top:0.5rem">{{data.domainName}}</div>
                    <div>{{data.contact}}</div>
                    <div>{{data.phone}}</div>
                    <div>{{data.email}}</div>
                    <div>{{data.licenseNo}}</div>
                </div>
            </div>
        </div>
        </div>
        <div class="btn" v-if="data.status == 0">
            <mu-button @click="checkPass(1)">审核通过</mu-button>
            <mu-button @click="checkPass(2)">审核不通过</mu-button>
        </div>
        <mu-dialog width="600" max-width="80%" :esc-press-close="false" :overlay-close="false" :open.sync="openPassAlert">
              确定审核通过？
              <mu-button slot="actions" flat color="primary" @click="closePassDialog(0)">确定</mu-button>
              <mu-button slot="actions" flat color="primary" @click="closePassDialog(1)">取消</mu-button>
        </mu-dialog>
        <mu-dialog width="600" max-width="80%" :esc-press-close="false" :overlay-close="false" :open.sync="openNoPassAlert">
              确定审核不通过？
              <mu-button slot="actions" flat color="primary" @click="closeNoPassDialog(0)">确定</mu-button>
              <mu-button slot="actions" flat color="primary" @click="closeNoPassDialog(1)">取消</mu-button>
        </mu-dialog>
        <mu-snackbar :position="color.position" :color="color.color" :open.sync="color.open">
          {{color.message}}
        </mu-snackbar>
    </section>      
</template>
<script>
import { postCheckInfo } from "../api/api";
export default {
  data() {
    return {
      openAlert: false,
      openPassAlert: false,
      openNoPassAlert: false,
      color: {
        position: "top",
        color: "success",
        message: "操作成功",
        open: false,
        timeout: 2000
      }
    };
  },
  methods: {
    getData() {
      const routerParams = this.$route.query.data;
      this.data = routerParams;
      console.log(routerParams);
    },
    goBack() {
      javascript: history.back(-1);
    },
    checkPass(data) {
      if (Number(data) == 1) {
        this.openPassAlert = true;
        // let param = {
        //   id: this.data.id,
        //   status: 1
        // };
        // postCheckInfo(param).then(res => {
        //   if (res.data.code == 1) {
        //     javascript: history.back(-1);
        //   }
        // });
      } else {
        this.openNoPassAlert = true;
        // let param = {
        //   id: this.data.id,
        //   status: 2
        // };
        // postCheckInfo(param).then(res => {
        //   if (res.data.code == 1) {
        //     javascript: history.back(-1);
        //   }
        // });
      }
    },
    closePassDialog(num) {
      if (Number(num) == 0) {
        this.color.open = true;
        this.color.timer = setTimeout(() => {
          this.color.open = false;
          let param = {
            id: this.data.id,
            status: 1
          };
          postCheckInfo(param).then(res => {
            if (res.data.code == 1) {
              javascript: history.back(-1);
            }
          });
        }, this.color.timeout);
      } else {
        this.openPassAlert = false;
      }
    },
    closeNoPassDialog(num) {
      if (Number(num) == 0) {
        this.color.open = true;
        this.color.timer = setTimeout(() => {
          this.color.open = false;
          let param = {
            id: this.data.id,
            status: 2
          };
          postCheckInfo(param).then(res => {
            if (res.data.code == 1) {
              javascript: history.back(-1);
            }
          });
        }, this.color.timeout);
      } else {
        this.openNoPassAlert = false;
      }
    }
  },
  created() {
    this.getData();
  }
};
</script>
<style>
.info_check {
  padding-top: 55px;
}
.btn {
  margin: 2rem 0.5rem;
  background: #f5f7fb;
}
.btn .mu-button {
  width: 96%;
}
.btn .mu-button:nth-child(1) {
  background: linear-gradient(to bottom right, #40a9ff, #096dd9);
  color: #fff;
  margin-bottom: 1rem;
}
.btn .mu-button:nth-child(2) {
  background: #dbdfe8;
  color: #2b344a;
}
/* .mu-elevation-4 {
  box-shadow: 0 1px 10px 0 rgba(233, 237, 246, 0.12);
} */
</style>

