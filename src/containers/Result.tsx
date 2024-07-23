import useResult from "../hooks/useResult.tsx";
import {Paper} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";

function Result() {
    const {result} = useResult();

    const rows = result.map((p) =>({
        id: p.id,
        date: p.date,
        resultType: p.resultType,
        resultValue: p.resultValue,
    }))

    const columns = [

        {field: "date", headerName: "date", flex: 1},
        {field: "resultType", headerName: "resultType", flex: 2},
        {field: "resultValue", headerName: "resultValue", flex: 3},
    ]


    return (
        <>
            <Paper>
                <DataGrid columns={columns} rows={rows}/>
            </Paper>
        </>
    );
}

export default Result;