import Layout from "./layout/Layout";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./navigation/MainNavigation";

export default function App() {
  return (
    <Layout>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Layout>
  );
}
