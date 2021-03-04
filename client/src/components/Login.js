import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { v4 } from 'uuid'

function Login({ onIdSubmit, id }) {
    const idRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()

        onIdSubmit(idRef.current.value)
    }

    function createNewId() {
        onIdSubmit(v4())
    }
    return (
        <Container className='align-items-center d-flex form'>
            <Form onSubmit={handleSubmit} className='w-100'>
                <Form.Group>
                    <Form.Label>Enter your ID</Form.Label>
                    <Form.Control required type='text' ref={idRef}></Form.Control>
                </Form.Group>
                <Button type='submit' className='mr-3'>Login</Button>
                <Button onClick={createNewId} variant='dark'>Create A New Id</Button>
            </Form>
        </Container>
    )
}

export default Login
