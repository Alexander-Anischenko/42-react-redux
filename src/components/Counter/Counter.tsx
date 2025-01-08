import Button from "../Button/Button";
import "./styles.ts";
import {CounterProps} from './types.ts'
///Шаг 1 вызов хука из React
/* import { useState } from "react"; */
import { CounterContainer, ButtonWrapper, CounterResult } from "./styles.ts";

function Counter({countValue, onMinus, onPlus}: CounterProps) {
    //Шаг 2 вызываем хук и передаем в него начальное состояние(initialState)
    //делаеммдеструктуризацию массива из двух элементов, который возвращает хук useState
    /* const [count, setCount] = useState<number | undefined>(0); */
    /* const [count, setCount] = useState<number>(0); */


    //Шаг 3 - необходимо прописать функции, которые будут менять состояние. Внутри этих функций нужно использовать setCount
    /* const onPlusClick = (): void => {
        setCount((preValue) => preValue + 1);
    };

    const onMinusClick = (): void => {
        setCount((preValue) => preValue - 1);
    }; */

    return (
        <CounterContainer>
            <ButtonWrapper>
                <Button buttonName="-" onClick={onMinus} />
            </ButtonWrapper>
            <CounterResult>{countValue}</CounterResult>
            <ButtonWrapper>
                <Button buttonName="+" onClick={onPlus} />
            </ButtonWrapper>
        </CounterContainer>
    );
}

export default Counter;
