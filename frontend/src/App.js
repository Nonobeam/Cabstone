import React from 'react';
import { useEffect } from 'react'
import jwt_decode from "jwt-decode"
import './App.css'
import Register from "./component/pages/public/register/Register";
import MemberTable from "./component/pages/private/MemberTable";

function App() {
  const google = window.google

  function handleCallbackResponse(response){
    console.log("TOKEN: " + response.credential)
    var userObject = jwt_decode(response.credential)
    console.log(userObject)
  }

  useEffect(() =>{
    google.accounts.id.initialize({
      client_id: "155692422040-jt9bej9soiqtdqkp97fq57f55i7le10p.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    )

  }, []);

  return (
    <div>
      <Register/>
      <MemberTable/>
      <div id = "signInDiv"></div>
    </div>
  )

}
export default App;