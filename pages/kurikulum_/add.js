import { Form, Col,Button, Alert } from 'react-bootstrap';
import Axios from 'axios';
import React, {useState} from 'react'
import Router from 'next/router'

export default function add() {

    const [form,setForm] = useState();
    const [message, setMessage] = useState();

    function save(e){
        e.preventDefault()
        Axios({
            url: 'http://localhost:8000/kurikulum',
            method: 'POST',
            data: form
        }).then(response=>{
            setMessage(response.data.message)
            Router.push('/kurikulum')
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
                        idkurikulum
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idkurikulum" value={form?.idkurikulum} onChange={e=>setForm({...form, idkurikulum:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        idmk
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idmk" value={form?.idmk} onChange={e=>setForm({...form, idmk:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        semmk
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="semmk"  value={form?.semmk} onChange={e=>setForm({...form, semmk:e.target.value})}/>
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        sksmk
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="sksmk" value={form?.sksmk} onChange={e=>setForm({...form, sksmk:e.target.value})}/>
                        </Col>
                    </Form.Group>
                     <Form.Group>
                        <Form.Label column sm="2">
                        namamk
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="namamk" value={form?.namamk} onChange={e=>setForm({...form, namamk:e.target.value})}/>
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