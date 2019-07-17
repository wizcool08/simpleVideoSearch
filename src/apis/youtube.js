import axios from "axios";

const YOUTUBE_API_KEY = "AIzaSyDYrHl9FO_bmpu5t75zqFPzRj2bdn_WE7o";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: YOUTUBE_API_KEY
  }
});
