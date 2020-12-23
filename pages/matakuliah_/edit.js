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
            url : `http://localhost:8000/matakuliah/${data.idmk}`,
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
                        idkurikulum
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idkurikulum" disabled value={editForm?.idkurikulum} />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        idmk
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idmk" disabled value={editForm?.idmk} onChange={e=>setEditForm({...editForm, idmk:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        nip
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="nip" disabled value={editForm?.nip} onchange={e=>setEditForm({...editForm, nip:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        idunit
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idunit" disabled value={editForm?.idunit} onChange={e=>setEditForm({...editForm, idunit:e.target.value})}/>
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        namamk
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="namamk" value={editForm?.namamk} onChange={e=>setEditForm({...editForm, namamk:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        sksmk
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="sksmk" disabled value={editForm?.sksmk} onChange={e=>setEditForm({...editForm, sksmk:e.target.value})}/>
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