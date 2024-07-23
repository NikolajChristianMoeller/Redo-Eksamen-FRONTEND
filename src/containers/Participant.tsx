import CreateParticipantDialog from "../components/CreateParticipantDialog.tsx";
import useParticipant from "../hooks/useParticipant.tsx";
import {DataGrid} from "@mui/x-data-grid";
import {Button, Paper} from "@mui/material";
import {useState} from "react";

function Participant() {
    const [open, setOpen] = useState<boolean>(false);
    const {participant, createParticipant} = useParticipant();

    const rows = participant.map((p) =>({
        id: p.id,
        name: p.name,
        gender: p.gender,
        age: p.age,
        club: p.club,
        discipline: p.disciplines.map((discipline) => discipline.name).join(",")
    }))

    const columns = [

        {field: "name", headerName: "fullName", flex: 1},
        {field: "gender", headerName: "gender", flex: 2},
        {field: "age", headerName: "age", flex: 3},
        {field: "club", headerName: "club", flex: 4},
        {field: "discipline", headerName: "discipline", flex: 5},
    ]

    const handleOpenModal = () => {
        setOpen(true)
    }

    const handleCloseModal = () => {
        setOpen(false);
    }


    return (
        <>
            <Paper>
                <Button onClick={handleOpenModal}>
                    Create Participant
                </Button>
                <DataGrid columns={columns} rows={rows}/>
            </Paper>
            <CreateParticipantDialog
                open={open}
                handleClose={handleCloseModal}
                createParticipant={createParticipant}
            />
        </>
    );


}

export default Participant;