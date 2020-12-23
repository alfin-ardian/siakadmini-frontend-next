import { Form, Col,Button } from 'react-bootstrap';
import Axios from 'axios';
import React, {useState} from 'react'
import Router from 'next/router'

export default function addPwl() {

    const [form,setForm] = useState();
    const [message, setMessage] = useState();

    function save(e){
        e.preventDefault()
        Axios({
            url: 'http://localhost:8000/perwalian',
            method: 'POST',
            data: form
        }).then(response=>{
            setMessage(response.data.message)
            Router.push('/perwalian')
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
                        id periode
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="idperiode" value={form?.idperiode} onChange={e=>setForm({...form, idperiode:e.target.value})} />
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
                        nip
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="nip" value={form?.nip} onChange={e=>setForm({...form, nip:e.target.value})} />
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        ips
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="ips"  value={form?.ips} onChange={e=>setForm({...form, ips:e.target.value})}/>
                        </Col>
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label column sm="2">
                        ipk
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="ipk" value={form?.ipk} onChange={e=>setForm({...form, ipk:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        semmhs
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="semmhs" value={form?.semmhs} onChange={e=>setForm({...form, semmhs:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        skssemester
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="skssemester" value={form?.skssemester} onChange={e=>setForm({...form, skssemester:e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm="2">
                        skstotal
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="skstotal" value={form?.skstotal} onChange={e=>setForm({...form, skstotal:e.target.value})}/>
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
                    <Button variant="outline-info" type="submit">
                        Submit
                    </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}