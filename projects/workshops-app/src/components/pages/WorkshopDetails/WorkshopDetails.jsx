import { useState, useEffect } from 'react';
import { Row, Col, Image, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getWorkshopById } from '../../../services/workshops';

const WorkshopDetails = () => {
    // { id: "8", action: "add" }
    const { id } = useParams();

    const [workshop, setWorkshop] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(
        () => {
            async function helper() {
                try {
                    const data = await getWorkshopById(id);
                    setWorkshop(data);
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                }
            }

            helper();
        },
        [id]
    );

    return (
        <>
            {
                loading && (
                    <Alert variant="primary">We are fetching details of the workshop. Please wait...</Alert>
                )
            }
            {
                !loading && error && (
                    <Alert variant="danger">{error.message}</Alert>
                )
            }
            {
                !loading && !error && (
                    <Row>
                        <Col xs={12}>
                            <h1>{workshop.name}</h1>
                            <hr />
                        </Col>
                        <Col xs={12} lg={4}>
                            <Image src={workshop.imageUrl} fluid />
                        </Col>
                        <Col xs={12} lg={8} dangerouslySetInnerHTML={{ __html: workshop.description }}></Col>
                    </Row>
                )
            }
        </>
    );
}

export default WorkshopDetails;