import { Progress, Statistic, Typography } from 'antd'
import React from 'react'
import { WakaLangsData } from '../store/reducers/fetchWakaLangReducer'

interface Props {
  data: WakaLangsData
}

const StatsCardItem: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Statistic
        className="text-sm"
        title={data.name}
        value={data.text}
        valueRender={(v) => (
          <Typography className="text-sm md:text-base">{v}</Typography>
        )}
      />
      <Progress
        type="line"
        strokeColor={data.color}
        percent={Math.round(data.percent)}
        status="active"
      />
    </>
  )
}

export default StatsCardItem
