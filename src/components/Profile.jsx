import React from "react"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

const Profile = (props) => {
  const [user,setUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    const base64 = localStorage.getItem("base64")

    if(base64){

    } else {
      history.push("/login")
    }
  })

}

export default Profile
