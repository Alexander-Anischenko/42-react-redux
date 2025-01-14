// 1. Импортируем функцию или метод, с помощью которого создаем slice
import { createAppSlice } from "../../createAppSlice"
import type { LikeCounterStateSlice } from "./types"

//4.1. Создаем объект с первоначальным состоянием, который мы потом передадим в initialState
const likeCounterInitialState: LikeCounterStateSlice = {
  likes: 0,
  dislikes: 0,
}

// 2. Создаем slice для лайков/дизлайков
export const likeCounterSlice = createAppSlice({
  // 3. Задаем имя, под которым будет храниться объект со значением каунтера (state) в глобальном стейте
  name: "LIKE_COUNTER",
  // 4. Задаем объект, в котором будет храниться начальное состояние
  initialState: likeCounterInitialState,
  // 5. Создаем объект, внутри которого будут храниться редьюсеры(функции, которые отвечают за изменение состояния)
  reducers: create => ({
    addLike: create.reducer((state: LikeCounterStateSlice) => {
      state.likes = state.likes + 1
    }),
    addDislike: create.reducer((state: LikeCounterStateSlice) => {
      state.dislikes = state.dislikes + 1
    }),
    /* reset: create.reducer((state: LikeCounterStateSlice) => {
      state.likes = 0
      state.dislikes = 0
    }), */
    reset: create.reducer(()=>likeCounterInitialState),
    
  }),
  // 6. Создаем селекторы, которые позволяют забирать данные из стейта в компонент
  /* selectors: {
    likes: (state: LikeCounterStateSlice) => state.likes,
    dislikes: (state: LikeCounterStateSlice) => state.dislikes,
  },
}) */
selectors: {
  feedbackData: (state: LikeCounterStateSlice) => state,
  }
  
},
)

//7. Экспорт экшенов и селекторов для возможносит их использования в компонентах
export const likeCounterSliceActions = likeCounterSlice.actions
export const likeCounterSliceSelectors = likeCounterSlice.selectors
