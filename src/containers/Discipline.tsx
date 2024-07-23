import useDiscipline from "../hooks/useDiscipline.tsx";
import {Paper} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";

function Discipline() {
    const {discipline} = useDiscipline();

    const rows = discipline.map((p) =>({
        id: p.id,
        name: p.name,
        resultType: p.resultType,
    }))

    const columns = [

        {field: "name", headerName: "fullName", flex: 1},
        {field: "resultType", headerName: "resultType", flex: 2},
    ]


    return (
        <>
            <Paper>
                <DataGrid columns={columns} rows={rows}/>
            </Paper>
        </>
    );
}

export default Discipline;