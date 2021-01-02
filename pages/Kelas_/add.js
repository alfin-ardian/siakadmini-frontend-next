import { Form, Col,Button, Alert } from 'react-bootstrap';
import Axios from 'axios';
import React, {useState, useEffect} from 'react'
import Router from 'next/router'

export default function addKls() {

    const [form,setForm] = useState();
    const [message, setMessage] = useState();
    const [units, setUnits] = useState();
    const [datas, setDatas] = useState();
    const [mks, setMks] = useState();

    function save(e){
        e.preventDefault()
        Axios({
            url: 'http://localhost:8000/kelas',
            method: 'POST',
            data: form
        }).then(response=>{
            setMessage(response.data.message)
            Router.push('/kelas')
        })
    }

    
    function getKurikulum(){
        Axios.get('http://localhost:8000/kurikulum')
        .then(function(response){
            setDatas(response.data)
        })
    }

    
    function getMks(){
        Axios.get('http://localhost:8000/matakuliah')
        .then(function(response){
            setMks(response.data)
        })
    }
    
    function getUnit(){
        Axios.get('http://localhost:8000/unit')
        .then(function(response){
            setUnits(response.data)
        })
    }

    
    useEffect(() => {
        getKurikulum()
        getMks()
        getUnit()
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
                        id unit
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control as="select" placeholder="id unit" value={form?.idunit} onChange={e=>setForm({...form, idunit:e.target.value})}>
                        <option>tambah idunit</option>
                        {units?.data.map((data, index) => (
                        <option>{data.idunit}</option>
                        ))}
                        </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        id kurikulum
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control as="select" placeholder="id kurikulum" value={form?.idkurikulum} onChange={e=>setForm({...form, idkurikulum:e.target.value})}>
                        <option>tambah idkurikulum</option>
                        {datas?.data.map((data, index) => (
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
                        <Form.Control as="select" placeholder="idmk"  value={form?.idmk} onChange={e=>setForm({...form, idmk:e.target.value})}>
                        <option>tambah idunit</option>
                        {mks?.data.map((data, index) => (
                        <option>{data.idmk}</option>
                        ))}
                        </Form.Control>
                        </Col>
                    </Form.Group>  
                    <Form.Group>
                        <Form.Label column sm="2">
                        namakelas
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="namakelas" value={form?.namakelas} onChange={e=>setForm({...form, namakelas:e.target.value})}/>
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