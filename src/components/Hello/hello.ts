import Vue from 'vue';
import { mapGetters } from 'vuex';
import { setLocalStorage, getLocalStorage } from '@methods/storage'

export default Vue.extend({
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to <mark>zhoou</mark> Vue.js App"
    };
  },
  computed: {
    ...mapGetters({
      author: 'authorName'
    })
  },
  methods: {
    switchLanguage(key: string, value: string) {
      if (getLocalStorage(key) !== value) {
        setLocalStorage(key, value)
        location.reload();
      }
    },
  }
});