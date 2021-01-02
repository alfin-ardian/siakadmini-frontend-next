// library
import React from 'react';
import { useRouter } from 'next/router';
import {Button} from 'react-bootstrap';
//templates
import Navbar from './template/navbar.js'
import Mahasiswa from './mahasiswa_'
import AddMahasiswa from './mahasiswa_/add'
import Kelas from './Kelas_'
import AddKelas from './kelas_/add'
import Perwalian from './perwalian_'
import AddPerwalian from './perwalian_/add'
import Krs from './krs_'
import AddKrs from './krs_/add'
import Kurikulum from './kurikulum_'
import AddKurikulum from './kurikulum_/add'
import Periode from './periode_'
import AddPeriode from './periode_/add'
import Unit from './unit_'
import AddUnit from './unit_/add'
import Matakuliah from './matakuliah_'
import AddMatakuliah from './matakuliah_/add'
import Pegawai from './pegawai_'
import AddPegawai from './pegawai_/add'
import Mengajar from './mengajar_'
import AddMengajar from './mengajar_/add'
import Transkrip from './transkrip_'
import AddTranskrip from './transkrip_/add'
import Perkuliahan from './perkuliahan_'
import AddPerkuliahan from './perkuliahan_/add'

export default function Home() {
  const router = useRouter()

  const content = () =>{
    switch(router.asPath){
      case '/' : return <p>hello</p>
      case '/mahasiswa' : return <Mahasiswa/>
      case '/mahasiswa/add' : return <AddMahasiswa/>
      case '/kelas' : return <Kelas/>
      case '/kelas/add' : return <AddKelas/>
      case '/perwalian' : return <Perwalian/>
      case '/perwalian/add' : return <AddPerwalian/>
      case '/krs' : return <Krs/>
      case '/krs/add' : return <AddKrs/>
      case '/kurikulum' : return <Kurikulum/>
      case '/kurikulum/add' : return <AddKurikulum/>
      case '/periode' : return <Periode/>
      case '/periode/add' : return <AddPeriode/>
      case '/unit' : return <Unit/>
      case '/unit/add' : return <AddUnit/>
      case '/matakuliah' : return <Matakuliah/>
      case '/matakuliah/add' : return <AddMatakuliah/>
      case '/pegawai' : return <Pegawai/>
      case '/pegawai/add' : return <AddPegawai/>
      case '/mengajar' : return <Mengajar/>
      case '/mengajar/add' : return <AddMengajar/>
      case '/transkrip' : return <Transkrip/>
      case '/transkrip/add' : return <AddTranskrip/>
      case '/perkuliahan' : return <Perkuliahan />
      case '/perkuliahan/add' : return <AddPerkuliahan />
    }
  }
  return (
    <>
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
    </>
  )
}
