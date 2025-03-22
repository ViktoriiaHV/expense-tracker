import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ExpensesOverview from "./ExpensesOverview";
import { GlobalStyles } from "../constants/styles";
import ManageExpense from "../screens/ManageExpense";
import { type RootStackParamList } from "../types/navigation.types";

const Stack = createNativeStackNavigator<RootStackParamList>();

function MainNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Overview"
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Overview"
        component={ExpensesOverview}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ManageExpense"
        component={ManageExpense}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
}
export default MainNavigation;
