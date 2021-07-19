import React, { useState } from "react";

function Slides({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

 

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  console.log(current);
  return (
    <>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={()=>{setCurrent(0)}}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={() => {
            setCurrent(current ===  0? length - 1: current -1 );
          }}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={() => {
            setCurrent(current === length - 1 ? 0 : current + 1);
          }}
        >
          Next
        </button>
      </div>
      {slides.map((slide, index) => (
        <div key={Math.random(Math.floor())}>
          {index === current && (
            <div id="slide" className="card text-center">
              <h1 data-testid="title">{slide.title}</h1>
              <p data-testid="text">{slide.text}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default Slides;
