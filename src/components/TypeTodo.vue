<template>
  <div class="flex">
    <select @change="updateType($event)">
      <option>Please select one:</option>
      <option>Life Changing</option>
      <option>Important</option>
      <option>Meh</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'TypeTodo',
  methods: {
    ...mapActions(['updateType'])
  }
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
}
</style>
