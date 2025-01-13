import { Suspense } from "react";
import { Box } from "@chakra-ui/react";
import { Routes } from "react-router-dom";
import { AuthRoute } from "./authRoute";

const AppRoutes = () => {
  return (
    <Suspense fallback={<Box>loading....</Box>}>
      <Routes>{AuthRoute()}</Routes>
    </Suspense>
  );
};

export default AppRoutes;
