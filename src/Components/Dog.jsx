import React, { useState } from "react";

function Dog() {

  const API_URL = "https://dog.ceo/api/breeds/image/random"
  const [dogPicture, setDogPicture] = useState("") // REACT Hook

  function getDogPicture(){
    fetch(API_URL)
        .then(respose => respose.json())
        .then(data => {
            setDogPicture(data.message)
        })
  }

  return (
    <>
      <div>Dog stuff button</div>
      <button onClick={getDogPicture}> Get Dog Img</button>
      <div>
        <img src={dogPicture} alt="dog"></img>
      </div>
    </>
  );
}

export default Dog