import React from "react";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItems.css"

export default function ExpenseItems(props){

    // var date = new Date(2021,2,2);

    return(
        <div className="ExpenseItems">
            <ExpenseDate day={props.day} month={props.month} year={props.year}/>
            <div className="Title">
                {props.title}
            </div>
            <div className="Ammount">
                {props.Amount}
            </div>
        </div>
    )
}