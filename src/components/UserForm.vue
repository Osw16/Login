<template>
    <div class="box">

      
        <div class="topButtons">
        
      <button class="label" v-on:click="logIn">Inicia Sesión </button>
      |
      <button class="label" v-on:click="logRegister">Regístrate</button>
  
      </div>    

              <form v-show="logInShow">
        
      <div class="field">
       <div class="control">
        <input class="input" type="text" placeholder="Correo Electrónico">
        </div>
          <p class="help">some required</p>
        </div>
      <div class="field">
       <div class="control">
        <input class="input" type="text" placeholder="Contraseña">
        </div>
        </div>

        
        <div class="columns">
        
          <div class="column">

    
    <router-link to="/ResetPassword">¿Olvidaste tu contraseña?</router-link>
          </div>
          <div class="column">
            
            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox">
                    Mantenerme conectado
                </label>
              </div>
          </div>
        </div>
        </div>

        <div class="control justify-center">
          <button class="button is-primary" >Ingresar</button>
        </div>


          <p class="initWith justify-center">Inicia sesion con</p>
    <div class="columns">
      <div class="column">
        <div class="control">
          
          <button class="button is-primary">
            <span class="icon"><img  src="../assets/google_icon.svg" alt="google icon"></span>
            <span>Ingresar con Google</span>
            </button>
        </div>
      </div>
      <div class="column">
        <div class="control">
          
          <button class="button is-primary">
            <span class="icon"><img  src="../assets/fb_icon.svg" alt="google icon"></span>
            <span>Ingresar con Facebook</span>
          </button>
        </div>
      </div>
    </div>



    </form>
      <form v-show="logRegisterShow">
        
      <div class="field">
       <div class="control">
        <input class="input" type="text" placeholder="Nick">
        </div>
          <p class="help">some required</p>
        </div>
      <div class="field">
       <div class="control">
        <input class="input" type="text" placeholder="Correo electrónico">
        </div>
        </div>
      <div class="field">
       <div class="control">
        <input class="input" type="text" placeholder="Contraseña">
        </div>
        </div>
      <div class="field">
       <div class="control">
        <input class="input" type="text" placeholder="Confirmar contraseña">
        </div>
        </div>

        <div class="control justify-center">
          <button class="button is-primary" >Crear cuenta</button>
        </div>


          <p class="registerWith justify-center">O registrate usando</p>
    <div class="columns">
      <div class="column">
        <div class="control">
          
          <button class="button is-primary">
            <span class="icon"><img  src="../assets/google_icon.svg" alt="google icon"></span>
            <span>Ingresar con Google</span>
            </button>
        </div>
      </div>
      <div class="column">
        <div class="control">
          
          <button class="button is-primary">
            <span class="icon"><img  src="../assets/fb_icon.svg" alt="google icon"></span>
            <span>Ingresar con Facebook</span>
          </button>
        </div>
      </div>
    </div>
    <h3 class="TOF">Al registrarse, usted acepta los terminos y condiciones, Politicas de privacidad y protección de datos </h3>
    


    </form>
 
  
    


    </div>
</template>
<script>
export default {
 
  methods:{
    logIn(event){

      if(!this.logInShow==true){
        console.log("login true")
       this.logInShow=true;
       this.logRegisterShow=false;
      }


      // this.logRegiterShow=false;
    },
    logRegister(event){
      this.logInShow=false;
      this.logRegisterShow=true;
      
    }
  },
  data(){
    return{
      logRegisterShow:false,
      logInShow:true
    }
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
  display: flex;
  justify-content:space-around;
  padding:16px;
}
.justify-center{

  justify-content: center;
  display:flex;
}
.label{
   border: none;
  height: 100%;
  cursor: pointer;
  outline: none;

}
.initWith{
  padding: 16px;

}
.registerWith{
  padding: 16px;

}
.TOF{
  margin:auto;
  width: 400px;
  text-align: center;
}

</style>