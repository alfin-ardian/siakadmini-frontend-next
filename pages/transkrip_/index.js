import React, {useState, useEffect} from 'react';
import {Table,Button} from 'react-bootstrap';
import Axios from 'axios';
import Edit from './edit';
import { useRouter } from 'next/router';



export default function pegawai() {
    const router = useRouter()
    const [datas, setDatas] = useState()
    const [ showEdit, setShowEdit ] = useState()
    const [ detail, setDetail ] = useState()
    
    function getData(){
        Axios.get('http://localhost:8000/transkrip')
        .then(function(response){
            setDatas(response.data)
        })
    }
    
    function hapus(idmk){
        Axios.delete(`http://localhost:8000/transkrip/${idmk}`)
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
                    <th>id unit</th>
                    <th>id kurikulum</th>
                    <th>id mk</th>
                    <th>nim</th>
                    <th>nilai angka</th>
                    <th>nilai huruf</th>
                    <th>is lulus ?</th>
                    <th>is ulang ?</th>
                    <th>idperiode</th>
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
                    <td>{data.nim}</td>
                    <td>{data.nangka}</td>
                    <td>{data.nhuruf}</td>
                    <td>{data.islulus}</td>
                    <td>{data.isulang}</td>
                    <td>{data.idperiode}</td>
                    <td>
                    <Button variant="outline-danger" onClick={()=>hapus(data.idmk)}>hapus</Button>{' '}
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
    )
}