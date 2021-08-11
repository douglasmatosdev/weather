export type Clouds = {
    all: number
}

export type Coord = {
    lat: number
    lon: number
}

export type Main = {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
}

export type Sys = {
    country: string
    id: number
    sunrise: number
    sunset: number
    type: number
}

export type Weather = {
    description: string
    icon: string
    id: number
    main: string
}[]

export type Wind = {
    deg: number
    speed: number
}

type City = {
    coord: Coord
    country: string
    id: number
    name: string
    population: number
    sunrise: number
    sunset: number
    timezone: number
}

export interface ResponseConsult {
    base: string
    clouds: Clouds
    cod: number
    coord: Coord
    dt: number
    id: number
    main: Main
    name: string
    sys: Sys
    timezone: number
    visibility: number
    weather: Weather
    wind: Wind
}

export interface ListForecast {
    clouds: Clouds
    dt: number
    dt_txt: string
    main: Main & { grnd_level: number; sea_level: number; temp_kf: number; }
    pop: number
    sys: { prod: number }
    visibility: number
    weather: Weather
    wind: Wind & { gust: number }
}

export interface ResponseConsultForecast {
    city: City
    cnt: number
    cod: string
    list: ListForecast[]
    massage: 0
}