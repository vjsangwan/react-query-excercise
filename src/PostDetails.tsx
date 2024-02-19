import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchData } from "./utils";

function PostDetails() {
  const { id } = useParams<{ id: string | undefined }>();
  const { data, isLoading } = useQuery("fetchDeatils", () =>
    fetchData(`/posts/${id}`)
  );
  if (isLoading) return <div> Fetching details ...</div>;

  return <div>{data ? `Post details: ${JSON.stringify(data)}` : null}</div>;
}
export default PostDetails;
