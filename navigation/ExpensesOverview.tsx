import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AxiosResponse } from "axios";
import { useEffect } from "react";

import { fetchExpenses } from "../api/api";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import AllExpenses from "../screens/AllExpenses";
import RecentExpenses from "../screens/RecentExpenses";
import { useExpenses } from "../store/expenses-context/ExpensesContext";
import { Expense } from "../types/expenses.types";
import {
  RootStackParamList,
  type BottomTabParamList,
} from "../types/navigation.types";

const BottomTabs = createBottomTabNavigator<
  BottomTabParamList & RootStackParamList
>();

function ExpensesOverview() {
  const { setFetchedExpenses } = useExpenses();

  useEffect(() => {
    const fetchAllExpenses = async () => {
      const res: AxiosResponse<
        Record<string, { amount: number; date: string; description: string }>
      > = await fetchExpenses();

      const data: Expense[] = Object.keys(res.data).map((currKey) => {
        const { amount, date, description } = res.data[currKey];
        return { id: currKey, date: new Date(date), amount, description };
      });
      setFetchedExpenses(data);
    };
    fetchAllExpenses();
  }, [setFetchedExpenses]);

  return (
    <BottomTabs.Navigator
      initialRouteName="RecentExpenses"
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={35}
            color={tintColor}
            onPress={() => navigation.navigate("ManageExpense", {})}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}
export default ExpensesOverview;
