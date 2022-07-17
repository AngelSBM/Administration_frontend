<template>
  <div class="container">
    
    <div class="content">
      
      <div class="logout_container">
        <i class="fa fa-sign-out" aria-hidden="true" @click="logout"></i>
      </div>
      
     <input type="text" v-model="searchValue" placeholder="Search">

      <div class="no-clients-container" v-if="clients.length === 0 || filteredClients.length === 0">
        <div v-if="clients.length === 0">
          <i class="fa fa-users" aria-hidden="true"></i>
          <span>
            You don´t have any users by now
          </span>
        </div>

        <div v-if="filteredClients.length === 0">
          <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
          <span style="width:90%; margin: auto">
            You don´t have any user registered with this name!
          </span>
        </div>
      </div>

<!-- v-if="clients.length > 0" -->
      <div class="clients-container" v-if="clients.length > 0"> 
        <ul>
  
            <li v-for="(client,index) in filteredClients" :key="index" @click="goToUserDetails(client)">
              <i class="fa fa-user" aria-hidden="true"></i> 
                {{ client.name }}
            </li>
  
        </ul>
      </div>
   </div>

    <div class="add-container">
      <button class="button" @click="$router.push({ name: 'newClient' })">
        <i class="fa fa-plus" aria-hidden="true"></i>
      </button>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data(){
    return {
      searchValue: ''
    }
  },
  async created(){
    await this.getClients();
  },  
  computed:{
    ...mapGetters('client', ['clients']),
    filteredClients(){
      if(this.searchValue === ''){
        return this.clients;
      }

      return this.clients.filter(client => client.name.toLowerCase().includes(this.searchValue.toLocaleLowerCase()))
    }
  },
  methods: {
    async getClients(){
      await this.$store.dispatch('client/getClients')

    },
    goToUserDetails(client){
      this.$store.dispatch('client/selectClient', client);
      this.$router.push({name: 'client'})
    },
    logout(){
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      this.$store.dispatch('client/purgeCompanieSession')
      this.$router.push({ name:'login' })
    }
  }
}
</script>

<style scoped>

  .no-clients-container{
    margin-top: 40px;
  }

  .no-clients-container div{
    display: flex;
    flex-direction: column;
  }


  .no-clients-container i{
    font-size: 80px;
    margin-bottom: 20px;
  }

  .no-clients-container span{
    opacity: .5;
    font-size: 22px;
  }

  .clients-container{
    height: 84%;
    overflow: auto;
  }

  .logout_container{
    margin-bottom: 20px;
    text-align: right;
    width: 90%;
  }

  .fa-sign-out{
    font-size: 40px;
    cursor: pointer;
  }


  .container{
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .content{
    width: 100%;
    top: 6%;
    height: 94%;
    position: absolute;
  }

  input{
    width: 90%;
    padding: 10px;
    border: none;
    border-bottom: 1px solid rgb(153, 153, 153);
    outline: none;
    border-radius: 4px;
  }

  ul{
    width: 90%;
    list-style: none;
  }

  li{    
    text-align: left;
    padding: 15px 10px;
    border-bottom: 1px solid rgb(237, 237, 237);
    font-weight: bolder;
    cursor: pointer;
  }

  li i{
    font-size: 25px;
    margin-right: 20px;
  }

  .add-container{
    position: absolute;
    bottom: 1%;
    right: 2%;
  }

  button{

    width: 70px;
    height: 70px;
    border: none;
    outline: none;
    border-radius: 100%;
    cursor: pointer;
    margin-bottom: 20px;
    font-size: 28px;
    background-color: black;
    color: rgb(67, 67, 197);

  }

</style>