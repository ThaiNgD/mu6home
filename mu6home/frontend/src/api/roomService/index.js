import { http } from "../../utils/func/http";
import { room_endpoint } from "../endpoint";
export const roomService = {
  getRoomDetail: (roomCode) => {
    return http.get(`${room_endpoint.roomDetail_get}`, roomCode);
  },
  getRoomList: () => {
    return http.get(room_endpoint.roomList_get);
  },
  createRoom: (data) => {
    return http.post(room_endpoint.roomCreate_post, data);
  },
};
