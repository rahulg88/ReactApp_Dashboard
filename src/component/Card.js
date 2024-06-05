import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <>
      <div className="cards">
        <div className="netflixcard">
          <img className="card_img" src={props.imgsrc} alt="CrowdImg" />
          <div className="card_info">
            <span className="card_category"> {props.title}</span>
            <h3 className="card_title">{props.sname}</h3>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              <button>Watch Now </button>
            </a>
          </div>
        </div>
      </div> 
    </>
  );
};

export default Card;
