<template>
<<<<<<< HEAD
  <section>
    <!-- title -->
    <!-- <mu-appbar style="width: 100%;" title="登录"></mu-appbar> -->
    <div class="img">
      <img src="../assets/icon_logo.png" alt="">
      <div>智能营销传播系统</div>
    </div>
    <!-- 用户名/密码 -->
    <mu-container>
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
        <mu-form-item prop="username" :rules="usernameRules" class="username">
          <mu-text-field v-model="validateForm.username" placeholder="请输入账号" prop="username"><img
            src="../assets/account.png" alt=""></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="password" :rules="passwordRules" class="password">
          <mu-text-field type="password" v-model="validateForm.password" placeholder="请输入密码" prop="password"><img
            src="../assets/pwd.png" alt=""></mu-text-field>
        </mu-form-item>
        <mu-form-item>
          <mu-button @click="submit" large>登录</mu-button>
        </mu-form-item>
      </mu-form>
      <mu-dialog title="提示" width="360" :open.sync="openSimple">
        帐号或密码不正确！
        <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">关闭</mu-button>
      </mu-dialog>
    </mu-container>
  </section>
</template>

<script>
  import {requestLogin} from "../api/api";
  import md_5 from "../util/md_5.js";
  let Base64 = require("js-base64").Base64;
  export default {
    data() {
      return {
        usernameRules: [
          {validate: val => !!val, message: "必须填写用户名"},
          {validate: val => val.length >= 3, message: "用户名长度大于3"}
        ],
        passwordRules: [
          {validate: val => !!val, message: "必须填写密码"},
          {
            validate: val => val.length >= 3 && val.length <= 32,
            message: "密码长度大于3小于32"
          }
        ],
        validateForm: {
          username: "",
          password: ""
        },
        openSimple: false,
        newpwd: ""
      };
    },
    methods: {
      submit() {
        let account = this.validateForm.username;
        let password = this.validateForm.password;
        this.$refs.form.validate().then(result => {
          let param = {
            account: account,
            password: this.md5_pwd(password)
          };
          requestLogin(param).then(res => {
            if (res.data.code == 1) {
              this.$router.push({
                path: "/home",
                query: {
                  data: res.data.content.fids
                }
              });
              this.setCookie(account, Base64.encode(password), 1);
            } else {
              this.openSimple = true;
            }
          });
        });
      },
      md5_pwd(pwd) {
        var hexDigits = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f"
        ];
        var enStr = md_5.hex_md5(pwd + "dmbd!@#$%^&*");
        var str = "";
        for (var i = 0; i < enStr.length; i++) {
          for (var j = 0; j < hexDigits.length; j++) {
            if (hexDigits[j] == enStr.charAt(i)) {
              j = j + 1;
              str += hexDigits[j == hexDigits.length ? 0 : j];
            }
          }
        }
        return str;
      },

      //设置cookie
      setCookie(c_name, c_pwd, exdays) {
        var exdate = new Date(); //获取时间
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
        //字符串拼接cookie
        window.document.cookie =
          "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
        window.document.cookie =
          "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
      },
      //读取cookie
      getCookie: function () {
        if (document.cookie.length > 0) {
          var arr = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下
          for (var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split("="); //再次切割
            //判断查找相对应的值
            if (arr2[0] == "userName") {
              this.validateForm.username = arr2[1]; //保存到保存数据的地方
            } else if (arr2[0] == "userPwd") {
              this.validateForm.password = Base64.decode(arr2[1]);
            }
          }
        }
      },
      closeSimpleDialog() {
        this.openSimple = false;
      }
    },

    mounted() {
      this.getCookie();
    }
  };
