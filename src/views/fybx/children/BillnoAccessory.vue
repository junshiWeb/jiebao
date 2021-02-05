<template>
  <!-- 附件说明组件 -->
  <el-card class="billno-accessory">
    <div slot="header" class="fybx-header">
      <span>附件</span>
      <span class="primary">
        提醒事项：发票平铺粘贴、无遮挡、正向显示、肉眼识别清晰、影像件与原件一致
      </span>
    </div>
    <div>
      <el-upload
        action="../assets/upload"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "acc",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
};
</script>
<style scoped lang="less">
.billno-accessory {
  // background: #e9e9eb;
  border: none;
}
</style>;
