import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import SearchScreen from './src/layouts/searchScreen';




const navigation = createStackNavigator({
  Search: SearchScreen,
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Restaurent Search'
  }
})

export default createAppContainer(navigation)