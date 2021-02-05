<template>
  <div class="form-search">
    <el-form :model="searchData" ref="searchData" inline :size="size">
      <el-form-item
        v-for="item in searchForm"
        :key="item.prop"
        :label="item.label"
        :prop="item.prop"
        :rules="item.rules"
        class="form-item"
        labelWdith
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
        <span v-if="item.type === 'InputPrice'">
          <el-col :span="11">
            <el-input
              type="item.prop"
              :placeholder="item.startPlaceholder"
              v-model="searchData.price1"
            ></el-input>
          </el-col>
          <el-col class="line" :span="2"> 至</el-col>
          <el-col :span="11">
            <el-input
              type="item.prop"
              :placeholder="item.endPlaceholder"
              v-model="searchData.price2"
            ></el-input>
          </el-col>
        </span>
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
          v-model="searchData.data3"
          type="daterange"
          :start-placeholder="item.startPlaceholder"
          :end-placeholder="item.endPlaceholder"
          :default-time="['00:00:00', '23:59:59']"
        >
        </el-date-picker>
        <!-- 双时间选择器 -->
        <span v-if="item.type === 'DateToPicker'">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="searchData.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2"> 至</el-col>
          <el-col :span="11">
            <el-date-picker
              placeholder="选择日期"
              v-model="searchData.date2"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </span>
      </el-form-item>

      <div v-if="isHandle" class="handle form-item">
        <el-form-item v-for="item in searchHandle" :key="item.label">
          <el-button
            :type="item.type"
            :icon="item.icon"
            @click="item.handle()"
            >{{ item.label }}</el-button
          >
        </el-form-item>
      </div>
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
    // 查询label宽度
    labelWidth: {
      type: String,
    },
    // 按钮
    isHandle: {
      type: Boolean,
      default: true,
    },
    searchHandle: {
      type: Array,
      default: () => [
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
      ],
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

<style scoped lang='less'>
.form-search {
  .form-item {
    margin: 5px 15px;
    .line {
      text-align: center;
    }
  }
  .handle {
    float: right;
  }
}
</style>