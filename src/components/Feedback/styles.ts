import styled from "@emotion/styled"

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 450px;
  height: 300px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: aliceblue;
`

export const LikeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`

export const LikeImg = styled.img`
width: 70px;
`;

export const LilkeCount = styled.div`
font-size: 70px;
`;

export const DislikeImg = styled.img`
width: 70px;
`;

export const DislikeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`
export const DislilkeCount = styled.div`
font-size: 70px;
`;

export const LikeContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
`;

export const DislikeContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
`;

export const ButtonWrapper = styled.div`
width: 200px;
`;