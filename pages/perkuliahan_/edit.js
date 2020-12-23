import {Form, Button, Col} from 'react-bootstrap';
import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router'

export default function edit({data, onBack}){
    const router = useRouter()
    const [editForm,setEditForm] = useState(data );

    function save(e){
        e.preventDefault()
        Axios({
            url : `http://localhost:8000/perkuliahan/${data.id}`,
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
                        idjadwal
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idjadwal" value={editForm?.idjadwal} />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        idruang
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idruang" value={editForm?.idruang} onChange={e=>setEditForm({...editForm, idruang:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        idkelas
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idkelas" value={editForm?.idkelas} onChange={e=>setEditForm({...editForm, idkelas:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        tgljadwal
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="date" placeholder="tgljadwal"  value={editForm?.tgljadwal} onChange={e=>setEditForm({...editForm, tgljadwal:e.target.value})}/>
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        waktumulai
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="time" placeholder="waktumulai" value={editForm?.waktumulai} onChange={e=>setEditForm({...editForm, waktumulai:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        waktuselesai
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="time" placeholder="waktuselesai" value={editForm?.waktuselesai} onChange={e=>setEditForm({...editForm, waktuselesai:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        lokasi
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="lokasi" value={editForm?.lokasi} onChange={e=>setEditForm({...editForm, lokasi:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        sks
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="sks" value={editForm?.sks} onChange={e=>setEditForm({...editForm, sks:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        idunit
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idunit" value={editForm?.idunit} onChange={e=>setEditForm({...editForm, idunit:e.target.value})}/>
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
                    <Form.Group>
                        <Form.Label column sm="2">
                        idperiode
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idperiode" value={editForm?.idperiode} onChange={e=>setEditForm({...editForm, idperiode:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        keterangan
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="keterangan" value={editForm?.keterangan} onChange={e=>setEditForm({...editForm, keterangan:e.target.value})}/>
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