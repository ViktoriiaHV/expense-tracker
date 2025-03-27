import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import { fetchExpenses } from "../api/api";
import ErrorOverlay from "../components/UI/ErrorOverlay";
import IconButton from "../components/UI/IconButton";
import Loader from "../components/UI/Loader";
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchAllExpenses = async () => {
      try {
        setIsLoading(true);
        const res: AxiosResponse<
          Record<string, { amount: number; date: string; description: string }>
        > = await fetchExpenses();
        if (res.status !== 200) {
          throw Error(
            "Oops, we filed to fetch your expenses. Please try again"
          );
        }

        const data: Expense[] = Object.keys(res.data).map((currKey) => {
          const { amount, date, description } = res.data[currKey];
          return { id: currKey, date: new Date(date), amount, description };
        });
        setFetchedExpenses(data);
      } catch (e) {
        const message = (e as AxiosError).message;
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllExpenses();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorOverlay message={error} onConfirm={() => {}} />;
  }

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
