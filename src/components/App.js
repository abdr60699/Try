import React from "react";
import Signup from "./Signup"
import  {Container}  from "react-bootstrap"
//import  AuthProvider from "../contexts/AuthContext";


function App() {
  return (

    

      <Container classname="d flex align-items-center justify-content-center"
        style={{ minHeight: "10vh" }}>
        <div className="W-100" style={{ maxWidth: "400px" }}>
          <Signup />

        </div>

      </Container>
    
  )
}

export default App;
