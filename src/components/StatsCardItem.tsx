import { Progress, Statistic } from 'antd'
import React from 'react'
import { WakaLangsData } from '../store/reducers/fetchWakaLangReducer'

interface Props {
  data: WakaLangsData
}

const StatsCardItem: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Statistic title={data.name} value={data.text} />
      <Progress
        type='line'
        strokeColor={data.color}
        percent={Math.round(data.percent)}
        status="active"
      />
    </>
  )
}

export default StatsCardItem
