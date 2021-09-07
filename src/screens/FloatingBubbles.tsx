import React, { useState } from "react";
import Layout from "../components/Layout";
import "../styles/floatingBubbles.css";

const FloatingBubbles = () => {
  const [left, setLeft] = useState([
    50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
  ]);
  const [top, setTop] = useState(
    Array.from({ length: 11 }, () => Math.floor(Math.random() * 80))
  );

  const [leftBack, setLeftBack] = useState("");
  const [rightBack, setRightBack] = useState("");

  const leftHandler = () => {
    setLeft(Array.from({ length: 11 }, () => Math.floor(Math.random() * 100)));
    setTop(Array.from({ length: 11 }, () => Math.floor(Math.random() * 80)));
    setTimeout(() => {
      if (left.filter((el) => el < 50).length > 5.5) {
        setLeftBack("rgba(0, 128, 0, 0.424)");
      } else {
        setLeftBack("rgba(255, 0, 0, 0.246)");
      }
    }, 1000);
    setTimeout(() => {
      setLeftBack("transparent");
      setRightBack("transparent");

      // setLeft([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]);
      console.log(left.filter((el) => el < 50));
    }, 2000);
  };

  const rightHandler = () => {
    setLeft(Array.from({ length: 11 }, () => Math.floor(Math.random() * 100)));
    setTop(Array.from({ length: 11 }, () => Math.floor(Math.random() * 80)));
    setTimeout(() => {
      if (left.filter((el) => el > 50).length > 5.5) {
        setRightBack("rgba(0, 128, 0, 0.424)");
      } else {
        setRightBack("rgba(255, 0, 0, 0.246)");
      }
    }, 1000);
    setTimeout(() => {
      setRightBack("transparent");
      setLeftBack("transparent");
      // setLeft([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]);
    }, 2000);
  };

  return (
    <Layout>
      <section className="floating-bubbles">
        <div className="gamescreen">
          <div className="floating">
            <h2>Floating Bubbles ( 50% )</h2>
            <p>Pick one side.</p>
            <button
              style={{ background: `${leftBack}` }}
              className="leftsec"
              onClick={leftHandler}
            ></button>
            <button
              style={{ background: `${rightBack}` }}
              className="rightsec"
              onClick={rightHandler}
            ></button>
            <div className="bubbles">
              <div
                className="bubble"
                style={{ left: `${left[0]}%`, top: `${top[0]}%` }}
              ></div>
              <div
                className="bubble"
                style={{ left: `${left[1]}%`, top: `${top[1]}%` }}
              ></div>
              <div
                className="bubble"
                style={{ left: `${left[2]}%`, top: `${top[2]}%` }}
              ></div>
              <div
                className="bubble"
                style={{ left: `${left[3]}%`, top: `${top[3]}%` }}
              ></div>
              <div
                className="bubble"
                style={{ left: `${left[4]}%`, top: `${top[4]}%` }}
              ></div>
              <div
                className="bubble"
                style={{ left: `${left[5]}%`, top: `${top[5]}%` }}
              ></div>
              <div
                className="bubble"
                style={{ left: `${left[6]}%`, top: `${top[6]}%` }}
              ></div>
              <div
                className="bubble"
                style={{ left: `${left[7]}%`, top: `${top[7]}%` }}
              ></div>
              <div
                className="bubble"
                style={{ left: `${left[8]}%`, top: `${top[8]}%` }}
              ></div>
              <div
                className="bubble"
                style={{ left: `${left[9]}%`, top: `${top[9]}%` }}
              ></div>
              <div
                className="bubble"
                style={{ left: `${left[10]}%`, top: `${top[10]}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FloatingBubbles;
