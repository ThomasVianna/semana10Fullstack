import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AlunoConsultar = () => {
  const [objeto, setObjeto] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3005/alunos/${id}`).then((resp) => {
      setObjeto(resp.data);
    });
  }, []);

  if (objeto == null) {
    return <div>Carregando....</div>;
  }

  return (
    <form>
      <div>
        <label className="form-label">Matricula</label>
        <input
          className="form-control"
          disabled={true}
          value={objeto.matricula}
          type="text"
        />
      </div>
      <div>
        <label className="form-label">Nome</label>
        <input
          className="form-control"
          disabled={true}
          value={objeto.nome}
          type="text"
        />
      </div>

      <button className="btn btn-secondary mt-2">Voltar</button>
    </form>
  );
};

export default AlunoConsultar;
