<template>
  <div class="container section">
    <section class="card">
      <div class="card-content">
        <div class="columns">
          <b-message
            v-if="showError"
            title="Error"
            type="is-danger"
            aria-close-label="Close message"
          >
            Ops... Something went wrong. Please, try again later.
          </b-message>
          <b-message
            v-if="showSuccess"
            title="Success"
            type="is-success"
            aria-close-label="Close message"
          >
            New product has been added!
          </b-message>
          <div class="column">
            <p class="help">Scan barcode with camera or type manually</p>
            <div class="columns">
              <div class="column">
                <b-button
                  class="is-fullwidth"
                  icon-left="camera"
                  @click="showScanner = !showScanner"
                >
                  Scan
                </b-button>
              </div>
              <div class="column">
                <b-field>
                  <b-input v-model="code" placeholder="Barcode..." icon="barcode"></b-input>
                  <p class="control">
                    <button class="button" @click="getProductInfo">
                      Search
                    </button>
                  </p>
                </b-field>
              </div>
            </div>
          </div>
          <div class="column">
            <p class="help">Select a best before date</p>
            <b-field>
              <b-datepicker
                v-model="date"
                placeholder="Best before..."
                icon="calendar-today"
                editable
              ></b-datepicker>
            </b-field>
          </div>
        </div>
        <div>
          {{ info.name }}
          <b-loading :is-full-page="false" :active.sync="loading"></b-loading>
        </div>
      </div>
      <footer class="card-footer">
        <button v-if="info.ean" class="button is-primary is-fullwidth" @click="addProduct">
          Add product
        </button>
      </footer>
    </section>
    <b-modal :active.sync="showScanner" has-modal-card>
      <div class="modal-card" style="width: auto">
        <scanner @onCodeSelect="handleSelectCode"></scanner>
      </div>
    </b-modal>
  </div>
</template>

<script>
import uuid from 'uuid/v4'
import { ProductStatus } from '~/static/types'
import Scanner from '~/components/Scanner'
import calculateWasteDate, { formatMoment } from '~/static/utils/expirations'

const api = 'https://hackwaste.herokuapp.com/check?ean='

export default {
  name: 'ScanPage',

  components: {
    Scanner,
  },

  data() {
    return {
      showScanner: false,
      code: '',
      date: new Date(Date.now() + 43800 * 60 * 1000),
      info: {},
      loading: false,
      showError: false,
      showSuccess: false,
    }
  },
  methods: {
    handleSelectCode(code) {
      this.code = code
      this.showScanner = false
      this.getProductInfo()
    },
    async getProductInfo() {
      this.showSuccess = false
      this.loading = true
      let info
      try {
        info = await this.$axios.$get(api + this.code)
      } catch (error) {
        console.log(error)
      }
      this.info = info
      this.loading = false
    },
    addProduct() {
      this.loading = true
      try {
        const wasteDate = calculateWasteDate(this.info.category, this.date)
        const bestBeforeDate = formatMoment(this.date)
        const productId = uuid()
        const defImg = 'https://cabuchon.pe/themes/cabuchon/assets/img/nophoto.jpg'
        const newProduct = {
          id: productId,
          ean: this.info.ean,
          category: this.info.category,
          imgSrc: this.info.imgSrc ? this.info.imgSrc : defImg,
          title: this.info.title ? this.info.title : 'Undefined',
          wasteDate,
          bestBeforeDate,
          status: ProductStatus.pending,
          updatedAt: Date.now(),
        }
        this.$store.commit('products/addProduct', newProduct)
        // clear form
        this.code = ''
        this.date = new Date(Date.now() + 43800 * 60 * 1000)
        this.info = {}
        // show message
        this.showSuccess = true
      } catch (error) {
        this.showError = true
        console.log(error)
      }
      this.loading = false
    },
  },
}
</script>
