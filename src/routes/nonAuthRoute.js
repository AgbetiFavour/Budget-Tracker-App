import React from "react";
import { Route } from "react-router-dom";

export function NonAuthRoute() {
  return (
    <>
      <Route path={"/"} element={<div>testing</div>} />
    </>
  );
}
