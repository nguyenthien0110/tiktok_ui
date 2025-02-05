export interface MenuItemsTypes {
  iconString: string;
  colorString: string;
  sizeString: string;
}

export interface RandomUsers {
  id: string;
  name: string;
  image: string;
}

export interface MenuItemFollowCompTypes {
  user: RandomUsers;
}

export interface PostWithProfile {
  id: string;
  user_id: string;
  video_url: string;
  text: string;
  created_at: string;
  profile: {
    user_id: string;
    name: string;
    image: string;
  };
}

export interface PostMainCompTypes {
  post: PostWithProfile;
}

export interface PostMainLikeCompTypes {
  post: PostWithProfile;
}

export interface Like {
  id: string;
  user_id: string;
  post_id: string;
}

export interface Comments {
  id: string;
  user_id: string;
  post_id: string;
  text: string;
  create_at: string;
}
