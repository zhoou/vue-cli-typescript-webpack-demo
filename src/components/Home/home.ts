import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: "Home",
  data() {
    return {
      test: "zhoou"
    };
  },
  computed: {
    ...mapGetters({
      author: 'authorName'
    })
  }
});