import React,{useRef} from 'react'
import {Button, Container,Form} from 'react-bootstrap'
import{v4 as uuidV4}from 'uuid'
function Login({onSubmit}) {
    const idRef=useRef();

    function handleSubmit(e){
        e.preventDefault();
        onSubmit(idRef.current.value);
    }
    function createNewId(){
        onSubmit(uuidV4())
    }
  return (
    <Container className=' align-items-center d-flex' style={{height:'100vh'}}>
        <Form onSubmit={handleSubmit} className='w-100'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter your Id </Form.Label>
                <Form.Control type="text"  ref={idRef} required />
            </Form.Group>
            <Button type='submit' className='mr-2'>Login</Button>
            <Button variant='secondary' onClick={createNewId}>Create A new Id</Button>
        </Form>
      
    </Container>
  )
}

export default Login
