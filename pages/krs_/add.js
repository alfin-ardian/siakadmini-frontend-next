import { Form, Col,Button, Alert } from 'react-bootstrap';
import Axios from 'axios';
import React, {useState, useEffect} from 'react'
import Router from 'next/router'

export default function add() {

    const [form,setForm] = useState();
    const [message, setMessage] = useState();
    const [mahasiswas, setMahasiswa] = useState();
    const [kelases, setkelases] = useState();

    function save(e){
        e.preventDefault()
        Axios({
            url: 'http://localhost:8000/krs',
            method: 'POST',
            data: form
        }).then(response=>{
            setMessage(response.data.message)
            Router.push('/krs')
        })
    }

    function getMahasiswa(){
        Axios.get('http://localhost:8000/mahasiswa')
        .then(function(response){
            setMahasiswa(response.data)
        })
    }

    function getKelas(){
        Axios.get('http://localhost:8000/kelas')
        .then(function(response){
            setkelases(response.data)
        })
    }


    useEffect(() => {
        getMahasiswa()
        getKelas()
    },[])

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
                        idkelas
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idkelas" value={form?.idkelas} onChange={e=>setForm({...form, idkelas:e.target.value})} />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        idkelas
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control as="select" placeholder="idkelas" value={form?.idkelas} onChange={e=>setForm({...form, idkelas:e.target.value})}>
                        <option>idkelas</option>
                        {kelases?.data.map((data, index) => (
                        <option>{data.idkelas}</option>
                        ))}
                        </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        nim
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="nim" value={form?.nim} onChange={e=>setForm({...form, nim:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        nim
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control as="select" placeholder="nim" value={form?.nim} onChange={e=>setForm({...form, nim:e.target.value})}>
                        <option>nim</option>
                        {mahasiswas?.data.map((data, index) => (
                        <option>{data.nim}</option>
                        ))}
                        </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        nilai huruf
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="nilai huruf"  value={form?.nhuruf} onChange={e=>setForm({...form, nhuruf:e.target.value})}/>
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        nangka
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="nangka" value={form?.nangka} onChange={e=>setForm({...form, nangka:e.target.value})}/>
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