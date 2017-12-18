import Vue from 'vue'
import Clipboard from 'clipboard'

// Vue.prototype.$moment = moment
Object.defineProperty(Vue.prototype, '$Clipboard', { value: Clipboard });
