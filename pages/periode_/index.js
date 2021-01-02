import React, {useState, useEffect} from 'react';
import {Table,Button, Spinner} from 'react-bootstrap';
import Axios from 'axios';
import Edit from './edit';
import { useRouter } from 'next/router';


export default function periode() {
    const router = useRouter()
    const [datas, setDatas] = useState()
    const [ showEdit, setShowEdit ] = useState()
    const [ detail, setDetail ] = useState()
    const [loading, setLoading ] = useState()
    
    function getData(){
        setLoading(true)
        Axios.get('http://localhost:8000/periode')
        .then(function(response){
            setTimeout(function(){
                setLoading(false)
            }, 1000)
            setDatas(response.data)
        })
    }
    
    function hapus(id){
        Axios.delete(`http://localhost:8000/periode/${id}`)
        .then(response =>{
            getData()
            console.log(response.data)
        })
    }

    useEffect(()=>{
        getData()
      },[])

      const handleEdit = data => {
          setDetail(data)
          setShowEdit(true)
      }

      const handleBack = () => {
        getData()
        setShowEdit(false)
      }
    return(
        <>
         { loading ? (
             <div className="loading">
                <Spinner animation="border" role="status" variant="info">
                <span className="sr-only">Loading...</span>
                </Spinner>
                <p>loading sayang ...</p>
            </div>
        ) : (
        <div className='container-fluid'>
            { showEdit ? <Edit data={detail} onBack={handleBack} /> : (
            <div className='row justify-content-md-center'>
                <div className='col-md-10 mt-2'>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Id periode</th>
                    <th>id tahun ajaran</th>
                    <th>nama periode</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {datas?.data.map((data, index) => (
                    <tr>
                    <td>{index+1}</td>
                    <td>{data.idperiode}</td>
                    <td>{data.idtahunajaran}</td>
                    <td>{data.namaperiode}</td>
                    <td>
                    <Button variant="outline-danger" onClick={()=>hapus(data.id)}>hapus</Button>{' '}
                    <Button variant="outline-info" onClick={()=>handleEdit(data)}>edit</Button>
                    </td>
                    </tr>
                   ))}
                </tbody>
                </Table>
                </div>
            </div>
            )}
        </div>
        )}
        </>
    )
}