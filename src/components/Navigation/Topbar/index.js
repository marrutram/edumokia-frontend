import React, {useContext} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickMenuOpen } from '../../../redux/actions';
import { users } from "../../../constants";
import { globalC } from "../../../context";

const Topbar = ({clickMenuOpen}) => {
    const logout = () => {
      localStorage.clear();
    }
    const { authLogin } = useContext(globalC);
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

        {/* <!-- Sidebar Toggle (Topbar) --> */}
        <button onClick={() => { clickMenuOpen() }}  id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars"></i>
        </button>

        {/* <!-- Topbar Search --> */}
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <input type="text" className="form-control bg-light border-0 small" placeholder="Búsqueda..." aria-label="Search" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>

        {/* <!-- Topbar Navbar --> */}
        <ul className="navbar-nav ml-auto">

          {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
          <li className="nav-item dropdown no-arrow d-sm-none">
            <a className="nav-link dropdown-toggle" href="e-learning-frontend/src/components/Navigation/Topbar/index#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-search fa-fw"></i>
            </a>
            {/* <!-- Dropdown - Messages --> */}
            <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
              <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                  <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          {/* <!-- Nav Item - Alerts --> */}
          <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-bell fa-fw"></i>
              {/* <!-- Counter - Alerts --> */}
              <span className="badge badge-danger badge-counter">3+</span>
            </a>
            {/* <!-- Dropdown - Alerts --> */}
            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
              <h6 className="dropdown-header">
                Notificaciones
                  </h6>
              <a className="dropdown-item d-flex align-items-center" href="">
                <div className="mr-3">
                  <div className="icon-circle bg-primary">
                    <i className="fas fa-file-alt text-white"></i>
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">Nuevos curso disponibles</div>
                  <span>Herramientas digitales!</span>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="">
                <div className="mr-3">
                  <div className="icon-circle bg-success">
                    <i className="fas fa-donate text-white"></i>
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">Nueva Noticia</div>
                  La importancia de la comunicación en las organizaciones!
                    </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="">
                <div className="mr-3">
                  <div className="icon-circle bg-warning">
                    <i className="fas fa-exclamation-triangle text-white"></i>
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">Inactividad </div>
                  Tomaté un tiempo para terminar el curso.
                    </div>
              </a>
              <a className="dropdown-item text-center small text-gray-500" href="">Ver más alertas</a>
            </div>
          </li>

          {/* <!-- Nav Item - Messages --> */}
          <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-envelope fa-fw"></i>
              {/* <!-- Counter - Messages --> */}
              <span className="badge badge-danger badge-counter">7</span>
            </a>
            {/* <!-- Dropdown - Messages --> */}
            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
              <h6 className="dropdown-header">
                Mensajes
                  </h6>
              <a className="dropdown-item d-flex align-items-center" href="">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src="https://source.unsplash.com/AU4VPcFN4LE/60x60" alt="" />
                  <div className="status-indicator"></div>
                </div>
                <div>
                  <div className="text-truncate">Felicitaciones ya terminaste tú primer curso.</div>
                  <div className="small text-gray-500">Jae Chun · 1d</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src="https://source.unsplash.com/CS2uCrpNzJY/60x60" alt="" />
                  <div className="status-indicator bg-warning"></div>
                </div>
                <div>
                  <div className="text-truncate">Calificación de desempeño disponible.</div>
                  <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="" />
                  <div className="status-indicator bg-success"></div>
                </div>
                <div>
                  <div className="text-truncate">Buen trabajo</div>
                  <div className="small text-gray-500">Chicken the Dog · 2w</div>
                </div>
              </a>
              <a className="dropdown-item text-center small text-gray-500" href="">Leer más mensajes</a>
            </div>
          </li>

          <div className="topbar-divider d-none d-sm-block"></div>

          {/* <!-- Nav Item - User Information --> */}
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">{ users[authLogin?.user]?.nickname }</span>
              <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
            </a>
            {/* <!-- Dropdown - User Information --> */}
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
              <a className="dropdown-item" href="">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Perfil
                  </a>
              <a className="dropdown-item" href="">
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Configuración
                  </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/" onClick={() => logout()}>
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Salir
             </a>
            </div>
          </li>

        </ul>

      </nav>

    )
}


const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickMenuOpen }, dispatch);

const mapStateToProps = store => ({
  toggled: store.menuState.menuOpen
});

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);