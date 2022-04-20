import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
});
const store = createStore({
    state: {
        user: null,
    },
    getters: {
        _isAuthenticated: (state) => state.user !== null,
        _getCurrentUsser(state) {
            const user = state.user;
            delete user?.password; //optional chaning
            return user;
        },
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        logoutUser(state) {
            state.user = null;
        },
    },
    plugins: [vuexLocal.plugin],
});

export default store;
