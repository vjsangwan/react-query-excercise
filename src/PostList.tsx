import React from "react";
import { fetchData } from "./utils";
import { Link } from "react-router-dom";
import "./PostList.css";
import { useQuery } from "react-query";

interface Post {
  id: number;
  body: string;
  title: string;
  userId: number;
}

function PostList() {
  const { data: posts, isLoading } = useQuery("fetchPostsData", () =>
    fetchData("/posts")
  );

  if (isLoading) return <div>Fetching posts...</div>;

  return (
    <div className="fetched-posts">
      <h2>Posts</h2>
      <div className="table">
        <div className="table-header table-row">
          <span className="col x4">Title</span>
          <span className="col x2">Body</span>
        </div>
        {posts?.map((post: Post) => (
          <div className="table-row" key={post.id}>
            <span className="col x4">
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </span>
            <span className="col x2">{post.body}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PostList;
