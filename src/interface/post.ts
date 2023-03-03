export interface Post {
    postId? : number; 
    userId?: number;
    nickname?: string;
    category?: JSON;
    option?: string;
    title?: string;
    content?: string;
    image?: string;
    likes?: number;
    createdAt?: Date;
    updatedAt?: Date;
}