import { Form, Col,Button, Alert } from 'react-bootstrap'
import Axios from 'axios';
import React, {useState,useEffect} from 'react'
import Router from 'next/router'

export default function addMhs() {

    const [form,setForm] = useState();
    const [message, setMessage] = useState();
    const [datas, setDatas] = useState();
    const [periodes, setPeriodes] = useState();
    const [units, setUnits] = useState();

    function save(e){
        e.preventDefault()
        Axios({
            url: 'http://localhost:8000/mahasiswa',
            method: 'POST',
            data: form
        }).then(response=>{
            setMessage(response.data.message)
            Router.push('/mahasiswa')
        })
    }

    function getKurikulum(){
        Axios.get('http://localhost:8000/kurikulum')
        .then(function(response){
            setDatas(response.data)
        })
    }

    function getPeriode(){
        Axios.get('http://localhost:8000/periode')
        .then(function(response){
            setPeriodes(response.data)
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
        getPeriode()
        getUnit()
    },[])

    return(
        <div className='container-fluid'>
            <div className='row justify-content-md-center'>
                <div className='col-md-2'>
                </div>
                <div className='col-md-10'>
                    { message && (
                    <Alert variant="success">
                    <Alert.Heading>{message}</Alert.Heading>
                    </Alert>
                    )}
                    <Form onSubmit={save}>
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
                        id periode
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control as="select" placeholder="id kurikulum" value={form?.idperiode} onChange={e=>setForm({...form, idperiode:e.target.value})}>
                        <option>tambah idperiode</option>
                        {periodes?.data.map((data, index) => (
                        <option>{data.idperiode}</option>
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
                        nama
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="nama" value={form?.nama} onChange={e=>setForm({...form, nama:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        alamat
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="alamat" value={form?.alamat} onChange={e=>setForm({...form, alamat:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        hp
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="hp"  value={form?.hp} onChange={e=>setForm({...form, hp:e.target.value})}/>
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        tempat lahir
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="tempat lahir" value={form?.tmpt_lahir} onChange={e=>setForm({...form, tmpt_lahir:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        tanggal lahir
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="date" placeholder="tanggal lahir" value={form?.tgllahir} onChange={e=>setForm({...form, tgllahir:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        email
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="email" placeholder="email" value={form?.email} onChange={e=>setForm({...form, email:e.target.value})}/>
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