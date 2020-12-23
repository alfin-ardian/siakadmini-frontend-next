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
            url : `http://localhost:8000/transkrip/${data.nangka}`,
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
                        <Form.Control type="text" placeholder="idunit" disabled value={editForm?.idunit} />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        idkurikulum
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idkurikulum" disabled value={editForm?.idkurikulum} onChange={e=>setEditForm({...editForm, idkurikulum:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        idmk
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idmk" value={editForm?.idmk} disabled onChange={e=>setEditForm({...editForm, idmk:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        nim
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="nim"  value={editForm?.nim} disabled onChange={e=>setEditForm({...editForm, nim:e.target.value})}/>
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        nangka
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="nangka" value={editForm?.nangka} onChange={e=>setEditForm({...editForm, nangka:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        nhuruf
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="nhuruf" value={editForm?.nhuruf} onChange={e=>setEditForm({...editForm, nhuruf:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        islulus
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="islulus" value={editForm?.islulus} onChange={e=>setEditForm({...editForm, islulus:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        isulang
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="isulang" value={editForm?.isulang} onChange={e=>setEditForm({...editForm, isulang:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        idperiode
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idperiode" value={editForm?.idperiode} disabled onChange={e=>setEditForm({...editForm, idperiode:e.target.value})}/>
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