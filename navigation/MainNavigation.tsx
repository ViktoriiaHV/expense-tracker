import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ExpensesOverview from "./ExpensesOverview";
import ManageExpense from "../screens/ManageExpense";
import { type RootStackParamList } from "../types/navigation.types";

const Stack = createNativeStackNavigator<RootStackParamList>();

function MainNavigation() {
  return (
    <Stack.Navigator initialRouteName="Overview">
      <Stack.Screen name="Overview" component={ExpensesOverview} options={{headerShown: false}}/>
      <Stack.Screen name="ManageExpense" component={ManageExpense} />
    </Stack.Navigator>
  );
}
export default MainNavigation;
