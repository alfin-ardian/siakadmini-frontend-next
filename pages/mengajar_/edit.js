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
            url : `http://localhost:8000/mengajar/${data.idkelas}`,
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
                        <Form.Control type="text" placeholder="id kelas" value={editForm?.idkelas} disabled />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        nip
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="nip" value={editForm?.nip} disabled onChange={e=>setEditForm({...editForm, nip:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        waktuajar1
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="time" placeholder="waktuajar1" value={editForm?.waktuajar1} onChange={e=>setEditForm({...editForm, waktuajar1:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        waktuajar2
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="time" placeholder="waktuajar2"  value={editForm?.waktuajar2} onChange={e=>setEditForm({...editForm, waktuajar2:e.target.value})}/>
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        sksmk
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="sksmk" value={editForm?.sksmk} disabled onChange={e=>setEditForm({...editForm, sksmk:e.target.value})}/>
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