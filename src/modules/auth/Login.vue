<template>
  <div class="login-container">

      <div class="content">
        <form>
          <div class="title">Login</div>
          <label for="email">Email</label>
          <input type="text" name="email" v-model="credentials.email">
          <label for="password">Password</label>
          <input type="password" name="passowrd" v-model="credentials.password">
        </form>
    
          <a @click="$router.push({name: 'register'})">Don´t have an account? Register here.</a>
    
          <button @click="login" :class="{ 'loading-button': loadingLogin }">
            <span v-show="!loadingLogin">Login</span>
            <span v-show="loadingLogin">
              <i class="fa fa-spinner fa-spin" aria-hidden="true" style="margin-right: 10px;"></i>
              Hold on...
              </span>
          </button>

      </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      credentials: {
        email: '',
        password: ''
      },
      loadingLogin: false
    }
  },
  methods:{
    async login(){
      try {
        this.loadingLogin = true;
        await this.$store.dispatch('auth/login', this.credentials);
        await this.$store.dispatch('client/getClients')
        this.loadingLogin = false;
        this.$router.push({ name: 'clients' })

      } catch (error) {
          console.log('ERROR', error);
      }
    }
  }

}
</script>

<style scoped>
  .title{
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 50px;
  }

  .login-container{
    height: 100%;
    display: flex;
    align-items: center;
  }

  .content{
    height: 90%;
    width: 100%;
    padding: 20px;
  }


  form{
    margin-top: 20%;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  label {
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
  }

  input{
    margin-bottom: 50px;
    padding: 13px;
    border-radius: 4px;
    outline: none;
    border: none;
    border-bottom: 1px solid rgb(105, 105, 105);
  }

  a{
    display: block;
    text-align: left;
    margin-bottom: 40px;
    cursor: pointer;
  }

  a:hover{
    text-decoration: underline;
  }

  button{
    margin-top: 30px;
    padding: 8px 15px;
    width: 50%;
    font-size: 20px;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    color: white;
    background-color: rgb(25, 69, 182);
  }

  .loading-button{
    opacity: .5;
  }


</style>