import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Alunoinserir = () => {
  const [objeto, setObjeto] = useState({
    matricula: 0,
    nome: "",
  });

  const salvar = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3005/alunos", objeto);
  };

  const atualizarCampo = (nome, valor) => {
    let objNovo = { ...objeto };
    objNovo[nome] = valor;
    setObjeto(objNovo);
  };

  return (
    <form>
      <div>
        <label className="form-label">Matricula</label>
        <input
          className="form-control"
          value={objeto.matricula}
          onChange={(e) => atualizarCampo("matricula", e.target.value)}
          type="text"
        />
      </div>
      <div>
        <label className="form-label">Nome</label>
        <input
          className="form-control"
          value={objeto.nome}
          onChange={(e) => atualizarCampo("nome", e.target.value)}
          type="text"
        />
      </div>

      <button className="btn btn-primary mt-2" onClick={(e) => salvar(e)}>
        Salvar
      </button>
      <button className="btn btn-secondary mt-2">Voltar</button>
    </form>
  );
};
export default Alunoinserir;
