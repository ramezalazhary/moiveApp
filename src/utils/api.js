import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGQyZjFjYTQyNmZhNmVjNTNmZjQ3NGE5MmMzMjQyNSIsInN1YiI6IjY1ZDM0OTFjMzg3NjUxMDE4NjMyNjZmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H6n3Af8O1NzJL9KOxzY2Exz5mnVNNH60rOkhoyC2MxE'
}

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            params: { language: 'en-US', page: '1' },
            headers
        })
        return data
    } catch (error) {
        console.log(error)
        return error
    }
}