const { LOGIN, LOGOUT } = require('../types/user-type')


const initialState = {

   user :{},


};

const userReducer =(state=initialState, action)=>{
    switch(action.type){
        case LOGIN :

            return {

            ...state,
                todos: [
                    ...state.todos,
                    {
                        user: action.payload,
                        completed: false
                    }
                ]

            }

        default: 

            return state;

    }
}

export default userReducer;