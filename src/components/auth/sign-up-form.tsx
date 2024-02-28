import { useState } from "react";
import { Link } from "react-router-dom";
import { UserType } from "../../utils/types";


const formState: UserType = {
  name: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
  dateOfBirth: '',
  gender: '',
  offers: false,
  politics: false
};

const SignUpForm = () => {

  const [values, setValues] = useState([formState]);

  const handleInputChange = (e: any) => {
    setValues(
      {
        ...values,
        [e.target.name]: e.target.value,
      }
    )
  };

  const handleSignUp = () => {};

  return (
    <div className="contenedor_signUpForm">
      <div className="container-child">
        <div className="texto_nuevosclientes">
          <h5 className="text-center">NUEVOS CLIENTES</h5>
        </div>
      </div>
      <h6 className="text_bienvenida">Bienvenidos a Marannta. Registrate y sé parte de nuestro Team Marannta.</h6>
      <div className="text_campo_obligatorio">
        <span className="text-danger me-1">*</span>
        <label>Campos obligatorios</label>
      </div>

      <div>
        <div className="mt-3">
          <label>Nombre</label>
          <span className="text-danger ms-1">*</span>
          <input
            name="name"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="mt-2">
          <label>Apellidos</label>
          <span className="text-danger ms-1">*</span>
          <input
            name="surname"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="mt-2">
          <label>Correo electrónico</label>
          <span className="text-danger ms-1">*</span>
          <input
            name="email"
            onChange={handleInputChange}
            type="email"
          ></input>
        </div>
        <div className="mt-2">
          <label>Contraseña</label>
          <span className="text-danger ms-1">*</span>
          <input
            name="password"
            onChange={handleInputChange}
            type="password"
          ></input>
        </div>
        <div className="mt-2">
          <label>Confirmar contraseña</label>
          <span className="text-danger ms-1">*</span>
          <input
            name="confirmPassword"
            onChange={handleInputChange}
            type="password"
          ></input>
        </div>
        <div className="mt-2">
          <label>Fecha de nacimiento</label>
          <span className="text-danger ms-1">*</span>
          <input
            name="dateOfBirth"
            onChange={handleInputChange}
            type="date"></input>
        </div>
        <div className="mt-2">
          <label>Sexo</label>
          <span className="text-danger ms-1">*</span>
          <select
            name="gender"
            onChange={handleInputChange}
          >
            <option
              value="0"
            >Seleccionar...</option>
            <option
              value="masculino"
            >Masculino</option>
            <option
              value="femenino"
            >Femenino</option>
          </select>
        </div>

        <div>
          <div className="mt-4">
            <input
              type="checkbox"
            ></input>
            <label className="ms-2">Deseo recibir ofertas por email.</label>
          </div>
          <div className="mt-2">
            <input
              type="checkbox"
            ></input>
            <label className="ms-2">Acepto política y tratamiento de mis datos.</label>
          </div>
        </div>
        <button
          className="mt-3"
          onClick={handleSignUp}
        >Enviar</button>
        <Link to="/" className="button_cancelar mt-3">Cancelar</Link>
      </div>
    </div>
  );
};

export default SignUpForm;