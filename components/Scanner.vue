<template>
  <div class="scanner-container">
    SCANNER, {{ name }}
    <div id="scanner-module"></div>
  </div>
</template>

<script>
import Quagga from 'quagga'
const data = { name: 'Merey', scanResult: {} }

Quagga.onDetected((data) => {
  console.log('data: ', data)
})

Quagga.onProcessed((data) => {
  console.log('data proc: ', data)
})

export default {
  data() {
    return data
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
          readers: ['code_128_reader'],
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
