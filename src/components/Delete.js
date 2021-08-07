import React from 'react';
import {connect} from 'react-redux';

const Delete = (props) => {


  const handleClick = () => {
    debugger
    props.deleteMovie(props.item);
  }
 

  return (
    <div className="delete">
     <button className="button" onClick={handleClick}>Delete</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    moviesList: state.list
  }

};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMovie: (item) => {
      debugger
      dispatch({
        type: 'MOVIE:DELETE',
        movie : item
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Delete);
