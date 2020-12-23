import {Form, Button, Col} from 'react-bootstrap';
import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router'

export default function edit({data, onBack}){
    const router = useRouter()
    const [editForm,setEditForm] = useState(data);

    function save(e){
        e.preventDefault()
        Axios({
            url : `http://localhost:8000/kelas/${data.idkelas}`,
            method : 'PUT',
            data : editForm
        }).then(response =>{
            onBack(false)
        })
    }

    return(
        <div className='container-fluid'>
            <div className='row justify-content-md-center'>
                <div className='col-md-9'>
                <Form onSubmit={save}>
                    <Form.Group>
                        <Form.Label column sm="2">
                        Id kelas
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="id kelas" value={editForm?.idkelas } disabled/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        id unit
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="id unit" value={editForm?.idunit} disabled onChange={e=>setEditForm({...editForm, idunit:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        idkurikulum
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idkurikulum" value={editForm?.idkurikulum} disabled onchange={e=>setEditForm({...editForm, idkurikulum:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        idmk
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idmk"  value={editForm?.idmk} disabled onChange={e=>setEditForm({...editForm, idmk:e.target.value})}/>
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        namakelas
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="namakelas" value={editForm?.namakelas} onChange={e=>setEditForm({...editForm, namakelas:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Button variant="outline-info" type="submit">
                        Submit
                    </Button>{' '}
                    <Button variant="outline-success" type="submit" href="kelas">
                        Kembali
                    </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}