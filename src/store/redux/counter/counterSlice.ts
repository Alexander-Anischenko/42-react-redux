// 1. Импортируем функцию или метод, с помощью которого создаем slice
import { createAppSlice } from "../../createAppSlice"
import type { CounterStateSlice } from "./types"

//4.1. Создаем объект с первоначальным состоянием, который мы потом передадим в initialState
const counterInitialState: CounterStateSlice = {
  count: 0,
}

// 2. Создаем slice для счетчика
export const counterSlice = createAppSlice({
  // 3. Задаем имя, под которым будет храниться объект со значением каунтера (state) в глобальном стейте
  name: "COUNTER",
  // 4. Задаем объект, в котором будет храниться начальное состояние
  initialState: counterInitialState,
  // 5. Создаем объект, внутри которого будут храниться редьюсеры(функции, которые отвечают за изменение состояния)
  reducers: create => ({
    plus: create.reducer((state: CounterStateSlice) => {
      state.count = state.count + 1
    }),
    minus: create.reducer((state: CounterStateSlice) => {
      state.count = state.count - 1
    }),
  }),
  // 6. Создаем селекторы, которые позволяют забирать данные из стейта в компонент
  selectors: {
    count: (state: CounterStateSlice) => state.count,
  },
})

//7. Экспорт экшенов и селекторов для возможносит их использования в компонентах
export const counterSliceActions = counterSlice.actions
export const counterSliceSelectors = counterSlice.selectors
