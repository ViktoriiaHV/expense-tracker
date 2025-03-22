import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

export type RootStackParamList = {
  Overview: undefined;
  ManageExpense: { id?: string };
};

export type OverviewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Overview"
>;
export type ManageExpenseProps = NativeStackScreenProps<
  RootStackParamList,
  "ManageExpense"
>;

export type StackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;

export type BottomTabParamList = {
  RecentExpenses: undefined;
  AllExpenses: undefined;
};

export type RecentExpensesScreenProps = BottomTabScreenProps<
  BottomTabParamList,
  "RecentExpenses"
>;
export type AllExpenses = BottomTabScreenProps<
  BottomTabParamList,
  "AllExpenses"
>;
