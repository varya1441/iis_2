import axios from 'axios';

const DISHES_API_BASE_URL = "http://localhost:8084/v1/dishes"

class DishService {

    getDishes() {
        return axios.get(DISHES_API_BASE_URL);
    }

}

export default new DishService()