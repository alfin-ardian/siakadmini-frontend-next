import { Form, Col,Button, Alert } from 'react-bootstrap';
import Axios from 'axios';
import React, {useState} from 'react'
import Router from 'next/router'

export default function addPegawai() {

    const [form,setForm] = useState();
    const [message, setMessage] = useState();

    function save(e){
        e.preventDefault()
        Axios({
            url: 'http://localhost:8000/pegawai',
            method: 'POST',
            data: form
        }).then(response=>{
            setMessage(response.data.message)
            Router.push('/pegawai')
        })
    }

    console.log(form);

    return(
        <div className='container-fluid'>
            <div className='row justify-content-md-center'>
                <div className='col-md-2'>
                </div>
                <div className='col-md-10'>
                    {/* { message && (
                    <Alert variant="success">
                    <Alert.Heading>{message}</Alert.Heading>
                    </Alert>
                    )} */}
                    <Form onSubmit={save}>
                    <Form.Group>
                        <Form.Label column sm="2">
                        nip
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="nip" value={form?.nip} onChange={e=>setForm({...form, nip:e.target.value})} />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        idjenjang
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idjenjang" value={form?.idjenjang} onChange={e=>setForm({...form, idjenjang:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        nama
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="nama"  value={form?.nama} onChange={e=>setForm({...form, nama:e.target.value})}/>
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        tgl_lahir
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="date" placeholder="tgl_lahir" value={form?.tgl_lahir} onChange={e=>setForm({...form, tgl_lahir:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        tmpt_lahir
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="tmpt_lahir" value={form?.tmpt_lahir} onChange={e=>setForm({...form, tmpt_lahir:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        alamat
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="alamat" value={form?.alamat} onChange={e=>setForm({...form, alamat:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        hp
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="hp" value={form?.hp} onChange={e=>setForm({...form, hp:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        email
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="email" value={form?.email} onChange={e=>setForm({...form, email:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        jk
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="jk" value={form?.jk} onChange={e=>setForm({...form, jk:e.target.value})}/>
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