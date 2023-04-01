const postSession = async (session) => {
    const response = await fetch(
        `https://workshops-server.herokuapp.com/sessions`,
        {
            method: "POST",
            body: JSON.stringify(session),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const data = await response.json();
    return data;
};

export {
    postSession
}