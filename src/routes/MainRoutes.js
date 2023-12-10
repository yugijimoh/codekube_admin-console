import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

//render - kube mangement
const ApplicationsPage = Loadable(lazy(() => import('pages/applications/applications')));
const DeploymentsPage = Loadable(lazy(() => import('pages/deployments/deployments')));
const EnvironmentsPage = Loadable(lazy(() => import('pages/environments/envionments')));
const EndpointsPage = Loadable(lazy(() => import('pages/endpoints/endpoints')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    },
    {
      path: 'applicationsPage',
      element: <ApplicationsPage />
    },
    {
      path: 'deploymentsPage',
      element: <DeploymentsPage />
    },
    {
      path: 'environmentsPage',
      element: <EnvironmentsPage />
    },
    {
      path: 'endpointsPage',
      element: <EndpointsPage />
    }
  ]
};

export default MainRoutes;
