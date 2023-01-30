type User = {
    [x: string]: string;
    id: string;
    name: string;
    image: string;
};

export type GuestBookEntry = {
    id: string;
    body: string;
    updated_at: string;
    user: User;
};