import React from 'react';
import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';

const Home = () => {

  return (
      <div className="home">
          <div id="wrapper">
              <Sidebar />
              <div id="content-wrapper" className="d-flex flex-column">
                  <div id="content">
                      <Topbar />
                      <div className="container-fluid">
                          <div className="container-fluid">
                              <div className="card shadow">
                                  <div className="card-body m-3">
                                      test
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Home;
