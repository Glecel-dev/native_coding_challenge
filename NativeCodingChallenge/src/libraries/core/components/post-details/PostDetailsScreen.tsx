import React, { useEffect, useState } from 'react';
import { Button, ScrollView, View } from 'react-native';
import { Post } from '../../interfaces/post.interface';
import { postService } from '../../services/post.service';
import PostItemDetails from './views/PostItemDetails';


const PostDetails = (props: { postId: string; navigation:any }) => {
    const[postDetails, setPostDetails] = useState<Post[]>()

    useEffect(()=>{        
        console.log(props.postId)
    },[])

    const getDetailsList = async  () =>{
       const data =  await postService.getPost(props.postId)
        .then((res)=>{
            console.log(res)
            return res?.result
        })
        setPostDetails(data)
        console.log(postDetails)
    }
    return (
        <View>
            <View>
            <Button onPress={()=>props.navigation.goBack()} title={'GoBack'} ></Button>
            </View>
            <ScrollView>
                <PostItemDetails></PostItemDetails>
            </ScrollView>
        </View>

    )
    
}
export default PostDetails;