const defaultState = {
    user: [],
    posts: [],
    post: {}
}

const admin = (state = defaultState, action) => {
    switch (action.type){
        case 'GOT_USERS':
            return {
                ...state, 
                user: action.payload
            }
        case 'GOT_POSTS':
            console.log("GOT_POSTS");
            console.log(action.payload);
            return {
                ...state, 
                posts: action.payload
            }
        case 'POST_ADDED':
            console.log("POST_ADDED");
            console.log(action.payload)
            return {
                ...state, 
                posts: state.posts.concat(action.payload),
                post: action.payload
            }
        case 'UPDATED_POST':
            console.log("UPDATED_POST");
            console.log(action.payload)
            return {
                ...state, 
                post: action.payload,
                posts: state.posts.map( p => {
                    if(p.id === action.payload.id){
                        // This is the existing post in redux that has been updated
                        // and currently in action.payload
                        return {
                            ...p,
                            ...action.payload
                        }
                    }else{
                        return p;
                    }
                })
            }
        case 'GOT_SINGLE_POST':
            console.log("GOT_SINGLE_POST");
            console.log(action.payload)
            return {
                ...state, 
                post: action.payload
            }
        default:
            return state
    }
}

export default admin;