import axios from 'axios'

export const getPastLaunches = () => {
    return axios.get('https://api.spacexdata.com/v3/launches/past')
}
export const getAll = () => {
    return axios.get('https://api.spacexdata.com/v3/launches')
}
export const headerInfo = () => {
    return axios.get('https://api.spacexdata.com/v3/info')
}
