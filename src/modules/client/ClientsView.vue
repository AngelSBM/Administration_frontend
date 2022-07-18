<template>
  <div class="container">
    
    <div class="content">
      
      <div class="logout_container">
        <i class="fa fa-sign-out" aria-hidden="true" @click="logout"></i>
      </div>
      
     <input type="text" v-model="searchValue" placeholder="Search">

      <div class="line">
      </div>

      <div class="no-clients-container" v-if="clients.length === 0">
        <div >
          <i class="fa fa-users" aria-hidden="true"></i>
          <span>
            You don´t have any clients by now
          </span>
        </div>

        <div v-if="filteredClients.length === 0 && clients.length !== 0">
          <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
          <span style="width:90%; margin: auto">
            You don´t have any client registered with this name!
          </span>
        </div>
      </div>

<!-- v-if="clients.length > 0" -->
      <div class="clients-container" v-if="filteredClients.length > 0"> 
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
import client from '@/store/client';
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

      let sortedClients = this.clients.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });


      if(this.searchValue === ''){
        return sortedClients;
      }

    return sortedClients.filter(client => client.name.toLowerCase().includes(this.searchValue.toLocaleLowerCase()))
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
    height: 80%;
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
    background-color: rgb(171, 171, 171);    
  }

  .line{
    border-bottom: 1px solid rgb(73, 73, 73);
    margin: 10px auto;
    margin-top: 20px;
    width: 95%;
  }

  ul{
    width: 90%;
    list-style: none;
    position: absolute;
    right: 20px;
  }

  li{    
    text-align: left;
    padding: 15px 10px;
    border-bottom: 1px solid rgb(122, 122, 122);
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
    right: 4%;
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
    background-color: rgb(0, 0, 0);
    color: rgb(67, 67, 197);

  }

      ::-webkit-scrollbar {
    width: 4px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.8);*/ 
        -webkit-border-radius: 10px;
        background-color:rgb(99, 99, 99);
        border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background:#666; 
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    }


</style>