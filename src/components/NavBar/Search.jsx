import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { fetchAllMovies } from "../../store/actions/fetchMovies";

const Search = () => {
  const [value, setValue] = useState("")
  const dispatch = useDispatch();
  
  const onSubmit = (e) => {
		e.preventDefault();
    dispatch(fetchAllMovies(value))
		}
  

  return (
    <div className="col-md-4">
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          className="form-control"
          placeholder="Busqueda"
          onChange={(e) => setValue(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
};

export default Search;
