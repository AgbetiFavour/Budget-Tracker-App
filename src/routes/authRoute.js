import React from "react";
import { Route } from "react-router-dom";
import AuthLayout from "../components/layouts/authLayout";
import { urlRoutes } from "./urlRoutes";
import { Box } from "@chakra-ui/react";
const Home = React.lazy(() => import("../pages/home"));

export function AuthRoute() {
  return (
    <>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Home />} />
        <Route path={urlRoutes.overview} element={<Box>Overview</Box>} />
      </Route>
    </>
  );
}
