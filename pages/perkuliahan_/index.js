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
        Axios.get('http://localhost:8000/perkuliahan')
        .then(function(response){
            setDatas(response.data)
        })
    }
    
    function hapus(idruang){
        Axios.delete(`http://localhost:8000/perkuliahan/${idruang}`)
        .then(response =>{
            getData()
            console.log(response.data)
        })
    }

    useEffect(()=>{
        getData()
      },[])

      const handleEdit = (info) => {
          setDetail(info)
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
                    <th>idjadwal</th>
                    <th>id ruang</th>
                    <th>id kelas</th>
                    <th>tgljadwal</th>
                    <th>waktu mulai</th>
                    <th>waktu selesai</th>
                    <th>lokasi</th>
                    <th>sks</th>
                    <th>idunit</th>
                    <th>semmk</th>
                    <th>idperiode</th>
                    <th>keterangan</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {datas?.data.map((data, index) => (
                    <tr>
                    <td>{index+1}</td>
                    <td>{data.idjadwal}</td>
                    <td>{data.idruang}</td>
                    <td>{data.idkelas}</td>
                    <td>{data.tgljadwal}</td>
                    <td>{data.waktumulai}</td>
                    <td>{data.waktuselesai}</td>
                    <td>{data.lokasi}</td>
                    <td>{data.sks}</td>
                    <td>{data.idunit}</td>
                    <td>{data.semmk}</td>
                    <td>{data.idperiode}</td>
                    <td>{data.keterangan}</td>
                    <td>
                    <Button variant="outline-danger" onClick={()=>hapus(data.idruang)}>hapus</Button>{' '}
                    <Button variant="outline-info" onClick={()=>handleEdit(data)}>edit</Button>{' '}
                    </td>
                    </tr>
                   ))}
                </tbody>
                </Table>
                <Button variant="outline-success" className='mt-2' onClick={()=>router.push("perkuliahan_/addPerkuliahan")}>tambah data</Button>{' '}
                </div>
            </div>
            )}
        </div>
    )
}