<template>
  <div class="form-cart" :class="{ 'form-active': isFlex }">
    <el-form-item class="first-icon">
      <i class="el-icon-plus"></i>
    </el-form-item>
    <el-form-item
      v-for="item in formLabel"
      :key="item.prop"
      :prop="item.prop"
      :label="item.label"
      :rules="item.rules"
      class="form-cart-item"
      :class="{ active: isFlex }"
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
    <el-form-item class="delete-icon">
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
  mounted() {
    // console.log(this.isFlex);
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
    isFlex: {
      type: Boolean,
      default: false,
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

<style lang='less'>
.form-cart {
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 10px;
  .el-form-item__content {
    width: 175px;
  }
  .first-icon {
    width: 10px;
    color: red;
    font-weight: 700;
  }
  .delete-icon {
    width: 20px;
    .el-form-item__content {
      width: 50px;
    }
  }
  .form-cart-item {
    flex-shrink: 0;
    font-weight: 600;
  }
}
.form-active {
  overflow: hidden;
  justify-content: space-between;
}
</style>