import {Form, Button, Col} from 'react-bootstrap';
import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router'

export default function edit({data, onBack}){
    const router = useRouter()
    const [editForm,setEditForm] = useState(data);
    const [units, setUnits] = useState();
    const [kurikulums, setKurikulums] = useState();
    const [mks, setMks] = useState();

    function save(e){
        e.preventDefault()
        Axios({
            url : `http://localhost:8000/kelas/${data.idkelas}`,
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
                        Id kelas
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="id kelas" value={editForm?.idkelas } disabled/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        id unit
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control as="select" placeholder="id unit" value={editForm?.idunit} onChange={e=>setEditForm({...editForm, idunit:e.target.value})} >
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
                        <Form.Control as="select" placeholder="idmk"  value={editForm?.idmk} onChange={e=>setEditForm({...editForm, idmk:e.target.value})}>
                        <option>idkurikulum</option>
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
                        <Form.Control type="text" placeholder="namakelas" value={editForm?.namakelas} onChange={e=>setEditForm({...editForm, namakelas:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Button variant="outline-info" type="submit">
                        Submit
                    </Button>{' '}
                    <Button variant="outline-success" type="submit" href="kelas">
                        Kembali
                    </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}