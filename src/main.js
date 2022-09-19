import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";
// import common from "./common";

const app = createApp(App);
app.use(router);
app.mixin(mixins);
app.mount("#app");

window.Kakao.init("3fd5dc287ce0db69209e1644d1a0273d");

// app.common(common);


/*import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')*/
