<!-- TODO: EDIT CLIENT HERE AND IN THE BACKEND -->

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
                    <input type="text" v-model="clientInfo.name">
                </div>
            </div>
            <div class="block_field">
                <div class="field_title">
                    Email
                </div>
                <div class="field_info">
                    <input type="text" v-model="clientInfo.email">
                </div>
            </div>
            <div class="block_field">
                <div class="field_title">
                    Phone
                </div>
                <div class="field_info">
                    <input type="text" v-model="clientInfo.phone">
                </div>
            </div>        
    </div>

    <div class="block addreses">

        <div class="addresses_fields_existed">
            <div class="block_field" v-for="(address, index) in clientInfo.addresses" :key="index">
                <div class="field_title">
                    Address {{index + 1}}
                </div>
                <div class="field_info field_info_new">
                    <input class="address_input_updated" type="text" v-model="address.address" :data-id="address.id">
                    <button class="delete_address" @click="deleteAddress(address.id, index)">
                        <i class="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                </div>
            </div>  
        </div>
        
    </div>

    <div class="block addreses">

        <div class="addresses_fields">
            <div class="block_field">
                <div class="field_title">
                    New address
                </div>
                <div class="field_info">
                    <input class="address_input" type="text">
                </div>
            </div>  
        </div>
        
        <div class="block_actions">
            <button class="minus" @click="popAddressField">     
                <i class="fa fa-minus" aria-hidden="true"></i>
            </button>
            <button class="plus" @click="addAddressField">     
                <i class="fa fa-plus" aria-hidden="true"></i>
            </button>
        </div>
    </div>

    <div class="buttons">
        <!-- <button class="button edit" @click="addClient">Create</button> -->
        
        <button @click="updateClient" :class="{ 'loading-button': updatingLoading, 'button': true, 'edit': true }">
            <span v-show="!updatingLoading">Update</span>
            <span v-show="updatingLoading">
              <i class="fa fa-spinner fa-spin" aria-hidden="true" style="margin-right: 10px;"></i>
              Updating...
              </span>
          </button>

    </div>


    </div>


  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {

  data(){
    return {
        clientInfo: {
            name: '',
            email: '',
            phone: '',
            addresses: []
        },
        updatingLoading: false
    }
  },
  computed:{
    ...mapGetters('client', ['selectedClient'])
  },
  created(){
    this.clientInfo.name = this.selectedClient.name
    this.clientInfo.email = this.selectedClient.email
    this.clientInfo.phone = this.selectedClient.phone
    this.clientInfo.addresses = this.selectedClient.addresses
  },
  methods: {
    addAddressField(){
        const adrdressContainer = document.querySelector('.addresses_fields');

        let newAddressField = document.createElement('div');
        newAddressField.style = 'padding: 10px;text-align: left; border-bottom: 1px solid rgb(191, 191, 191);'

        const addressFieldTitle = document.createElement('div');
        addressFieldTitle.style = '   font-weight: bold; margin-bottom: 10px;'
        addressFieldTitle.textContent = 'New address'

        const addressFieldInfo = document.createElement('div'); 
        addressFieldInfo.innerHTML = '<input class="address_input" type="text" style=" width: 90%;padding: 7px 15px;border-radius: 4px;outline: none;border: none;border-bottom: 1px solid rgb(105, 105, 105);">'

        newAddressField.appendChild(addressFieldTitle)
        newAddressField.appendChild(addressFieldInfo)
        

        adrdressContainer.appendChild(newAddressField)

    },
    popAddressField(){
        const adrdressContainer = document.querySelector('.addresses_fields');
        adrdressContainer.removeChild(adrdressContainer.lastChild)
    },
    async updateClient(){
        
        const updatedClient = this.getUpdatedInfo();

        await this.$store.dispatch('client/updateClient', updatedClient);

        this.$router.push({ name: 'clients' })

    },
    getUpdatedInfo(){
           
        const { name, email, phone } = this.clientInfo

        let updatedClient = {
            id: this.selectedClient.id,
            name, 
            email, 
            phone,
            updatedAddreses: [],
            newAddresess: []
        };

        const updatedAddressContainer = document.querySelectorAll('.address_input_updated');


        updatedAddressContainer.forEach(element => {
            const address = {
                id: element.getAttribute('data-id'),
                address: element.value
            }
            if(address.address !== ''){
                updatedClient.updatedAddreses.push(address)
            }
        });


        const addressContainer = document.querySelectorAll('.address_input');

        addressContainer.forEach(element => {
            const address = {
                address: element.value
            }
            if(address.address !== ''){
                updatedClient.newAddresess.push(address)
            }
        });


        return updatedClient;
    },
    async deleteAddress(id, index){
        
        try {
            await this.$store.dispatch('client/deleteAddress', id);

            const updatedAddressContainer = document.querySelector('.addresses_fields_existed');


            updatedAddressContainer.removeChild(updatedAddressContainer.children[index])
        } catch (error) {
            
        }



    }
  }
}
</script>

<style scoped>

  .loading-button{
    opacity: .5;
  }

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

    .field_info_new{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .field_info_new input {
        width:70%;
    }

    .field_info_new button {
        padding: 8px;
        margin-top: 10px;
        border: none;
        width: 40px;
        outline: none;
        border-radius: 3px;
        cursor: pointer;
        font-size: 18px;
        color: white;
        background-color: rgb(130, 15, 15);
    }

    input{
        width: 90%;
        padding: 7px 15px;
        border-radius: 4px;
        outline: none;
        border: none;
        border-bottom: 1px solid rgb(105, 105, 105);
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


    .block_actions{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .block_actions button{
        margin-top: 10px;
        padding: 8px;
        width: 50px;
        border: none;
        outline: none;
        border-radius: 3px;
        cursor: pointer;
        margin-bottom: 20px;
        font-size: 18px;
        color: white;
    }

     .minus{
        background-color: rgb(131, 72, 29);
    }
    .plus{
        background-color: rgb(127, 153, 255);
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