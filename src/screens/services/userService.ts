const getUsers = async () => {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    );

    return response.json();
};

const getUserById = async (id: number) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );

    return response.json();
};

export {
    getUserById,
    getUsers
}