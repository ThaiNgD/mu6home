import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Room from "./pages/Room";
import { useAppDispatch, useAppSelector } from "./store";
import { closeMessage } from "./store/messageSlice";

function About() {
  return <h2>About Page</h2>;
}

export default function App() {
  const dispatch = useAppDispatch();
  const messageState = useAppSelector((state) => state.message);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/room/:roomCode" element={<Room />} />
      </Routes>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={messageState.isShow}
        slots={{ transition: Slide }}
        key={Slide.name}
        autoHideDuration={1800}
      >
        <Alert
          onClose={() => dispatch(closeMessage())}
          severity={messageState.type}
          // variant="filled"
          sx={{ width: "100%" }}
        >
          {messageState.message}
        </Alert>
      </Snackbar>
    </Router>
  );
}
