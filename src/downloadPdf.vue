<template>
  <span style="cursor: pointer;" v-on:click="downloadEvent" data-html2canvas-ignore>
    <slot></slot>
  </span>
</template>
<script>
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default {
  name: "download-pdf",
  inject: ["refs", "name"],
  props: ["fileName"],
  methods: {
    downloadEvent() {
      const $selector = this.refs.selector;
      const name = this.fileName || this.name;

      if (!$selector) return;
      html2canvas($selector).then(canvas => {
        var contentWidth = canvas.width;
        var contentHeight = canvas.height;

        //一页pdf显示html页面生成的canvas高度;
        var pageHeight = (contentWidth / 592.28) * 841.89;
        //未生成pdf的html页面高度
        var leftHeight = contentHeight;
        //页面偏移
        var position = 10;
        //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
        var imgWidth = 595.28;
        var imgHeight = (592.28 / contentWidth) * contentHeight;

        var pageData = canvas.toDataURL("image/jpeg", 1.0);

        var pdf = new jsPDF("", "pt", "a4");

        //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
        //当内容未超过pdf一页显示的范围，无需分页
        if (leftHeight < pageHeight) {
          pdf.addImage(pageData, "JPEG", 10, position, imgWidth, imgHeight);
        } else {
          while (leftHeight > 0) {
            pdf.addImage(pageData, "JPEG", 10, position, imgWidth, imgHeight);
            leftHeight -= pageHeight;
            position -= 841.89;
            //避免添加空白页
            if (leftHeight > 0) {
              pdf.addPage();
            }
          }
        }

        pdf.save(`${name}.pdf`);
      });
    }
  },
  mounted() {
    if (!this.refs.selector)
      console.warn("警告：缺少<vue-to-pdf></vue-to-pdf>组件！");
  }
};
</script>