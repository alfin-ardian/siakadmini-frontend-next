import { Form, Col,Button, Alert } from 'react-bootstrap';
import Axios from 'axios';
import React, {useState} from 'react'
import Router from 'next/router'

export default function addKurikulum() {

    const [form,setForm] = useState();
    const [message, setMessage] = useState();

    function save(e){
        e.preventDefault()
        Axios({
            url: 'http://localhost:8000/periode',
            method: 'POST',
            data: form
        }).then(response=>{
            setMessage(response.data.message)
            Router.push('/periode')
        })
    }

    console.log(form);

    return(
        <div className='container-fluid'>
            <div className='row justify-content-md-center'>
                <div className='col-md-2'>
                </div>
                <div className='col-md-10'>
                    {/* { message && (
                    <Alert variant="success">
                    <Alert.Heading>{message}</Alert.Heading>
                    </Alert>
                    )} */}
                    <Form onSubmit={save}>
                    <Form.Group>
                        <Form.Label column sm="2">
                        idperiode
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idperiode" value={form?.idperiode} onChange={e=>setForm({...form, idperiode:e.target.value})} />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        idtahunajaran
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idtahunajaran" value={form?.idtahunajaran} onChange={e=>setForm({...form, idtahunajaran:e.target.value})} />
                        </Col>
                    </Form.Group> 
                     <Form.Group>
                        <Form.Label column sm="2">
                        namaperiode
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="namaperiode" value={form?.namaperiode} onChange={e=>setForm({...form, namaperiode:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Button variant="outline-info" type="submit">
                        Submit
                    </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}