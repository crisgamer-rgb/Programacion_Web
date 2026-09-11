import React, { useState } from "react";
import "../index.css";

function Figuras() {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularTriangulo = () => {
    const base = parseFloat(valor1);
    const altura = parseFloat(valor2);

    if (isNaN(base) || isNaN(altura)) {
      setResultado("Digite valores válidos");
      return;
    }

    const area = (base * altura) / 2;
    setResultado(`Área del triángulo: ${area}`);
  };

  const calcularRectangulo = () => {
    const base = parseFloat(valor1);
    const altura = parseFloat(valor2);

    if (isNaN(base) || isNaN(altura)) {
      setResultado("Digite valores válidos");
      return;
    }

    const area = base * altura;
    setResultado(`Área del rectángulo: ${area}`);
  };

  const calcularCuadrado = () => {
    const lado = parseFloat(valor1);

    if (isNaN(lado)) {
      setResultado("Digite un valor válido");
      return;
    }

    const area = lado * lado;
    setResultado(`Área del cuadrado: ${area}`);
  };

  return (
    <div className="contenedor">

      <h1>📐 Área de Figuras Geométricas</h1>

      <p className="subtitulo">
        Calcula fácilmente el área de un triángulo, rectángulo o cuadrado
      </p>

      <div className="inputs">

        <div className="campo">
          <label>Variable 1</label>
          <input
            type="number"
            placeholder="Ej: 5"
            value={valor1}
            onChange={(e) => setValor1(e.target.value)}
          />
        </div>

        <div className="campo">
          <label>Variable 2</label>
          <input
            type="number"
            placeholder="Ej: 10"
            value={valor2}
            onChange={(e) => setValor2(e.target.value)}
          />
        </div>

      </div>

      <div className="botones">

        <button onClick={calcularTriangulo}>
          🔺 Triángulo
        </button>

        <button onClick={calcularRectangulo}>
          ▭ Rectángulo
        </button>

        <button onClick={calcularCuadrado}>
          ◼ Cuadrado
        </button>

      </div>

      <div className="resultado">
        {resultado || "El resultado aparecerá aquí"}
      </div>

      <div className="formulas">

        <div className="formula">
          🔺 Triángulo: (Base × Altura) ÷ 2
        </div>

        <div className="formula">
          ▭ Rectángulo: Base × Altura
        </div>

        <div className="formula">
          ◼ Cuadrado: Lado × Lado
        </div>

      </div>

    </div>
  );
}

export default Figuras;