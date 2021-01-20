import React, { useEffect, useState } from 'react'
import Button from '../../Components/UI/Button/Button';
import Favourite from '../../Components/UI/Favourite Icon/Favourite';
import { connect } from 'react-redux';

import Input from '../../Components/UI/Input/Input';
import classes from './Form.module.css'
import Spinner from '../../Components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';

function Form(props) {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        updatingData();
    }, [props.currentData])

    const submitHandler = (e) => {
        e.preventDefault();
        props.onSubmit({
            name: name,
            number: number,
            email: email,
            isFavourite: props.isFavourite,
            id: props.id ? props.id : null
        })
        setName('')
        setEmail('')
        setNumber('')
    }

    const updatingData = () => {
        if (props.currentData) {
            // console.log(props.currentData)
            setName(props.currentData.name || null)
            setEmail(props.currentData.email || null)
            setNumber(props.currentData.number || null)
        }
    }


    return (
        props.load ? <Spinner /> :
            <form
                className={classes.Form}
                onSubmit={submitHandler}
            >
                <Favourite />
                <Input change={e => setName(e.target.value)} value={name} type="text" placeholder='Name' />
                <Input change={e => setNumber(e.target.value)} value={number} type="number" placeholder='Phone Number' />
                <Input change={e => setEmail(e.target.value)} value={email} type="email" placeholder='Email' />
                <Button class="btn-primary">{props.currentData ? 'Update' : 'Submit'}</Button>
            </form>
    )
}

const mapStateToProps = state => {
    return {
        load: state.submit.loading,
        isFavourite: state.favourite.isFavourite,
        data: state.contacts.data,
        currentData: state.favourite.currentData,
        id: state.favourite.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (data) => dispatch(actions.submitForm(data)),
        onEditFav: () => dispatch(actions.toggleFavourite),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)
