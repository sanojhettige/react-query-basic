import { API_BASE_URL } from './index'

export const getDramas = async (limit: number, offset: number) => {
    const response = await fetch(`${API_BASE_URL}/dramas?limit=${limit}&offset=${offset}`);
    return await response.json();
}

export const getDramaById = async (_id: string) => {
    const response = await fetch(`${API_BASE_URL}/dramas/${_id}`);
    return await response.json();
}