import { logger } from "../utils/Logger.js"
import { yelpApi } from "./AxiosService.js"

class BusinessService {
    async getTestBusinesses(term, location, sortBy) {
        const res = await yelpApi.get(`search?term=${term}&location=${location}&sort_by=${sortBy}`)
        logger.log(res.data)
    }
}

export const businessService = new BusinessService()