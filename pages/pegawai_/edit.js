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
            url : `http://localhost:8000/pegawai/${data.nip}`,
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
                        nip
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="nip" value={editForm?.nip} disabled />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        idjenjang
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idjenjang" value={editForm?.idjenjang} disabled onChange={e=>setEditForm({...editForm, idjenjang:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        nama
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="nama" value={editForm?.nama} onChange={e=>setEditForm({...editForm, nama:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        tanggal lahir
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="date" placeholder="tanggal lahir"  value={editForm?.tgl_lahir} onChange={e=>setEditForm({...editForm, tgl_lahir:e.target.value})}/>
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        tempat lahir
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="tempat lahir" value={editForm?.tmpt_lahir} onChange={e=>setEditForm({...editForm, tmpt_lahir:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        alamat
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="alamat" value={editForm?.alamat} onChange={e=>setEditForm({...editForm, alamat:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        hp
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="hp" value={editForm?.hp} onChange={e=>setEditForm({...editForm, hp:e.target.value})}/>
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
                    <Form.Group>
                        <Form.Label column sm="2">
                        jenis kelamin
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="jenis kelamin" value={editForm?.jk} onChange={e=>setEditForm({...editForm, jk:e.target.value})}/>
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