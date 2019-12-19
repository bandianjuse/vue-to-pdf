import output from './output';

const install = (Vue) => {
  Vue.prototype.$PDFOutput = (dom) => output.call(null, dom, 'output')
  Vue.prototype.$PDFSave = (dom, name) => output.call(null, dom, 'save', { name: name })
};

export default {
  install,
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

