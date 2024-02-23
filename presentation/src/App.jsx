import "./App.css";
import { useState } from "react";

function App() {
  const [img, setImg] = useState("");

  

  function gerar() {
    fetch('http://localhost:3001/gerarImagem')
        .then((res) => res.json())
        .then((data) => {
          console.log(data[0].imagem)
          setImg(data[0].imagem);
        })
        .catch((err) => {
          console.log(err.message);
    });
  }

  return (
    <main>
      <h1>N-Tier Architecture</h1>
      <div style={{background:`url(${img}`}}></div>
      <button onClick={gerar}>Gerar uma imagem</button>
    </main>
  );
}

export default App;
