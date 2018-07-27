<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary">Create new ad</h1>
        <v-form ref="form" v-model="valid" validation class="mb-3">
          <v-text-field
          name="title"
          label="Ad title"
          type="email"
          v-model="title"
          required
          :rules="[v => !!v || 'Title is required']"
          ></v-text-field>
          <v-textarea
          name="description"
          label="Ad description"
          type="text"
          v-model="description"
          :rules="[v => !!v || 'description is required']"
          ></v-textarea>
        </v-form>
        <v-layout row class="mb-3">
          <v-flex>
            <v-btn
              class="warning ml-0"
            >
              Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex>
            <img src="https://v1.vuetifyjs.com/static/doc-images/carousel/squirrel.jpg" height="100">
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex>
            <v-switch
              label="Add to promo"
              v-model="promo"
              color="primary"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn class="success ml-0"
            :loading="loading"
            :disabled="!valid || loading"
            v-on:click="createAd">
              Create ad
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      title: '',
      valid: false,
      description: '',
      promo: false
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          imageSrc: 'https://ru.vuejs.org/images/logo.png?_sw-precache=cf23526f451784ff137f161b8fe18d5a'
        }

        this.$store.dispatch('createAd', ad)
          .then(() => {
            this.$router.push('/list')
          })
          .catch(() => {})
      }
    }
  }
}
</script>
<style>

</style>


