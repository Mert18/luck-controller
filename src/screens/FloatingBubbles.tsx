import React, { ButtonHTMLAttributes, useEffect, useState } from "react";
import Layout from "../components/Layout";
import "../styles/floatingBubbles.css";

const FloatingBubbles = () => {
  const [random, setRandom] = useState<number[]>([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50])

  const [result, setResult] = useState("");
  const [myArr, setMyArr] = useState<number[]>([]);
  const [history, setHistory] = useState<boolean[]>([])
  const [chosen, setChosen] = useState("")
  const gameStartForDown = () => {
      setRandom(Array.from({length: 11}, () => Math.floor(Math.random() * 100))); 
      setMyArr(random.filter((el) => el < 50))
    setChosen("down")
  }

  const gameStartForUp = () => {
   setRandom(Array.from({length: 11}, () => Math.floor(Math.random() * 100))); 
    setMyArr(random.filter((el) => el > 50))
    setChosen("up")
  }

  useEffect(() => {
    if(myArr.length >= 6 && chosen === "down" || myArr.length >=6 && chosen === "up"){
      setHistory([...history, true])
    }
    else{
      setHistory([...history, false]);
    }
  }, [myArr])
  return(
    <Layout>
      <section className="floating-bubbles">
        <div className="gamescreen">
          <div className="floating-head">
            <h2>Floating Bubbles ( 50% )</h2>
            <p>Eleven boxes will change to a number between 0 - 100. Will they mostly be lower than 50 or higher?</p>
            <div className="floating-choose">
              <button className="floating-down" onClick={() => {
                  gameStartForDown();
                }}>
                <p>LOWER</p>
              </button>
              <button className="floating-up" onClick={() => {
                    gameStartForUp();
                }}>
                <p>HIGHER</p>
              </button>
            </div>
          </div>
          <div className="floating-game">
            {/* }
            <div className="bubbles">
              {random.map((el, i) => (<div className="bubble" key={i}>
                {el}
              </div>))}
           </div>{ */ }
            <div className="floating-result">
              {myArr.map((el, i) => (<div className="bubble" key={i}>
                {el}
              </div>))}
            </div>
          </div>
        </div>
        <div className="truefalse">
          {history.map((el) => {
            if(el === true){
              return <div className="true"></div>
            }else{
              return <div className="false"></div>
            }
          })}
        </div>
      </section>
    </Layout>
  )
};

export default FloatingBubbles;
