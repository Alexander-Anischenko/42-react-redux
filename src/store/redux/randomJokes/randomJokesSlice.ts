import axios from "axios"
import { createAppSlice } from "../../createAppSlice"
import type { RandomJokesSliceState, RandomJoke } from "./types"
import { v4 } from "uuid"
import type { PayloadAction } from "@reduxjs/toolkit"

const randomJokesInitialState: RandomJokesSliceState = {
  data: [],
  error: null,
  status: "default",
}

export const randomJokesSlice = createAppSlice({
  name: "RANDOM_JOKES",
  initialState: randomJokesInitialState,
  // 1. middleware создаем в объекте reducers вместе с обычными редьюсерами
  reducers: create => ({
    // 2. Создаем middleware с помощью метода asyncThunk из объекта create
    //метод принимает 2 аргумента
    //1-й аргумент ассинхронная функция для отправки запроса
    //2-й аргумент объект с 3-мя методами, которые обрабатывают результат выполнения ассинхронной функции
    getJoke: create.asyncThunk(
      // ассинхронная функция, которая может принимать 2 аргумента
      //1-й аргумент(arg) , он позволяет передать данные из компонента в ассинхронную функцию, например для  отправки данных на сервер
      // при работе с POST запросами
      //2-й аргумент(thunkApi) объект,который содержит вспомогательные методы для работы с ассинхронными функциями
      async (arg, thunkApi) => {
        try {
          const result = await axios.get(
            "https://official-joke-api.appspot.com/random_joke",
          )
          // 3 В случае успешного завершения запроса, возвращаем полученные данные, для того,
          // чтобы получить их в обработчике fulfilled
          return result.data
        } catch (error) {
          // 4 В случае ошибки, отклоняем её в обработчик rejected с помощью метода rejectWithValue из объекта thunkApi
          thunkApi.rejectWithValue(error)
        }
      },
      {
        // 5. Обрабатываем событие ожидания ответа от сервера
        pending: (state: RandomJokesSliceState) => {
          state.status = "loading"
          state.error = null
        },
        // 6. Обрабатываем событие успешного выполнения запроса
        fulfilled: (state: RandomJokesSliceState, action: any) => {
          state.status = "success"
          // 6.1. Добавляем полученные данные расширяя массив с помощью оператора spread
          //state.data = [...state.data, {id: action.payload.id || Math.random().}]
          state.data = [... state.data, {id: v4(), joke:`${action.payload.setup}-${action.payload.punchline}`}]
        },
       /*  fulfilled: (state: RandomJokesSliceState, action: { payload: { id: string; setup: string; punchline: string } }) => {
            state.status = "success";
            state.data = [
                ...state.data,
                { id: action.payload.id, joke: `${action.payload.setup} ${action.payload.punchline}` },
            ];
        }, */
        // 7. Обрабатываем ошибку
        rejected: (state: RandomJokesSliceState, action: any) => {
          state.status = "error"
          state.error = action.payload
        },
      },
    ),
    // удаляем одну шутку из массива
    deleteJoke: create.reducer((state: RandomJokesSliceState, action: PayloadAction<string>) => {
        state.data = state.data.filter((joke: RandomJoke)=>joke.id!==action.payload)
    }),

    deleteAllJokes: create.reducer(() => randomJokesInitialState),
  }),
  selectors: {
    jokeData: (state: RandomJokesSliceState) => state,
  },
})

export const randomJokesSliceActions = randomJokesSlice.actions
export const randomJokesSliceSelectors = randomJokesSlice.selectors
