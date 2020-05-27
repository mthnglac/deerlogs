export const state = () => ({
  pageContent: {
    pageTitle: 'Skills & Experience',
    pageDescription:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis consequuntur culpa, delectus deleniti earum facilis quisquam sed! Assumenda ducimus error labore magni qui repellendus vel! Culpa harum non soluta?\n' +
      'A amet eius ipsa laborum magnam odit perferendis, porro quia reprehenderit repudiandae, rerum suscipit veritatis. Atque distinctio earum ex magnam magni quae suscipit voluptatum. Aliquam et perspiciatis quisquam similique veniam.\n' +
      'A beatae dignissimos eius exercitationem expedita harum id labore laudantium natus numquam praesentium quam quas quasi quibusdam quis sit sunt, voluptatibus. Consectetur, pariatur, voluptatibus. Delectus ex exercitationem labore quasi sed? '
  }
})

export const getters = {
  getPageContent(state) {
    return state.pageContent
  }
}
