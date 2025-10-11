// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Inicio />}
        />
        <Route
          path="/otra-ruta"
          element={<h1>Otra ruta funciona</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
