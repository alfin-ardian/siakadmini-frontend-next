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
            url : `http://localhost:8000/unit/${data.idunit}`,
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
                        idunit
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idunit" value={editForm?.idunit} />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        nama unit
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="nama unit" value={editForm?.namaunit} onChange={e=>setEditForm({...editForm, namaunit:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        levelunit
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="levelunit" value={editForm?.levelunit} onchange={e=>setEditForm({...editForm, levelunit:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        idjenjang
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idjenjang"  value={editForm?.idjenjang} onChange={e=>setEditForm({...editForm, idjenjang:e.target.value})}/>
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        akreditasi
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="akreditasi" value={editForm?.akreditasi} onChange={e=>setEditForm({...editForm, akreditasi:e.target.value})}/>
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