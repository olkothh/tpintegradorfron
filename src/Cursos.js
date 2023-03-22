import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import { Card, Button } from "react-bootstrap";


function Cursos(props) {
  const [cursos, setCursos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState("");
  
  //asd  

  useEffect(() => {
    if (isLoading) {
      fetch("http://localhost:3001/api/curso")
        .then((response) => response.json())
        .then((curso) => setCursos(curso.result), setIsLoading(false));
    }
  }, [isLoading]);

  useEffect(() => {
    const rol = "USER";
    setUserRole(rol);
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/api/curso/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setIsLoading(true);
          console.log("Curso eliminado exitosamente");
        } else {
          console.log("Ocurrió un error al eliminar el curso");
        }
      });
  };

  if (userRole === "USER") {
    if (cursos !== undefined) {
      const listaCursos = cursos.map((curso) => (
        <div key={curso.id} className="col-lg-4 col-md-6 mb-4">
          <Card>
            <Card.Body>
              <Card.Title>{curso.nombre}</Card.Title>
              <Button variant="primary">Ver detalles</Button>
              <Card.Text>{curso.descripcion}</Card.Text>
              
            </Card.Body>
          </Card>
        </div>
      ));
      return (
        <>
          <Menu />
          <h1 className="text-center my-5">Lista de cursos</h1>
          <div className="container">
            <div className="row">{listaCursos}</div>
          </div>
        </>
      );
    } else {
      setIsLoading(true);
      return <div>Loading...</div>;
    }
  } else if (userRole === "ADMIN") {
    const handleCreate = () => {
      console.log("Crear curso");
    };

    const handleEdit = (id) => {
      console.log(`Editar curso con id ${id}`);
    };

    const listaCursos = cursos.map((curso) => (
      <div key={curso.id} className="col-lg-4 col-md-6 mb-4">
        <Card>
          <Card.Body>
            <Card.Title>{curso.nombre}</Card.Title>
            <Card.Text>{curso.descripcion}</Card.Text>
            <Button onClick={() => handleEdit(curso.id)}>Editar</Button>
            <Button variant="danger" onClick={() => handleDelete(curso.id)}>
              Eliminar
            </Button>
          </Card.Body>
        </Card>
      </div>
    ));
    return (
      <>
        <Menu />
        <h1 className="text-center my-5">Lista de cursos</h1>
        <div className="container">
          <Button variant="success" className="my-3" onClick={handleCreate}>
            Crear curso
          </Button>
          <div className="row">{listaCursos}</div>
        </div>
      </>
    );
  } else {
    return <div>Error: Rol de usuario desconocido</div>;
  }
}

export default Cursos;


