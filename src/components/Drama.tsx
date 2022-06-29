import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

export interface DramaProps {
    _id: string;
    title: string;
    type: string;
    description: string;
    release_year?: Number | undefined;
    age_certification?: string;
    runtime: Number;
    genres: string[];
    production_countries: string[]
    imdb_score: string;
    fullDetail?: boolean;
}

interface GenreProps {
    genres: string[];
}

const Genres = (props: GenreProps) => {
    return <>{props?.genres.map((genre: string) => <>{genre.toLocaleUpperCase()} </>)}</>;
}

const Drama = (props: DramaProps) => {

    return (
        <div className={cn('movie_card', props?.fullDetail && 'full_movie_card')} id="bright">
            <div className="info_section">
                <div className="movie_header">
                    <img className="drama_img" alt="f" src="/netflix.jpeg" />
                    <div className='info'>
                        <Link to={`/drama/${props._id}`} className="movie-link"><h1>{props.title}</h1></Link>
                        <span className="minutes">{`${props.runtime} min`}</span>
                        <p className="type"><Genres genres={props.genres} /></p>
                        {props.fullDetail && <div className='extra_details'>
                            <span className='tag'>Type: {props.type}</span>
                            <span className='tag'>Available Countries: {props.production_countries}</span>
                            <span className='tag'>Age Restriction: {props.age_certification}</span>
                        </div>}
                    </div>
                </div>
                <div className="movie_desc">
                    <p className="text">
                        {props.description}
                    </p>
                </div>
            </div>
            <div className="blur_back bright_back"></div>
        </div>
    )
}

export default Drama