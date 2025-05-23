const BASE_URL = "https://jsonplaceholder.typicode.com/";

const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch(`${BASE_URL}/posts/`);
  if (!response.ok)
    throw new Error(`Error fetching posts. Status: ${response.status}`);
  return response.json();
};

const fetchPost = async (id: string): Promise<Post> => {
  const response = await fetch(`${BASE_URL}/posts/${id}`);
  if (!response.ok)
    throw new Error(`Error fetching post ${id}. Status: ${response.status}`);
  return response.json();
};

type Post = {
  id: number;
  title: string;
  body: string;
};

export { fetchPost, fetchPosts };
