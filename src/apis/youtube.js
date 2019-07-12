import axios from "axios";

const YOUTUBE_API_KEY = "AIzaSyBNp8WN7zvimiNquvyZdGhF7VMcu3aWea0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: YOUTUBE_API_KEY
  }
});
