import axios from 'axios';

const THING_API_BASE_URL = 'http://localhost:8080/things/all';

class ThingService{
    getThings(){
        return axios.get(THING_API_BASE_URL);
    }
}

export default new ThingService();