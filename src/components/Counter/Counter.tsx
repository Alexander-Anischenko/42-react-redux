import Button from "../Button/Button"
import "./styles.ts"
import { ButtonWrapper, CounterContainer, CounterResult } from "./styles"

// 9. Импортируем хуки для диспатча и селекторов
import { useAppDispatch, useAppSelector } from "../../store/hooks"
// 10. Импортируем экшены и селекторы, которые были созданы и экспортированы в  файле со слайсом
import {
  counterSliceActions,
  counterSliceSelectors,
} from "../../store/redux/counter/counterSlice"

function Counter() {
  //11. Забираем значение count из store
  const count = useAppSelector(counterSliceSelectors.count)
  console.log(count)

  //12. Сохраняем функцию dispatch, которую возвращает хук useAppDispatch
  const dispatch = useAppDispatch()

  const onMinus = () => {
    //13. Диспатчим экшен (идентификатор действия) , который вызовет соответствующий редьюсер
    dispatch(counterSliceActions.minus())
  }

    const onPlus = () => {
        //13. Диспатчим экшен (идентификатор действия) , который вызовет соответствующий редьюсер
        dispatch(counterSliceActions.plus())
    }

  return (
    <CounterContainer>
      <ButtonWrapper>
        <Button buttonName="-" onClick={onMinus} />
      </ButtonWrapper>
      <CounterResult>{count}</CounterResult>
      <ButtonWrapper>
        <Button buttonName="+" onClick={onPlus} />
      </ButtonWrapper>
    </CounterContainer>
  )
}

export default Counter
