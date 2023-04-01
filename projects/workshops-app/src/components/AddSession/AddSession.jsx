import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { postSession } from "../../services/sessions";

const AddSession = () => {
    // {
    //     register() {},
    //     handleSubmit() {},
    //     formState: {
    //         errors: {
    //              sequenceId: { type: 'required' }
    //         },
    //         getValues() {}
    //     }
    // }
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm({
        mode: "all",
    });

    // returns a boolean (true -> check passes)
    const levelDuration = () => {
        const duration = +getValues("duration");
        const level = getValues("level");

        switch (level) {
            case "Basic":
                return duration >= 1;
            case "Intermediate":
                return duration >= 2;
            case "Advanced":
                return duration >= 3;
            default:
                return true;
        }
    };

    const { id } = useParams();
    const navigate = useNavigate();

    // called only if valid (because of handleSubmit())
    const addSession = async (formValues) => {
        // // refObj.current is the reference to the underlying DOM node
        const session = {
            workshopId: +id,
            upvoteCount: 0,
            ...formValues,
            sequenceId: +formValues.sequenceId,
            duration: +formValues.duration,
        };

        try {
            await postSession(session);
            alert("Session has been added");
            navigate(".."); // go one level up form the current path
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <>
            <h2>Add a session</h2>
            <hr />
            <Form onSubmit={handleSubmit(addSession)}>
                <Form.Group className="mb-3" controlId="sequenceId">
                    <Form.Label>Sequence ID</Form.Label>
                    <Form.Control
                        type="text"
                        {...register("sequenceId", { required: true })}
                    />
                    {errors?.sequenceId?.type === "required" && (
                        <div className="text-danger">
                            This field is required
                        </div>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        {...register("name", { required: true })}
                    />
                    {errors?.name?.type === "required" && (
                        <div className="text-danger">
                            This field is required
                        </div>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="speaker">
                    <Form.Label>Speaker</Form.Label>
                    <Form.Control
                        type="text"
                        {...register("speaker", { required: true })}
                    />
                    {errors?.speaker?.type === "required" && (
                        <div className="text-danger">
                            This field is required
                        </div>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="duration">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control
                        type="text"
                        {...register("duration", {
                            required: true,
                            validate: levelDuration,
                        })}
                    />
                    {errors?.duration?.type === "required" && (
                        <div className="text-danger">
                            This field is required
                        </div>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="level">
                    <Form.Label>Level</Form.Label>
                    <Form.Select
                        {...register("level", {
                            required: true,
                            validate: levelDuration,
                        })}
                    >
                        <option value="">-- Select level --</option>
                        <option value="Basic">Basic</option>
                        <option value="Intermdiate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </Form.Select>
                    {errors?.level?.type === "required" && (
                        <div className="text-danger">
                            This field is required
                        </div>
                    )}
                    {errors?.level?.type === "validate" && (
                        <div className="text-danger">
                            This duration is too less for the selected level
                        </div>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="abstract">
                    <Form.Label>Describe the session</Form.Label>
                    <Form.Control
                        as="textarea"
                        type="text"
                        {...register("abstract", {
                            required: true,
                            minLength: 10,
                        })}
                    />
                    {errors?.abstract?.type === "required" && (
                        <div className="text-danger">
                            This field is required
                        </div>
                    )}
                    {errors?.abstract?.type === "minLength" && (
                        <div className="text-danger">
                            Minimum 10 characters needed
                        </div>
                    )}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add session
                </Button>
            </Form>
        </>
    );
};

export default AddSession;
