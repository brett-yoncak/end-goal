<script setup>
import { ref } from "@vue/reactivity";
import IconAdd from "../components/icons/IconAdd.vue";
</script>

<template>
  <div class="grid">
    <div class="top-bar" >
      <span @click="showOptions()"
      class="options">  
        ...
      </span>
    </div>

    <header class="head">
      <h1>{{endGoal}}</h1>
    </header>

    <main class="content">
      <Tasks
      :tasks="tasks"
      />
    </main>

    <span class="bottom-bar">
      buttons or something
    </span>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-areas:
    'top'
    'head'
    'content'
    'foot' 
  ;
  background: #404040;
  border-radius: 24px;
  min-height: 80%;
  grid-template-rows: 64px 1;
  margin: 80px;
}

.top-bar{
  box-sizing: border-box;
  grid-area: top;
  display: flex;
  justify-content: flex-end;
  max-width: 100%;
  padding: 40px 40px 0px 40px;
}

.options{
  height: 16px;
  width: 32px;
}
.head {
  grid-area: head;
  display: flex;
  box-sizing: border-box;
  padding: 16px 40px 40px;
  max-width: 100%;
}

.content{
  display: flex;
  grid-area: content;
  padding: 40px;
  max-width: 100%;
}

.bottom-bar {
  grid-area: foot;
  display: flex;
  max-width: 100%;
  
  padding: 16px 40px 16px 40px;
}
</style>
