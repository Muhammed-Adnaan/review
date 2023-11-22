import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const stack = createNativeStackNavigator()
export default function NavigatorS(){
    return(
        <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name = "Home" component={Home}/>
            <stack.Screen name = "review" component={ReviewDetails}/>
        </stack.Navigator>
        </NavigationContainer>
);
}
