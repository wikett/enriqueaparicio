const cookieparser = process.server ? require('cookieparser') : undefined;

export const state = () => ({

})

export const mutations = {

}

export const actions = {
    nuxtServerInit ({commit}, {req}){
        console.log(`--------------------    SERVER SIDE    ---------------------------------------`)
        let auth = null
        console.log(`0. req.headers.cookie`)
        console.log(req.headers.cookie)
        if (req.headers.cookie){
            console.log(`1. req.headers.cookie`)
            console.log(req.headers.cookie)
            const parsed = cookieparser.parse(req.headers.cookie)
            console.log(`2. parsed`)
            console.log(parsed)
            try {
                if(!parsed.auth){
                    return;
                }
                auth = JSON.parse(parsed.auth)
                commit('users/setAuth', auth)
                
            } catch (err) {
                console.log(err)
            }
        }

        
        
    }
}

export const getters = {

}