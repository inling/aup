<template>
    <li :title="liTitle" class="headli" @mouseover="setMouseOver" @mouseout="setMouseOut">
        <router-link to="#" class="heada">{{liText}}</router-link>
        <transition name="box-show">
            <div class="up-down-box" v-show="isBoxShow">
                <component :is="downDiv"></component>
            </div>
        </transition>
    </li>
</template>

<script>
    import gameCenter from "@/components/Home/subCom_header/gameCenter/gameCenter.vue"
    import live from "@/components/Home/subCom_header/live/live.vue"
    import bml from "@/components/Home/subCom_header/bml/bml.vue"
    export default({
        data(){
            return{
                isBoxShow:false
            }
        },
        methods:{
            setMouseOver(){
                this.isBoxShow=true
            },
            setMouseOut(){
                this.isBoxShow=false
            }
        },
        created() {
            
        },
        components:{
            gameCenter,
            live,
            bml
        },
        props:['liTitle','liText','downDiv']
    })
</script>

<style scoped>
    .headli .up-down-box{
        position: absolute;
        left:0;
        top:42px; 
        line-height:normal
    }
    .box-show-enter-active{
        transition: all .3s ease;
    }
    .box-show-leave-active{
        transition: all .3s ease;
    }
    .box-show-enter{
        margin-top: 10px;
        opacity: 0;
    }
    .box-show-leave-to{
        margin-top: 10px;
        opacity: 0;
    }

</style>

