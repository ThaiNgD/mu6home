import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { roomService } from "../api/roomService";
import { useAppDispatch } from "../store";
import { showMessage } from "../store/messageSlice";
const Room = () => {
  const { roomCode } = useParams();
  const dispatch = useAppDispatch();
  console.log(roomCode);
  useEffect(() => {
    if (roomCode) {
      roomService
        .getRoomDetail(roomCode)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          dispatch(showMessage({ message: err?.message, type: "error" }));
        });
    }
  }, [roomCode]);
  return (
    <Container fixed>
      <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
    </Container>
  );
};

export default Room;
