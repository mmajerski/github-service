import { GET_VISITED } from "./types";
import axios from "axios";

export const visitCounter = () => async (dispatch) => {
  if (sessionStorage.getItem("visitCounter")) {
    dispatch({
      type: GET_VISITED,
      payload: sessionStorage.getItem("visitCounter")
    });
  } else {
    const res = await axios.get("/api/visits");

    console.log("times visited:", res.data.visited);

    sessionStorage.setItem("visitCounter", res.data.visited);

    dispatch({
      type: GET_VISITED,
      payload: sessionStorage.getItem("visitCounter")
    });
  }
};
