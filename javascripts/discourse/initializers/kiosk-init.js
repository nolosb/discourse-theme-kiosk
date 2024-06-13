import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
  name: 'kiosk-init',

  initialize() {
    withPluginApi('0.8.24', (api) => {
      const applicationController = api.container.lookup('controller:application');
      applicationController.set('showSidebar', true);

      api.modifyClass('controller:user', {
        pluginId: 'kiosk',
        collapsedInfo: false,
      });
    });
  },
};
