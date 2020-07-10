export const initForests = (value) => {
    return {
        type: "INIT_FORESTS",
        value: value
    }
};

export const initHistory = (value) => {
    return {
        type: "INIT_HISTORY",
        value: value
    }
};

export const initMedia = (value) => {
    return {
        type: "INIT_MEDIA",
        value: value
    }
};

export const initResources = (value) => {
    return {
        type: "INIT_RESOURCES",
        value: value
    }
};

export const checkChange = () => {
    return {
        type: "CHECK_CHANGE"
    }
};