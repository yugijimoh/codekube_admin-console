// project import
import pages from './pages';
import dashboard from './dashboard';
import utilities from './utilities';
import support from './support';
import kubemanagement from './kubemangement';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard, kubemanagement, pages, utilities, support]
};

export default menuItems;
