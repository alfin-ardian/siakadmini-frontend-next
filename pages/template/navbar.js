import { useRouter } from 'next/router';
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';


export default function navbar(){
    
    const router = useRouter()
    return(
        <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand onClick={()=>router.push("/")}>Navbar</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link onClick={()=>router.push("/mahasiswa")}>mahasiswa</Nav.Link>
            <Nav.Link onClick={()=>router.push("/kelas")}>kelas</Nav.Link>
            <Nav.Link onClick={()=>router.push("/perwalian")}>perwalian</Nav.Link>
            <Nav.Link onClick={()=>router.push("/krs")}>krs</Nav.Link>
            <Nav.Link onClick={()=>router.push("/kurikulum")}>kurikulum</Nav.Link>
            <Nav.Link onClick={()=>router.push("/periode")}>periode</Nav.Link>
            <Nav.Link onClick={()=>router.push("/unit")}>unit</Nav.Link>
            <Nav.Link onClick={()=>router.push("/matakuliah")}>matakuliah</Nav.Link>
            <Nav.Link onClick={()=>router.push("/pegawai")}>pegawai</Nav.Link>
            <Nav.Link onClick={()=>router.push("/mengajar")}>mengajar</Nav.Link>
            <Nav.Link onClick={()=>router.push("/transkrip")}>transkrip</Nav.Link>
            <Nav.Link onClick={()=>router.push("/perkuliahan")}>perkuliahan</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
        </div>
    )
}