import { useContext, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import axiosHelper from "../axios/axiosHelper";
import { useParams } from "react-router-dom";
import BlogContext from "../context/BlogContext";

const PostLikesList = () => {
  const { id } = useParams();
  const [postLikes, setPostLikes] = useState([]);
  const [userLikedList, setUserLikedList] = useState([]);
  const { blogs } = useContext(BlogContext);

  const getUserById = async (userId) => {
    try {
      const result = await axiosHelper.get(`/users/${userId}`);
      return result.data[0].username;
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    const fetchPostLikes = async () => {
      try {
        const result = await axiosHelper.get(`/blogs/reactions/${id}`);
        setPostLikes(result.data);
      } catch (e) {
        if (e.response) {
          console.log(e.response.error);
          return;
        }
        console.log(e.message);
      }
    };
    fetchPostLikes();
  }, [blogs, id]);

  useEffect(() => {
    const fetchUserLikes = async () => {
      const userList = await Promise.all(
        postLikes.map(async (postLike) => {
          const username = await getUserById(postLike.userId);
          return username;
        })
      );
      setUserLikedList(userList);
    };
    if (postLikes.length) {
      fetchUserLikes();
    }
  }, [postLikes]);

  return (
    <ol>
      {userLikedList.length ? (
        userLikedList.map((user) => (
          <li>
            {user}
            <FaHeart className="text-danger ms-2" />
          </li>
        ))
      ) : (
        <p>No reactions</p>
      )}
    </ol>
  );
};

export default PostLikesList;
