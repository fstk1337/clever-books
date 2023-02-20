interface Star {
    id: number;
    active: boolean;
}

export const createStars = (quantity: number): Star[]  => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        stars[i] = {
            id: i,
            active: i < quantity
        }
    }

    return stars;
}