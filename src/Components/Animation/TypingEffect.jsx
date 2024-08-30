import React from "react";
import styles from "./bubble.module.css";

const Example = () => {
  return (
    <div className="place-content-center">
      <BubbleText />
    </div>
  );
};

const BubbleText = () => {
  return (
    <h2 className="text-center text-5xl font-thin text-black cursor-pointer">
      {"Your Vision with Bytte".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default Example;