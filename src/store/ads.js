export default {
  state: {
    ads: [
      {
        title: 'First ad',
        description: 'Hello  i am description',
        promo: false,
        imageSrc:
          'https://v1.vuetifyjs.com/static/doc-images/carousel/squirrel.jpg',
        id: '123'
      },
      {
        title: 'Second ad',
        description: 'Hello  i am description',
        promo: true,
        imageSrc: 'https://v1.vuetifyjs.com/static/doc-images/carousel/sky.jpg',
        id: '1234'
      },
      {
        title: 'Third ad',
        description: 'Hello  i am description',
        promo: true,
        imageSrc:
          'https://v1.vuetifyjs.com/static/doc-images/carousel/bird.jpg',
        id: '12345'
      }
    ]
  },
  mutations: {
    createAd (state, payLoad) {
      state.ads.push(payLoad)
    }
  },
  actions: {
    createAd ({ commit }, payLoad) {
      payLoad.id = '123654'

      commit('createAd', payLoad)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}