import { Form, Col,Button, Alert } from 'react-bootstrap';
import Axios from 'axios';
import React, {useState} from 'react'
import Router from 'next/router'

export default function addUnit() {

    const [form,setForm] = useState();
    const [message, setMessage] = useState();

    function save(e){
        e.preventDefault()
        Axios({
            url: 'http://localhost:8000/unit',
            method: 'POST',
            data: form
        }).then(response=>{
            setMessage(response.data.message)
            Router.push('/unit')
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
                        idunit
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idunit" value={form?.idunit} onChange={e=>setForm({...form, idunit:e.target.value})} />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        namaunit
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="namaunit" value={form?.namaunit} onChange={e=>setForm({...form, namaunit:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        level unit
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="level unit"  value={form?.levelunit} onChange={e=>setForm({...form, levelunit:e.target.value})}/>
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        idjenjang
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idjenjang" value={form?.idjenjang} onChange={e=>setForm({...form, idjenjang:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        akreditasi
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="akreditasi" value={form?.akreditasi} onChange={e=>setForm({...form, akreditasi:e.target.value})}/>
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