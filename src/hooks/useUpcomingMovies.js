import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingVideo } from "../utils/moviesSlice";

const useUpcomingVideo = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const UpcomingVideo = useSelector((store) => store.movies.upcomingMovies);

  const getUpcomingVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingVideo(json.results));
  };

  useEffect(() => {
    !UpcomingVideo && getUpcomingVideo();
  }, []);
};

export default useUpcomingVideo;
