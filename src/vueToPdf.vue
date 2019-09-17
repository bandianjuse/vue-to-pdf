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