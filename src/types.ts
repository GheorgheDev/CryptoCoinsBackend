export interface UserDto {
    user_id: string;
    username: string;
    fullname: string;
    birthdate: string;
    email: string;
    password: string;
    wallet: number;
}

export interface CoinDto {
    coin_id: string;
    name: string;
    value: number;
    image: string;
    stock: number;
}

export interface UserCoinsDto {
    user_id: string;
    coin_id: string;
    amount: number;
}

export interface CoinsBuyOrSellDto {
    user_id: string;
    coin_id: string;
    amount: number;
    wallet: number;
    stock: number;
}