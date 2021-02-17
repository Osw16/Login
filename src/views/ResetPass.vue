<template>
    <div id="view-login">
        <div class="columns">
  <div class="column">

<div class="box">
                                              <form>
    <label class="label">Recupera tu contraseña 😊👍</label>
    <p>
      Te enviaremos un correo electrónico con un enlace privado para que reasignes tu contraseña. Este enlace será valido por una.
    </p>
        
      <div class="field">
       <div class="control">
        <input class="input" type="text" placeholder="Correo electrónico">
        </div>
          <p class="help">Info required</p>
        </div>
 
        <div class="columns">
        
          <div class="column">

            
            <button class="label" href="#" >Enviar enlace</button>
          </div>
          <div class="column">
            
        <div class="control">
          <button class="button is-primary">Iniciar sesión</button>
        </div>
          
        </div>
        </div>



  
    
    </form>             
    </div>

  </div>
  <div class="column">
      <div class="box">
        <Topbar/>

      </div>
  </div>

</div>
    
        
    </div>
</template>

<script>
// import Skin from "@/components/Skin.vue"
import Topbar from "@/components/Topbar.vue"

export default {
    name: "login",
    components: {
    
        Topbar
    }
}
</script>
<style scoped lang="scss">
@import './sass/main.scss';

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.topButtons{
  border:1px solid;
  display: flex;
}

.label{
   border: none;
  height: 100%;
  cursor: pointer;
  outline: none;
}
.box {
    width: 500px;
    
}
</style>