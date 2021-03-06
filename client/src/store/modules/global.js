const state={
    isLogin:true,
    pageIndex:0,
    userInfo:{
        account :'',
        iface:'img/header/noface.gif',
        niface:'img/header/akari.jpg'
    },
    elevator:{
        isEleMaskShow:false,
        isTopZIndex:false,
        isOpen:false
    },
    isPlayerOpen:false,    
}

const getters={ 
    pageIndex:function(state){
        return state.pageIndex;
    },
    isLogin:function(state){
        return state.isLogin;
    },
    isEleMaskShow:function(state){
        return state.elevator.isEleMaskShow;
    },
    isTopZIndex:function(state){
        return state.elevator.isTopZIndex;
    },
    isOpen:function(state){
        return state.elevator.isOpen;
    },
    isPlayerOpen:function(state){
        return state.isPlayerOpen
    }
}

const mutations={
    setPageIndex(state,value){
       state.pageIndex=value; 
    },
    setIsLogin(state,value){
        state.isLogin=value; 
    },
    setIsEleMaskShow(state,value){
        state.elevator.isEleMaskShow=value;
    },
    setIsTopZIndex(state,value){
        state.elevator.isTopZIndex=value;
    },
    setIsOpen(state,value){
        state.elevator.isOpen=value;
    },
    setPlayer(state,value){
        state.isPlayerOpen=value;
    }
}

const actions={
    getPageIndex({commit},value){
        commit('setPageIndex',value)
    },
    getIsLogin({commit},value){
        commit('setIsLogin',value)
    },
    getIsEleMaskShow({commit},value){
        commit('setIsEleMaskShow',value)
    },
    getIsTopZIndex({commit},value){
        commit('setIsTopZIndex',value)
    },
    getIsOpen({commit},value){
        commit('setIsOpen',value)
    },
    getPlayer({commit},value){
        commit('setPlayer',value)
    }
}

export default({
    namespaced:true,
    state,
    getters,
    mutations,
    actions
})