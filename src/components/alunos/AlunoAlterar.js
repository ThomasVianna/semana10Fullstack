import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AlunoAlterar = () => {
  const [objeto, setObjeto] = useState({
    id: "2",
    matricula: 125,
    nome: "Bruno",
  });

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3005/alunos/${id}`).then((resp) => {
      setObjeto(resp.data);
    });
  }, [id]);
  const salvar = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3005/alunos/${id}`, objeto);
  };
  const atualizarCampo = (nome, valor) => {
    let objNovo = { ...objeto };
    objNovo[nome] = valor;
    setObjeto(objNovo);
  };

  if (objeto == null) {
    return <div>Carregando....</div>;
  }

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
      <button
        className="btn btn-primary mt-2"
        onClick={(e) => salvar(e)}
      ></button>

      <button className="btn btn-secondary mt-2">Voltar</button>
    </form>
  );
};
export default AlunoAlterar;
