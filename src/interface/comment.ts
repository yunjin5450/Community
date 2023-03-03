export interface Comment {
    commentId? : number; 
    postId?: number;
    userId?: number;
    category?: JSON;
    nickname?: string;
    comment?: string;
    likes?: number;
}
