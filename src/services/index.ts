const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid='
const API_KEY = 'db04f7f0492b01563ff78567693c5b79'
const AUTH = `appid=${API_KEY}`

const url = {
    byName: 'https://api.openweathermap.org/data/2.5/weather?q='
}

const api = {
    getByName: (name: string) => {
        return fetch(`${url.byName}${name}&${AUTH}&units=metric&lang=pt_br`)
            .then(res => res && res.json())
    }
}

export default api
