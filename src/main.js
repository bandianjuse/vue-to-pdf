import vueToPdf from './vueToPdf';
import downloadPdf from './downloadPdf';
import downloadImage from './downloadImage';

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

