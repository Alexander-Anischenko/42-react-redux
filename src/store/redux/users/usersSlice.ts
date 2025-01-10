import type { PayloadAction } from '@reduxjs/toolkit';
// 1. Импортируем функцию или метод, с помощью которого создаем slice
import { createAppSlice } from '../../createAppSlice'
import type { UsersSliceState, UserData} from './types'

//4.1. Создаем объект с первоначальным состоянием, который мы потом передадим в initialState
const usersInitialState: UsersSliceState = {
  users: []
}

// 2. Создаем slice для пользователей
export const usersSlice = createAppSlice({
    // 3. Задаем имя, под которым будет храниться объект со значениями пользователей (state) в глобальном стейте
  name: 'USERS',
  // 4. Задаем объект, в котором будет храниться начальное состояние
  initialState: usersInitialState,
    // 5. Создаем объект, внутри которого будут храниться редьюсеры(функции, которые отвечают за изменение состояния)
  reducers: create => ({
    // 5.1. Создаем редьюсер, который добавляет пользователя в массив пользователей используя payload для передачи данных в редьюсер 
    // и перезаписывает массив пользователей с помощью spread оператора
    addUser: create.reducer((state: UsersSliceState, action: PayloadAction<UserData>) => {
        state.users= [...state.users, action.payload]
    })
  }),
    // 6. Создаем селекторы, которые позволяют забирать данные из стейта в компонент
  selectors: {
    // 6.1. Создаем селектор, который возвращает массив пользователей(называть селекторы можно как угодно, но лучше называть так, чтобы было понятно, что они делают)
    users: (state: UsersSliceState) => state.users
  }
})
// 7. Экспорт экшенов и селекторов для возможности их использования в компонентах
export const usersSliceActions = usersSlice.actions;
export const usersSliceSelectors = usersSlice.selectors;