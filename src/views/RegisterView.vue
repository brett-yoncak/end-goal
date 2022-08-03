<script setup>
import { ref } from 'vue'
import router from '@/router'
import store from '@/store'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import CleanButton from "@/components/CleanButton.vue"

const auth = getAuth();

let email = ref('')
let password = ref('')
let passwordCheck = ref('')

const register = () => {
   if(password.value != passwordCheck.value){
      alert('Passwords MUST match. Try again.')
      password.value = '' 
      passwordCheck.value  = ''
   }

   else
   createUserWithEmailAndPassword(auth, email.value, password.value)
   .then((userCredential) => {
      const user = userCredential.user;
      store.loggedIn = !!user
      router.replace({name: "new"})
   })
   .catch((error) => {
      const errorCode = error.code
      if(errorCode === 'auth/invalid-email'){
         alert('Please enter a valid email address.')
      }
      else if(errorCode === 'auth/weak-password'){
         alert('Your password should be at least 6 characters long.')
      }
      
      email.value = ''
      password.value = ''
      passwordCheck.value = ''
   })
}
</script>

<template>
  <div class="grid">
    <header class="heading">
      <span>Create your account to get started! 💪</span>
    </header>

    <article class="content">
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

         <input
            type="password"
            placeholder="Confirm Password"
            class="text-container"
            v-model="passwordCheck"
         />
    
         <CleanButton
            type="submit" 
            :text="`Let's go!`"
            :background="`green`"
         />
      </form>
    </article>

    <div class="bottom-bar">
      <router-link 
      to="/login" 
      style="text-decoration: none"
      >
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
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  grid-template-areas:
   'top'
   'head'
   'content'
   'foot' 
  ;
  background: #404040;
  border-radius: 24px;
  height: 680px;
  width: 640px;
  grid-template-rows: 24px 64px 448px auto;
  padding: 40px;
}

.heading {
   grid-area: head;
   font-size: 23px;
   font-weight: bold;
   color: white;
   letter-spacing: 1px;
}

.content {
   grid-area: content;
   width: 100%;
}

.form {
   display: flex;
   flex-direction: column;
   row-gap: 8px;
   width: 100%;
}

.text-container {
   color: white;
   border: none;
   height: 80px;
   padding-left: 40px;
   font-size: 23px;
   background: #565656;
   border-radius: 80px;
   width: auto;
}

.bottom-bar {
   display: flex;
   grid-area: foot;
   margin-top: auto;
   padding-bottom: 20px;
}

.reminder-text {
   color: #F3451E;
}

.normal-text {
   color: white;
}
</style>
