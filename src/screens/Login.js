import React from 'react'

const Login = () => {
  return (
    <div>
      <form>
        <h1>ログイン</h1>
        <hr />
        <div className="uiForm">
          <div className='formField'>
            <label>ユーザー名</label>
            <input type="text" placeholder='ユーザー名' name="username" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login