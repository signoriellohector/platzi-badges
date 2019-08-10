import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import LogoConf from '../images/platziconf-logo.svg';
import Astronauts from '../images/astronauts.svg';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Home">
          <div className="container">
            <div className="row">
              <div className="Home__col col-12 col-md-4">
                <img
                  src={LogoConf}
                  alt="Logo Conf"
                  className="img-fluid mb-2"
                />
                <h3>Print your badges</h3>
                <p>The easiest way to manage your conference</p>
                <div className="button__home">
                  <Link to="/Badges" className="btn btn-primary">
                    Start now
                  </Link>
                </div>
              </div>
              <div className="Home__col d-none d-md-block col-md-8">
                <img
                  src={Astronauts}
                  alt="Logo Astronauts"
                  className="img-fluid p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
