import { Card } from 'react-bootstrap';

import './Home.css';

const Home = () => {
    return (
        <Card>
            <Card.Body className="p-5 bg-light">
                <Card.Title className="app-card-title">Workshops App</Card.Title>
                <Card.Text className="app-card-text">
                    The Workshops application serves details of (fictitious) technical workshops happening in various cities. Every workshop has a broad topic (eg. JavaScript), and a workshop has many sessions (each session covers a sub-topic, eg. Closures in JavaScript).
                </Card.Text>

                <Card.Text className="app-card-text">
                    You can view a list of workshops, details of every workshop, sessions in a workshop, and also add a new session for a workshop.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Home;