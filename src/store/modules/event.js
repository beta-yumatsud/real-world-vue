import EventService from '@/services/EventService.js'

export const namespaced = true

export const state = {
  events: [],
  event: {},
  eventTotal: 0,
}

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event)
  },
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENTS_TOTAL(state, eventsTotal) {
    state.eventTotal = eventsTotal
  },
  SET_EVENT(state, event) {
    state.event = event
  }
}

export const actions = {
  createEvent({ commit, dispatch }, event) {
    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT', event)
      const notification = {
        type: 'success',
        message: 'Your event has been created!!'
      }
      dispatch('notification/add', notification, { root: true })
    }).catch(err => {
      const notification = {
        type: 'error',
        message: 'there was a problem creating event: ' + err.message
      }
      dispatch('notification/add', notification, { root: true })
      throw err
    })
  },
  fetchEvents({ commit, dispatch }, { perPage, page }) {
    EventService.getEvents(perPage, page)
      .then(response => {
        commit('SET_EVENTS', response.data)
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: 'there was a problem fetcin events: ' + err.message
        }
        dispatch('notification/add', notification, { root: true })
      })
  },
  fetchEvent({ commit, getters, dispatch }, id) {
    var event = getters.getEventById(id)
    if (event) {
      commit('SET_EVENT', event)
    } else {
      EventService.getEvent(id)
        .then(response => {
          commit('SET_EVENT', response.data)
        })
        .catch(err => {
          const notification = {
            type: 'error',
            message: 'there was a problem fetcin event: ' + err.message
          }
          dispatch('notification/add', notification, { root: true })
        })
    }
  }
}

export const getters = {
  getEventById: state => id => {
    return state.events.find(event => event.id === id)
  }
}
