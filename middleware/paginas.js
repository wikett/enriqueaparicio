export default function(context) {
    console.log(`[Middleware]: pages`)
    console.log(context.route.name)
    context.store.dispatch('paginas/updatePageAction', context.route.name)
    //context.store.dispatch('users/initAuth', context.req)
    
    
}