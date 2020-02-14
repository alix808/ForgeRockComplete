<template>
  <div>
    <h1>{{ info.title }}</h1>
    <div class="todos" v-bind:style="{ background: info.background }">
      <div v-for="todo in switchFunc(info.type)" v-bind:key="todo.id" class="todo">
        {{ todo.title }}
        <i @click="deleteToDo(info.type, todo.id)" class="fas fa-trash-alt delete" />
        <i @click="editTodo(todo)" class="fas fa-edit edit"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Todos",
  methods: {
    ...mapActions([
      "fetchLifeChanging",
      "deleteLifeChanging",
      "fetchImportant",
      "deleteImportant",
      "fetchMeh",
      "deleteMeh",
      "updateModal",
      "fetchCurrentToDo"
    ]),
    switchFunc(expr) {
      switch (expr) {
        case "lifeChanging":
          return this.$store.getters.allLifeChanging;
        case "important":
          return this.$store.getters.allImportant;
        case "meh":
          return this.$store.getters.allMeh;
        default:
          return;
      }
    },
    deleteToDo(expr, id) {
      switch (expr) {
        case "lifeChanging":
          this.deleteLifeChanging(id);
          break;
        case "important":
          this.deleteImportant(id);
          break;
        case "meh":
          this.deleteMeh(id);
          break;
        default:
          return;
      }
    },
    editTodo(todo) {
      this.updateModal();
      this.fetchCurrentToDo(todo);
    }
  },
  created() {
    switch (this.info.type) {
      case "lifeChanging":
        this.fetchLifeChanging();
        break;
      case "important":
        this.fetchImportant();
        break;
      case "meh":
        this.fetchMeh();
        break;
      default:
        return;
    }
  },
  props: {
    info: Object
  }
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  padding: 1rem;
  border-radius: 5px;
}
.todo {
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.2);
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

h1 {
  color: white;
}

.delete {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}

.edit {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #fff;
  cursor: pointer;
}
</style>
