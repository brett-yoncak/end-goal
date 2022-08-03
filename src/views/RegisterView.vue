<script setup>
import { ref } from 'vue'
import router from '@/router'
import store from '@/store'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import CleanButton from "@/components/CleanButton.vue"

const auth = getAuth();

let email = ref('')
let password = ref('')

const register = () => {
   alert('Welcome!')
   console.log(email.value)
   console.log(password.value)
   createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
         const user = userCredential.user;
         console.log(user)
         console.log(store.loggedIn)
         store.loggedIn = !!user
         console.log(store.loggedIn)
         router.replace({name: "new"})
      })
}

</script>

<template>
  <div class="grid">
    <header class="heading">
      <h1>Create your account and start acheiving your goals!</h1>
    </header>

    <main class="content">
    <form @submit.prevent="register()" class="form">  
      <input
         type="text"
         placeholder="Email"
         class="text-container"
         v-model="email"
      />
    
      <input 
         type="password"
         placeholder="Password"
         class="text-container"
         v-model="password"
      />
    
      <CleanButton
         type="submit" 
         :text="`Let's go!`"
         :background="`green`"
      />
      </form>
    </main>
    <div class="bottom-bar">
      <router-link to="/login">
         <span class="reminder-text">
            Already have an account?
         </span>
         
         <span class="normal-text">
            Click here to login.
         </span>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-areas:
    'head'
    'content'
    'foot' 
  ;
  background: #404040;
  border-radius: 24px;
  min-height: 80%;
  min-width: 540px;
  max-height: 800px;
  max-width: 1000px;
  grid-template-rows: 64px 1;
  margin: 80px;
  padding: 40px;
}

.heading {
   grid-area: head;
   font-size: 10px;
   color: white;
}

.content {
   grid-area: content;
}

.form {
   display: flex;
   flex-direction: column;
   row-gap: 8px;
}

.text-container {
   border: none;
   height: 80px;
   padding-left: 40px;
   font-size: 16px;
   background: #565656;
   border-radius: 80px;
}

.bottom-bar {
   grid-area: foot;
}

.reminder-text {
   color: #F3451E;
}

.normal-text {
   color: white;
}
</style>
