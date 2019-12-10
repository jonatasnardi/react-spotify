import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "./Login.scss";
import { generateRandomString } from '../../Helpers/functions';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="login">
        <div className="container-buttons">

        </div>
        <h1 className="main-title">Clique no botão abaixo para gerar seu acesso</h1>
        <a href='http://super-hobbies.herokuapp.com/'>
          <div class="css-button">
            <p class="css-button-text">GERAR ACESSO</p>
            <div class="css-button-inner">
              <div class="reset-skew">
                <p class="css-button-inner-text">GERAR ACESSO</p>
              </div>
            </div>
          </div>
        </a>
      </section>
    );
  }
}

export default withRouter(Login);