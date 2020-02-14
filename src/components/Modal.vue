<template >
  <div class="flex" v-if="getModal() === true">
    <div class="container">
      <div class="flex-btn">
        <i @click="updateModal()" class="fas fa-times-circle"></i>
      </div>
      <form @submit="onSubmit" class="flex-form">
        <input type="text" v-model="info.title" placeholder="Add Todo..." />
        <input type="submit" value="EDIT" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Modal",
  methods: {
    ...mapActions([
      "updateModal",
      "updateLifeChanging",
      "updateImportant",
      "updateMeh"
    ]),
    ...mapGetters(["getModal"]),
    editToDo() {
      if (this.info.type === "Life Changing") {
        this.updateLifeChanging(this.info);
      }
      if (this.info.type === "Important") {
        this.updateImportant(this.info);
      }
      if (this.info.type === "Meh") {
        this.updateMeh(this.info);
      }
    },
    onSubmit(e) {
      e.preventDefault();
      this.editToDo();
    }
  },
  data: () => ({
    info: {
      title: "",
      id: ""
    }
  }),
  updated() {
    let object = this.$store.getters.getCurrentToDo;
    this.info = object;
  }
};
</script>

<style scoped>
.flex {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  width: 500px;
  height: 250px;
  background: rgba(10, 10, 10, 1);
  border: 1px solid #fff;
  border-radius: 5px;
  margin: 0;
  padding: 0;
}

.flex-btn {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 25px;
  border: 1px solid black;
}

i {
  cursor: pointer;
  color: white;
  margin-top: 1rem;
  margin-right: 1rem;
}

.flex-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-left: 4rem;
  margin-right: 4rem;
}

input:focus {
  outline: none;
}

input {
  margin: 1rem;
  border-radius: 5px;
  padding: 10px;
}
</style>
