import React, {useState, useEffect} from 'react';
import {Table,Button, Spinner} from 'react-bootstrap';
import Axios from 'axios';
import Edit from './edit';

export default function kelas() {

    const [datas, setDatas] = useState()
    const [ showEdit, setShowEdit ] = useState()
    const [ detail, setDetail ] = useState()
    const [loading, setLoading] = useState()

    function getData(){
        setLoading(true)
        Axios.get('http://localhost:8000/perwalian')
        .then(function(response){
            setTimeout(() => {
                setLoading(false)
            },1000)
            setDatas(response.data)
        })
    }
    
    function hapus(id){
        Axios.delete(`http://localhost:8000/perwalian/${id}`)
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
                    <th>Nim</th>
                    <th>nip</th>
                    <th>ips</th>
                    <th>Ipk</th>
                    <th>semsmhs</th>
                    <th>skssemester</th>
                    <th>sks total</th>
                    <th>semester mk</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {datas?.data.map((data, index) => (
                    <tr>
                    <td>{index+1}</td>
                    <td>{data.idperiode}</td>
                    <td>{data.nim}</td>
                    <td>{data.nip}</td>
                    <td>{data.ips}</td>
                    <td>{data.ipk}</td>
                    <td>{data.semmhs}</td>
                    <td>{data.skssemester}</td>
                    <td>{data.skstotal}</td>
                    <td>{data.semmk}</td>
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