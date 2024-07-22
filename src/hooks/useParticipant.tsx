import {useEffect, useState} from "react";
import Api from "../utils/Api.tsx";

export default function useParticipant() {

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

    const [participant, setParticipant] = useState<TParticipant[]>([]);

    useEffect(() => {
        void getParticipants();
    },[])

    const getParticipants = async () => {
        try {
            const res = await Api.get("participants");
            setParticipant(res)
        }
        catch (e) {
            console.error(e);
        }
    }

    return {
        participant,
    }
}