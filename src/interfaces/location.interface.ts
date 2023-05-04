interface Address {
  city: string
  state_district: string
  state: string
  'ISO3166-2-lvl4': string
  postcode: string
  country: string
  country_code: string
}

interface Extratags {
  capital: string
  website: string
  wikidata: string
  wikipedia: string
  population: string
}

export interface Location {
  place_id: string
  licence: string
  osm_type: string
  osm_id: string
  boundingbox: string[]
  lat: string
  lon: string
  display_name: string
  class: string
  type: string
  importance: number
  icon: string
  address: Address
  extratags: Extratags
}
