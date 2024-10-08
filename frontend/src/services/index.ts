import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base.query";

export const egApi = createApi({
  reducerPath: "egApi",
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
