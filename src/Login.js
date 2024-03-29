import React from "react"; 

import { useNavigate, useParams } from "react-router-dom";

class InternalLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) { 
    event.preventDefault();
    let data = {
      nickname: this.state.nickname,
      password: this.state.password
    };

    let request = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json'
      }
    };
 
    fetch("http://localhost:3001/api/security/login", request)
      .then(res => {
        return res.json().then(body => {
          return {
            status: res.status,
            ok: res.ok,
            headers: res.headers,
            body: body
          };
        });
      })
      .then(result => {
        if (result.ok) {
          sessionStorage.setItem('token', result.body.token) 

         alert("token guardado")

          this.props.navigate("/");
        } else {
          alert("error")
        }
      },
        (error) => {
          console.log(error);
         
        }
      );
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nickname" className="form-label">Usuario</label>
              <input type="text" className="form-control" id="nickname" name="nickname" value={this.state.nickname} onChange={this.handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-primary" >
              <span class="material-symbols-outlined center-align" >
                
              </span>
              <span>
                Ingresar
              </span>
            </button> 
          </form>
        </div>
      </div>
    );
  }
}


export function Login(props) {
  const navigate = useNavigate();
  const params = useParams();

  return <InternalLogin navigate={navigate} params={params} />
}

export default Login;