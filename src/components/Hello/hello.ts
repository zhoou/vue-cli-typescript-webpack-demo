import Vue from 'vue';
import { mapGetters } from 'vuex';

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
  }
});