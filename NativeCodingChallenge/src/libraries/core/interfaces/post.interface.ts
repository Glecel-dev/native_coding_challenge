/**
* Interface for an Instagram post
*/
export interface Post {
    _id: string;
    user: {
      username: {
        profilePicUrl: string;
      };
      counts: {
        followedBy: number;
      };
    };
    counts: {
      likes: number;
      comments: number;
    };
    postedAt: string;
    kind: string;
    shortcode: string;
    caption: string;
   }
   