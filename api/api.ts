import axios from "axios";
import Constants from "expo-constants";

import { ExpenseInput } from "../types/expenses.types";

const FIREBASE_DATABASE_URL = Constants.expoConfig?.extra?.firebaseDatabaseUrl;

export const createExpense = (expenseData: ExpenseInput) =>
  axios.post(`${FIREBASE_DATABASE_URL}/expenses.json`, expenseData);

export const fetchExpenses = () =>
  axios.get(`${FIREBASE_DATABASE_URL}/expenses.json`);

export const deleteExpense = (expenseId: string) =>
  axios.delete(`${FIREBASE_DATABASE_URL}/expenses/${expenseId}.json`);

export const editExpense = (expenseId: string, data: ExpenseInput) =>
  axios.put(`${FIREBASE_DATABASE_URL}/expenses/${expenseId}.json`, data);
