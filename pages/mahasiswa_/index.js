import React, {useState, useEffect} from 'react';
import {Table,Button, Spinner} from 'react-bootstrap';
import Axios from 'axios';
import Edit from './edit';


export default function mahasiswa() {

    const [datas, setDatas] = useState()
    const [ showEdit, setShowEdit ] = useState()
    const [ detail, setDetail ] = useState()
    const [ loading, setLoading ] = useState()

    function getData(){
        setLoading(true)
        Axios.get('http://localhost:8000/mahasiswa')
        .then(function(response){
            setLoading(false)
            setDatas(response.data)
        })
    }
    
    function hapus(id){
        Axios.delete(`http://localhost:8000/mahasiswa/${id}`)
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

      console.log(datas)

    return(
        <>
        { loading ? (
        <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
        </Spinner>
        ) : (
        <div className='container-fluid'>
            { showEdit ? <Edit data={detail} onBack={handleBack} /> : (
            <div className='row justify-content-md-center'>
            <div className='col-md-10 mt-2'>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Nim</th>
                    <th>Id periode</th>
                    <th>id kurikulum</th>
                    <th>id unit</th>
                    <th>nama</th>
                    <th>alamat</th>
                    <th>hp</th>
                    <th>tempat lahir</th>
                    <th>tanggal lahir</th>
                    <th>email</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {datas?.data.map((data, index) => (
                    <tr>
                    <td>{index+1}</td>
                    <td>{data.nim}</td>
                    <td>{data.idperiode}</td>
                    <td>{data.idkurikulum}</td>
                    <td>{data.idunit}</td>
                    <td>{data.nama}</td>
                    <td>{data.alamat}</td>
                    <td>{data.hp}</td>
                    <td>{data.tmpt_lahir}</td>
                    <td>{data.tgllahir}</td>
                    <td>{data.email}</td>
                    <td>
                    <Button variant="outline-danger" onClick={()=>hapus(data.id)}>hapus</Button>{' '}
                    <Button variant="outline-info" onClick={()=>handleEdit(data)}>edit</Button>{' '}
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