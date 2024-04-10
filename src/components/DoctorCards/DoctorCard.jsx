import React, { useState, useEffect, useRef } from "react";

export default function DoctorCard({ doctorcard }) {
  const [flip, setFlip] = useState(false);
  // const [height, setHeight] = useState("initial");

  const frontEl = useRef();
  const backEl = useRef();

  // function setMaxHeight() {
  //   const frontHeight = frontEl.current.getBoundingClientRect().height;
  //   const backHeight = backEl.current.getBoundingClientRect().height;
  //   setHeight(Math.max(frontHeight, backHeight, 100));
  // }

  // useEffect(setMaxHeight, [
  //   flashcard.question,
  //   flashcard.answer,
  //   flashcard.options,
  // ]);

  // useEffect(() => {
  //   window.addEventListener("resize", setMaxHeight);
  //   return () => window.removeEventListener("resize", setMaxHeight);
  // }, []);

  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      // style={{ height: height }}
      onClick={() => setFlip(!flip)}
    >
      <div className="front" ref={frontEl}>
        <h3 className="name">
          Dr. {doctorcard.name ? doctorcard.name.charAt(0).toUpperCase() + doctorcard.name.slice(1) : "Strange" }
        </h3>
        Title: {doctorcard.abilities && doctorcard.abilities.length > 0 ? doctorcard.abilities[0].ability.name : "Physician" } 
        <div className="card-departments">
          {
            doctorcard.types && doctorcard.types.length > 0?
            doctorcard.types.map((type, index) => {
              return (
                <div className="card-department" key={index}>
                  {type.type.name}
                </div>
              );
            }) :
            <div>General</div>
          }
        </div>
      </div>
      <div className="back" ref={backEl}>
        {"View Profile"}
      </div>
    </div>
  );
}
