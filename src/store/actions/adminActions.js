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

export const addPost = (post, token) => {
    return (dispatch) => {
        API.addPost(post, token, res => {
            console.log("Result", res.data);
            dispatch ({
                type: 'POST_ADDED',
                payload: res.data
            })
        })
    }
}

export const updatePost = (post, token) => {
    console.log("Test post id", post);
    return (dispatch) => {
        API.updatePost(post, token, res => {
            console.log("Result", res.data);
            dispatch ({
                type: 'UPDATED_POST',
                payload: res.data
            })
        })
    }
}


export const getSinglePost = (id, token) => {
    return (dispatch) => {
        API.getSinglePost(id, token, res => {
            console.log("Result", res.data);
            dispatch ({
                type: 'GOT_SINGLE_POST',
                payload: res.data
            })
        })
    }
}
