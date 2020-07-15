import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps78834Navigator from '../features/Maps78834/navigator';
import Add-Item78833Navigator from '../features/Add-Item78833/navigator';
import Maps78829Navigator from '../features/Maps78829/navigator';
import UserProfile78825Navigator from '../features/UserProfile78825/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps78834: { screen: Maps78834Navigator },
Add-Item78833: { screen: Add-Item78833Navigator },
Maps78829: { screen: Maps78829Navigator },
UserProfile78825: { screen: UserProfile78825Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
