import useDiscipline from "../hooks/useDiscipline.tsx";
import {Button, Paper} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {useState} from "react";
import CreateDisciplineDialog from "../components/discipline/CreateDisciplineDialog.tsx";

function Discipline() {
    const {discipline, createDiscipline} = useDiscipline();
    const [open, setOpen] = useState<boolean>(false);

    const handleOpenModal = () => {
        setOpen(true)
    }

    const closeModal = () => {
        setOpen(false);
    }

    const rows = discipline.map((p) =>({
        id: p.id,
        name: p.name,
        resultType: p.resultsType,
    }))

    const columns = [

        {field: "name", headerName: "fullName", flex: 1},
        {field: "resultType", headerName: "resultType", flex: 2},
    ]

    return (
        <>
            <Paper>
                <Button onClick={handleOpenModal}>
                    Create Discipline
                </Button>
                <DataGrid columns={columns} rows={rows}/>
            </Paper>
            <CreateDisciplineDialog
                open={open}
                handleClose={closeModal}
                createDiscipline={createDiscipline}

            />

        </>
    );
}

export default Discipline;