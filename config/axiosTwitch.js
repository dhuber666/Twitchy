import twitchApi from "./twitchApi";
import axios from "axios";

axios.defaults.baseURL = "https://api.twitch.tv/kraken";
axios.defaults.headers.common["Client-ID"] = twitchApi.clientID;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
