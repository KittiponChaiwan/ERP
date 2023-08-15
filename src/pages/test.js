import React from 'react'
import { HomeReport } from '../dummy/homepage'

const test = () => {
  const data = HomeReport.find(item => item.id === 2)
  console.log(data)

  return <div>test</div>
}

export default test
