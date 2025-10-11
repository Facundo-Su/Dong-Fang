import React from "react";
import DynamicForm from "../componentes/producto/FormularioDinamico";

export default function App() {
  const fields = [
    { name: "nombre", label: "Nombre", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "edad", label: "Edad", type: "number" },
  ];

  const handleSubmit = (data) => {
    console.log("Datos enviados:", data);
  };

  return (
    <DynamicForm
      fields={fields}
      onSubmit={handleSubmit}
    />
  );
}
