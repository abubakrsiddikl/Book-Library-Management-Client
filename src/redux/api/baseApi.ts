import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (build) => ({
    getAllBooks: build.query({
      query: () => "/books",
    }),
    createBook: build.mutation({
      query: (bookData) => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
    }),
  }),
});

export const { useGetAllBooksQuery,useCreateBookMutation } = baseApi;
