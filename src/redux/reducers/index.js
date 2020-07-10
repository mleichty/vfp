const initState = {
    change: false,
    signedIn: false,
    user: {
        name: ""
    },
    forestsFire: [],
    historyFire: [],
    mediaFire: [],
    resourcesFire: []
};

const rootReducer = (state = initState, action) => {
    if (action.type === "INIT_FORESTS") {
        return {
            ...state,
            forestsFire: action.value
        }
    }

    if (action.type === "INIT_HISTORY") {
        return {
            ...state,
            historyFire: action.value
        }
    }

    if (action.type === "INIT_MEDIA") {
        return {
            ...state,
            mediaFire: action.value
        }
    }

    if (action.type === "INIT_RESOURCES") {
        return {
            ...state,
            resourcesFire: action.value
        }
    }

    if (action.type === "CHECK_CHANGE") {
        return {
            ...state,
            change: !state.change
        }
    }

    return state;
};

export default rootReducer;