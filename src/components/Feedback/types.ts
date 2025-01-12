export interface LikeDislikeOunterProps {
    likeValue: number;
    dislikeValue: number;
    onLike: () => void;
    onDislike: () => void;
}