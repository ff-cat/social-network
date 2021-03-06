import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogType} from "../../../state/reducers/dialogs-reducer";


export const DialogItem = (props: DialogType) => {

    return <div className={s.dialog}>
        <img src={props.img} alt="#" className={s.dialogImg}/>
        <NavLink className={s.dialogName} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
}

