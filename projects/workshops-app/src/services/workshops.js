const getWorkshops = async (page) => {
    const response = await fetch(
        `https://workshops-server.herokuapp.com/workshops?_page=${page}`
    );

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const data = await response.json();
    return data; // a Promise is returned that resolves only when data is returned
};

const deleteWorkshop = async (id) => {
    const response = await fetch(
        `https://workshops-server.herokuapp.com/workshops/${id}`,
        {
            method: "DELETE", // Must be all caps
        }
    );
};

export {
    getWorkshops,
    deleteWorkshop
};