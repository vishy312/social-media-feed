export interface Post {
  id: string;

  author: Author;

  content: PostContent;

  stats: PostStats;

  createdAt: number; // epoch millis (easy sorting & cursors)
}

export interface Author {
  id: string;
  name: string;
  avatar: string; // URL
}

export interface PostContent {
  text?: string;
  image?: string;
}

export interface PostStats {
  likes: number;
  comments: number;
  shares: number;
}
