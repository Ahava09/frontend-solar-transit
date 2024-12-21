
const useToken = () => {
    return sessionStorage.getItem("token");
};

const saveToken = (token) => {
    sessionStorage.setItem("token", token);
};

export { useToken, saveToken };