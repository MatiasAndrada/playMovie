import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { fetchAllMovies } from "../../store/actions/fetchMovies";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("")
  const dispatch = useDispatch();
  
  const onSubmit = (e) => {
		e.preventDefault();
    dispatch(fetchAllMovies(value))
    navigate("/user/movieList")
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
