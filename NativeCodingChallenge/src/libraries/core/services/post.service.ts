import { AxiosResponse } from "axios";
import { Post } from "../interfaces/post.interface";
import { ApiSuccessResponse } from "../models/api-success-response.model";
import apiService from "./api.service";

export const postService = {

    getPosts():Promise<ApiSuccessResponse<Post>>{
        return apiService
        .get('postings')
        .then((response:AxiosResponse<ApiSuccessResponse<Post>>)=> response.data)
    },
    getPost(
        postId: string,
        ):Promise<ApiSuccessResponse<Post>>{
            return apiService
            .get(`postings/${postId}`)
            .then((response:AxiosResponse<ApiSuccessResponse<Post>>)=> response.data)
        }
}