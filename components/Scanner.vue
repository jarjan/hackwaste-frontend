<template>
  <div class="scanner-container">
    SCANNER, {{ name }}
    <ul>
      <li v-for="(item, index) in scanResults" :key="index">{{ item }}</li>
    </ul>
    <div id="scanner-module"></div>
  </div>
</template>

<script>
import Quagga from 'quagga'

export default {
  data() {
    return {
      name: 'Merey',
      scanResults: [],
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
          readers: ['code_128_reader', 'ean_reader'],
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
        console.log('Initialization finished. Ready to start')
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
}
</script>

<style>
.scanner-container canvas {
  display: none;
}
</style>
