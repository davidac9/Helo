const initialState = {
    username: '',
    user_id: 0,
    profile_image: ''
}


const SET_USER ='SET_USER'

export function setUser(user) {
    console.log(user)
    return {
        type: SET_USER,
        payload: user
    }
}


export default (state=initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case SET_USER:
            const {username, profile_image, user_id} = payload
            return {...state, username, profile_image, user_id}
        default: return state
    }
}