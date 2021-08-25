
import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "discourse-bcloud-component",

  initialize() {
    withPluginApi("0.12.2", (api) => {
        console.log('loaded BCloud Component');
    });
  },
};