import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Overview: undefined;
  ManageExpense: undefined;
};

export type OverviewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Overview"
>;
export type ManageExpenseProps = NativeStackScreenProps<
  RootStackParamList,
  "ManageExpense"
>;

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
