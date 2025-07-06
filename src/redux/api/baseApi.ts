import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["book"],
  endpoints: (build) => ({
    getAllBooks: build.query({
      query: () => "/books",
      providesTags: ["book"],
    }),
    // create book
    createBook: build.mutation({
      query: (bookData) => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["book"],
    }),
    // update book info
    updateBookInfo: build.mutation({
      query: ( {id, updatedBookData} ) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: updatedBookData,
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useCreateBookMutation,
  useUpdateBookInfoMutation,
} = baseApi;
