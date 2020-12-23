import React, {useState, useEffect} from 'react';
import {Table,Button} from 'react-bootstrap';
import Axios from 'axios';
import Edit from './edit';
import { useRouter } from 'next/router';



export default function unit() {
    const router = useRouter()
    const [datas, setDatas] = useState()
    const [ showEdit, setShowEdit ] = useState()
    const [ detail, setDetail ] = useState()
    
    function getData(){
        Axios.get('http://localhost:8000/unit')
        .then(function(response){
            setDatas(response.data)
        })
    }
    
    function hapus(idunit){
        Axios.delete(`http://localhost:8000/unit/${idunit}`)
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
        <div className='container-fluid'>
            { showEdit ? <Edit data={detail} onBack={handleBack} /> : (
            <div className='row justify-content-md-center'>
                <div className='col-md-9 mt-2'>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Id unit</th>
                    <th>nama unit</th>
                    <th>level unit</th>
                    <th>id jenjang</th>
                    <th>akreditasi</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {datas?.data.map((data, index) => (
                    <tr>
                    <td>{index+1}</td>
                    <td>{data.idunit}</td>
                    <td>{data.namaunit}</td>
                    <td>{data.levelunit}</td>
                    <td>{data.idjenjang}</td>
                    <td>{data.akreditasi}</td>
                    <td>
                    <Button variant="outline-danger" onClick={()=>hapus(data.idunit)}>hapus</Button>{' '}
                    <Button variant="outline-info" onClick={()=>handleEdit(data)}>edit</Button>{' '}
                    </td>
                    </tr>
                   ))}
                </tbody>
                </Table>
                <Button variant="outline-success" className='mt-2' href="unit/addUnit">tambah data</Button>{' '}
                </div>
            </div>
            )}
        </div>
    )
}