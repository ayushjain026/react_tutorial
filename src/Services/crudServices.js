import configuration from "../Configurations/configuration"
import Axios from "./AxiosService"

const axios = new Axios();
// const config = new configuration(); 

export default class crudServices {

    CreateRecord(data){
        console.log("data : ", data, " Url : ", configuration.createCountryRecord)
        return axios.post(configuration.createCountryRecord, data, false)
    }

}
