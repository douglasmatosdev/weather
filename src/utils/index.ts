import { ListForecast, ResponseConsultForecast } from '../types'
import groupId from './idCapitalsBrazil'
export {
    groupId
}

export const sortId = (group: number[]): number[] => {
    const array: number[] = []
    const arraySelected: number[] = []

    while (arraySelected.length < group.length) {
        const index = Math.floor(Math.random() * group.length)

        if (arraySelected.indexOf(index) === -1) {
            arraySelected.push(group[index])
        }
    }

    while (array.length <= 9) {
        const index = Math.floor(Math.random() * 10)

        if (array.indexOf(index) === -1) {
            array.push(index)
        }
    }

    const selectId: number[] = array.map(idx => arraySelected[idx])

    return selectId
}

export const filterForecast = (obj: ResponseConsultForecast): ListForecast[] => {
    const temp: ListForecast[] = obj && obj?.list ? obj.list : []

    const forecast = temp.filter(e => e.dt_txt.includes('12:00:00'))
    forecast.pop()

    return forecast
}