<template>
    <div id="view-login">
        <Skin class="skin-noscroll">
            <slot name="view-space">
                <!-- Code Here -->
            </slot>
        </Skin>
    </div>
</template>

<script>
import Skin from "@/components/Skin.vue"

export default {
    name: "login",
    components: {
        Skin
    }
}
</script>