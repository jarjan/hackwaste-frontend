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
      </div>
      <footer class="card-footer">
        <button class="button is-primary is-fullwidth">
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
import Scanner from '~/components/Scanner'

export default {
  name: 'ScanPage',

  components: {
    Scanner,
  },

  data() {
    return {
      showScanner: false,
      code: '',
      date: new Date(),
    }
  },
  methods: {
    handleSelectCode(code) {
      this.code = code
      this.showScanner = false
    },
  },
}
</script>
