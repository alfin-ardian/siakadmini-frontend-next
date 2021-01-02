import { Form, Col,Button, Alert } from 'react-bootstrap';
import Axios from 'axios';
import React, {useState, useEffect} from 'react'
import Router from 'next/router'

export default function addMengajar() {

    const [form,setForm] = useState();
    const [message, setMessage] = useState();
    const [kelases, setkelases] = useState();
    const [pegawais, setPegawais] = useState();

    function save(e){
        e.preventDefault()
        Axios({
            url: 'http://localhost:8000/mengajar',
            method: 'POST',
            data: form
        }).then(response=>{
            setMessage(response.data.message)
            Router.push('/mengajar')
        })
    }

    function getkelas(){
        Axios.get('http://localhost:8000/kelas')
        .then(function(response){
            setkelases(response.data)
        })
    }

    function getPegawai(){
        Axios.get('http://localhost:8000/pegawai')
        .then(function(response){
            setPegawais(response.data)
        })
    }

    useEffect(() => {
        getkelas()
        getPegawai()
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
                        nip
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="nip" value={form?.nip} onChange={e=>setForm({...form, nip:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        nip
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control as="select" placeholder="nip" value={form?.nip} onChange={e=>setForm({...form, nip:e.target.value})}>
                        <option>nip</option>
                        {pegawais?.data.map((data, index) => (
                        <option>{data.nip}</option>
                        ))}
                        </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        waktuajar1
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="time" placeholder="waktuajar1"  value={form?.waktuajar1} onChange={e=>setForm({...form, waktuajar1:e.target.value})}/>
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        waktuajar2
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="time" placeholder="waktuajar2" value={form?.waktuajar2} onChange={e=>setForm({...form, waktuajar2:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        sksmk
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="sksmk" value={form?.sksmk} onChange={e=>setForm({...form, sksmk:e.target.value})}/>
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