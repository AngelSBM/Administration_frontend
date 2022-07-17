<template>
  <div class="container">
    <div class="phone-frame">
        <div class="phone-notch">
            <div class="notch-microphone"></div>
            <div class="notch-circle"></div>
            <div class="notch-circle"></div>
        </div>
        <div class="phone-content">
            <router-view/>
        </div>
    </div>
  </div>
</template>

<script>


export default {


}
</script>

<style scoped>
    .container{
        height: 94vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .phone-frame{
        width: 400px;
        height: 90%;
        border: 13px solid black;
        border-radius: 40px;
        position: relative;
        background-color: rgb(40, 40, 40);
        color: white;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }

    .phone-notch{
        position: absolute;
        top: 0%;
        width: 60%;
        left: 20%;
        height: 30px;
        background-color: black;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: end;
    }

    .notch-circle{
        background-color: rgb(60, 60, 60);
        width: 12px;
        height: 12px;
        margin: 0px 10px;
        border-radius: 100%;
        margin-bottom: 5px;
    }

    .notch-microphone{
        width: 60px;
        height: 12px;
        background-color: rgb(36, 36, 36);
        margin-right: 30px;
        margin-bottom: 5px;
        border-radius: 5px;
    }

    .phone-content{
        height: 94%;
        margin-top: 30px;
    }

</style>