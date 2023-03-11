import React,{useEffect, useState} from "react";
function Cursos(props) {
  const [cursos, setCursos] = useState("");
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      if( isLoading ){

      
        fetch("http://localhost:3001/api/curso")
          .then((response) => response.json())
          .then((curso) => setCursos(curso.result), setIsLoading(false))}
      }, [isLoading]);
  const test = cursos;
  if (test!== undefined){
  const listatest = test.map((t)=>{console.log(t.nombre)})  
    
  }
  
  /* const listatest = test.map((t)=>{console.log(t)} )  */  
  /* const listcursos = cursos.result.map((curso)=>
    <li key={curso.id} >{curso.nombre}</li>
   ); */       
    return <h1>hola</h1>
  }
  export default Cursos;