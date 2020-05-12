import Typical from "react-typical";
import React from "react";

const TypeEffect = React.memo(() => {
  return (
    <Typical
      className="x-large"
      steps={[
        "Hi Developers!",
        2000,
        "Welcome to",
        2000,
        "Github Community",
        4000
      ]}
      loop={Infinity}
      wrapper="h1"
    />
  );
});

export default TypeEffect;
