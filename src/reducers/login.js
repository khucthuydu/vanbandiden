import { LOGIN_START, LOGIN_SUCCESS} from "constants/Action_constants";

const initialSettings = {
    id: "",
    email:"",
    isProcessing: false
};

const settings = (state = initialSettings, {type, payload}) => {
    switch (type) {
        case LOGIN_START:
            return {
                isProcessing: true
            }
        case LOGIN_SUCCESS:
            return {
                isProcessing: false,
                ...payload
            }
        default:
            return state;
    }
};

export default settings;
