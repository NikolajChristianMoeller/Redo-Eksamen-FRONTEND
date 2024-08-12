import {TDiscipline} from "../../types/discipline.type.ts";

type createDisciplineProps = {
    open: boolean,
    handleClose: () => void,
    createDiscipline: (discipline: TDiscipline) => void
}

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    TextField
} from "@mui/material";

export default function CreateDisciplineDialog({open, handleClose, createDiscipline}: createDisciplineProps) {


    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <DialogTitle>Create new Discipline</DialogTitle>
                <br />
                <DialogContent>

                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>


                    </Grid>

                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>


                    </Grid>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button >Create</Button>
                </DialogActions>
            </Dialog>
        </>

    )
}