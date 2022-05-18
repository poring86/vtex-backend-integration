import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { useRuntime } from 'vtex.render-runtime'

import './CountrySelector.css'

const CSS_HANDLES = ['countrySelected']

const CountrySelector = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const { culture } = useRuntime()

  return <div className={`${handles.countrySelected}`}>{culture.country}</div>
}

export default CountrySelector
