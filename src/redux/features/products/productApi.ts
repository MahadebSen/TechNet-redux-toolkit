import { api } from '@/redux/api/apiSlice';

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getSingleProduct: builder.query({
      query: (id) => ({ url: `/product/${id}` }),
    }),
    getComments: builder.query({
      query: (id) => ({ url: `/comment/${id}` }),
      providesTags: ['comments'],
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['comments'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useGetCommentsQuery,
  usePostCommentMutation,
} = productApi;
