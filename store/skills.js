export const state = () => ({
  pageContent: {
    pageTitle: 'Skills & Experience',
    pageDescription:
      'The main area of my expertise is frontend development (client side).' +
      'HTML, CSS, Javascript, building small and medium web apps with React, ReactNative, Vue, Nuxt, custom plugins, features, animations and coding interactive layouts.' +
      'I have also advanced-level backend developer experience with Django, DRF, RestAPI.' +
      'Visit my LinkedIn profile for more details or just contact me.' +
      'You can also visit my GitHub profile check or download my open-source projects.'
  }
})

export const getters = {
  getPageContent(state) {
    return state.pageContent
  }
}
