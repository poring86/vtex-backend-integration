/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { useApolloClient } from 'react-apollo'
import { useRuntime } from 'vtex.render-runtime'

import GET_SALES_CHANNEL_LIST from './graphql/getSalesChannelList.gql'

import './CountrySelector.css'

const CSS_HANDLES = [
  'countrySelectorCountainer',
  'countrySelectorButton',
  'countrySelectorModal',
  'countrySelectorTitle',
  'countrySelectorSubTitle',
  'countrySelectorOptionsBox',
  'countrySelectorOptionItem',
  'countrySelectorButtonTitle',
]

interface Country {
  Id: number
  IsActive: boolean
  Name: string
}

const CountrySelector = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const client = useApolloClient()
  const { emitter } = useRuntime()
  const [countryList, setCountryList] = useState<Country[]>([])

  const handleSelectCountry = (id: number) => () => {
    emitter.emit('localesChanged', id)
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = (
        await client.query({
          query: GET_SALES_CHANNEL_LIST,
        })
      ).data

      setCountryList(response.getSalesChannelList)
    }

    fetchData()
  }, [client, countryList])

  return (
    <div className={`${handles.countrySelectorCountainer}`}>
      <span className={`${handles.countrySelectorTitle}`}>
        Paese di spedizione
      </span>
      <span className={`${handles.countrySelectorSubTitle}`}>
        Scegli il tuo paese di spedizione
      </span>
      <div className={`${handles.countrySelectorOptionsBox}`}>
        {countryList.map((_item: Country) => {
          return (
            <div
              key={_item.Id}
              onClick={handleSelectCountry(_item.Id)}
              className={`${handles.countrySelectorOptionItem}`}
            >
              {_item.Name}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CountrySelector
