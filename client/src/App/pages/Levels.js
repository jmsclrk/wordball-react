import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout'
import LevelTable from '../components/LevelTable';

export default function Levels() {

  const [levelList, setLevelList] = useState()

  function getLevels() {
    console.log('requested')
    const levels = fetch('/api/getLevelList')
      .then(response => response.json())
    console.log(levels)
    return levels
  }

  useEffect(() => {
    setLevelList(getLevels())
    console.log(levelList)
  }, [])

  return (

    <Layout>
      <LevelTable levels='{levelList}' />
    </Layout>
  )
}