</script>
<style>
  .username .mu-text-field-input,
  .password .mu-text-field-input {
    margin-left: 2rem !important;
  }

  .mu-demo-form {
    width: 100%;
  }

  .img img {
    width: 75pt;
    height: 50pt;
  }

  .img {
    margin: 0rem 1rem 3rem 1rem;
    padding-top: 7rem;
  }

  .mu-item-action {
    display: inline-block;
  }

  .mu-demo-form img {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
  }

  .mu-demo-form .mu-button {
    width: 96%;
    background: linear-gradient(to bottom right, #40a9ff, #096dd9);
    color: #fff;
  }
</style>
=======
   <section>
       <!-- title -->
       <!-- <mu-appbar style="width: 100%;" title="登录"></mu-appbar> -->
       <div class="img">
         <img src="../assets/icon_logo.png"  alt="">
         <div>智能营销传播系统</div>
       </div>
       <!-- 用户名/密码 -->
        <mu-container>
            <mu-form ref="form" :model="validateForm" class="mu-demo-form">
              <mu-form-item prop="username" :rules="usernameRules" class="username">  
                <mu-text-field v-model="validateForm.username" placeholder="请输入账号" prop="username"><img src="../assets/account.png" alt=""></mu-text-field>
              </mu-form-item>
              <mu-form-item  prop="password" :rules="passwordRules" class="password">
                  <mu-text-field type="password" v-model="validateForm.password" placeholder="请输入密码" prop="password"><img src="../assets/pwd.png" alt=""></mu-text-field>
              </mu-form-item>
              <mu-form-item>
                <mu-button @click="submit" large>登录</mu-button>
              </mu-form-item>
            </mu-form>
              <mu-dialog title="提示" width="360" :open.sync="openSimple">
                帐号或密码不正确！
                <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">关闭</mu-button>
              </mu-dialog>
        </mu-container>
   </section>
</template>

<script>
import { requestLogin } from "../api/api";
import md_5 from "../util/md_5.js";
let Base64 = require("js-base64").Base64;
export default {
  data() {
    return {
      usernameRules: [
        { validate: val => !!val, message: "必须填写用户名" },
        { validate: val => val.length >= 3, message: "用户名长度大于3" }
      ],
      passwordRules: [
        { validate: val => !!val, message: "必须填写密码" },
        {
          validate: val => val.length >= 3 && val.length <= 32,
          message: "密码长度大于3小于32"
        }
      ],
      validateForm: {
        username: "",
        password: ""
      },
      openSimple: false,
      newpwd: ""
    };
  },
  methods: {
    submit() {
      let account = this.validateForm.username;
      let password = this.validateForm.password;
      this.$refs.form.validate().then(result => {
        let param = {
          account: account,
          password: this.md5_pwd(password)
        };
        requestLogin(param).then(res => {
          if (res.data.code == 1) {
            this.$router.push({
              path: "/home",
              query: {
                data: res.data.content.fids
              }
            });
            this.setCookie(account, Base64.encode(password), 1);
          } else {
            this.openSimple = true;
          }
        });
      });
    },
    md5_pwd(pwd) {
      var hexDigits = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f"
      ];
      var enStr = md_5.hex_md5(pwd + "dmbd!@#$%^&*");
      var str = "";
      for (var i = 0; i < enStr.length; i++) {
        for (var j = 0; j < hexDigits.length; j++) {
          if (hexDigits[j] == enStr.charAt(i)) {
            j = j + 1;
            str += hexDigits[j == hexDigits.length ? 0 : j];
          }
        }
      }
      return str;
    },

    //设置cookie
    setCookie(c_name, c_pwd, exdays) {
      var exdate = new Date(); //获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
      //字符串拼接cookie
      window.document.cookie =
        "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie =
        "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
    },
    //读取cookie
    getCookie: function() {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("="); //再次切割
          //判断查找相对应的值
          if (arr2[0] == "userName") {
            this.validateForm.username = arr2[1]; //保存到保存数据的地方
          } else if (arr2[0] == "userPwd") {
            this.validateForm.password = Base64.decode(arr2[1]);
          }
        }
      }
    },
    closeSimpleDialog() {
      this.openSimple = false;
    }
  },

  mounted() {
    this.getCookie();
  }
};
</script>
<style>
.username .mu-text-field-input,
.password .mu-text-field-input {
  margin-left: 2rem !important;
}
.mu-demo-form {
  width: 100%;
}
.img img {
  width: 75pt;
  height: 50pt;
}
.img {
  margin: 0rem 1rem 3rem 1rem;
  padding-top: 7rem;
}
.mu-item-action {
  display: inline-block;
}
.mu-demo-form img {
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
}

.mu-demo-form .mu-button {
  width: 96%;
  background: linear-gradient(to bottom right, #40a9ff, #096dd9);
  color: #fff;
}
</style>
>>>>>>> 80260da3eeb32dee0bfb832702fc7841b664e99d
