<template>
    <section>
      
        <!-- <mu-appbar style="width: 100%;position:fixed" title="开账户">
          <mu-button icon slot="left" @click="goBack">
            <mu-icon></mu-icon>
          </mu-button>
        </mu-appbar> -->
         <mu-appbar style="width: 100%;position:fixed;background:#FFFFFF" title="开账户">
           <mu-button icon slot="left" @click="goBack">
            <mu-icon></mu-icon>
          </mu-button>
         </mu-appbar>
        <div class="main_add">
          <mu-form ref="form" :model="form" class="mu-demo-form nav" :label-position="labelPosition" label-width="100">
            <mu-form-item prop="name" label="公司名称" :rules="name">
                <mu-text-field v-model="form.name" placeholder="请输入公司名称"></mu-text-field>
            </mu-form-item>
            <mu-form-item prop="key" label="企业代码" :rules="key">
                <mu-text-field v-model="form.key" placeholder="请输入企业代码"></mu-text-field>
            </mu-form-item>
            <div></div>
            <mu-form-item prop="email" label="关联邮箱" :rules="email">
                <mu-text-field v-model="form.email" placeholder="请输入邮箱"></mu-text-field>
            </mu-form-item>
            <mu-form-item prop="contact" label="联系人" :rules="contact">
                <mu-text-field v-model="form.contact" placeholder="请输入联系人"></mu-text-field>
            </mu-form-item>
            <mu-form-item prop="phone" label="联系电话" :rules="phone">
                <mu-text-field v-model="form.phone" placeholder="请输入联系电话"></mu-text-field>
            </mu-form-item>
            <div></div>
             <mu-form-item prop="chargeType" label="账号类型" :rules='chargeType'>
               <mu-select v-model="form.chargeType">
                 <mu-option v-for="option in options" :key="option.value" :label="option.label" :value="option.value"></mu-option>
               </mu-select>
            </mu-form-item>
            <mu-form-item prop="contractStart" label="合同开始时间" :rules="startRules">
               <mu-date-input v-model="form.contractStart" placeholder="请输入时间" label-float full-width no-display></mu-date-input>
            </mu-form-item>
            <mu-form-item prop="contractEnd" label="合同结束时间" :rules="endRules">
              <mu-date-input v-model="form.contractEnd"  placeholder="请输入时间" label-float full-width  no-display></mu-date-input>
            </mu-form-item>
           <mu-form-item prop="payType" label="收费方式" :rules="payType">
                <mu-select v-model="form.payType">
                 <mu-option v-for="item in items" :key="item.value" :label="item.label" :value="item.value"></mu-option>
                </mu-select>
            </mu-form-item>
             <mu-form-item prop="terminalExpiredMonth" label="终端使用时间" :rules="terminal">
                <mu-select v-model="form.terminalExpiredMonth">
                 <mu-option v-for="time in times" :key="time.value" :label="time.label" :value="time.value"></mu-option>
                </mu-select>
            </mu-form-item>
            <mu-form-item label="素材审核" prop='materialCheck'>
                <mu-select v-model="form.materialCheck"  multiple>
                  <mu-option v-for="materialCheckItem in materialChecks" :key="materialCheckItem.value" :label="materialCheckItem.label" :value="materialCheckItem.value"></mu-option>
                </mu-select>
            </mu-form-item>
            <mu-form-item label="节目审核" prop='programCheck'>
                <mu-select v-model="form.programCheck" multiple>
                  <mu-option v-for="programCheckItem in programChecks" :key="programCheckItem.value" :label="programCheckItem.label" :value="programCheckItem.value"></mu-option>
                </mu-select>
            </mu-form-item>
             <mu-form-item label="文字屏管理" prop='ledShow'>
                <mu-select v-model="form.ledShow"  multiple>
                  <mu-option v-for="ledShowItem in ledShows" :key="ledShowItem.value" :label="ledShowItem.label" :value="ledShowItem.value"></mu-option>
                </mu-select>
            </mu-form-item>
            <mu-form-item label="排期管理" prop='programScheduleShow'>
                <mu-select v-model="form.programScheduleShow"  multiple >
                  <mu-option v-for="programScheduleShowItem in programScheduleShows" :key="programScheduleShowItem.value" :label="programScheduleShowItem.label" :value="programScheduleShowItem.value"></mu-option>
                </mu-select>
            </mu-form-item>
            <mu-form-item label="央视素材" prop='cctvShow'  >
                <mu-select v-model="form.cctvShow"  multiple >
                  <mu-option v-for="cctvShowItem in cctvShows" :key="cctvShowItem.value" :label="cctvShowItem.label" :value="cctvShowItem.value"></mu-option>
                </mu-select>
            </mu-form-item>
            <mu-form-item label="央视审核" prop='cctvCheck'>
                <mu-select v-model="form.cctvCheck"  multiple>
                  <mu-option v-for="cctvCheckItem in cctvChecks" :key="cctvCheckItem.value" :label="cctvCheckItem.label" :value="cctvCheckItem.value"></mu-option>
                </mu-select>
            </mu-form-item>
             <mu-form-item label="编辑器配置" prop='editorType'>
                <mu-select  v-model="form.editorType" full-width>
                  <mu-option v-for="editorTypesItem in editorTypes" :key="editorTypesItem.value" :label="editorTypesItem.label" :value="editorTypesItem.value"></mu-option>
                </mu-select>
            </mu-form-item>
            <!-- <mu-form-item> -->
              <div class="btn_ok"><mu-button @click="submit" large>确定</mu-button></div>
            <!-- </mu-form-item> -->
        </mu-form>
        </div>
        <mu-dialog :open.sync="openSimple">
          {{message}}
          <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">知道了</mu-button>
        </mu-dialog>
        <mu-snackbar :position="normal.position" :color="normal.color" :open.sync="normal.open">
          {{normal.message}}
        </mu-snackbar>
        <mu-snackbar :position="color.position" :color="color.color" :open.sync="color.open">
              {{color.message}}
        </mu-snackbar>
    </section>
