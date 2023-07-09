import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
  name: 'kiosk-init',

  initialize() {
    withPluginApi('0.8.24', api => {

      const applicationController = api.container.lookup("controller:application");
      applicationController.set("showSidebar", true);

      const userController = api.container.lookup("controller:user");
      userController.set("collapsedInfo", false);

    });
  }
}

