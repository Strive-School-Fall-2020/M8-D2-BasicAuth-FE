import React from "react"
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import "../App.css"

const LoginComponent = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()

  const login = async ()=> {
    const base64EmailAndPW = btoa(email + ":" + password) // encoding in base64
    const resp = await fetch("http://localhost:3001/users/me", {
      headers: {
        Authorization: "Basic "+ base64EmailAndPW
      }
    })

    if(resp.ok){
      localStorage.setItem("base64", base64EmailAndPW)
      history.push("/profile")
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="*********"
          value={password}
          onChange={e => setPassword(e.target.value)}
        ></input>
        <input type="button" onClick={login}></input>
      </header>
    </div>
  )
}

export default LoginComponent
