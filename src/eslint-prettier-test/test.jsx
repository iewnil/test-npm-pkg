import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./index.css";

function Test(props) {
  const { sayHi } = props;

  const [color, setColor] = useState("red");

  const handleChangeColor = (nowColor) => {
    if (nowColor === "red") {
      setColor("blue");
      return;
    }

    setColor("red");
  };

  const handleOnClick = () => {
    handleChangeColor(color);
  };

  return (
    <button className={styles.test} type="button" onClick={handleOnClick}>
      {sayHi || ""}
    </button>
  );
}

Test.propTypes = {
  sayHi: PropTypes.string,
};

Test.defaultProps = {
  sayHi: "Hello",
};

export default Test;
