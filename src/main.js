import vueToPdf from './vueToPdf.vue';
import downloadPdf from './downloadPdf.vue';
import downloadImage from './downloadImage.vue';

const install = (Vue) => {
  Vue.component('VueToPdf', vueToPdf)
  Vue.component('DownloadPdf', downloadPdf)
  Vue.component('DownloadImage', downloadImage)
};

export default {
  install,
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

