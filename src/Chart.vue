<template>
  <div class="chart-box">
    <div class="chart" v-if="!loading">
      <Chart ref="chart" :opt="mockData" />
    </div>
  </div>
</template>

<script>
import Chart from 'echarts-middleware'
export default {
  components: {
    Chart
  },
  data () {
    return {
      data: null,
      chartData: [],
      loading: true,
      serverIP: 'http://192.168.30.110',
      mockData: {
        legend: {
          data: ['干燥','抽空','预冻']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '80px'
        },
        dataZoom: [
          {
            "show": true,
            "bottom": 10,
            "start": 0,
            "end": 30,
            "realtime": false
          }, 
          {
            "type": "inside",
            "filterMode": "empty"
          }
        ],
        xAxis : [
          {
            type : 'category',
            data : ['07670301-A']
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : []
      }
    }
  },
  created () {
    this.get(this.serverIP + '/countTime.php').then((data) => {
      let xData = []
      let series = [
        {
          name:'干燥',
          type:'bar',
          stack: '搜索引擎',
          label: {
            normal: {
              show: true,
              formatter: '{c} 分钟'
            }
          },
          data: []
        },
        {
          name:'抽空',
          type:'bar',
          stack: '搜索引擎',
          label: {
            normal: {
              show: true,
              formatter: '{c} 分钟'
            }
          },
          data: []
        },
        {
          name:'预冻',
          type:'bar',
          stack: '搜索引擎',
          label: {
            normal: {
              show: true,
              formatter: '{c} 分钟'
            }
          },
          data: []
        }
      ]
      for (let key in data) {
        const element = data[key]
        const startTime = new Date(element['开始时间']).getTime()
        xData.push(key)
        series[0].data.push(parseInt((new Date(element['结束时间']).getTime() - new Date(element['干燥时间']).getTime()) / 60000))
        series[1].data.push(parseInt((new Date(element['冷藏时间']).getTime() - new Date(element['抽空时间']).getTime()) / 60000))
        series[2].data.push(parseInt((new Date(element['干燥时间']).getTime() - new Date(element['冷藏时间']).getTime()) / 60000))
      }
      this.mockData.series = series
      this.mockData.xAxis[0].data = xData
      this.loading = false
    })
  },
  methods: {
    get (url) {
      return new Promise((resolve, reject) => {
        const headers = {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
        fetch(url, headers).then((res) => {
          if (res.ok) {
            res.json().then((data) => {
              resolve(data)
            })
          } else {
            reject(res.status)
          }
        }, (e) => {
          reject(e)
        })
      })
    }
  }
}
</script>

<style scoped>
  .chart-box {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .chart {
    width: 100%;
    height: 100%;
  }
</style>