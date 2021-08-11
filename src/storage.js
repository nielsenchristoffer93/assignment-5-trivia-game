export const getStorage = key => {
    const data = localStorage.getItem(key);

    if (data) {
        return JSON.parse(data);
    } else {
        return false;
    }
}

export const setStorage = (key, value) => {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
}