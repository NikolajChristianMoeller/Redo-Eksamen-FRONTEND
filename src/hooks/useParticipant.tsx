import {useEffect, useState} from "react";
import Api from "../utils/Api.tsx";
import type {TParticipant} from "../types/participant.type.ts";

export default function useParticipant() {


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

    const createParticipant = async (participant: TParticipant) => {
        try {
            const res = await Api.post("participants", participant);
            setParticipant((prev) => [...prev, res]);
        }
        catch (e) {
            console.error(e);
        }
    }

    return {
        participant,
        createParticipant
    }
}