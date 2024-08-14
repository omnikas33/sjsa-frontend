import React from 'react'
import './Statastics/Statastics.css'
import IndiaPopulation from './Statastics/IndiaPopulation'
import MahaData from './Statastics/MahaData'
import CasteData from './Statastics/CasteData'
import CasteCensusChart from './Statastics/CasteCensusChart'
import CasteDistributionChart from './Statastics/CasteDistributionChart'
import ChartFive from './Statastics/ChartFive'
import SexRatioBarChartComponent from './Statastics/SexRatioBarChartComponent'


function DepartmentalStatistics() {
  return (
    <div>
      <IndiaPopulation/>
      <MahaData/>
      {/* <CasteData/> */}
      <CasteCensusChart/>
      <CasteDistributionChart/>
      <ChartFive/>
      <SexRatioBarChartComponent/>
    </div>
  )
}

export default DepartmentalStatistics
