<template>
    <section>
        <mu-appbar style="width: 100%;position:fixed;background:#fff" title="内容审核">
          <mu-button icon slot="left" @click="goBack">
          <mu-icon></mu-icon>
        </mu-button>
        </mu-appbar>
        <div class="nav" style="padding-top:64px">
          <iframe :src="src" ></iframe>
          <div class="btns">
            <mu-button @click="checkPass(1)">审核通过</mu-button>
            <mu-button @click="checkPass(5)">审核不通过</mu-button>
            <mu-dialog title="审核不通过的原因" width="600" max-width="80%" :esc-press-close="false" :overlay-close="false" :open.sync="openAlert">
              <mu-form ref="form" :model="validateForm" class="mu-demo-form">
                <mu-form-item :rules="rea" prop="reason">
                  <mu-text-field  v-model="validateForm.reason" placeholder="不允许超过30个字符" prop="reason" multi-line :rows="3" :max-length="30"></mu-text-field><br/>
                </mu-form-item>
                <mu-form-item>
                  <mu-button color="primary" @click="closeAlertDialog(0)">确定</mu-button>
                  <mu-button @click="closeAlertDialog(1)">取消</mu-button>
                </mu-form-item>
              </mu-form>
            </mu-dialog>
            <mu-dialog width="600" max-width="80%" :esc-press-close="false" :overlay-close="false" :open.sync="openPassAlert">
              确定审核通过？
              <mu-button slot="actions" flat color="primary" @click="closePassDialog(0)">确定</mu-button>
              <mu-button slot="actions" flat color="primary" @click="closePassDialog(1)">取消</mu-button>
            </mu-dialog>
            <mu-snackbar :position="color.position" :color="color.color" :open.sync="color.open">
              {{color.message}}
            </mu-snackbar>
        </div>
        </div>
    </section>
</template>
<script>
import { getCheckNav, postCheck } from "../api/api";
import getCookie from "../util/util";
export default {
  data() {
    return {
      src: "",
      pid: "",
      openAlert: false,
      openPassAlert: false,
      validateForm: {
        reason: ""
      },
      rea: [{ validate: val => !!val, message: "必须填写审核不通过原因" }],
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
      this.pid = routerParams;
      let param = {
        id: routerParams
      };
      getCheckNav(param).then(res => {
        this.src =
          "http://sys.e-media.vip/TBXEditor/preview_online/index_online_a.html?domain=whkm" +
          // getCookie("userName") +
          "&pid=" +
          res.data.content.id;
      });
    },
    goBack() {
      javascript: history.back(-1);
    },
    checkPass(data) {
      if (Number(data) == 1) {
        this.openPassAlert = true;
      } else {
        this.openAlert = true;
      }
    },
    closePassDialog(num) {
      if (Number(num) == 0) {
        this.color.open = true;
        this.color.timer = setTimeout(() => {
          this.color.open = false;
          let param = {
            id: this.pid,
            status: 1
          };
          postCheck(param).then(res => {
            if (res.data.code == 1) {
              javascript: history.back(-1);
            }
          });
        }, this.color.timeout);
      } else {
        this.openPassAlert = false;
      }
    },
    closeAlertDialog(num) {
      if (num == 0) {
        this.$refs.form.validate().then(res => {
          console.log(res);
          if (res) {
            if (this.validateForm.reason == "") {
            } else {
              this.openAlert = false;
              let param = {
                id: this.pid,
                status: 5,
                reason: this.validateForm.reason
              };
              postCheck(param).then(res => {
                if (res.data.code == 1) {
                  javascript: history.back(-1);
                }
              });
            }
          }
        });
      } else {
        this.openAlert = false;
      }
    }
  },

  created() {
    this.getData();
  }
};
</script>
<style>
.mu-appbar-left {
  background: url("../assets/icon_return@3x.png") no-repeat;
  background-size: 1.5rem;
  background-position: 0.75rem 1rem;
}
/* .mu-elevation-4 {
  box-shadow: 0 1px 10px 0 rgba(233, 237, 246, 0.12);
} */
.btns {
  margin: 2rem 0.5rem;
  /* background: #f5f7fb; */
}
.btns .mu-button {
  width: 96%;
}
.btns .mu-button:nth-child(1) {
  background: linear-gradient(to bottom right, #40a9ff, #096dd9);
  color: #fff;
  margin-bottom: 1rem;
}
.btns .mu-button:nth-child(2) {
  background: #dbdfe8;
  color: #2b344a;
}
</style>

