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
            url : `http://localhost:8000/perwalian/${data.id}`,
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
                        idperiode
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" disabled placeholder="idperiode" value={editForm?.idperiode} />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        nim
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" disabled placeholder="nim" value={editForm?.nim} onChange={e=>setEditForm({...editForm, nim:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        nip
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" disabled placeholder="nip" value={editForm?.nip} onChange={e=>setEditForm({...editForm, nip:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        ips
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="ips"  value={editForm?.ips} onChange={e=>setEditForm({...editForm, ips:e.target.value})}/>
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        ipk
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="ipk" value={editForm?.ipk} onChange={e=>setEditForm({...editForm, ipk:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        semmhs
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="semmhs" value={editForm?.semmhs} onChange={e=>setEditForm({...editForm, semmhs:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        skstotal
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="skstotal" value={editForm?.skstotal} onChange={e=>setEditForm({...editForm, skstotal:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        semmk
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="semmk" value={editForm?.semmk} onChange={e=>setEditForm({...editForm, semmk:e.target.value})}/>
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