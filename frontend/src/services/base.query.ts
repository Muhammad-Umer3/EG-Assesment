import { fetchBaseQuery } from "@reduxjs/toolkit/query";
// import { AuthResponse } from "./auth/types/auth.response";
import { BACKEND_API_URL } from "../constants/environment.variables";

export const baseQuery = fetchBaseQuery({
  baseUrl: BACKEND_API_URL,
  prepareHeaders(headers) {
    // const authInfo = JSON.parse(
    //   localStorage.getItem("userData") ?? "{}"
    // ) as AuthResponse;
    // if (authInfo.accessToken) {
    //   headers.set("authorization", `Bearer ${authInfo.accessToken}`);
    // }
    return headers;
  },
});
