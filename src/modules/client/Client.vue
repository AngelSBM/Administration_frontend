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


        <div class="block">
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
        <button class="button edit">Edit</button>
        <button class="button delete">Delete</button>
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
    height: 90%;
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 0, 195);
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
    background-color: beige;
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


  
</style>