import API from '../../utils/api';

export const getUsers = (token) => {
    return (dispatch) => {
        API.getUsers(token, res => {
            console.log("Result", res.data);
            dispatch ({
                type: 'GOT_USERS',
                payload: res.data.id
            })
        })
    }
}

export const getPosts = (token) => {
    return (dispatch) => {
        API.getPosts(token, res => {
            console.log("Result", res.data);
            dispatch ({
                type: 'GOT_POSTS',
                payload: res.data
            })
        })
    }
}