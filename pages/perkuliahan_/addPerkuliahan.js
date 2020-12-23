import { Form, Col,Button, Alert } from 'react-bootstrap';
import Axios from 'axios';
import React, {useState} from 'react'
import Router from 'next/router'

export default function addMengajar() {

    const [form,setForm] = useState();
    const [message, setMessage] = useState();

    function save(e){
        e.preventDefault()
        Axios({
            url: 'http://localhost:8000/perkuliahan',
            method: 'POST',
            data: form
        }).then(response=>{
            setMessage(response.data.message)
            Router.push('/perkuliahan')
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
                        idjadwal
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idjadwal" value={form?.idjadwal} onChange={e=>setForm({...form, idjadwal:e.target.value})} />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        idruang
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idruang" value={form?.idruang} onChange={e=>setForm({...form, idruang:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        idkelas
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idkelas"  value={form?.idkelas} onChange={e=>setForm({...form, idkelas:e.target.value})}/>
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        nim
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="nim" value={form?.nim} onChange={e=>setForm({...form, nim:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        tgljadwal
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="tgljadwal" value={form?.tgljadwal} onChange={e=>setForm({...form, tgljadwal:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        waktumulai
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="waktumulai" value={form?.waktumulai} onChange={e=>setForm({...form, waktumulai:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        waktuselesai
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="waktuselesai" value={form?.waktuselesai} onChange={e=>setForm({...form, waktuselesai:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        lokasi
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="lokasi" value={form?.lokasi} onChange={e=>setForm({...form, lokasi:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        sks
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="sks" value={form?.sks} onChange={e=>setForm({...form, sks:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        idunit
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idunit" value={form?.idunit} onChange={e=>setForm({...form, idunit:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        semmk
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="semmk" value={form?.semmk} onChange={e=>setForm({...form, semmk:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        idperiode
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idperiode" value={form?.idperiode} onChange={e=>setForm({...form, idperiode:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        keterangan
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="keterangan" value={form?.keterangan} onChange={e=>setForm({...form, keterangan:e.target.value})}/>
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