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

const createPost = async (postPayload: Omit<Post, "id">): Promise<Post> => {
  const response = await fetch(`${BASE_URL}/posts/`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...postPayload,
    }),
  });

  if (!response.ok)
    throw new Error(`Error creating a new post. Status: ${response.status}`);

  return response.json();
};

export type Post = {
  id: number;
  title: string;
  body: string;
};

export { fetchPost, fetchPosts, createPost };
