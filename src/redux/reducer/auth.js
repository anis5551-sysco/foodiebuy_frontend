import axios from "axios";
var accessToken = null;
const user={
    accessToken: null,
    refreshToken: null
}

export default function auth(state=user, action) {
    switch (action.type){
        case "LOGIN":
            localStorage.setItem("refreshToken", action.payload.refresh_token);
            return{
                    accessToken: action.payload.access_token,
                    refreshToken: action.payload.refresh_token
            }
            // customer =  axios({
            //     method: "get",
            //     url: `/customers/${email}`,
            //     headers: {
            //         Authorization: "Bearer " + accessToken
            //     },
            // });
            // localStorage.setItem("refreshToken", refreshToken);

        case "LOGOUT":
            state.accessToken = null;
            state.refreshToken = null;
            localStorage.removeItem("refreshToken");
            return state;

        default:
            return state;

    }
}

