import { UserCredential, User } from "firebase/auth";

export type AuthUser = (a: string, b: string) => Promise<UserCredential>;
export type AuthChangesCB = (a: User | null) => void;
