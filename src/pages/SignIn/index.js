import React, { useContext } from 'react';
import { useLocation, Link, useHistory } from "react-router-dom";
import { globalC } from "../../context";
import './index.scss';
import { users } from "../../constants";

export default function SignIn() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");
    const location = useLocation();
    const history = useHistory();
    const { authLogin, loginData } = useContext(globalC);

    if (authLogin) {
        const { from } = location.state || { from: { pathname: "/home" } };
        history.replace(from);
    }
    document.getElementById('body').className='bg-login'

    const handleClick = () => {
        if (users[username] && users[username].password) loginData(username)
        else if (username !== "" && password !== "") setErrorMessage("usuario/contraseña incorrecta")
    }

    return (
        <div className="container sign-in">

            <div className="row justify-content-center">

                <div className="col-xl-10 col-lg-12 col-md-9">

                    <div className="card card-login o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">

                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div className="col-lg-6">

                                    <div className="p-5">
                                        <div className="text-center d-lg-none"> <img height="100" src="./img/logo.png" alt=""/> </div>
                                        <form className="user">
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-user"
                                                       id="username" aria-describedby="emailHelp"
                                                       placeholder="Usuario" required onChange={e =>setUsername(e.target.value)}/>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user"
                                                       id="password" placeholder="Contraseña" required onChange={e =>setPassword(e.target.value)}/>
                                            </div>
                                            {errorMessage &&
                                                <p style={{color:'red'}}>{errorMessage}</p>
                                            }
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input"
                                                           id="customCheck"/>
                                                    <label className="custom-control-label"
                                                           htmlFor="customCheck">Recordar</label>
                                                </div>
                                            </div>
                                            <button type="submit" onClick={handleClick} className="btn btn-primary btn-user btn-block">
                                                Ingresar
                                            </button>

                                        </form>
                                        <hr/>
                                        <div className="text-center">
                                            <a className="small" href="forgot-password.html">Olvido contraseña ?</a>
                                        </div>
                                        <div className="text-center">
                                            <Link className="small" to="/signup">Crear Cuenta!</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}