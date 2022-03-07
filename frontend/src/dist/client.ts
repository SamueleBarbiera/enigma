import { User } from 'next-auth';
export interface SignUpData {
    email: string;
    password: string;
    name?: string;
    image?: string;
}
export declare const signUp: (data: SignUpData) => Promise<User>;
