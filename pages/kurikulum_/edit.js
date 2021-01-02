import {Form, Button, Col} from 'react-bootstrap';
import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';

export default function edit({data, onBack}){
    const router = useRouter()
    const [editForm,setEditForm] = useState(data);
    const [units, setUnits] = useState();
    const [kurikulums, setKurikulums] = useState();
    const [mks, setMks] = useState();

    function save(e){
        e.preventDefault()
        Axios({
            url : `http://localhost:8000/kurikulum/${data.id}`,
            method : 'PUT',
            data : editForm
        }).then(response =>{
            onBack(false)
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

    
    useEffect(() => {
        getUnit()
        getKurikulum()
        getMatakuliah()
      },[])

    return(
        <div className='container-fluid'>
            <div className='row justify-content-md-center'>
                <div className='col-md-9'>
                <Form onSubmit={save}>
                    <Form.Group>
                        <Form.Label column sm="2">
                       idunit
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control as="select" placeholder="idunit" value={editForm?.idunit} >
                        <option>nim</option>
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
                        <Form.Control as="select" placeholder="idkurikulum" value={editForm?.idkurikulum} onChange={e=>setEditForm({...editForm, idkurikulum:e.target.value})} >
                        <option>nim</option>
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
                        <Form.Control as="select" placeholder="idmk" value={editForm?.idmk} onchange={e=>setEditForm({...editForm, idmk:e.target.value})} >
                        <option>nim</option>
                        {mks?.data.map((data, index) => (
                        <option>{data.idmk}</option>
                        ))}
                        </Form.Control>
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        semmk
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="semmk"  value={editForm?.semmk} onChange={e=>setEditForm({...editForm, semmk:e.target.value})}/>
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        sksmk
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="sksmk" value={editForm?.sksmk} onChange={e=>setEditForm({...editForm, sksmk:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        namamk
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="namamk" value={editForm?.namamk} onChange={e=>setEditForm({...editForm, namamk:e.target.value})}/>
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