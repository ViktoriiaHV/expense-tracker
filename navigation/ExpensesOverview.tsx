import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { GlobalStyles } from "../constants/styles";
import AllExpenses from "../screens/AllExpenses";
import RecentExpenses from "../screens/RecentExpenses";
import { type BottomTabParamList } from "../types/navigation.types";


const BottomTabs = createBottomTabNavigator<BottomTabParamList>();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      initialRouteName="RecentExpenses"
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({color, size}) => <Ionicons name="hourglass" color={color} size={size} />
        }}
      />
      <BottomTabs.Screen name="AllExpenses" component={AllExpenses} options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({color, size}) => <Ionicons name="calendar" color={color} size={size} />
        }} />
    </BottomTabs.Navigator>
  );
}
export default ExpensesOverview;
