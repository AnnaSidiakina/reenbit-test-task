import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const charactersApi = createApi({
  reducerPath: "charactersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
  tagTypes: ["Character"],
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: ({ search, page }) =>
        search
          ? `https://rickandmortyapi.com/api/character/?name=${search}&page=${page}`
          : `https://rickandmortyapi.com/api/character/?page=${page}`,
      providesTags: ["Character"],
      transformResponse: (response) => ({
        characters: response.results,
        pages: response.info.pages,
      }),
    }),
    getCharacterById: builder.query({
      query: (id) => ({
        url: `/character/${id}`,
        method: "GET",
      }),
      providesTags: ["Character"],
      transformResponse: (response) => response,
    }),
  }),
});
export const { useGetCharactersQuery, useGetCharacterByIdQuery } =
  charactersApi;
