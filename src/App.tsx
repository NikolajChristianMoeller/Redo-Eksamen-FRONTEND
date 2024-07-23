import { CssBaseline } from "@mui/material";
import NavBar from "./components/NavBar.tsx";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home.tsx";
import FallBack from "./containers/FallBack.tsx";
import { SnackbarProvider } from "notistack";
import Discipline from "./containers/Discipline.tsx";
import Result from "./containers/Result.tsx";
import Participant from "./containers/Participant.tsx";

/**
 * App component.
 */
function App() {
    return (
        <>
            <SnackbarProvider maxSnack={3}>
                    <CssBaseline />
                    <NavBar />
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        />
                        <Route
                            path="/discipline"
                            element={<Discipline />}
                        />
                        <Route
                            path="/participants"
                            element={<Participant />}
                        />
                        <Route
                            path="/results"
                            element={<Result />}
                        />
                        <Route
                            path="/*"
                            element={<FallBack />}
                        />
                    </Routes>
            </SnackbarProvider>
        </>
    );
}

export default App;