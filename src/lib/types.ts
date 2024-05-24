export type Monument = {
    id: number;
    name: string;
    type: string;
    image: string;
    cityId: number;
    optional: boolean;
    visited: boolean;
    visitedAt: Date | null;
    stamped: boolean;
}

export type Country = {
    id: number;
    name: string;
    image: string;
}

export type City = {
    id: number;
    name: string;
    image: string;
    completed: boolean;
}

export type User = {
    id: number;
    name: string;
}

export type PostCard = {
    id: number;
    cityId: number;
    monumentId: number | null;
    message: string;
    from: number;
    to: number;
    date: Date;
    image: string;
    stampImage: string;
}