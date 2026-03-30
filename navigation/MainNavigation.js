import {createStackNavigator} from "@react-navigation/stack";
import {Routes} from "./Routes";
import Home from "../screens/Home/Home";
import DonationItemDetails from '../screens/DonationItemDetails/DonationItemDetails';


const Stack = createStackNavigator()

const MainNavigation = () => {
    return (
      <Stack.Navigator
        screenOptions={{ header: () => null, headerShown: false }}
      >
        <Stack.Screen name={Routes.Home} component={Home} />
        <Stack.Screen name={Routes.DonationItemDetails} component={DonationItemDetails} />
      </Stack.Navigator>
    );
}

export default MainNavigation;