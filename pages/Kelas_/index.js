import React, {useState, useEffect} from 'react';
import {Table,Button, Spinner} from 'react-bootstrap';
import Axios from 'axios';
import Edit from './edit';


export default function kelas() {
    const [datas, setDatas] = useState()
    const [ showEdit, setShowEdit ] = useState()
    const [ detail, setDetail ] = useState()
    const [loading, setLoading ] = useState()
    
    function getData(){
        setLoading(true)
        Axios.get('http://localhost:8000/kelas')
        .then(function(response){
            setTimeout(() =>{
                setLoading(false)
            }, 1000)
            setDatas(response.data)
        })
    }
    
    function hapus(idkelas){
        Axios.delete(`http://localhost:8000/kelas/${idkelas}`)
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
                    <th>Id kelas</th>
                    <th>Id unit</th>
                    <th>Id kurikulum</th>
                    <th>Id mk</th>
                    <th>Nama kelas</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {datas?.data.map((data, index) => (
                    <tr>
                    <td>{index+1}</td>
                    <td>{data.idkelas}</td>
                    <td>{data.idunit}</td>
                    <td>{data.idkurikulum}</td>
                    <td>{data.idmk}</td>
                    <td>{data.namakelas}</td>
                    <td>
                    <Button variant="outline-danger" onClick={()=>hapus(data.idkelas)}>hapus</Button>{' '}
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