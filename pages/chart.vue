<template>
  <section class="section">
    <div class="columns is-vcentered">
      <div class="column chart-container">
        <h3 class="title is-3 has-text-centered">Overview</h3>
        <canvas id="mainChart"></canvas>
      </div>
      <div class="column chart-container">
        <h3 class="title is-3 has-text-centered">Consumed products</h3>
        <canvas :id="`${productStatuses.consumed}Chart`"></canvas>
      </div>
      <div class="column chart-container">
        <h3 class="title is-3 has-text-centered">Wasted products</h3>
        <canvas :id="`${productStatuses.wasted}Chart`"></canvas>
      </div>
    </div>
  </section>
</template>

<script>
import Chart from 'chart.js'
import { ProductStatus } from '../static/types'

export default {
  name: 'ChartPage',

  data() {
    return {}
  },
  computed: {
    products() {
      return this.$store.state.products.list
    },
    productStatuses() {
      return ProductStatus
    },
  },

  mounted() {
    this.createMainChart()
    this.createStatusChart(ProductStatus.consumed)
    this.createStatusChart(ProductStatus.wasted)
  },

  methods: {
    getDatasetForMain() {
      const dataset = [0, 0, 0]
      this.products.map((product) => {
        if (product.status === ProductStatus.pending) dataset[0]++
        if (product.status === ProductStatus.wasted) dataset[1]++
        if (product.status === ProductStatus.consumed) dataset[2]++
      })
      return dataset
    },
    getDatasetForWasted() {
      const dataset = [0, 0, 0]
      this.products.map((product) => {
        if (product.status === ProductStatus.pending) dataset[0]++
        if (product.status === ProductStatus.wasted) dataset[1]++
        if (product.status === ProductStatus.consumed) dataset[2]++
      })
      return dataset
    },
    getDatasetForStatus(status) {
      const dataset = {}
      this.products.map((product) => {
        if (product.status === status) {
          if (!dataset[product.category]) dataset[product.category] = 1
          else dataset[product.category]++
        }
      })
      return dataset
    },
    createMainChart() {
      const dataset = this.getDatasetForMain()
      console.log('dataset: ', dataset)
      const ctx = document.getElementById('mainChart').getContext('2d')
      const mainChart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'pie',
        // The data for our dataset
        data: {
          labels: [ProductStatus.pending, ProductStatus.wasted, ProductStatus.consumed],
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: ['blue', 'red', 'green'],
              borderColor: 'white',
              data: dataset,
            },
          ],
        },
        // Configuration options go here
        options: {},
      })
      console.log(mainChart)
    },
    dynamicColors(width) {
      const colors = []
      for (let i = 0; i < width; i++) {
        colors.push(this.randomColor())
      }
      return colors
    },
    randomColor() {
      const r = Math.floor(Math.random() * 255)
      const g = Math.floor(Math.random() * 255)
      const b = Math.floor(Math.random() * 255)
      return 'rgb(' + r + ',' + g + ',' + b + ')'
    },
    createStatusChart(status) {
      const dataset = this.getDatasetForStatus(status)
      const chartCats = []
      const chartData = []
      for (const cat in dataset) {
        chartCats.push(cat)
        chartData.push(dataset[cat])
      }
      const colors = this.dynamicColors(chartCats.length)
      console.log('colors: ', colors)
      const ctx = document.getElementById(`${status}Chart`).getContext('2d')
      const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'pie',
        // The data for our dataset
        data: {
          labels: chartCats,
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: colors,
              borderColor: 'white',
              data: chartData,
            },
          ],
        },
        // Configuration options go here
        options: {},
      })
      console.log(chart)
    },
  },
}
</script>
