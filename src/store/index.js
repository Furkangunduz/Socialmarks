import { createStore } from "vuex";

const store = createStore({
    state: {
        user: null,
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
    },
    getters: {
        _isAuthenticated: (state) => state.user !== null,
        _getCurrentUsser(state) {
            const user = state.user;
            delete user?.password; //optional chaning
            return user;
        },
    },
});

export default store;
