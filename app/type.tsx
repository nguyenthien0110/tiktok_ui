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

export interface UploadError {
  type: string;
  message: string;
}

export interface ProfilePageTypes {
  params: { id: string };
}

export interface PostUserCompTypes {
  post: Post;
}

export interface Post {
  id: string;
  user_id: string;
  video_url: string;
  text: string;
  created_at: string;
}

export interface CropperDimesions {
  height?: number | null;
  witght?: number | null;
  left?: number | null;
  top?: number | null;
}

export interface ShowErrorObject {
  type: string;
  message: string;
}

export interface TextInputCompTypes {
  string: string;
  inputType: string;
  placeholder: string;
  onUpdate: (newValue: string) => void;
  error: string;
}

export interface PostPageTypes {
  val: { userId: string; postId: string };
}

export interface CommentsHeaderCompTypes {
  post: PostWithProfile;
  params: { userId: string; postId: string };
}

export interface CommentsCompTypes {
  params: { userId: string; postId: string };
}

export interface SingleCommentsCompTypes {
  comment: CommmentWithProfile;
  params: { userId: string; postId: string };
}

export interface CommmentWithProfile {
  id: string;
  user_id: string;
  post_id: string;
  text: string;
  created_at: string;
  profile: {
    user_id: string;
    name: string;
    image: string;
  };
}

export interface User {
  id: string;
  name: string;
  bio: string;
  image: string;
}

export interface UserContextTypes {
  user: User | null;
  register: (name: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkUser: () => Promise<void>;
}

export interface Profile {
  id: string;
  user_id: string;
  name: string;
  image: string;
  bio: string;
}