import { NavigationContainer } from "@react-navigation/native";

import Layout from "./layout/Layout";
import MainNavigation from "./navigation/MainNavigation";
import { ExpensesContextProvider } from "./store/expenses-context/ExpensesContext";

export default function App() {
  return (
    <Layout>
      <NavigationContainer>
        <ExpensesContextProvider>
          <MainNavigation />
        </ExpensesContextProvider>
      </NavigationContainer>
    </Layout>
  );
}
