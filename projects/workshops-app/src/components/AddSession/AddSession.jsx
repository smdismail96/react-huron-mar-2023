import { Form, Button } from 'react-bootstrap';

const AddSession = () => {
    return (
        <>
            <h2>Add a session</h2>
            <hr />
            <Form>
                <Form.Group className="mb-3" controlId="sequenceId">
                    <Form.Label>Sequence ID</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="speaker">
                    <Form.Label>Speaker</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="duration">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="level">
                    <Form.Label>Level</Form.Label>
                    <Form.Select>
                        <option value="">-- Select level --</option>
                        <option value="Basic">Basic</option>
                        <option value="Intermdiate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="abstract">
                    <Form.Label>Describe the session</Form.Label>
                    <Form.Control as="textarea" type="text" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add session
                </Button>
            </Form>
        </>
    );
}

export default AddSession;