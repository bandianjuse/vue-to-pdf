<template>
  <div ref="selector">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "vue-to-pdf",
  props: {
    fileName: {
      type: String,
      default: "PDF-file"
    },
    isOutput: {
      type: Boolean,
      default: false
    }
  },
  watch: {
      isOutput(val) {
          console.log(val)
      }
  },
  provide() {
    return {
      refs: this.$refs || "",
      name: this.fileName
    };
  },
  mounted() {}
};
</script>