import { LOGIN_START, LOGIN_SUCCESS, LOGOUT} from "constants/Action_constants";

const initialSettings = {
    id: undefined,
    email: undefined,
    isProcessing: false
};

const settings = (state = initialSettings, {type, payload}) => {
    switch (type) {
        case LOGIN_START:
            return {
                ...state,
                isProcessing: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isProcessing: false,
                ...payload
            }
        case LOGOUT:
            return {
                ...initialSettings
            }
        default:
            return state;
    }
};

export default settings;
