<template>
    <div ref="skin" class="skin skin-light skin-noscroll">

        <div id="view-wrap">
            <slot name="view-space"></slot>
        
        </div>
        
    </div>
</template>

<script>
import Topbar from "./Topbar"
import Footer from "./Footer"
import UserForm from "@/components/UserForm.vue"


export default {
    name: "Skin",
    components: {
        Topbar,
        Footer,
        UserForm
    }
}
</script>

<style lang="scss">
@import './sass/main.scss';
#topbar {
    position: absolute;
    top: 0;
    left: 0;
    height: 4em;
    width: 100%;
}
#footer {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3em;
    width: 100%;
}
.skin-noscroll {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    #view-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>