import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login';
import Home from './pages/Home';

const Routes = createAppContainer(
    createStackNavigator({
        Login,
        Home
    },
    { 
        headerLayoutPreset: 'center', 
        defaultNavigationOptions: {
            headerTitleStyle: { fontWeight: 'bold' },
            headerStyle: {  backgroundColor: '#0275d8' },
            headerTintColor: '#fFF',
        }
    })
)

export default Routes;
