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
Chart.plugins.register({
  afterDraw(chart) {
    if (chart.data.datasets.length === 0) {
      // No data is present
      const ctx = chart.chart.ctx
      const width = chart.chart.width
      const height = chart.chart.height
      chart.clear()

      ctx.save()
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.font = "16px normal 'Helvetica Nueue'"
      ctx.fillText('No data to display', width / 2, height / 2)
      ctx.restore()
    }
  },
})
export default {
  name: 'ChartPage',

  data() {
    return {
      mainChart: {},
      [`${ProductStatus.consumed}Chart`]: {},
      [`${ProductStatus.wasted}Chart`]: {},
    }
  },

  computed: {
    products() {
      return this.$store.state.products.list
    },
    productStatuses() {
      return ProductStatus
    },
  },

  watch: {
    '$store.state.products.list'() {
      this.updateCharts()
    },
  },

  mounted() {
    this.initCharts()
    this.updateCharts()
  },

  methods: {
    getDataForMain() {
      const data = [0, 0, 0]
      this.products.map((product) => {
        if (product.status === ProductStatus.pending) data[0]++
        if (product.status === ProductStatus.wasted) data[1]++
        if (product.status === ProductStatus.consumed) data[2]++
      })
      return data
    },
    getDataForStatus(status) {
      const data = {}
      this.products.map((product) => {
        if (product.status === status) {
          if (!data[product.category]) data[product.category] = 1
          else data[product.category]++
        }
      })
      return data
    },
    initChart(chartName) {
      const ctx = document.getElementById(`${chartName}Chart`).getContext('2d')
      this[`${chartName}Chart`] = new Chart(ctx, {
        // The type of chart we want to create
        type: 'pie',
        // The data for our dataset
        data: {
          labels: [],
          datasets: [],
        },
        // Configuration options go here
        options: {},
      })
    },
    updateMainChart() {
      this.mainChart.config.data.labels = [
        ProductStatus.pending,
        ProductStatus.wasted,
        ProductStatus.consumed,
      ]
      const data = this.getDataForMain()
      const mainds = {
        label: 'Products overview',
        backgroundColor: ['#8285a7', '#d94e47', '#08B745'],
        borderColor: 'white',
        data,
      }

      this.mainChart.config.data.datasets = [mainds]
      this.mainChart.update()
    },
    dynamicColors(width) {
      const colors = []
      for (let i = 0; i < width; i++) {
        colors.push(this.randomColor())
      }
      return colors
    },
    randomColor() {
      // eslint-disable-next-line
      return '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
    },
    updateStatusChart(status) {
      const data = this.getDataForStatus(status)
      const chartCats = []
      const chartData = []
      for (const cat in data) {
        chartCats.push(cat)
        chartData.push(data[cat])
      }
      const colors = this.dynamicColors(chartCats.length)
      this[`${status}Chart`].config.data.labels = [...chartCats]
      const mainds = {
        label: `Chart for ${status} products`,
        backgroundColor: colors,
        borderColor: 'white',
        data: chartData,
      }

      this[`${status}Chart`].config.data.datasets = [mainds]
      this[`${status}Chart`].update()
    },
    initCharts() {
      this.initChart('main')
      this.initChart(ProductStatus.consumed)
      this.initChart(ProductStatus.wasted)
    },
    updateCharts() {
      this.updateMainChart()
      this.updateStatusChart(ProductStatus.consumed)
      this.updateStatusChart(ProductStatus.wasted)
    },
  },
}
</script>
