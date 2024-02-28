import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom'
import CategoriesForm from './components/categories/categories-form';
import Layout from './components/layout/nav/nav-menu';
import Stock from './stock/stock';
import storage from './utils/storage';
import AdminLogin from './views/auth/login/admin-login';
import UserLogin from './views/auth/login/user-login';
import UserSignUp from './views/auth/signUp/user-sign-up';
import Home from './views/home/home';

const AppRouter = () => {

  const [ userLogged, setUserLogged ] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getUserLogged = () => {
    const userToken = storage.get('token');
    return(userToken);
  };

  const handleSetUserLogged = (userLogged: any) => {
    localStorage.setItem('token', JSON.stringify(userLogged));
  };

  const handleSignOut = () => {
    setUserLogged(null);
    storage.remove('token');
    dispatch({ type: 'REMOVE_USER_INFO' })
    navigate('/inventory');
  };

  useEffect(() => {
    getUserLogged();
    setUserLogged(userLogged);
  }, [])
  

  return(
    <Routes>
      <Route path="/" element={ <Layout onSignOut={handleSignOut} /> }>
        <Route path="/user/login" element={
          <UserLogin onSetUserLogged={handleSetUserLogged} /> }
        />
        <Route path="/admin/login" element={
          <AdminLogin onSetUserLogged={handleSetUserLogged} /> }
        />
        <Route path="/user/registration" element={ <UserSignUp/> } />

        <Route path="/home" element={ <Home /> } />
        <Route path="/inventory" element={ <Stock /> } />

        <Route path="/category/bodies_encaje" element={ <CategoriesForm/> } />
      </Route>
    </Routes>
  );
};


export default AppRouter;