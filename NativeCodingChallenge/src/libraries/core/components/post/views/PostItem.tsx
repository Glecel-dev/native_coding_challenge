import React from "react";
import { Text, View ,TouchableOpacity, StyleSheet, Image, ImageBackground} from "react-native";
import { Post } from "../../../interfaces/post.interface";
import Moment from 'moment';

const PostItem = (props:{post: Post, navigation:any} ) => {
    Moment.locale('en');
    const postId = props.post._id
    return (
    <View style={styles.postContainer}>
        <TouchableOpacity style={styles.itemTouchable} onPress={()=> props.navigation.navigate('PostDetails', {postId:postId})}>
            <Text>{props.post.user.username}</Text>
            <Text>{props.post.user.counts?.followedBy!} followers</Text>
            <Image style={styles.userImage} source={{uri:props.post.user?.profilePicUrl!}}/>
            <Text>Likes: {props.post.counts.likes}</Text>
            <Text>Comments: {props.post.counts.comments}</Text>
            <Text>Posted At: {Moment(props.post.postedAt).format('DD MM YYYY hh:mm:ss')}</Text>
            <Text>Type: {props.post.kind}</Text>
            <Text>Short Code: {props.post.shortcode}</Text>
            <Text style={{display:'flex', margin:2, width:'100%'}}>Caption: {props.post.caption}</Text>
        </TouchableOpacity>
        </View>
    )
}
export default PostItem;

const styles = StyleSheet.create({
    postContainer:{
        padding:6,
    },
    itemTouchable:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:35,
        borderColor:'gray',
        borderWidth:1,
        borderRadius:30,
        padding:5,
        margin:5,
    },
    userImage:{
        height:100,
        width:100
    }
})