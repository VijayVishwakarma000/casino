import React from 'react'
import './login.css'
const login = () => {
  return (
    <div>

        <div className="box">
            <div className="login-info">
              <div className="title">
                <div >LOGIN</div>
              </div>
              <div className="inputs">
                <input type="text" name="email" id="email" placeholder='Email' />
                
                <input type="password" name="password" id="pas" placeholder='Password' />
                <button type="submit">Login</button>
              </div>
            </div>
        </div>

    </div>
  )
}

export default login