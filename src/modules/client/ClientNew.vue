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

            <div class="addresses_fields">
                <div class="block_field">
                    <div class="field_title">
                    Address
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
        <button class="button edit" @click="addClient">Create</button>
    </div>


    </div>


  </div>
</template>

<script>
export default {

  data(){
    return {
        clientInfo: {
            name: '',
            email: '',
            phone: ''
        }
    }
  },
  methods: {
    addAddressField(){
        const adrdressContainer = document.querySelector('.addresses_fields');

        let newAddressField = document.createElement('div');
        newAddressField.style = 'padding: 10px;text-align: left; border-bottom: 1px solid rgb(191, 191, 191);'

        const addressFieldTitle = document.createElement('div');
        addressFieldTitle.style = '   font-weight: bold; margin-bottom: 10px;'
        addressFieldTitle.textContent = 'Address'

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
    async addClient(){

        if(this.clientInfo.email === '' || this.clientInfo.name === '' || this.clientInfo.phone === ''){
            return;
        }

        const addressContainer = document.querySelectorAll('.address_input');

        let addresses = [];
        addressContainer.forEach(element => {
            const address = {
                address: element.value
            }
            if(address.address !== ''){
                addresses.push(address)
            }
        });

        const newClientInfo = {
            ...this.clientInfo,
            addresses
        }

        await this.$store.dispatch('client/createClient', newClientInfo);
        
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
        background-color: green;
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


  
</style>