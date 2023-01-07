const initialState = {
    token:""
}

export const auth=(state=initialState, action) => {
    console.log(state);
    switch(action.type){
        case "Login":
            return [
                ...state,
                {
                    token: action.token
                }
            ]
        case "Logout":
            return [
                { token:null,}
            ]
    }
}

export default auth