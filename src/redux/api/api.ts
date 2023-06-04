import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IGetApi, IQuery} from "../../types/type";

export const recipeApi = createApi({
    reducerPath: 'recipe/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.edamam.com/api/recipes/'
    }),
    endpoints: (builder) => ({
        getQuestions: builder.query<IQuery, IGetApi>({
            query: ({ type, app_id, app_key = '1422cefdc48bfa37b6ea14d46a65188f', q, countIngr, diet, health, cuisineType, mealType, dishType, calories, time }) => {
                const urlParams: Record<string, string | undefined> = {
                    type,
                    app_id,
                    app_key,
                    q,
                    countIngr,
                    diet,
                    health,
                    cuisineType,
                    mealType,
                    dishType,
                    calories,
                    time
                };

                const params = Object.keys(urlParams)
                  .filter((key) => urlParams[key] !== undefined)
                  .reduce((obj: Object, key) => {
                      obj[key] = urlParams[key];
                      return obj;
                  }, {});

                return {
                    url: 'v2',
                    params
                };
            }
        })
    })
});

type Object = Record<string, string | undefined>

export const {useGetQuestionsQuery} = recipeApi