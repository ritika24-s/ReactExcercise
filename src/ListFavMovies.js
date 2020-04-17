import React, { Component } from 'react';

class ListFavMovies extends Component{
	render(){
      return (
        <ul className='movies-list'>
        	{this.props.profiles.map((profile)=>{
        		const Username = this.props.users[profile.userID].name;
        		const Moviename = this.props.movies[profile.favoriteMovieID].name;
        		return (
        			<li key={profile.id} className='movie-list-item'>
                  		<p>{`${Username}'s favourite movie is "${Moviename}"`}</p>
					</li>
      			);
      		})}
        </ul>
      )
    }
}

export default ListFavMovies