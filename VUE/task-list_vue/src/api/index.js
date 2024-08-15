import axios from "axios";

const BASE_URL = "http://localhost:1337";

export async function getPosts() {
    const response = await axios.get(BASE_URL+"/api/posts");
    console.log(response.data.data);
    return response.data.data;
};

export async function getPost(embed) {
    const response = await axios.get(BASE_URL+`/api/posts/${embed}`);
    console.log(response.data.data);
    return response.data.data;
};