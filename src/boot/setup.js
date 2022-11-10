import { createApp } from 'vue';
import VueGtag from 'vue-gtag';

export default ({ app }) => {
  createApp(app).use(VueGtag, {
    config: {
      id: 'UA-104956980-8',
      // Avoid sending first page hit on load, to avoid counting pages twice
      params: {
        send_page_view: false,
      },
    },
  });
};
