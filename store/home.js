export const state = () => ({
  pageContent: {
    pageTitle: "Hi,\nI'm Metehan,\nweb developer.",
    footNote: 'Full Stack Developer / Freelancer',
  },
})

export const getters = {
  getPageContent(state) {
    return state.pageContent
  },
}

export const mutations = {
  increment(state) {
    state.counter++
  },
}
