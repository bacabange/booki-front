import React, { Component } from 'react';
import logo from '../../assets/images/Logo.png';

export default class SignInPage extends Component {
  render() {
    return (
      <div className="container">

        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-half">

                <div class="columns is-centered">
                  <figure class="image is-128x128">
                    <img src={logo} alt="Booki"/>
                  </figure>
                </div>

                <h1 className="title">Sing in</h1>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input" type="text" placeholder="example@booki.co" />
                  </div>
                  {/* <p className="help">This is a help text</p> */}
                </div>

                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input className="input" type="password" placeholder="Don't write 123456" />
                  </div>
                  {/* <p className="help">This is a help text</p> */}
                </div>

                <button class="button is-primary">Primary</button>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>Booki</strong> by <a href="https://stiven.dev">Stiven Castillo</a>.
            </p>
          </div>
        </footer>
      </div>
    )
  }
}
