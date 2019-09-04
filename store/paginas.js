export const state = () => {
    return {
        page: 'index'
    }
}

export const mutations = {
    updatePage(state, pageName) {
        state.page = pageName;
    }
}

export const actions = {
    updatePageAction(vuexContext, pageName){
        console.log(`[Store]: updatePageAction: ${pageName}`)
        vuexContext.commit('updatePage', pageName)
    }
}

export const getters = {

}