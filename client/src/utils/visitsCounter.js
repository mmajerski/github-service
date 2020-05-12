import axios from "axios";

const visitsCounter = async () => {
  if (sessionStorage.getItem("visitCounter")) {
    console.log("times visited:", sessionStorage.getItem("visitCounter"));
  } else {
    const visits = await axios.get("/api/visits");
    console.log("times visited:", visits.data.visited);
    sessionStorage.setItem("visitCounter", visits.data.visited);
  }
};

export default visitsCounter;
