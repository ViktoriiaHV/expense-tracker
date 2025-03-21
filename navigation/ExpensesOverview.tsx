import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AllExpenses from "../screens/AllExpenses";
import RecentExpenses from "../screens/RecentExpenses";
import { type BottomTabParamList } from "../types/navigation.types";

const BottomTabs = createBottomTabNavigator<BottomTabParamList>();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator initialRouteName="RecentExpenses">
      <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses} />
      <BottomTabs.Screen name="AllExpenses" component={AllExpenses} />
    </BottomTabs.Navigator>
  );
}
export default ExpensesOverview;
