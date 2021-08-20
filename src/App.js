import React from "react";

function Food({ name, picture }){
  return <div>
    <h2>I love { name }</h2>
    <img src={picture} />
  </div>

}

const foodILike = [{
  name : "kimchi",
  image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QKNL3H-b8pGMgfg77Ig8BAHaE8%26pid%3DApi%26h%3D160&f=1"
},
{
  name : "bulgogi",
  image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JfOZtS5v4wLjtpacTImfVwHaEK%26pid%3DApi%26h%3D160&f=1"
}]

function App() {
  return (
    <div>
      {foodILike.map (dish =>(
        <Food name={dish.name} picture={dish.image}/>
      ))}
    </div>
    );
}

export default App;
