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
        Axios.get('http://localhost:8000/pegawai')
        .then(function(response){
            setDatas(response.data)
        })
    }
    
    function hapus(nip){
        Axios.delete(`http://localhost:8000/pegawai/${nip}`)
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
                    <th>nip</th>
                    <th>id jenjang</th>
                    <th>nama</th>
                    <th>tanggal lahir</th>
                    <th>tempat lahir</th>
                    <th>alamat</th>
                    <th>hp</th>
                    <th>email</th>
                    <th>jenis kelamin</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {datas?.data.map((data, index) => (
                    <tr>
                    <td>{index+1}</td>
                    <td>{data.nip}</td>
                    <td>{data.idjenjang}</td>
                    <td>{data.nama}</td>
                    <td>{data.tgl_lahir}</td>
                    <td>{data.tmpt_lahir}</td>
                    <td>{data.alamat}</td>
                    <td>{data.hp}</td>
                    <td>{data.email}</td>
                    <td>{data.jk}</td>
                    <td>
                    <Button variant="outline-danger" onClick={()=>hapus(data.nip)}>hapus</Button>{' '}
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