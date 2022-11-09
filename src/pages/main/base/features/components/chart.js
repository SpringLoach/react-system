import React, { memo, useEffect, useState } from 'react'
import * as echarts from 'echarts';

import { ConentWrapper } from "./chart-style"


export default memo(() => {

  useEffect(() => {
    let resize;
    setTimeout(() => {

      // 基于准备好的dom，初始化echarts实例
      const MyChart = echarts.init(document.getElementById("main")); // 绘制图表
      let option = {
        title: {
          text: "深渊使用率",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };
      console.log(document.getElementById("main"))
      MyChart.setOption(option);
      resize = () => {
        MyChart.resize()
      }
      window.addEventListener('resize', resize)
    }, 500)
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [])

  return (
    <div id="main" style={{ width: '100%', height: '300px' }}></div>
  )
})
