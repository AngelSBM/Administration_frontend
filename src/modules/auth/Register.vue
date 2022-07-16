<template>
  <div class="login-container">

    

      <div class="content">
        <div class="title">Register</div>
        <form action="">
          <label for="email">Name</label>
          <input type="text" name="name" id="">
          <label for="email">Email</label>
          <input type="text" name="email" id="">
          <label for="password">Password</label>
          <input type="password" name="passowrd" id="">
        </form>
  
        <a @click="$router.push({name: 'login'})">Already have an account? login here.</a>
  
        <button type="submit">Register</button>
      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

  .title{
    font-weight: bold;
    font-size: 30px;
    margin-top: 30px;
  }
  .login-container{
    background-color: brown;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .content{
    background-color: bisque;
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
    font-weight: bold;
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
    font-size: 23px;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    color: white;
    background-color: rgb(25, 69, 182);
  }


</style>