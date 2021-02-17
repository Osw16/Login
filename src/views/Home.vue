<template>
    <div id="view-login">
     <div class="columns">
  <div class="column">
    <div class="box">
    <div class="control">
      <Topbar/>
      


    </div>
    


    </div>


    <div class="columns is-mobile">
      <div class="column is-5">
        <div class="box">
    
         <p class="bd-notification is-info">First nested column</p>


</div>

      </div>
      <div class="column">
        <div class="box">
        <p class="bd-notification is-info">Second nested column</p>
  
    
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
import Skin from "@/components/Skin.vue"
import Topbar from '@/components/Topbar.vue'




export default {
  name: 'Home',
  components:{
    Skin,
    Topbar,
  }
}
</script>
