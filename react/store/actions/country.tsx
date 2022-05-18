export const SET_COUNTRY_LIST = 'SET_COUNTRY_LIST'

export const SET_SELECTED_COUNTRY = 'SET_SELECTED_COUNTRY'

interface Country {
  Id: number
  IsActive: boolean
  Name: string
}

export const setCountryList = (countryList: Country[]) => {
  return {
    type: SET_COUNTRY_LIST,
    countryList,
  }
}

export const setSelectedCountry = (selectedCountry: Country) => {
  return {
    type: SET_SELECTED_COUNTRY,
    selectedCountry,
  }
}
