<script setup>
import IconAdd from "../components/icons/IconAdd.vue";


</script>

<template>
  <div class="todo-container">
    <IconAdd />
  </div>
</template>

<style scoped>
.todo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  position: absolute;
  width: 128px;
  height: 128px;

  border-radius: 100%;
  background: #1f1f1f;
  border: 1px solid #565656;
  box-shadow: -4px 8px 16px rgba(0, 0, 0, 0.56);
}
</style>
