import Button from "../Button/Button";
import Spinner from "../Spinner/Spinner";
import { JokeCard, JokesContainer, JokeText, JokeWrapper, RandomJokesWrapper } from "./styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks"; 
import { randomJokesSliceActions, randomJokesSliceSelectors } from "../../store/redux/randomJokes/randomJokesSlice";
import type { RandomJoke } from "../../store/redux/randomJokes/types";




function RandomJokes(){
    const dispatch = useAppDispatch();
    // с помощью деструктуризации получаем свойства из глобального стейта
    const {data, error, status} = useAppSelector(randomJokesSliceSelectors.jokeData);

    // создаем функцию, которая будет вызывать метод getJoke из слайса
    const getJoke = () => {
        // вызываем метод getJoke из слайса
        dispatch(randomJokesSliceActions.getJoke())
    }

    const deleteJokes = () => {
        dispatch(randomJokesSliceActions.deleteAllJokes())
    }


    console.log(data);
    
    // создаем массив с шутками из полученных данных с помощью метода map и возвращаем JSX элемент
    /* const jokes = data.map((joke: RandomJoke)=>{
        const deleteJoke = ()={
            dispatch(randomJokesSliceActions.)
        }
        //key={v4()} - генерируем уникальный ключ для каждого элемента
        return<JokeWrapper key={joke.id}><JokeText>{joke.setup}</JokeText> {joke.punchline}
        <Button buttonName="DELETE JOKE" onClick={()=>{}}/>
        </JokeWrapper>
    }) */
        const jokes = data.map((joke: RandomJoke) => {
            const deleteJoke = () => {
              dispatch(randomJokesSliceActions.deleteJoke(joke.id))
            }
            return (
              <JokeWrapper key={joke.id}>
                <JokeText>{joke.joke}</JokeText>
                <Button buttonName='DELETE JOKE' onClick={deleteJoke} />
              </JokeWrapper>
            )
          })
    

    return(
        <RandomJokesWrapper>
            <JokeCard>
                <Button buttonName="GET JOKES" onClick={getJoke}/>
                {status === 'loading' && <Spinner/>}
                <JokesContainer>
                    {jokes}
                   
                </JokesContainer>
                <Button buttonName="DELETE JOKES" onClick={deleteJokes}/>
            </JokeCard>
        </RandomJokesWrapper>
    )
}

export default RandomJokes;