import { Form, Col,Button, Alert } from 'react-bootstrap';
import Axios from 'axios';
import React, {useState, useEffect} from 'react'
import Router from 'next/router'

export default function addUnit() {

    const [form,setForm] = useState();
    const [message, setMessage] = useState();
    const [kurikulums, setKurikulums] = useState();
    const [units, setUnits] = useState();
    const [pegawais, setPegawais] = useState();

    function save(e){
        e.preventDefault()
        Axios({
            url: 'http://localhost:8000/matakuliah',
            method: 'POST',
            data: form
        }).then(response=>{
            setMessage(response.data.message)
            Router.push('/matakuliah')
        })
    }

    function getKurikulum(){
        Axios.get('http://localhost:8000/kurikulum')
        .then(function(response){
            setKurikulums(response.data)
        })
    }

    function getUnit(){
        Axios.get('http://localhost:8000/unit')
        .then(function(response){
            setUnits(response.data)
        })
    }

    
    function getPegawai(){
        Axios.get('http://localhost:8000/pegawai')
        .then(function(response){
            setPegawais(response.data)
        })
    }

    useEffect(() => {
        getKurikulum()
        getUnit()
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
                        idkurikulum
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control as="select" placeholder="idkurikulum" value={form?.idkurikulum} onChange={e=>setForm({...form, idkurikulum:e.target.value})}>
                        <option>idkurikulum</option>
                        {kurikulums?.data.map((data, index) => (
                        <option>{data.idkurikulum}</option>
                        ))}
                        </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        idmk
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idmk" value={form?.idmk} onChange={e=>setForm({...form, idmk:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        nip
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control as="select" placeholder="nip"  value={form?.nip} onChange={e=>setForm({...form, nip:e.target.value})}>
                        <option>idunit</option>
                        {pegawais?.data.map((data, index) => (
                        <option>{data.nip}</option>
                        ))}
                        </Form.Control>
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        idunit
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control as="select" placeholder="idunit" value={form?.idunit} onChange={e=>setForm({...form, idunit:e.target.value})}>
                        <option>idunit</option>
                        {units?.data.map((data, index) => (
                        <option>{data.idunit}</option>
                        ))}
                        </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        namamk
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="namamk" value={form?.namamk} onChange={e=>setForm({...form, namamk:e.target.value})}/>
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