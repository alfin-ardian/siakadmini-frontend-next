import {Form, Button, Col} from 'react-bootstrap';

export default function alfin(){
    return(
        <div className="container-fluid">
            <div className="row justify-content-md-center">
                <div className="col-md-9">
                <Form>
                    <Form.Group>
                        <Form.Label column sm="2">
                        nim
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="nim" value="hello" />
                        </Col>
                    </Form.Group>
                    <Button variant="outline-info" type="submit">
                        Submit
                    </Button>
                </Form>
                </div>
            </div>
        </div>
    )
}