<template>
    <div ref="skin" class="skin skin-light skin-noscroll">
        <Topbar />
        <div id="view-wrap" slot="view-space"></div>
        <Footer />
    </div>
</template>

<script>
import Topbar from "./Topbar"
import Footer from "./Footer"

export default {
    name: "Skin",
    components: {
        Topbar,
        Footer
    }
}
</script>

<style lang="scss">
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
}
</style>