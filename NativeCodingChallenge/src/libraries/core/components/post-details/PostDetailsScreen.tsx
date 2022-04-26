import React, { useEffect, useState } from 'react';
import { Button, ScrollView, View } from 'react-native';
import { Post } from '../../interfaces/post.interface';
import { postService } from '../../services/post.service';
import PostItemDetails from './views/PostItemDetails';


const PostDetails = ({route, navigation}) => {
    const[postDetails, setPostDetails] = useState<any>()
    const {postId} = route.params
    useEffect(()=>{        
        getDetailsList();
    },[])

    const getDetailsList = async  () =>{
       const data =  await postService.getPost(postId)
        .then((res)=>{
            return res?.result
        })
        setPostDetails(data)
    }
    return (
        <View>
            <View>
            <Button onPress={()=>navigation.goBack()} title={'GoBack'} ></Button>
            </View>
            <ScrollView>
                <PostItemDetails post={postDetails} navigation={navigation}/>
            </ScrollView>
        </View>

    )
    
}
export default PostDetails;