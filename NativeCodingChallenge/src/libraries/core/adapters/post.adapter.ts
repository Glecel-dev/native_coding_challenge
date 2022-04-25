import { Adapter } from "../interfaces/adapter.interface";
import { Post } from "../interfaces/post.interface";


export const postAdapter: Adapter<Post> = {
    clientAdapt(object: any): Post {
      return object;
    },
  
    serverAdapt(object: any): Post {
      return object;
    },
  };