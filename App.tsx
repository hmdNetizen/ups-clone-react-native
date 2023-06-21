import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import RootNavigator from "./navigator/RootNavigator";

const client = new ApolloClient({
  uri: "https://ramannapeta.stepzen.net/api/eponymous-unicorn/__graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      "apikey ramannapeta::stepzen.io+1000::99709df97b805118a91f99767a8b899861c59b3da86d2cc2dac73217e46f55d6",
  },
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
