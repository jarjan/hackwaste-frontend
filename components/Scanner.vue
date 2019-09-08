<template>
  <div class="scanner-container">
    <div class="panel has-background-white">
      <p v-show="scanResults.length > 0" class="panel-heading">
        Select correct barcode
      </p>
      <a
        v-for="(item, index) in scanResults"
        :key="index"
        class="panel-block"
        @click="handleItemClick(item)"
      >
        {{ item }}
      </a>
    </div>
    <div id="scanner-module"></div>
  </div>
</template>

<script>
import Quagga from 'quagga'

export default {
  data() {
    return {
      scanResults: [],
      results: [],
    }
  },
  mounted() {
    Quagga.init(
      {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: document.getElementById('scanner-module'),
        },
        decoder: {
          readers: ['code_128_reader', 'ean_reader', 'ean_8_reader'],
          debug: {
            drawBoundingBox: false,
            showFrequency: false,
            drawScanline: false,
            showPattern: false,
          },
          multiple: false,
        },
        debug: false,
      },
      function(err) {
        if (err) {
          console.log(err)
          return
        }
        Quagga.start()
      }
    )
    Quagga.onDetected((data) => {
      const { code } = data.codeResult

      if (!this.scanResults.includes(code)) {
        this.scanResults.push(code)
      }
    })
  },
  destroyed() {
    Quagga.stop()
  },
  methods: {
    handleItemClick(item) {
      this.$emit('onCodeSelect', item)
    },
  },
}
</script>

<style>
.scanner-container canvas {
  display: none;
}
</style>
