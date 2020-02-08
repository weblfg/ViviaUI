<template>
  <div class="v-form-item">
    <label
      class="v-form-item__label"
      :style="{ width: this.Form.labelWidth }"
      >{{ label }}</label
    >
    <div class="v-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "VFormItem",
  props: {
    label: String
  },
  inject: ["Form"]
};
</script>

<style lang="scss">
.v-form-item {
  margin-bottom: 25px;
  .v-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .v-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
