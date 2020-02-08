<template>
  <div class="v-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style>

</style>
