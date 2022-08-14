import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


export const usersAPI = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://randomuser.me'
    }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => 'api'
        })
    })
});

export const {useGetUsersQuery} = usersAPI;