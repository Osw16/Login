<template>
    <div id="view-login">
        <Skin class="skin-noscroll bg-comfeco-degradee">
            <template v-slot:view-space>
                <!-- <h1>Hola soy un Login</h1> -->
                <UserForm/>
            </template>
        </Skin>
    </div>
</template>

<script>
import Skin from "@/components/Skin.vue"
import UserForm from "@/components/UserForm.vue"

export default {
    name: "login",
    components: {
        Skin,
        UserForm
    }
}
</script>