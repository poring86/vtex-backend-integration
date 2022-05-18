import { SET_COUNTRY_LIST, SET_SELECTED_COUNTRY } from '../actions/country'

const initialState = {
  countryList: {},
  selectedCountry: {},
}

interface Country {
  Id: number
  IsActive: boolean
  Name: string
}

export default (
  action: { type: string; countryList: Country[]; selectedCountry: Country },
  state = initialState
) => {
  switch (action.type) {
    case SET_COUNTRY_LIST:
      return {
        ...state,
        countryList: action.countryList,
      }

    case SET_SELECTED_COUNTRY:
      return {
        ...state,
        countryList: action.selectedCountry,
      }

    default:
      return state
  }
}
