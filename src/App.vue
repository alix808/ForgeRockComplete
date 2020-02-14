<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <Todos :info="infoOne" />
      <Todos :info="infoTwo" />
      <Todos :info="infoThree" />
    </div>
    <Modal />
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import AddTodo from "./components/AddTodo.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Todos,
    AddTodo,
    Modal
  },
  data: () => ({
    infoOne: {
      type: "lifeChanging",
      title: "Life Changing",
      background: "linear-gradient(180deg, #05f, #09f)"
    },
    infoTwo: {
      type: "important",
      title: "Important",
      background: "linear-gradient(180deg, #91f, #70f)"
    },
    infoThree: {
      type: "meh",
      title: "Meh",
      background: "linear-gradient(180deg, #f08, #d0e)"
    }
  })
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: rgba(10, 10, 10, 1);
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
