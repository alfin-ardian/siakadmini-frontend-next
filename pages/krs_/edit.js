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
            url : `http://localhost:8000/kelas/${data.id}`,
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
                        <Form.Control type="text" placeholder="id kelas" value={editForm?.idkelas} />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        nama kelas
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="nama kelas" value={editForm?.namakelas} onChange={e=>setEditForm({...editForm, namakelas:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        alamat
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="alamat" value={editForm?.alamat} onchange={e=>setEditForm({...editForm, alamat:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        hp
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="hp"  value={editForm?.hp} onChange={e=>setEditForm({...editForm, hp:e.target.value})}/>
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        email
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="email" value={editForm?.email} onChange={e=>setEditForm({...editForm, email:e.target.value})}/>
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