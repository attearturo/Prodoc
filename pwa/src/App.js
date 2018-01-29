import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    projects : [],
    user: null,
  }

  componentWillMount(){
    if(localStorage.getItem('user')){
      this.setState({
        user: JSON.parse(localStorage.getItem('user')),
        projects: JSON.parse(localStorage.getItem('projects'))
      });
    }
  }

  doLogin(evento){
    evento.preventDefault();
    //var form: any = evento.target;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Prodoc en PWA</h1>
        </header>

        <div id='login' className='landing'>
          <div id='bodyLogin'>
            <form className='login' onSubmit={e => this.doLogin(e)}>
              <img className='logo' src='http://res.cloudinary.com/attearturo/image/upload/v1516987589/logo_qbojon.png'/>
              <h4 className='subHeader'>Just design better</h4>
              <input id='userName' type='email' name='user' placeholder='email' required/>
              <input id='password' type='password' name='psw' placeholder='contraseña' required/>
              <button id='loginButton' type='submit' className='btnLogin'>Entrar</button>
              <p className='smallText'>¿Eres nuevo?<a className='goRegister' href='#'> Crear una cuenta</a></p>
            </form>
          </div>
        </div>


        <div id="login" className='landing'>
          <div id="bodyLogin">
            <form className='login' onSubmit={e => this.hacerLogin(e)}>
              <img className="logo" src="public/img/logo.png" />
              <h4 className='subHeader'>Just design better.</h4>
              <input id='usern' type="email" name="user" placeholder="email" required />
              <input id='psw' type="password" name="psw" placeholder="contraseña" required />
              <button id='entrada' type="submit" className="btnLogin btnLogin-primary btnLogin-block btnLogin-large">Entrar</button>
              <p className="subTexto">¿Eres nuevo? <a className="registro" href='#' onClick={() => this.setState({ pagina: 'registro' })}  >Crear una cuenta</a></p>
              <button id='entrada'
                type="submit"
                className="btnLogin btnLogin-primary btnLogin-block btnLogin-large google"
                onClick={this.handleAuth}>Empezar con Google</button>
            </form>
          </div>
        </div>
      </div>      
    );
  }
}

export default App;
