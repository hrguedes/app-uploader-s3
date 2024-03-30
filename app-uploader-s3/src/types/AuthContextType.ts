export type AuthContextType = {
    email: string | null;
    name: string | null;
    token: string | null;
    logout: () => void;
    isLogged: boolean;
}