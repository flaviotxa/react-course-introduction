import { ApiService } from './ApiService'

const endpoint = 'categories'

export const CategoryService = {
    list() {
        return ApiService.get(endpoint);
    }
}