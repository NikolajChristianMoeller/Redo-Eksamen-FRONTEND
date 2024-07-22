import {useEffect, useState} from "react";
import Api from "../utils/Api.tsx";

export default function useDiscipline() {

    type TDiscipline = {
        id: number
        name: string,
        resultType: string,
    };

    const [discipline, setDiscipline] = useState<TDiscipline[]>([]);

    useEffect(() => {
        void getDisciplines();
    },[])

    const getDisciplines = async () => {
        try {
            const res = await Api.get("disciplines");
            setDiscipline(res)
        }
        catch (e) {
            console.error(e);
        }
    }

    return {
        discipline,
    }
}