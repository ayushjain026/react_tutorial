const Axios = require('axios').default


export default class AxiosService {

post(url, data, Header){
    return Axios.post(url, data, Header)
}

}
