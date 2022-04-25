import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { Post } from '../../interfaces/post.interface';
import { ApiSuccessResponse } from '../../models/api-success-response.model';
import { postService } from '../../services/post.service';
import PostItem from './views/PostItem';
import Config from "react-native-config";

const PostScreen = ({ navigation }) => {

const[posts, setPosts] = useState<Post[]>()

    useEffect(()=>{
        console.log(Config.FR_ACCESS_TOKEN)
        
        getList()
    },[])

    const getList = async  () =>{
       const data =  await postService.getPosts()
        .then((res)=>{
            return res?.result
        })
        setPosts(data)
        console.log(posts)
    }
        return (
            <ScrollView>
                {posts?.map((post:any, index:number)=>(
                <PostItem  navigation={navigation} post={post} key={index}></PostItem>
                ))}
            </ScrollView>
        )

    
}
export default PostScreen;