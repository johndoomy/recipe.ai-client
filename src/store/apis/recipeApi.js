import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const recipeApi = createApi({
  reducerPath: 'recipe',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://35.153.237.179:3001/recipe',
  }),
  endpoints(builder) {
    return {
      generateRecipe: builder.mutation({
        query: (params) => {
          return {
            url: `/generate_recipe`,
            method: 'POST',
            body: {
              params: params.tags + ' ' + params.input,
              tags: params.tags,
              userId: params.userId,
            },
          };
        },
      }),
      fetchFeaturedRecipes: builder.query({
        query: () => {
          return {
            url: '/featured',
            method: 'GET',
          };
        },
      }),
      refreshFeaturedRecipe: builder.query({
        query: () => {
          return {
            url: '/refresh_recipe',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const {
  useGenerateRecipeMutation,
  useFetchFeaturedRecipesQuery,
  useRefreshFeaturedRecipeQuery,
} = recipeApi;
export { recipeApi };
