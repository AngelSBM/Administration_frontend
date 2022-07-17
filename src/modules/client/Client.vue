<template>
  <div class="container">

    <div class="blocks">

        <div class="back-container">
            <i class="fa fa-arrow-left" aria-hidden="true"
                @click="$router.push({name: 'clients'})"></i>
        </div>

        <div class="block">
            <div class="block_field">
                <div class="field_title">
                    Name
                </div>
                <div class="field_info">
                    {{ selectedClient.name }}
                </div>
            </div>
            <div class="block_field">
                <div class="field_title">
                    Email
                </div>
                <div class="field_info">
                    {{ selectedClient.email }}
                </div>
            </div>
            <div class="block_field">
                <div class="field_title">
                    Phone
                </div>
                <div class="field_info">
                    {{ selectedClient.phone }}
                </div>
            </div>        
    </div>


        <div class="block" v-if="selectedClient.addresses.length > 0">
            <div class="block_field" v-for="(address, index) in selectedClient.addresses" :key="index">
                <div class="field_title">
                    Address {{index + 1}}
                </div>
                <div class="field_info">
                    {{ address.address }}
                </div>
            </div>     
        </div>

    <div class="buttons">
        <button class="button edit" @click="$router.push({ name:'updateClient' })">Edit</button>
        <button class="button delete" @click="deleteClient">Delete</button>
    </div>


    </div>


  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed:{
    ...mapGetters('client', ['selectedClient'])
  },
  methods: {
    async deleteClient(){
        await this.$store.dispatch('client/deleteClient', this.selectedClient.id)
        this.$router.push({ name: 'clients' })
    }
  }
}
</script>

<style scoped>

.back-container{
    margin-bottom: 20px;
    text-align: left;
    width: 90%;
}

i{
    font-size: 30px;
    cursor: pointer;
}

.container{
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .blocks{
    width: 100%;
    top: 6%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .block{
    background-color: rgb(0, 0, 0);
    margin-bottom: 40px;
    width: 90%;
    padding: 8px;
    border-radius: 4px;
  }

  .block_field{
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid rgb(191, 191, 191);
  }

    .field_title{
        font-weight: bold;
        margin-bottom: 10px;
    }

    .buttons{
        display: flex;
        flex-direction: column;

    }

    button{
        padding: 8px;
        width: 200px;
        border: none;
        outline: none;
        border-radius: 3px;
        cursor: pointer;
        margin-bottom: 20px;
        font-size: 18px;
        color: white;
    }

    .edit{
        background-color: rgb(75, 75, 192);
    }

    .delete{
        background-color: rgb(158, 35, 35);
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