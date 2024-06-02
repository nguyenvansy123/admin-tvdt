const baseUrl = "https://webblog-qktl.onrender.com";
// const baseUrl = "http://localhost:4000";

export const api = `${baseUrl}/api`;

export const generatePublicUrlImages = (fileName) => {
    return `${baseUrl}/public/images/${fileName}`;
};

export const generatePublicUrlFile = (fileName) => {
    return `https://drive.google.com/file/d/${fileName}/preview`;
}