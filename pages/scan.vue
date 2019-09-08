<template>
  <div class="section">
    <section class="card">
      <div class="card-content">
        <div class="columns">
          <div class="column">
            <p class="help">Enter barcode manually or scan with camera</p>
            <b-field>
              <b-input v-model="code" placeholder="Barcode..." icon="barcode"></b-input>
              <p class="control">
                <button class="button" @click="showScanner = !showScanner">
                  Open camera
                </button>
              </p>
            </b-field>
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
        <button class="button is-primary is-fullwidth" @click="addProduct">
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
    }
  },
  methods: {
    async handleSelectCode(code) {
      this.code = code
      this.showScanner = false
      this.loading = true
      let info
      try {
        info = await this.$axios.$get(api + code)
      } catch (error) {
        console.log(error)
      }
      this.info = info
      this.loading = false
    },
    addProduct() {
      const wasteDate = calculateWasteDate(this.info.category, this.date)
      const bestBeforeDate = formatMoment(this.date)
      const productId = uuid()
      const newProduct = {
        id: productId,
        ean: this.info.ean,
        category: this.info.category,
        imgSrc: this.info.imgSrc,
        title: this.info.title,
        wasteDate,
        bestBeforeDate,
        status: ProductStatus.pending,
        updatedAt: Date.now(),
      }
      this.$store.commit('products/addProduct', newProduct)
    },
  },
}
</script>
