import React from 'react'
import Table from '../../Table/Table'
import Navbar from '../../Navbar/Navbar'
import RatioList from '../../RatioList/RatioList'

type Props = {}

const DesignPage = (props: Props) => {
  return (
    <>
        <Navbar />
        <h1>FinanceSite design page</h1>
        <h2>This is a design page that contains various design aspects of the app </h2>
        <RatioList />
        <Table />
    </>
  )
}

export default DesignPage