</template>
<script>
import { postDomain } from "../api/api";
export default {
  data() {
    return {
      labelPosition: "left",
      form: {
        name: "",
        key: "",
        payType: "终端",
        email: "",
        phone: "",
        chargeType: "试用",
        contractStart: "",
        contractEnd: "",
        contact: "",
        type: "",
        terminalExpiredMonth: "一年",
        materialCheck: [],
        programCheck: [],
        programScheduleShow: [],
        ledShow: [],
        cctvShow: [],
        cctvCheck: [],
        editorType: "标准版"
      },
      options: [
        {
          value: 2,
          label: "试用"
        },
        {
          value: 1,
          label: "正式"
        }
      ],
      items: [
        {
          value: 2,
          label: "门店"
        },
        {
          value: 1,
          label: "终端"
        }
      ],
      times: [
        {
          value: 12,
          label: "一年"
        }
      ],
      openMater: false,
      openProgram: false,
      materialChecks: [
        {
          value: 0,
          label: "内部初审"
        },
        {
          value: 1,
          label: "平台审核"
        }
      ],
      programChecks: [
        {
          value: 0,
          label: "内部初审"
        },
        {
          value: 1,
          label: "内部终审"
        },
        {
          value: 2,
          label: "平台审核"
        }
      ],
      ledShows: [
        {
          value: 1,
          label: "开启"
        }
      ],
      programScheduleShows: [
        {
          value: 1,
          label: "开启"
        }
      ],
      cctvShows: [
        {
          value: 1,
          label: "开启"
        }
      ],
      cctvChecks: [
        {
          value: 1,
          label: "开启"
        }
      ],
      editorTypes: [
        {
          value: 0,
          label: "标准版",
          selected: true
        },
        {
          value: 1,
          label: "互动版"
        },
        {
          value: 2,
          label: "全能版"
        },
        {
          value: 3,
          label: "H5版"
        }
      ],
      startRules: [{ validate: val => !!val, message: "必须填写合同开始时间" }],
      endRules: [{ validate: val => !!val, message: "必须填写合同结束时间" }],
      name: [{ validate: val => !!val, message: "请输入公司名称" }],
      key: [{ validate: val => !!val, message: "请输入企业代码" }],
      email: [{ validate: val => !!val, message: "请输入邮箱" }],
      contact: [{ validate: val => !!val, message: "请输入联系人姓名" }],
      phone: [
        { validate: val => !!val, message: "请输入联系电话" },
        {
          validate: val => val.length == 11,
          message: "电话号码长度必须为11位"
        }
      ],
      payType: [{ validate: val => !!val, message: "请选择收费方式" }],
      terminal: [{ validate: val => !!val, message: "请选择终端使用时间" }],
      chargeType: [{ validate: val => !!val, message: "请选择账号类型" }],
      openSimple: false,
      message: "",
      normal: {
        position: "top",
        color: "info",
        message: "开始日期不得大于结束日期",
        open: false,
        timeout: 2000
      },
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
    submit() {
      this.$refs.form.validate().then(result => {
        if (result) {
          let material = "";
          let program = "";
          let led = "";
          let cctvS = "";
          let cctvC = "";
          let scheduleShow = "";
          let contractStart = this.getTime(this.form.contractStart);
          let contractEnd = this.getTime(this.form.contractEnd);
          let param = Object.assign({}, this.form);
          param.editorType =
            this.form.editorType == "标准版" ? 0 : this.form.editorType;
          param.contractStart = contractStart;
          param.contractEnd = contractEnd;
          param.terminalExpiredMonth =
            this.form.terminalExpiredMonth == "一年"
              ? 12
              : this.form.terminalExpiredMonth;
          param.chargeType =
            this.form.chargeType == "试用" || 2 ? 0 : this.form.chargeType;
          param.payType =
            this.form.payType == 2
              ? 0
              : this.form.payType == "终端"
                ? 1
                : this.form.payType;
          for (let i = 0; i < this.form.materialCheck.length; i++) {
            material += "," + this.form.materialCheck[i];
          }
          param.materialCheck = material.substr(1);
          for (let i = 0; i < this.form.programCheck.length; i++) {
            program += "," + this.form.programCheck[i];
          }
          param.programCheck = program.substr(1);

          for (let i = 0; i < this.form.ledShow.length; i++) {
            led += "," + this.form.ledShow[i];
          }
          param.ledShow = led.substr(1) ? led.substr(1) : 0;

          for (let i = 0; i < this.form.cctvShow.length; i++) {
            cctvS += "," + this.form.cctvShow[i];
          }
          param.cctvShow = cctvS.substr(1) ? cctvS.substr(1) : 0;

          for (let i = 0; i < this.form.cctvCheck.length; i++) {
            cctvC += "," + this.form.cctvCheck[i];
          }
          param.cctvCheck = cctvC.substr(1) ? cctvC.substr(1) : 0;

          for (let i = 0; i < this.form.programScheduleShow.length; i++) {
            scheduleShow += "," + this.form.programScheduleShow[i];
          }
          param.programScheduleShow = scheduleShow.substr(1)
            ? scheduleShow.substr(1)
            : 0;

          if (
            this.form.contractStart.getTime() < this.form.contractEnd.getTime()
          ) {
            postDomain(param).then(res => {
              if (res.data.code == 1) {
                this.color.open = true;
                this.color.timer = setTimeout(() => {
                  javascript: history.back(-1);
                }, this.color.timeout);
              } else {
                this.openSimple = true;
                this.message = res.data.message;
              }
            });
          } else {
            this.normal.open = true;
            this.normal.timer = setTimeout(() => {
              this.normal.open = false;
            }, this.normal.timeout);
          }
        }
      });
    },
    getTime(t) {
      let time;
      time = new Date(t);
      return (
        time.getFullYear() + "" + (time.getMonth() + 1) + "" + time.getDate()
      );
    },
    closeSimpleDialog() {
      this.openSimple = false;
    },
    goBack() {
      javascript: history.back(-1);
    }
  }
};
</script>

<style>
.nav {
  background: #fff;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
}
.main_add {
  padding-top: 60px;
  padding-bottom:60px;
}
.mu-appbar-left {
  background: url("../assets/icon_return@3x.png") no-repeat;
  background-size: 1.5rem;
  background-position: 0.75rem 1rem;
}
.main_add .mu-form-item-label {
  color: #2b344a;
  text-align: justify;
  text-align-last: justify;
  font-size: 0.75rem;
}
.main_add .mu-text-field-input,
.mu-select-input,
.mu-item-title,
.mu-selection-text {
  font-size: 0.75rem;
}
.btn_ok .mu-button {
  width: 96%;
  background: linear-gradient(to bottom right, #40a9ff, #096dd9);
  color: #fff;
}
.mu-item-title {
  font-size: 0.75rem !important;
}
/* .mu-elevation-4 {
  box-shadow: 0 1px 10px 0 rgba(233, 237, 246, 0.12);
} */
</style>
