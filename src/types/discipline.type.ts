type TResultsType = "POINTS" | "TIME" | "DISTANCE";

type TDiscipline = {
    id: number;
    name: string;
    description: string;
    resultsType: TResultsType;
};

export type {
    TDiscipline,
    TResultsType,
};