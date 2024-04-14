import { Route, Routes } from "react-router-dom";

import girlducky from "./images/girl_ducky.webp";
import { Button } from "react-bootstrap";

function App() {
  return (
    <Routes>
      <img src={girlducky} />
      <Button />
    </Routes>
  );
}

export default App;
