<template>
  <v-container
    id="alerts"
    fluid
    tag="section"
  >
    <base-v-component
      heading="Alerts"
      link="components/alerts"
    />

    <v-row>
      <v-col
        cols="12"
      >
        <v-card>
          <v-card-text>
            <base-subheading subheading="Notification Examples" />

            <base-material-alert
              v-for="color in colors"
              :key="color"
              :color="color"
              dark
              dismissible
            >
              <span
                class="text-uppercase"
                v-text="color"
              /> — This is a regular alert made with the color of "{{ color }}"
            </base-material-alert>

            <base-material-alert
              color="secondary"
              dark
              dismissible
            >
              <span>PRIMARY</span> — This is a regular alert made with the color "secondary"
            </base-material-alert>

            <base-material-alert
              color="pink darken-1"
              dark
              dismissible
            >
              <span>PINK DARKEN-1</span> — This is a regular alert made with the color "pink darken-1"
            </base-material-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <base-material-snackbar
      v-model="snackbar"
      :type="color"
      v-bind="{
        [parsedDirection[0]]: true,
        [parsedDirection[1]]: true
      }"
    >
      Welcome to <span class="font-weight-bold">&nbsp;MATERIAL DASHBOARD&nbsp;</span> — a beautiful admin panel for every web developer.
    </base-material-snackbar>

    <v-dialog
      v-model="dialog"
      max-width="500"
    >
      <v-card class="text-center">
        <v-card-title>
          Dialog Title

          <v-spacer />

          <v-icon
            aria-label="Close"
            @click="dialog = false"
          >
            mdi-close
          </v-icon>
        </v-card-title>

        <v-card-text>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
        </v-card-text>

        <v-card-actions>
          <v-spacer />

          <v-btn
            color="error"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    name: 'DashboardNotifications',

    data: () => ({
      color: 'info',
      colors: [
        'info',
        'success',
        'warning',
        'error',
      ],
      dialog: false,
      dialog2: false,
      dialog3: false,
      direction: 'top center',
      directions: [
        'top left',
        'top center',
        'top right',
        'bottom left',
        'bottom center',
        'bottom right',
      ],
      snackbar: false,
    }),

    computed: {
      parsedDirection () {
        return this.direction.split(' ')
      },
    },

    methods: {
      randomColor () {
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)]
      },
    },
  }
</script>
