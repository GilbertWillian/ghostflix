import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function Cadastro() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descrição
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor
    });
  }

  function handleChange(infosDoEvento) {
    // const { getAttribute, value } = infosDoEvento.target;

    // setValue(getAttribute("name"), value);
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([...categorias, values]);
          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      <ul>
        {categorias.map((categorias, indice) => (
          <li key={`${categorias}${indice}`}>{categorias.nome}</li>
        ))}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default Cadastro;
