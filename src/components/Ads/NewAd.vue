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
          name="decription"
          label="Ad decription"
          type="text"
          v-model="decription"
          :rules="[v => !!v || 'Decription is required']"
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
            :disabled="!valid"
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
      decription: '',
      promo: false
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          decription: this.decription,
          promo: this.promo
        }
        console.log(ad)
      }
    }
  }
}
</script>
<style>

</style>


