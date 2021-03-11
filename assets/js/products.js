import Vue from 'vue';
import App from '@/pages/products';

// New Vue object
new Vue({
    // where App is a variable calling products.vue
    // h is an object that we don't need to worry about
    render(h) {
        return h(App);
    },
    // or
    // render: (h) => h(App),

    // target element
}).$mount('#app');

// Making app a global variable to use it in console
// window.app = app;
