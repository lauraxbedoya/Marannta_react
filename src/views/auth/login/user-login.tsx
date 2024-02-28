import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../../components/auth/login-form";

const UserLogin = (props: any) => {

  const [ values, setValues ] = useState({
    email: 'sashamaria@hotmail.com',
    password: 'password123'
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if(!values.email || !values.password) {
      alert("Todos los campos son requeridos");
      return;
    };

    try {
      const url = 'http://localhost:3010/user/login';
      const respStream = await fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(values)
      });
      const resp = await respStream.json();
      if(resp) {
        alert('Admin logado exitosamente');
        props.onSetUserLogged(resp.accessToken);
        dispatch({ type: 'STORE_USER_INFO', payload: { ...resp.user, isAdmin: false } });
        navigate('/home');
      } else {
        alert("incorrecto")
      }
    } catch (error) {
      console.log(error)
    }
  };

  const handleInputChange = (e: any) => {
    setValues(
			{
				...values,
				[e.target.name]: e.target.value,
			}
		);
  };

  return(
    <LoginForm
      user="USUARIOS REGISTRADOS"
      email={values.email}
      password={values.password}
      onLogin={handleLogin}
      onChange={handleInputChange}
      loginTo="Entrar como administrador"
      linkLogin="/admin/login"
    />
  );
};

export default UserLogin;