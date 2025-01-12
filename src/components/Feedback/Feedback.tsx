import { ButtonWrapper, DislikeButton, DislikeContainer, DislikeImg, DislilkeCount, FeedbackContainer, LikeButton, LikeContainer, LikeImg, LilkeCount } from "./styles";
import Like from '../../assets/vecteezy_thumb-up-like-icon-with-long-shadow_21048721.png'
import Dislike from '../../assets/vecteezy_thumb-down-dislike-icon-with-long-shadow_21048545.png'

// 9. Импортируем хуки для диспатча и селекторов
import { useAppDispatch, useAppSelector } from "../../store/hooks"
// 10. Импортируем экшены и селекторы, которые были созданы и экспортированы в  файле со слайсом
import {
  likeCounterSliceActions,
  likeCounterSliceSelectors,
} from "../../store/redux/likeCounter/likeCounterSlice"
import Button from "../Button/Button";

function Feedback() {
    //11. Забираем значение лайков и дизлайков из store
    const likes = useAppSelector(likeCounterSliceSelectors.likes);
    const dislikes = useAppSelector(likeCounterSliceSelectors.dislikes);
    console.log(likes, dislikes)
    
    //12. Сохраняем функцию dispatch, которую возвращает хук useAppDispatch
    const dispatch = useAppDispatch()

    const onLike = () => {
        //13. Диспатчим экшен (идентификатор действия) , который вызовет соответствующий редьюсер
        dispatch(likeCounterSliceActions.like())
    }

    const onDislike = () => {
        //13. Диспатчим экшен (идентификатор действия) , который вызовет соответствующий редьюсер
        dispatch(likeCounterSliceActions.dislike())
    }

    const onReset = () => {
        //13. Диспатчим экшен (идентификатор действия) , который вызовет соответствующий редьюсер
        dispatch(likeCounterSliceActions.reset())
    };

    

    return (
            <FeedbackContainer>
                <LikeContainer>
                <LikeButton onClick={onLike}>
                    <LikeImg src={Like}/>
                </LikeButton>
                <LilkeCount>{likes}</LilkeCount>
                </LikeContainer>
                <DislikeContainer>
                <DislikeButton onClick={onDislike}>
                    <DislikeImg src={Dislike}/>
                </DislikeButton>
                <DislilkeCount>{dislikes}</DislilkeCount>
                </DislikeContainer>
                <ButtonWrapper>
                <Button buttonName="Reset Results" onClick={onReset}/>
                </ButtonWrapper>
            </FeedbackContainer>
    )
}

export default Feedback;