import React from "react";
import { Route } from "react-router-dom";
import AuthLayout from "../components/layouts/authLayout";
import { urlRoutes } from "./urlRoutes";
import { Box } from "@chakra-ui/react";
import BudgetOverview from "../pages/budget overview/BudgetOverview";
import Settings from "../pages/settings/Settings";
import TransactionHistory from "../pages/TransactionHistory/TransactionHistory";
const Home = React.lazy(() => import("../pages/home"));

export function AuthRoute() {
  return (
    <>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Home />} />
        <Route path={urlRoutes.budgetOverview} element={<BudgetOverview/>} />
        <Route path={urlRoutes.transactionHistory} element={<TransactionHistory/>} />
        <Route path={urlRoutes.setting} element={<Settings/>} />
      </Route>
    </>
  );
}
