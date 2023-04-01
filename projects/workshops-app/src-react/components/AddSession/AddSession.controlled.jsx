import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import { postSession } from '../../services/sessions';

const AddSession = () => {
    // we shall "control" the inputs using these
    const [sequenceId, setSequenceId] = useState('');
    const [name, setName] = useState('');
    const [speaker, setSpeaker] = useState('');
    const [duration, setDuration] = useState('');
    const [level, setLevel] = useState('');
    const [abstract, setAbstract] = useState('');

    // {
    //     register() {},
    //     formState: {
    //         errors: {
    //              sequenceId: { type: 'required' }
    //         }
    //     }
    // }
    const { register, formState: { errors } } = useForm({
        mode: 'all'
    });

    const { id } = useParams();
    const navigate = useNavigate();

    const addSession = async (event) => {
        // Hey browser! please avoid doing anything
        event.preventDefault();

        // // refObj.current is the reference to the underlying DOM node
        const session = {
            workshopId: +id,
            upvoteCount: 0,
            // sequenceId: sequenceId
            sequenceId: +sequenceId,
            name,
            speaker,
            duration: +duration,
            level,
            abstract
        };

        // for each input we can do this for validation
        // useEffect(
        //     () => {
        //         // do validation on sequenceId
        //         // set some error state on error
        //     },
        //     [sequenceId]
        // )

        console.log(session);

        // ideally validate the values here..

        try {
            await postSession(session);
            alert('Session has been added');
            navigate('..'); // go one level up form the current path
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <>
            <h2>Add a session</h2>
            <hr />
            <Form onSubmit={addSession}>
                <Form.Group className="mb-3" controlId="sequenceId">
                    <Form.Label>Sequence ID</Form.Label>
                    <Form.Control
                        type="text"
                        value={sequenceId}
                        onChange={(event) => setSequenceId(event.target.value)}
                        {...register('sequenceId', { required: true })}
                    />
                    {errors?.sequenceId?.type === 'required' && <div className="text-danger">This field is required</div>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        {...register('name', { required: true })}
                    />
                    {errors?.name?.type === 'required' && <div className="text-danger">This field is required</div>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="speaker">
                    <Form.Label>Speaker</Form.Label>
                    <Form.Control
                        type="text"
                        value={speaker}
                        onChange={(event) => setSpeaker(event.target.value)}
                        {...register('speaker', { required: true })}
                    />
                    {errors?.speaker?.type === 'required' && <div className="text-danger">This field is required</div>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="duration">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control
                        type="text"
                        value={duration}
                        onChange={(event) => setDuration(event.target.value)}
                        {...register('duration', { required: true })}
                    />
                    {errors?.duration?.type === 'required' && <div className="text-danger">This field is required</div>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="level">
                    <Form.Label>Level</Form.Label>
                    <Form.Select
                        value={level}
                        onChange={(event) => setLevel(event.target.value)}
                        {...register('level', { required: true })}
                    >
                        <option value="">-- Select level --</option>
                        <option value="Basic">Basic</option>
                        <option value="Intermdiate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </Form.Select>
                    {errors?.level?.type === 'required' && <div className="text-danger">This field is required</div>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="abstract">
                    <Form.Label>Describe the session</Form.Label>
                    <Form.Control
                        as="textarea"
                        type="text"
                        value={abstract}
                        onChange={(event) => setAbstract(event.target.value)}
                        {...register('abstract', { required: true })}
                    />
                    {errors?.abstract?.type === 'required' && <div className="text-danger">This field is required</div>}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add session
                </Button>
            </Form>
        </>
    );
}

export default AddSession;