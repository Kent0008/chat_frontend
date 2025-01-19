export const getHeaders = () => {
    return {
        'Content-Type': 'application/json',
    };
};

export const getAuthHeaders = () => {
    const token = localStorage.getItem('access_token');
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };
};