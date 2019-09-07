<template>
  <div class="scanner-container">
    SCANNER, {{ name }}
    <div id="scanner-module"></div>
    <ul>
      <li v-for="(item, index) in scanResuls" :key="index">{{ item }}</li>
    </ul>
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
  beforeMount() {
    Quagga.onDetected((data) => {
      console.log('data: ', data)
      this.scanResults.push(data.codeResult.code)
      console.log('result: ', data.codeResult.code)
    })
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
        },
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
  },
}
</script>
