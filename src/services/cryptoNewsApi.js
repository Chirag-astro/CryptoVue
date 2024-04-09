// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const cryptoNewsHeaders = {

//     'X-RapidAPI-Key': '10ea1db8c7msh21719a9433a87d5p170cbdjsnb5a5f052c340',
//     'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
// };

// const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com';

// const createRequest = (url) => ({ url, headers: cryptoNewsHeaders }); 

// export const cryptoNewsApi = createApi({
//     reducerPath: 'cryptoNewsApi', 
//     baseQuery : fetchBaseQuery({baseUrl}),
//     endpoints: (builder) => ({
//         getCryptoNews: builder.query({
//             query:(count) => createRequest(`/v1/coindesk?limit=${count}`)
//         })
//     })

// });

// export const { useGetCryptoNewsQuery} =  cryptoNewsApi;

// // headers: {
// //     'X-BingApis-SDK': 'true',
// //     'X-RapidAPI-Key': '10ea1db8c7msh21719a9433a87d5p170cbdjsnb5a5f052c340',
// //     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
// //   }
