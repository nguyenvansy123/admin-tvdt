const baseUrl = "http://localhost:4000";

export const api = `${baseUrl}/api`;

export const generatePublicUrlImages = (fileName) => {
    return `${baseUrl}/public/images/${fileName}`;
};

export const generatePublicUrlFile = (fileName) => {    
    return `${baseUrl}/public/words/${fileName}`;
}