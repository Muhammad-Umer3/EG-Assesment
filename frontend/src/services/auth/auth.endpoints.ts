import { egApi } from "..";
import { ApiResponse } from "../common.types";
import { AuthResponse } from "./types/auth.response";
import { LoginRequest } from "./types/login.request";
import { RegisterRequest } from "./types/register.request";

const authApi = egApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (data) => {
        return { url: "auth/login", method: "POST", body: data };
      },
    }),
    register: builder.mutation<ApiResponse<string>, RegisterRequest>({
      query: (data) => {
        return { url: "auth/register", method: "POST", body: data };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useRegisterMutation } = authApi;
