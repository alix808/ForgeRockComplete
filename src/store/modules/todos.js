import axios from 'axios';

const state = {
  lifeChanging: [],
  important: [],
  meh: [],
  type: '',
  modal: false,
  currentToDo: {},
  updateResponse: null
};

const getters = {
  allLifeChanging: state => state.lifeChanging,
  allImportant: state => state.important,
  allMeh: state => state.meh,
  getType: state => state.type,
  getModal: state => state.modal,
  getCurrentToDo: state => state.currentToDo
};

const actions = {
  async fetchLifeChanging({ commit }) {
    const response = await axios.get('http://localhost:5000/life');
    commit('setLifeChanging', response.data);
  },
  async addLifeChanging({ commit }, object) {
    const response = await axios.post('http://localhost:5000/life', {
      title: object.title,
      type: object.type
    });
    commit('newLifeChanging', response.data);
  },
  async deleteLifeChanging({ commit }, id) {
    await axios.delete(`http://localhost:5000/life/${id}`);
    commit('removeLifeChanging', id);
  },
  async updateLifeChanging({ commit }, updTodo) {
    const response = await axios.put(
      `http://localhost:5000/life/${updTodo.id}`,
      updTodo
    );
    commit('LogResponse', response);
  },

  async fetchImportant({ commit }) {
    const response = await axios.get('http://localhost:5000/important');
    commit('setImportant', response.data);
  },
  async addImportant({ commit }, object) {
    const response = await axios.post('http://localhost:5000/important', {
      title: object.title,
      type: object.type
    });
    commit('newImportant', response.data);
  },
  async deleteImportant({ commit }, id) {
    await axios.delete(`http://localhost:5000/important/${id}`);
    commit('removeImportant', id);
  },

  async updateImportant({ commit }, updTodo) {
    const response = await axios.put(
      `http://localhost:5000/important/${updTodo.id}`,
      updTodo
    );
    commit('LogResponse', response);
  },

  async fetchMeh({ commit }) {
    const response = await axios.get('http://localhost:5000/meh');
    commit('setMeh', response.data);
  },
  async addMeh({ commit }, object) {
    const response = await axios.post('http://localhost:5000/meh', {
      title: object.title,
      type: object.type
    });
    commit('newMeh', response.data);
  },
  async deleteMeh({ commit }, id) {
    await axios.delete(`http://localhost:5000/meh/${id}`);
    commit('removeMeh', id);
  },

  async updateMeh({ commit }, updTodo) {
    const response = await axios.put(
      `http://localhost:5000/meh/${updTodo.id}`,
      updTodo
    );
    commit('LogResponse', response);
  },

  updateType: function({ commit }, e) {
    commit(
      'changeType',
      e.target.options[e.target.options.selectedIndex].innerText
    );
  },

  updateModal: function({ commit }) {
    commit('changeModal');
  },

  fetchCurrentToDo: function({ commit }, todo) {
    commit('setCurrentToDo', todo);
  }
};

const mutations = {
  setLifeChanging: (state, todos) => (state.lifeChanging = todos),
  newLifeChanging: (state, todo) => state.lifeChanging.unshift(todo),
  removeLifeChanging: (state, id) =>
    (state.lifeChanging = state.lifeChanging.filter(todo => todo.id !== id)),

  setImportant: (state, todos) => (state.important = todos),
  newImportant: (state, todo) => state.important.unshift(todo),
  removeImportant: (state, id) =>
    (state.important = state.important.filter(todo => todo.id !== id)),

  setMeh: (state, todos) => (state.meh = todos),
  newMeh: (state, todo) => state.meh.unshift(todo),
  removeMeh: (state, id) =>
    (state.meh = state.meh.filter(todo => todo.id !== id)),

  changeType: (state, e) => (state.type = e),
  changeModal: state => (state.modal = !state.modal),
  setCurrentToDo: (state, todo) => (state.currentToDo = todo),

  LogResponse: (state, response) => (state.updateResponse = response)
};

export default {
  state,
  getters,
  actions,
  mutations
};
