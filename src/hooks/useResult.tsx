import {useEffect, useState} from "react";
import Api from "../utils/Api.tsx";

export default function useResult() {

    type TResult = {
        id: number
        name: string,
        resultType: string,
        date: string,
        resultValue: string
    };

    const [result, setResult] = useState<TResult[]>([]);

    useEffect(() => {
        void getParticipants();
    },[])

    const getParticipants = async () => {
        try {
            const res = await Api.get("results");
            setResult(res)
        }
        catch (e) {
            console.error(e);
        }
    }

    return {
        result,
    }
}