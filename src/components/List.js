import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Delete from './Delete';
import './List.css';


const List = (props) => {

  return (<div>

    <div className="list">
    
      <h3>Movies</h3>
     {props.moviesList.map((item) => 
       <div><div className="movie">{item}</div><Delete item={item}/></div>
     )}
      </div>

    </div>
  );
}

const mapStateToProps = (state) => {
  debugger
  return {
    moviesList: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
