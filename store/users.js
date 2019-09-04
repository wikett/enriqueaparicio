import Cookie from 'js-cookie'

export const state = () => {
    return {
        auth: null
    }
}

export const mutations = {
    setAuth(state, auth) {
        state.auth = auth
    }
}

export const actions = {
    
    authenticateUser(vuexContext, authData){
        console.log(`authenticateUser`)
        console.log(authData)
        this.$axios.setHeader('Content-Type', 'application/json', ['post'])

        return this.$axios.$post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA68RpQ7kAQX09mz_V8dBLzVsZBQi5TJ4k', authData)
                    .then(result => {
                        console.log(`result authenticate User`)
                        console.log(result)
                        vuexContext.commit('setAuth', result)
                        localStorage.setItem('auth', result)
                        Cookie.set("auth", result)
                    })
    },
    initAuth(vuexContext, req) {
        console.log(`[Store]: initAuth starts`)
        /*let authCookie;
        let auth;
        let expirationDate;
        if(req){
            console.log(`[SERVER SIDE] : getItem auth from Cookie`)
            console.log(`!req.headers.cookie`)
            console.log(!req.headers.cookie)
            if(!req.headers.cookie){
                return;
            }

            console.log(`req.headers.cookie`)
            console.log(req.headers.cookie)

            const parsed = cookieparser.parse(req.headers.cookie)
            console.log(`2. parsed`)
            console.log(parsed)
            console.log(parsed.auth)
            
            if(!parsed.auth){
                return;
            }
            console.log(`cucu`)
            authCookie = JSON.parse(parsed.auth)
            console.log(authCookie)
            auth = authCookie;

            vuexContext.commit('setAuth', auth);

        }else{
            console.log(`[CLIENT] : getItem auth from localStorage`)
           // auth = localStorage.getItem("auth")
            expirationDate = new Date()

            if (new Date() > expirationDate) {
                return;
            }
        }*/
        

       
    }
}

// export const state = () => ({
//     user: {}
// })

// export const mutations = {
//     SET_USER(state, userData){
//         state.user = userData;
//     }

// }

// export const actions = {
//     setUser({commit}, params) {
//         console.log(`actions / setUser`)
//         //context.commit('SET_USER', userData)
//         commit('SET_USER', params)
//     }
// }

// export const getters = {
//     getUser: state => {
//         return state.user;
//     },
//     isUserAuthenticated: state => {
//         if(Object.entries(state.user).length === 0 && state.user.constructor === Object)
//             return false;
//         else
//             return true;
//     }
    
// }