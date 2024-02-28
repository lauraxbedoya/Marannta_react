import { Link, Outlet, useNavigate } from "react-router-dom";
import useStyles from "../../styles/layout-style";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Button } from "@material-ui/core";
import { useState } from "react";

const NavMenu = (props: any) => {
  const classes = useStyles();
  const { userInfo } = useSelector((state: RootState) => state.sessions);

  return (
    <div>
      <div className={classes.container_layout}>
        <div className={classes.contact_company}>
          <p className={classes.track_your_order}>Sigue tu pedido</p>
          <p>Contáctanos</p>
        </div>
        <div className={classes.know_us_company}>
          <p className={classes.know_us}>Conócenos</p>
          <p>Servicio al cliente</p>
        </div>
      </div>

      <div className={classes.search_bar}>
        <div className={classes.home_inventory}>
          <Link to="/home" className={classes.name_company}>MARANNTA</Link>
          {userInfo?.isAdmin &&
            <Link to="/inventory" className={classes.route_inventory}>Inventorario</Link>
          }
        </div>
        <div className={classes.search}>
          <SearchIcon className={classes.icon_search} />
          <input
            className={classes.input_search}
            type="search"
            placeholder="Busca por referencia o categoría..."
          />
        </div>
        <div className={classes.buttons_login}>
          {userInfo ?
            <button
              onClick={props.onSignOut}
            >Cerrar Sesion</button> :
            <div>
              <Link to="/user/login"
                className={classes.user_login}
              >Entrar</Link>
              <Link to="/user/registration" className={classes.user_login}>REGISTRARTE</Link>
            </div>
          }
        </div>
        <ShoppingCartIcon />
      </div>

      <div className={classes.bar_category}>
        <Link
          to="/category/bodies_encaje"
        >Bodies en Encaje</Link>
        <Link
          to="/category/bodies"
        >Otros Bodies</Link>
        <Link
          to="/category/crop_Tops"
        >Crop Tops</Link>
        <Link
          to="/category/piel_durazno"
        >Piel de Durazno</Link>
      </div>

      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default NavMenu;