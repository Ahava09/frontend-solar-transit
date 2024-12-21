
const useToken = () => {
    return sessionStorage.getItem("token");
};

const saveToken = (token) => {
    sessionStorage.setItem("token", token);
};

const getToken = () => {
    return sessionStorage.getItem("token");
}

export { useToken, saveToken, getToken };