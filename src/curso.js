import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu";

class CursoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cursos: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/curso")
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({
          cursos: result
        });
      },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          console.log(error);
          this.setState({
            error,
            cursos: []
          });
        }
      )
  }
  render() {
    let rowsTable = this.state.cursos.map((curso, index) => {
      return (
        <tr key={index}>
          <td>{curso.nombre}</td>
          <td>{curso.descripcion}</td>
          <td>{curso.imagen}</td>
          <td>{curso.anio}</td>
          <td>{curso.activo}</td>
        </tr>
      )
    });

    return (
      <>
        <Menu />
        <h1>Lista de cursos</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Imagen</th>
              <th>Anio</th>
              <th>Activo</th>
            </tr>
          </thead>
          <tbody>
            {rowsTable}
          </tbody>
        </table>
      </>

    );
  }
}

export default cursoList;
