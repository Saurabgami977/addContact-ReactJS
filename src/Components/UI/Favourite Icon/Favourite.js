import React from 'react';
import { connect } from 'react-redux';

import FavouriteIcon from './star.svg';
import classes from './Favourite.module.css';
import * as  actions from '../../../store/actions/index';

function Favourite(props) {

    return (
        <div className={classes.outerDiv}>
            <h3>Favourite:</h3>
            <img
                onClick={() => props.toggleFav()}
                style={{ backgroundColor: props.isFav ? 'red' : 'white' }}
                className={classes.Favourite}
                src={FavouriteIcon}
                alt="Favourite Icon"
            />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFav: state.favourite.isFavourite
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleFav: () => dispatch(actions.toggleFavourite())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
