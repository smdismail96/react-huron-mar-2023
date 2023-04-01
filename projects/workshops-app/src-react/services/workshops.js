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

const getWorkshopById = async (id) => {
    const response = await fetch(
        `https://workshops-server.herokuapp.com/workshops/${id}`
    );

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const data = await response.json();
    return data;
};

const deleteWorkshop = async (id) => {
    const response = await fetch(
        `https://workshops-server.herokuapp.com/workshops/${id}`,
        {
            method: "DELETE", // Must be all caps
        }
    );

    if (!response.ok) {
        throw new Error(response.statusText);
    }
};

export {
    getWorkshops,
    getWorkshopById,
    deleteWorkshop
};