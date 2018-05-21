import Vue from 'vue';
import 'element-ui/packages/theme-chalk/src/index.scss';

import {
    Button
} from 'element-ui';

Vue.prototype.$ELEMENT = { size: 'medium' };

Vue.use(Button);