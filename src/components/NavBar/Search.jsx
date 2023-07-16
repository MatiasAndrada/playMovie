import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { fetchAllMovies } from "../../store/actions/movies/searchMovies";
import { useNavigate } from "react-router-dom";


const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState("")
  
  const onSubmit = (e) => {
		e.preventDefault();
    dispatch(fetchAllMovies(value))
    navigate("/movieList", {  replace: true }) 
		}
  return (
    <div className="col-md-4">
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          onChange={(e) => setValue(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
};

export default Search;
