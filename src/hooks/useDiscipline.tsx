import {useEffect, useState} from "react";
import Api from "../utils/Api.tsx";
import type {TDiscipline} from "../types/discipline.type.ts";

export default function useDiscipline() {



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