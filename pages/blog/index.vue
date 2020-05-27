<template>
  <v-row justify="center" align="start">
    <v-col v-show="$vuetify.breakpoint.mdAndUp" cols="12" md="4" lg="3" xl="3">
      <component
        :is="transition !== 'None' ? `v-${transition}` : 'div'"
        hide-on-leave
      >
        <v-skeleton-loader
          v-if="loading"
          type="list-item-three-line, list-item-three-line, list-item-three-line"
        >
        </v-skeleton-loader>
        <v-card v-else>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Single-line item</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Two-line item</v-list-item-title>
              <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title>Three-line item</v-list-item-title>
              <v-list-item-subtitle>
                Secondary line text Lorem ipsum dolor sit amet,
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                consectetur adipiscing elit.
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </component>
      <v-card class="my-5">
        <v-simple-table height="300px">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Name</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
      <v-card class="my-5">
        <v-simple-table height="300px">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
      <v-card>
        <v-simple-table height="300px">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-col>
    <v-col cols="12" sm="10" md="8" lg="6" xl="6">
      <v-row
        v-for="(article, i) in showAllArticles"
        :key="i"
        align="stretch"
        justify="space-between"
        class="fill-height"
      >
        <v-col sm="12" md="12" lg="12" xl="12">
          <v-lazy
            :options="{ threshold: 0.5 }"
            min-height="200"
            transition="fade-transition"
          >
            <component
              :is="transition !== 'None' ? `v-${transition}` : 'div'"
              hide-on-leave
            >
              <v-skeleton-loader
                v-if="loading"
                type="list-item-avatar-three-line, image, article"
              >
              </v-skeleton-loader>
              <v-card v-else class="mx-auto my-n1">
                <v-list-item>
                  <v-list-item-avatar color="grey" />
                  <v-list-item-content>
                    <v-list-item-title class="headline">
                      {{ article.title }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{
                        article.author.firstName && article.author.lastName
                          ? article.author.firstName +
                            ' ' +
                            article.author.lastName
                          : article.author.username
                      }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                  height="194"
                />
                <v-card-text>
                  Visit ten places on our planet that are undergoing the biggest
                  changes today.
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    text
                    color="deep-purple accent-4"
                    nuxt
                    :to="`/blog/${article.slug}`"
                  >
                    Read More
                  </v-btn>
                  <v-btn text color="deep-purple accent-4">
                    Bookmark
                  </v-btn>
                  <v-spacer />
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </component>
          </v-lazy>
        </v-col>
      </v-row>
    </v-col>
    <v-col v-if="$vuetify.breakpoint.lgAndUp" cols="12" md="2" lg="3" xl="3">
      <component
        :is="transition !== 'None' ? `v-${transition}` : 'div'"
        hide-on-leave
      >
        <v-skeleton-loader
          v-if="loading"
          type="list-item-three-line, list-item-three-line, list-item-three-line"
          class="my-5"
        >
        </v-skeleton-loader>
        <v-card v-else>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title>Three-line item</v-list-item-title>
              <v-list-item-subtitle>
                Secondary line text Lorem ipsum dolor sit amet,
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                consectetur adipiscing elit.
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title>Three-line item</v-list-item-title>
              <v-list-item-subtitle>
                Secondary line text Lorem ipsum dolor sit amet,
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                consectetur adipiscing elit.
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title>Three-line item</v-list-item-title>
              <v-list-item-subtitle>
                Secondary line text Lorem ipsum dolor sit amet,
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                consectetur adipiscing elit.
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </component>
      <component
        :is="transition !== 'None' ? `v-${transition}` : 'div'"
        hide-on-leave
      >
        <v-skeleton-loader
          v-if="loading"
          type="list-item-avatar-two-line, list-item-avatar-two-line,
          list-item-avatar-two-line, list-item-avatar-two-line"
          class="my-5"
        >
        </v-skeleton-loader>
        <v-card v-else class="my-5">
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
              v-text="item.header"
            />
            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            />
            <v-list-item v-else :key="item.title">
              <v-list-item-avatar>
                <v-img :src="item.avatar" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-card>
      </component>
      <v-card class="my-5">
        <template v-for="(item, index) in items">
          <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
          />

          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
          />

          <v-list-item v-else :key="item.title">
            <v-list-item-avatar>
              <v-img :src="item.avatar" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-card>
      <v-card class="my-5">
        <template v-for="(item, index) in items">
          <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
          />

          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
          />

          <v-list-item v-else :key="item.title">
            <v-list-item-avatar>
              <v-img :src="item.avatar" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-card>
      <v-card class="my-5">
        <template v-for="(item, index) in items">
          <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
          />

          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
          />

          <v-list-item v-else :key="item.title">
            <v-list-item-avatar>
              <v-img :src="item.avatar" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Index',
  inject: ['theme'],
  data() {
    return {
      loading: true,
      transition: 'scale-transition'
    }
  },
  computed: {
    showAllArticles() {
      return this.$store.getters['blog/getArticles']
    }
  }
}
</script>
