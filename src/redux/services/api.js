import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://miracle-school-landing-page-be.vercel.app/api',
  }),
  endpoints: (builder) => ({
    getFaculty: builder.query({
      query: () => '/faculty',
    }),
    getMissionVision: builder.query({
      query: () => '/mission-vision',
    }),
  }),
});

export const { useGetFacultyQuery, useGetMissionVisionQuery } = api;
