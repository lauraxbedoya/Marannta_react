import { useState } from "react";
import { Link } from "react-router-dom";
import AdminLogin from "../../views/auth/login/admin-login";
import ButtonSocialMedia from "../buttons/button-social-media";

type LoginType = {
  user: string,
  email: string,
  password: string,
  onLogin: () => any,
  onChange: (e: any) => any,
  loginTo: string,
  linkLogin: string
};

const LoginForm = ({ user, email, password, onLogin, onChange, loginTo, linkLogin }: LoginType) => {

  const [ check, setCheck ] = useState(true);

  const handleChecked = () => {
    setCheck(!check);
  };
  
  return (
    <div className="contenedor_loginForm">
        <div className="container-child">
          <div className="h5_clientes_registrados">
            <h5 className="clientes_registrados">{user}</h5>
          </div>
          <div className="text_campo_obligatorio">
            <span className="text-danger me-1">*</span>
            <label>Campos obligatorios</label>
          </div>

          <div className="email_password mt-3">
            <div className="span_email_password">
              <div className="email_span d-flex">
                <label className="mt-1 ms-4">Email</label>
                <span className="text-danger mt-1 ms-1">*</span>
              </div>
              <div className="password_span d-flex">
                <label className="mt-3 ms-4">Contraseña</label>
                <span className="text-danger mt-3 ms-1">*</span>
              </div>
            </div>

            <div className="inputs_email_password">
              <input
                className="input_email"
                placeholder="Correo Electrónico"
                name="email"
                type="email"
                value={email}
                onChange={onChange}
              />
              <input
                className="input_password"
                placeholder="Contraseña"
                name="password"
                type="password"
                value={password}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="noCerrarSesion">
            <div>
              <input
                type="checkbox"
                checked={check}
                onChange={handleChecked}  
              />
              <label>No cerrar sesión</label>
            </div>
            <div>
              <button className="button_remenber_password">¿Olvidaste tu contraseña?</button>
            </div>
            <div>
              <Link to={linkLogin}
                className="button_remenber_password"
              >{loginTo}</Link>
            </div>
          </div>

          <div>
            <button onClick={onLogin}>Entrar</button>
          </div>


          {/* <div className="d-flex flex-column w-100">
            <ButtonSocialMedia
              onClick={handleFacebook}
              text="Entrar"
            />
            <ButtonSocialMedia
              onClick={handleFacebook}
              text="Ingresar con Facebook"
            />
          </div> */}

          <Link to="/" className="button_cancelar">Cancelar</Link>
        </div>
    </div>
  );
};

export default LoginForm;