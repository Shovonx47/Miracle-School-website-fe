import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiService = createApi({
  reducerPath: 'schoolApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://miracle-school-landing-page-be.vercel.app',
    credentials: 'omit',
  }),
  tagTypes: ['Faculty', 'Location', 'MissionVision'],
  endpoints: (builder) => ({
    // Faculty endpoints
    getAllFaculty: builder.query({
      query: () => '/faculty',
      providesTags: ['Faculty'],
    }),
    getFacultyById: builder.query({
      query: (id) => `/faculty/${id}`,
      providesTags: ['Faculty'],
    }),

    // Location endpoints
    getLocation: builder.query({
      query: () => '/location',
      providesTags: ['Location'],
    }),

    // Mission Vision endpoints
    getMissionVision: builder.query({
      query: () => '/mission-vision',
      providesTags: ['MissionVision'],
    }),
  }),
});

export const {
  useGetAllFacultyQuery,
  useGetFacultyByIdQuery,
  useGetLocationQuery,
  useGetMissionVisionQuery,
} = apiService;
