import React, { useState } from 'react'
import {Form, Button, Container, Card} from 'react-bootstrap';

const DemoForm = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

  return (
    <>
        <Container style={{width: "500px"}}>
            <Card className='m-3 p-5 shadow-lg'> 
                <Form >
                    <Form.Group className="mb-3">
                        <Form.Label>Email ID</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
                <p>Hello <b>{name}</b> and your email id is <b>{email}</b></p>
            </Card>
        </Container>
       
        
    </>
  )
}

export default DemoForm