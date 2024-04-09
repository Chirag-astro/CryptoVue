// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const cryptoHistoryHeader = {
//     'X-RapidAPI-Key': '10ea1db8c7msh21719a9433a87d5p170cbdjsnb5a5f052c340',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
// }

// const baseUrl = "https://coinranking1.p.rapidapi.com";
// const createRequest = (url) => ({url,headers:cryptoHistoryHeader}); 

// export const cryptoHistoryApi = createApi({
//     reducerPath: 'cryptoHistoryApi', 
//     baseQuery:fetchBaseQuery({baseUrl}),
//     endpoints: (builder) => ({
//         getCryptoHistoricalData : builder.query({
//             query: ({coinId,timeperiod}) => createRequest()
//         })
//     })
// })