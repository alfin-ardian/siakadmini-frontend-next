import {Form, Button, Col} from 'react-bootstrap';
import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router'

export default function edit({data, onBack}){
    const router = useRouter()
    const [editForm,setEditForm] = useState(data);
    const [datas, setDatas] = useState();

    function save(e){
        e.preventDefault()
        Axios({
            url : `http://localhost:8000/mahasiswa/${data.id}`,
            method : 'PUT',
            data : editForm
        }).then(response =>{
            onBack(false)
        })
    }

    function getKurikulum(){
        Axios.get('http://localhost:8000/kurikulum')
        .then(function(response){
            setDatas(response.data)
        })
    }

    useEffect(() => {
        getKurikulum()
    },[])
    

    return(
        <div className='container-fluid'>
            <div className='row justify-content-md-center'>
                <div className='col-md-9'>
                <Form onSubmit={save}>
                    <Form.Group>
                        <Form.Label column sm="2">
                        nim
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="nim" value={editForm?.nim} />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        idperiode
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idperiode" value={editForm?.idperiode} onChange={e=>setEditForm({...editForm, idperiode:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        id kurikulum
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control as="select" placeholder="id kurikulum" value={editForm?.idkurikulum} onChange={e=>setEditForm({...editForm, idkurikulum:e.target.value})}>
                        <option>tambah idkurikulum</option>
                        {datas?.data.map((data, index) => (
                        <option>{data.idkurikulum}</option>
                        ))}
                        </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        idunit
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idunit" value={editForm?.idunit} onChange={e=>setEditForm({...editForm, idunit:e.target.value})} />
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
                        alamat
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="alamat" value={editForm?.alamat} onChange={e=>setEditForm({...editForm, alamat:e.target.value})} />
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
                        tempat lahir
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="tempat lahir" value={editForm?.tmpt_lahir} onChange={e=>setEditForm({...editForm, tmpt_lahir:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        tanggal lahir
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="date" placeholder="tanggal lahir" value={editForm?.tgllahir} onChange={e=>setEditForm({...editForm, tgllahir:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        email
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="email" placeholder="email" value={editForm?.email} onChange={e=>setEditForm({...editForm, email:e.target.value})}/>
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