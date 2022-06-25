import { useState } from "react";

function Login(props) {
  const [state, setState] = useState({
    password: '',
    email: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleLogin(state);
  }

  return(
    <main>
      <section className="auth">
        <h2 className="auth__title">Вход</h2>
        <form className="auth__form" onSubmit={handleSubmit} >
          <fieldset className="auth__fieldset">
            <label className="auth__label">
              <input className="auth__input" type="email" name="email" id="email" placeholder="Email" required value={state.email} onChange={handleChange} />
            </label>
            <label className="auth__label">
              <input className="auth__input" type="password" name="password" id="password" placeholder="Пароль" required value={state.password} onChange={handleChange} />
            </label>
          </fieldset>
          <button className="auth__submit-button">Войти</button>
        </form>
      </section>
    </main>
  )
}

export default Login;
