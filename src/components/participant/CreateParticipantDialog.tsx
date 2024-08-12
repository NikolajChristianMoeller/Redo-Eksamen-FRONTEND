import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField} from "@mui/material";
import type {TParticipant} from "../../types/participant.type.ts";
import {useState} from "react";
import useDiscipline from "../../hooks/useDiscipline.tsx";

type TCreateParticipantDialogProps = {
    open: boolean,
    handleClose: () => void
    createParticipant: (participant: TParticipant ) => void

}

export default function CreateParticipantDialog({open, handleClose, createParticipant}: TCreateParticipantDialogProps) {

    //#region State for dialog
    const [name, setName] = useState<string>("")
    const [gender, setGender] = useState<string>("")
    const [age, setAge] = useState<number>(0);
    const [club, setClub] = useState<string>("")
    const [selectedDiscipline, setSelectedDiscipline] = useState<string>("")
    //#endregion

    const {discipline} = useDiscipline();

    const CreateNewParticipant = () => {

        const newParticipant: TParticipant = {
            id: 0,
            name: name,
            gender: gender,
            age: age,
            club: club,
            disciplines: [
                {
                    id: discipline.find((d) => d.name === selectedDiscipline)?.id || 0,
                    name: selectedDiscipline,
                    resultType: discipline.find((d) => d.resultsType === selectedDiscipline)?.resultsType || "",
                }
            ]
        }

        createParticipant(newParticipant);
        handleClose();

    }

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <DialogTitle>Create new Participant</DialogTitle>
                <br />
                <DialogContent>

                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Gender"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setGender(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                type="number"
                                label="Age"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setAge(Number(e.target.value))}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Club"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setClub(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Disipline"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setSelectedDiscipline(e.target.value)}
                            />
                        </Grid>
                    </Grid>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={CreateNewParticipant}>Create</Button>
                </DialogActions>
            </Dialog>
        </>

    )
}