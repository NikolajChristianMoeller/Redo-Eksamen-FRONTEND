type TParticipant = {
    id: number
    name: string,
    gender: string,
    age: number,
    club: string,
    disciplines: [
        {
            id: number,
            name: string,
            resultType: string
        }
    ]
};

export type {TParticipant};
