<template>
  <div class="container">

   <div class="content">
     <input type="text">

      <ul v-if="clients.length > 0">

          <li v-for="(client,index) in clients" :key="index" @click="goToUserDetails(client)">
            <i class="fa fa-user" aria-hidden="true"></i> 
              {{ client.name }}
          </li>

      </ul>
   </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  async created(){
    await this.getClients();
  },  
  computed:{
    ...mapGetters('client', ['clients'])
  },
  methods: {
    async getClients(){
      await this.$store.dispatch('client/getClients')
      console.log(this.clients);
    },
    goToUserDetails(client){
      this.$store.dispatch('client/selectClient', client);
      this.$router.push({name: 'client'})
    }
  }
}
</script>

<style scoped>
  .container{
    height: 90%;
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 0, 195);
    position: relative;
  }

  .content{
    width: 100%;
    top: 6%;
    position: absolute;
  }

  input{
    width: 90%;
    padding: 10px;
    border: none;
    border-bottom: 1px solid rgb(153, 153, 153);
    outline: none;
  }

  ul{
    background-color: bisque;
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

</style>