<template>
  <div class="form-cart">
    <el-form-item>
      <i class="el-icon-plus"></i>
    </el-form-item>
    <el-form-item
      v-for="item in formLabel"
      :key="item.prop"
      :prop="item.prop"
      :label="item.label"
      :rules="item.rules"
      class="form-cart-item"
    >
      <el-input
        :type="item.prop"
        v-if="item.type === 'Input'"
        v-model="inputs"
        :disabled="item.disabled"
      ></el-input>

      <el-select
        v-if="item.type === 'Select'"
        v-model="item.value"
        :placeholder="item.placeholder"
      >
        <el-option
          v-for="op in item.options"
          :key="op.value"
          :label="op.label"
          :value="op.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "BillnoForm",
  data() {
    return {
      inputs: "",
    };
  },
  props: {
    firstIcon: {
      type: Boolean,
      default: false,
    },
    lastIcon: {
      type: Boolean,
      defalut: false,
    },
    formLabel: {
      type: Array,
      default() {
        return [
          {
            type: "Input",
            prop: "glsqh",
            label: "关联申请行",
            rules: [{ required: true, message: "关联申请行不能为空" }],
          },
          {
            type: "Select",
            prop: "glsqh1",
            label: "关联申请行1",
            disabled: false,
            value: "四川分公司本部",
            options: [
              {
                label: "你说",
                value: "你说",
              },
              {
                label: "我说",
                value: "我说",
              },
            ],
          },
        ];
      },
    },
  },
};
</script>

<style scoped lang='less'>
.form-cart {
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 10px;
  .form-cart-item {
    flex-shrink: 0;
  }
}
</style>