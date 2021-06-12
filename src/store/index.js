import { createStore } from 'vuex'
import * as user from '@/store/modules/user.js'
import * as event from '@/store/modules/event.js'
import * as notification from '@/store/modules/notification.js'

export default createStore({
  modules: {
    user,
    event,
    notification
  },
  state: {
    categories: ['nature', 'animal', 'sport', 'food', 'housing', 'education'],
  },
  mutations: {},
  actions: {},
  getters: {
    categoryLength: state => {
      return state.categories.length
    }
  }
});
