import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { roomService } from "../api";
import { getQueryParams } from "../utils/func/urlFunc";

const Room = () => {
  const location = useLocation();
  const queryString = getQueryParams(location.search);
  console.log(queryString);
  useEffect(() => {
    roomService.getRoomDetail(queryString.roomCode).then((data) => {
      console.log(data);
    });
  }, [queryString.roomCode]);
  return (
    <Container fixed>
      <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
    </Container>
  );
};

export default Room;
