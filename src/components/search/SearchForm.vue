<template>
  <div class="form-search">
    <el-form
      :model="searchData"
      ref="searchData"
      inline
      :label-width="labelWidth"
      :size="size"
    >
      <el-form-item
        v-for="item in searchForm"
        :key="item.prop"
        :label="item.label + '：'"
        :prop="item.prop"
        :rules="item.rules"
        class="form-item"
        :label-width="item.labelWidth"
      >
        <!-- 输入框 -->
        <el-input
          type="item.prop"
          v-if="item.type === 'Input'"
          v-model="searchData[item.prop]"
          :placeholder="item.placeholder"
        ></el-input>
        <!-- 输入框数字 -->
        <el-input
          type="item.prop"
          v-if="item.type === 'InputNumber'"
          v-model.number="searchData[item.prop]"
          :placeholder="item.placeholder"
          @keyup.native="handleClickNumber"
        ></el-input>
        <!-- 输入框异步对话框选择 -->
        <el-input
          v-if="item.type === 'InputAjax'"
          v-model="searchData[item.prop]"
          :placeholder="item.placeholder"
        >
          <i
            slot="suffix"
            class="el-input__icon el-icon-question"
            style="font-size: 18px"
            @click="item.event"
          ></i>
        </el-input>
        <!-- 输入框金额 -->
        <template v-if="item.type === 'InputPrice'">
          <el-row type="flex" justify="space-between" style="width: 250px">
            <el-col :span="10">
              <el-input
                type="item.prop"
                :placeholder="item.startPlaceholder"
                v-model="searchData.price1"
                style="width: 110px"
              ></el-input>
            </el-col>
            <el-col :span="2" class="line">至</el-col>
            <el-col :span="10">
              <el-input
                type="item.prop"
                :placeholder="item.endPlaceholder"
                v-model="searchData.price2"
                style="width: 110px"
              ></el-input>
            </el-col>
          </el-row>
        </template>
        <!-- 选择框 -->
        <el-select
          v-if="item.type === 'Select'"
          v-model="searchData[item.prop]"
          clearable
          filterable
          :placeholder="item.placeholder"
        >
          <el-option
            v-for="op in item.options"
            :key="op.value"
            :label="op.label"
            :value="op.value"
          ></el-option>
        </el-select>
        <!-- 时间选择器 - -->
        <el-date-picker
          v-if="item.type === 'DatePicker'"
          v-model="searchData[item.prop]"
          type="daterange"
          :start-placeholder="item.startPlaceholder"
          :end-placeholder="item.endPlaceholder"
          :default-time="['00:00:00', '23:59:59']"
        >
        </el-date-picker>
        <!-- 双时间选择器 -->
        <template v-if="item.type === 'DateToPicker'">
          <el-col :span="8">
            <el-date-picker
              type="date"
              :placeholder="item.startPlaceholder"
              v-model="searchData[item.prop][0]"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2"> 至</el-col>
          <el-col :span="1">
            <el-date-picker
              :placeholder="item.endPlaceholder"
              v-model="searchData[item.prop][1]"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </template>
      </el-form-item>
    </el-form>
    <el-form v-if="isHandle">
      <el-row class="handle">
        <span v-for="item in searchHandle" :key="item.label">
          <el-button
            size="mini"
            :type="item.type"
            :icon="item.icon"
            @click="item.handle()"
            >{{ item.label }}</el-button
          >
        </span>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "name",
  props: {
    // 表格大小
    size: {
      type: String,
      default: "mini",
    },
    // 文本label宽度
    labelWidth: {
      type: String,
      default: "80px",
    },
    // 按钮
    isHandle: {
      type: Boolean,
      default: true,
    },
    searchHandle: {
      type: Array,
      default() {
        return [
          {
            label: "查询",
            type: "primary",
            icon: "primary",
            handle: () => {
              console.log("查询");
            },
          },
          {
            label: "重置",
            handle: () => {
              console.log("重置");
            },
          },
        ];
      },
    },
    searchForm: {
      type: Array,
      default: () => {
        return [
          {
            type: "Input",
            label: "姓名",
            prop: "name1",
            width: "180px",
            placeholder: "文本框",
          },
        ];
      },
    },
    searchData: {
      type: Object,
      default: () => {
        return { name: "" };
      },
    },
  },
  data() {
    return {};
  },
  created() {
    // this.handel1();
  },
  methods: {},
};
</script>

<style lang='less'>
.form-search {
  border-radius: 3px;
  padding: 10px 0 10px 15px;
  margin-bottom: 15px;
  &::after {
    content: "";
    display: block;
    clear: both;
    /* height:0;和overflow:hidden;是为了解决IE兼容的问题 */
    height: 0;
    overflow: hidden;
    /* visibility:hidden;是为了去除content中的文字 */
    visibility: hidden;
  }
  .el-form-item__content {
    width: 160px;
  }
  .el-date-editor--daterange.el-input,
  .el-date-editor--daterange.el-input__inner,
  .el-date-editor--timerange.el-input,
  .el-date-editor--timerange.el-input__inner {
    width: 258px;
  }
  .el-form-item--mini.el-form-item,
  .el-form-item--small.el-form-item {
    margin-bottom: 5px;
  }
  .el-form-item__label {
    font-size: 12px;
    font-weight: 700;
  }
  .form-item {
    margin: 10px 5px;
    .line {
      padding: 0 5px;
    }
  }
  .handle {
    float: right;
    display: flex;
    justify-content: space-between;
    margin: 10px 5px 5px;
    span {
      margin: 0 10px;
    }
  }
}
</style>