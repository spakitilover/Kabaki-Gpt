import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Homes from "./pages/home/homes";
import Chat from "./pages/chat/chat";
import "react-native-url-polyfill/auto";

const stack = createStackNavigator();

function App() {
  return (
    <stack.Navigator>
      <stack.Screen name="home" component={Homes} />
      <stack.Screen name="chat" component={Chat} />
    </stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
