import { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddSession = () => {
    const sequenceIdRef = useRef();
    const nameRef = useRef();
    const speakerRef = useRef();
    const durationRef = useRef();
    const levelRef = useRef();
    const abstractRef = useRef();

    const addSession = (event) => {
        // Hey browser! please avoid doing anything
        event.preventDefault();

        // refObj.current is the reference to the underlying DOM node
        const session = {
            sequenceId: sequenceIdRef.current.value,
            name: nameRef.current.value,
            speaker: speakerRef.current.value,
            duration: durationRef.current.value,
            level: levelRef.current.value,
            abstract: abstractRef.current.value
        };

        console.log(session);
    };

    return (
        <>
            <h2>Add a session</h2>
            <hr />
            <Form onSubmit={addSession}>
                <Form.Group className="mb-3" controlId="sequenceId">
                    <Form.Label>Sequence ID</Form.Label>
                    <Form.Control type="text" ref={sequenceIdRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" ref={nameRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="speaker">
                    <Form.Label>Speaker</Form.Label>
                    <Form.Control type="text" ref={speakerRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="duration">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control type="text" ref={durationRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="level">
                    <Form.Label>Level</Form.Label>
                    <Form.Select ref={levelRef}>
                        <option value="">-- Select level --</option>
                        <option value="Basic">Basic</option>
                        <option value="Intermdiate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="abstract">
                    <Form.Label>Describe the session</Form.Label>
                    <Form.Control as="textarea" type="text" ref={abstractRef} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add session
                </Button>
            </Form>
        </>
    );
}

export default AddSession;