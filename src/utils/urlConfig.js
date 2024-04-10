const baseUrl = "https://webblog-qktl.onrender.com";

export const api = `${baseUrl}/api`;

export const generatePublicUrlImages = (fileName) => {
    return `${baseUrl}/public/images/${fileName}`;
};

export const generatePublicUrlFile = (fileName) => {    
    return `${baseUrl}/public/words/${fileName}`;
}