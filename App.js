import { StatusBar } from 'expo-status-bar'
import React from 'react'

import TouchScreen from './src/screens/TouchScreen'

export default function App() {
  return (
    <>
      <TouchScreen />
      <StatusBar style="auto" />
    </>
  )
}
