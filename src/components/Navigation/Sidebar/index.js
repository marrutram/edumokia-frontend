import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickMenuOpen } from '../../../redux/actions';
import { globalC } from "../../../context";
import { users } from "../../../constants";
import './index.scss';

export function Sidebar( { clickMenuOpen, toggled } ) {
    const { authLogin } = useContext(globalC);
    const menu = users[authLogin?.user]?.menu
    return (
      <ul className={toggled ? 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled' : 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'} id="accordionSidebar">
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div className="sidebar-brand-icon">
              <img className="img-profile rounded-circle" src="../../img/logo.png" />
          </div>
          <div className="sidebar-brand-text mx-2">EDUMOKIA</div>
        </a>

          {
              menu.home &&
              <>
                  <hr className="sidebar-divider my-0" />
                  <li className="nav-item">
                      <Link className="nav-link" to="/home">
                          <i className="fas fa-fw fa-home"></i>
                          <span>Inicio</span>
                      </Link>
                  </li>
              </>
          }

          <hr className="sidebar-divider d-none d-md-block" />

          <div className="text-center d-none d-md-inline">
              <button onClick={() => { clickMenuOpen() }} className="rounded-circle border-0" id="sidebarToggle"></button>
          </div>

      </ul>)
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickMenuOpen }, dispatch);

const mapStateToProps = store => ({
  toggled: store.menuState.menuOpen
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);