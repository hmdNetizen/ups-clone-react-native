import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import RootNavigator from "./navigator/RootNavigator";

const client = new ApolloClient({
  uri: "https://ramannapeta.stepzen.net/api/eponymous-unicorn",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
}
