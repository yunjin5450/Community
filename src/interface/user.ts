export interface User {
    userId?: number;
    id?: string;
    nickname?: string;
    password?: string;
    confirmPassword?: string;
    Email?: string;
    provider?: string;
    phone?: string;
    birth?: string;
    admin?: boolean;
    refreshToken?: string;
}