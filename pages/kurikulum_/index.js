import React, {useState, useEffect} from 'react';
import {Table,Button} from 'react-bootstrap';
import Axios from 'axios';
import Edit from './edit';
import { useRouter } from 'next/router';



export default function kurikulum() {
    const router = useRouter()
    const [datas, setDatas] = useState()
    const [ showEdit, setShowEdit ] = useState()
    const [ detail, setDetail ] = useState()
    
    function getData(){
        Axios.get('http://localhost:8000/kurikulum')
        .then(function(response){
            setDatas(response.data)
        })
    }
    
    function hapus(id){
        Axios.delete(`http://localhost:8000/kurikulum/${id}`)
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
                <div className='col-md-10 mt-2'>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Id unit</th>
                    <th>id kurikulum</th>
                    <th>Id mk</th>
                    <th>semmk</th>
                    <th>sksmk</th>
                    <th>nama mk</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {datas?.data.map((data, index) => (
                    <tr>
                    <td>{index+1}</td>
                    <td>{data.idunit}</td>
                    <td>{data.idkurikulum}</td>
                    <td>{data.idmk}</td>
                    <td>{data.semmk}</td>
                    <td>{data.sksmk}</td>
                    <td>{data.namamk}</td>
                    <td>
                    <Button variant="outline-danger" onClick={()=>hapus(data.id)}>hapus</Button>{' '}
                    <Button variant="outline-info" onClick={()=>handleEdit(data)}>edit</Button>{' '}
                    </td>
                    </tr>
                   ))}
                </tbody>
                </Table>
                <Button variant="outline-success" className='mt-2' href="kurikulum/addKurikulum">tambah data</Button>{' '}
                </div>
            </div>
            )}
        </div>
    )
}