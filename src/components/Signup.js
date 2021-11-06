import React, { useRef } from 'react'
//import { Form, Button, Card } from 'react-bootstrap'
//import { useAuth } from '../contexts/AuthContext'


export default function Signup() {
    const emailref = useRef()
    const Passwordref = useRef()
   // const Signup = useAuth()
    // const Passwordconfirmationref = useRef()

// function handleSubmit(e){
// e.preventDefault()

// Signup (emailref.current.value,Passwordref.current.value)

// }


    return (

        <>
            <Card>
                <Card.Body>
                    <h2 className="W-100 text center mb-2"  >Sign Up</h2>
                   

                    <Form>
                        <Form.Group className="mb-3" id="formBasicemail">
                             {/* <Form.Lable className="mb-3">Email</Form.Lable>  */}
                            <Form.Control type="email" placeholder ="Email" ref={emailref} required />
                        </Form.Group>
                        <Form.Group id="Password">
                            {/* <Form.Lable>Password</Form.Lable> */}
                            <Form.Control type="Password" placeholder="Password" ref={Passwordref} required />
                        </Form.Group>
                        {/* <Form.Group id="Password-confirmation">
                             <Form.Lable>"Password-confirmation"</Form.Lable>   
                            <Form.Control type="Password-confirmation" ref={Passwordconfirmationref} required />
                        </Form.Group> */}
                        <Button className="w-100 text center mt-2">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="W-100 text-center mt-2">
                Already have an account? Log In
            </div>


        </>
    )
}
