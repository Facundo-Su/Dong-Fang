// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Test } from "./paginas/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Test />}
        />
        <Route
          path="/otra"
          element={<div>Otra página</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
