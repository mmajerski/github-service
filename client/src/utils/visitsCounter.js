import axios from "axios";

const visitsCounter = async () => {
  if (localStorage.getItem("visitCounter")) {
    console.log(
      "landing page times visited:",
      localStorage.getItem("visitCounter")
    );
  } else {
    const visits = await axios.get("/api/visits");
    console.log("landing page times visited:", visits.data.visited);
    localStorage.setItem("visitCounter", visits.data.visited);
  }
};

export default visitsCounter;
