import React from 'react'

import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'



export default class SparkLineChart extends React.PureComponent
{
  render() 
  {
    const { id, type, height, width, data, currentColor, color } = this.props;
    
    return <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth='1'
      valueType='Numeric'
      type={type}
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="xval" yName="yval"
      tooltipSettings={{
        visible: true,
        format: 'X : ${x-axis}  ,  Y : ${y-axis}',
        trackLineSettings: { visible: true }
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  }}
