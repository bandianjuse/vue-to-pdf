<template>
  <a
    style="text-decoration: none;color: #000;"
    v-bind:href="href"
    v-bind:download="fileName || name"
    data-html2canvas-ignore
  >
    <slot></slot>
  </a>
</template>
<script>
import html2canvas from "html2canvas";

export default {
  name: "download-image",
  inject: ["refs", "name"],
  props: {
    fileName: String,
    width: [String, Number],
    height: [String, Number]
  },
  data() {
    return {
      href: ""
    };
  },
  mounted() {
    const $selector = this.refs.selector;
    if ($selector) {
      if (this.width) $selector.style.width = this.width;
      if (this.height) $selector.style.height = this.height;
      html2canvas($selector).then(canvas => {
        this.href = canvas.toDataURL("image/jpeg");
      });
    } else {
      console.warn("警告：缺少<vue-to-pdf></vue-to-pdf>组件！");
    }
  }
};
</script>