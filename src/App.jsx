import React from "react";
import Homepage from "./Pages/Homepage/Homepage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "./_App.scss";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <div className="App">
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Homepage" component={Homepage} />
        </Stack.Navigator>
      </NavigationContainer>
    </div>
  );
};

export default App;
