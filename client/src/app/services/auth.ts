import { Admin } from "@prisma/client";
import { api } from "./api";

export type RegAdminData = Omit<Admin, "id">
export type LogAdminData = Omit<RegAdminData, "name">
type ResponseLoginData = Admin & {token: string};

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<ResponseLoginData, LogAdminData>({
            query: (userData) => ({
            url: '/admin/login',
            method: 'POST',
            body: userData,
            })
        }),
        register: builder.mutation<ResponseLoginData, RegAdminData>({
            query: (userData) => ({
                url: '/admin/register',
                method: 'POST',
                body: userData,
            })
        }),
        current: builder.query<ResponseLoginData, void>({
            query: () => ({
                url: '/admin/current',
                method: 'GET'
            })
        }),
    }),
})

export const { useLoginMutation, useRegisterMutation, useCurrentQuery } = authApi
export const { endpoints: { login, register, current } } = authApi