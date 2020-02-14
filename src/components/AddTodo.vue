<template>
  <div>
    <h1>Add Todo</h1>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="info.title" placeholder="Add Todo..." />
        <input type="submit" value="Submit" />
      </form>
    </div>
    <TypeTodo />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TypeTodo from "./TypeTodo";
export default {
  name: "AddTodo",
  components: {
    TypeTodo
  },
  data: () => ({
    info: {
      title: "",
      type: ""
    }
  }),
  methods: {
    ...mapActions(["addLifeChanging", "addImportant", "addMeh"]),
    ...mapGetters(["getType"]),
    switchFunc(expr) {
      switch (expr) {
        case "Life Changing":
          this.addLifeChanging(this.info);
          break;
        case "Important":
          this.addImportant(this.info);
          break;
        case "Meh":
          this.addMeh(this.info);
          break;
        default:
          alert("Please select a type!");
      }
    },
    onSubmit(e) {
      e.preventDefault();
      this.info.type = this.getType();
      this.switchFunc(this.getType());
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #fff;
  outline: 0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
input[type="submit"] {
  flex: 2;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  border: 1px #fff solid;
  cursor: pointer;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
input:focus {
  outline: none;
}
h1 {
  color: white;
}
</style>
