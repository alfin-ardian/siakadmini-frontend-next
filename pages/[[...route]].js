import Navbar from './template/navbar.js'
import {Button} from 'react-bootstrap'
import { useRouter } from 'next/router'
import React, {useState} from 'react'
import Mahasiswa from './mahasiswa_'
import AddMahasiswa from './mahasiswa_/add'
import Kelas from './Kelas_'
import AddKelas from './kelas_/add'
import Perwalian from './perwalian_'
import Krs from './krs_'
import Kurikulum from './kurikulum_'
import AddKurikulum from './kurikulum_/add'
import Periode from './periode_'
import Unit from './unit_'
import Matakuliah from './matakuliah_'
import Pegawai from './pegawai_'
import Mengajar from './mengajar_'
import Transkrip from './transkrip_'
import Perkuliahan from './perkuliahan_'

export default function Home() {
  const router = useRouter()
  const [showButton, setShowButton] = useState()

  const content = () =>{
    switch(router.asPath){
      case '/' : return <p>hello</p>
      case '/mahasiswa' : return <Mahasiswa/>
      case '/mahasiswa/add' : return <AddMahasiswa/>
      case '/kelas' : return <Kelas/>
      case '/kelas/add' : return <AddKelas/>
      case '/perwalian' : return <Perwalian/>
      case '/krs' : return <Krs/>
      case '/kurikulum' : return <Kurikulum/>
      case '/kurikulum/add' : return <AddKurikulum/>
      case '/periode' : return <Periode/>
      case '/unit' : return <Unit/>
      case '/matakuliah' : return <Matakuliah/>
      case '/pegawai' : return <Pegawai/>
      case '/mengajar' : return <Mengajar/>
      case '/transkrip' : return <Transkrip/>
      case '/perkuliahan' : return <Perkuliahan />
    }

  }

  return (
    <div>
      <Navbar/>
      <div className='container-fluid'>
      <div className='row justify-content-md-center'>
        <div className='col-md-10 mt-2'>
          {router?.query?.route?.length == 1 ?
          <Button variant="outline-info" onClick={() =>router.push(router.asPath + '/add')}>tambah data</Button> :
          (<Button variant="outline-info" onClick={() =>router.push(router.query.route[0])}>kembali</Button>) }
      </div>
      </div>
      </div>
      {content()}
    
    </div>
  )
}
