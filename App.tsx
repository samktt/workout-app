import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

import { signInAnonymousUser, onAuthStateChange } from "./app/config/Auth";

const App = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authenticateUser = async () => {
      const isSignedIn = await signInAnonymousUser();
      if (isSignedIn) {
        onAuthStateChange((user: any) => {
          setUser(user);
          setIsLoading(false);
        });
      } else {
        setIsLoading(false);
      }
    };

    authenticateUser();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer theme={NavigationTheme}>
      {user ? (
        <AppNavigator />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>You are not logged in. Please log in to access the app.</Text>
        </View>
      )}
    </NavigationContainer>
  );
};

export default App;
