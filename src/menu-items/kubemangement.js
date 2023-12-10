// assets
import { AppstoreOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  ProfileOutlined,
  AppstoreOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const kubemanagement = {
  id: 'kubemanagement',
  title: 'Kube Management',
  type: 'group',
  children: [
    {
      id: 'kube-applicationspage',
      title: 'Applications',
      type: 'item',
      url: '/applicationspage',
      icon: icons.AppstoreOutlined
    },
    {
      id: 'kube-deploymentpage',
      title: 'Deployments',
      type: 'item',
      url: '/deploymentspage',
      icon: icons.ProfileOutlined
    },
    {
      id: 'kube-endpointspage',
      title: 'Endpoints',
      type: 'item',
      url: '/endpointspage',
      icon: icons.AppstoreOutlined
    },
    {
      id: 'kube-environmentspage',
      title: 'Environments',
      type: 'item',
      url: '/environmentspage',
      icon: icons.ProfileOutlined
    },
  ]
};

export default kubemanagement;
