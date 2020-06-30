import Vue from "vue";
import Vuetify from "vuetify";
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#62c0cb",
        secondary: "#307880",
        accent: "#803f36",
        error: "#ff7661",
        info: "#CCBC4E",
        success: "#619cff",
        warning: "#CC796C"
      }
    }
  }
});
