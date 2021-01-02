import { Form, Col,Button, Alert } from 'react-bootstrap';
import Axios from 'axios';
import React, {useState, useEffect} from 'react'
import Router from 'next/router'

export default function addMengajar() {

    const [form,setForm] = useState();
    const [message, setMessage] = useState();
    const [units, setUnits] = useState();
    const [kurikulums, setKurikulums] = useState();
    const [mks, setMks] = useState();
    const [mahasiswas,setMahasiswas] = useState();
    const [periodes,setPeriodes] = useState();


    function save(e){
        e.preventDefault()
        Axios({
            url: 'http://localhost:8000/transkrip',
            method: 'POST',
            data: form
        }).then(response=>{
            setMessage(response.data.message)
            Router.push('/transkrip')
        })
    }
    
    function getUnit(){
        Axios.get('http://localhost:8000/unit')
        .then(function(response){
            setUnits(response.data)
        })
    }
 
    function getKurikulum(){
        Axios.get('http://localhost:8000/kurikulum')
        .then(function(response){
            setKurikulums(response.data)
        })
    }

    function getMatakuliah(){
        Axios.get('http://localhost:8000/matakuliah')
        .then(function(response){
            setMks(response.data)
        })
    }

    function getMahasiswa(){
        Axios.get('http://localhost:8000/mahasiswa')
        .then(function(response){
            setMahasiswas(response.data)
        })
    }

    function getPeriode(){
        Axios.get('http://localhost:8000/periode')
        .then(function(response){
            setPeriodes(response.data)
        })
    }

    // async function useEffect3(){

    // }

    useEffect(() => {
        getUnit()
        getKurikulum()
        getMatakuliah()
        getMahasiswa()
        getPeriode()
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
                        <Form.Control as="select" placeholder="idmk" value={form?.idmk} onChange={e=>setForm({...form, idmk:e.target.value})}>
                        <option>idmk</option>
                        {mks?.data.map((data, index) => (
                        <option>{data.idmk}</option>
                        ))}
                        </Form.Control>
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
                        nangka
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="nangka" value={form?.nangka} onChange={e=>setForm({...form, nangka:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        nhuruf
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="nhuruf" value={form?.nhuruf} onChange={e=>setForm({...form, nhuruf:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        islulus
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="islulus" value={form?.islulus} onChange={e=>setForm({...form, islulus:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        isulang
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="isulang" value={form?.isulang} onChange={e=>setForm({...form, isulang:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        idperiode
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control as="select" placeholder="idperiode" value={form?.idperiode} onChange={e=>setForm({...form, idperiode:e.target.value})}>
                        <option>idperiode</option>
                        {periodes?.data.map((data, index) => (
                        <option>{data.idperiode}</option>
                        ))}
                        </Form.Control>
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