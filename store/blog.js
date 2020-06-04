export const state = () => ({
  articles: [
    {
      id: '1',
      author: {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        username: 'Metok',
        firstName: 'Metehan',
        lastName: 'Gulac',
        email: 'metok@gmail.com',
      },
      title: 'Gitarlar',
      slug: 'gitarlar',
      description:
        'gel bana bazi bazigel bana bazi bazigel bana bazi bazigel' +
        ' bana bazi bazigel bana bazi bazigel bana bazi bazigel bana bazi bazig' +
        'el bana bazi bazigel bana bazi bazi',
      content:
        'loremloremloremloremloremloremloremloremloremloremloremloremloremlore' +
        'mloremloremloremloremloremloremloremloremloremloremloremloremloremlor' +
        'emloremloremloremloremloremloremloremloremloremloremloremloremloremlor' +
        'emloremloremlorem',
      like: '10',
      comment: [
        {
          author: {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            username: 'JackAss',
            firstName: 'Jack',
            lastName: 'Ass',
            email: 'jackass@gmail.com',
          },
          content: 'bu olmamis be moruk',
          reply: [
            {
              content: 'sanane la?',
              author: {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                username: 'ahmetbaba',
                firstName: 'Ahmet',
                lastName: 'Cakal',
                email: 'ahmetbaba@gmail.com',
              },
            },
          ],
        },
        {
          author: {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            username: 'AssBut',
            firstName: 'Ass',
            lastName: 'But',
            email: 'assbut@gmail.com',
          },
          content: 'sen makale yazma',
          reply: [],
        },
      ],
    },
    {
      id: '2',
      author: {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        username: 'Metok',
        firstName: 'Metehan',
        lastName: 'Gulac',
        email: 'metok@gmail.com',
      },
      title: 'Cicekler',
      slug: 'cicekler',
      description:
        'gel bana bazi bazigel bana bazi bazigel bana bazi bazigel' +
        ' bana bazi bazigel bana bazi bazigel bana bazi bazigel bana bazi bazig' +
        'el bana bazi bazigel bana bazi bazi',
      content:
        'loremloremloremloremloremloremloremloremloremloremloremloremloremlore' +
        'mloremloremloremloremloremloremloremloremloremloremloremloremloremlor' +
        'emloremloremloremloremloremloremloremloremloremloremloremloremloremlor' +
        'emloremloremlorem',
      like: '0',
      comment: [
        {
          author: {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            username: 'olejackson',
            firstName: 'Ole',
            lastName: 'Jackson',
            email: 'olejackson@gmail.com',
          },
          content: 'yerler kaymiyo yalniz',
          reply: [],
        },
      ],
    },
    {
      id: '3',
      author: {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        username: 'Metok',
        firstName: 'Metehan',
        lastName: 'Gulac',
        email: 'metok@gmail.com',
      },
      title: 'Cicekler',
      slug: 'cicekler',
      description:
        'gel bana bazi bazigel bana bazi bazigel bana bazi bazigel' +
        ' bana bazi bazigel bana bazi bazigel bana bazi bazigel bana bazi bazig' +
        'el bana bazi bazigel bana bazi bazi',
      content:
        'loremloremloremloremloremloremloremloremloremloremloremloremloremlore' +
        'mloremloremloremloremloremloremloremloremloremloremloremloremloremlor' +
        'emloremloremloremloremloremloremloremloremloremloremloremloremloremlor' +
        'emloremloremlorem',
      like: '0',
      comment: [
        {
          author: {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            username: 'olejackson',
            firstName: 'Ole',
            lastName: 'Jackson',
            email: 'olejackson@gmail.com',
          },
          content: 'yerler kaymiyo yalniz',
          reply: [],
        },
      ],
    },
    {
      id: '4',
      author: {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        username: 'Metok',
        firstName: 'Metehan',
        lastName: 'Gulac',
        email: 'metok@gmail.com',
      },
      title: 'Cicekler',
      slug: 'cicekler',
      description:
        'gel bana bazi bazigel bana bazi bazigel bana bazi bazigel' +
        ' bana bazi bazigel bana bazi bazigel bana bazi bazigel bana bazi bazig' +
        'el bana bazi bazigel bana bazi bazi',
      content:
        'loremloremloremloremloremloremloremloremloremloremloremloremloremlore' +
        'mloremloremloremloremloremloremloremloremloremloremloremloremloremlor' +
        'emloremloremloremloremloremloremloremloremloremloremloremloremloremlor' +
        'emloremloremlorem',
      like: '0',
      comment: [
        {
          author: {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            username: 'olejackson',
            firstName: 'Ole',
            lastName: 'Jackson',
            email: 'olejackson@gmail.com',
          },
          content: 'yerler kaymiyo yalniz',
          reply: [],
        },
      ],
    },
  ],
})

// export const getters = {
//   getArticles(state) {
//     if (state.articles) {
//       return state.articles
//     }
//   }
// }

export const mutations = {
  setArticles(state, payload) {
    state.articles = payload
  },
}

// export const actions = {
//   async getArticles({ commit, dispatch}) {
//     let article
//     try {
//       article = await this.$axios.get('http://127.0.0.1/api/blog')
//     } catch (e) {
//       return 404
//     }
//
//     const data = resource.body
//   }
// }
