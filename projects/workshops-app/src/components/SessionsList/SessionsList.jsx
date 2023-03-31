const SessionsList = () => {
    return (
        <div>
            <h2>List of sessions</h2>
            <hr />
            {/* Task 4 */}
            session list to be shown
            <div>
                To call https://workshops-server.herokuapp.com/workshops/[[workshop_id]]/sessions
            </div>
            <div>
                use ListGroup of React Bootstrap to show it. Install https://fontawesome.com/docs/web/use-with/react/ and use its icons for voting up / down icons.
            </div>
        </div>
    );
}

export default SessionsList;