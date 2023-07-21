'use client'
import Link from "next/link"
import { useState, React } from "react";

export const CustomButton = ({isClicked, ...props}) => {
    return(
        <div className="border flex ">
            <div className={"relative z-[10] px-10 py-2.5 rounded-2xl font-creato font-bold shadow-md shadow-black/30 " +
                (isClicked ? "text-neutral-100 outline outline-[6px] outline-neutral-100":"text-green-400 bg-neutral-100")}>
                {props.children}
            </div>
            <div className={"absolute z-[9] mt-[5px] ml-[3px] px-10 py-2.5 rounded-2xl font-creato text-transparent font-bold shadow-md shadow-black/30 "+
                (isClicked ? "outline outline-[6px] outline-red-100" : "bg-red-100")}
            >
                {props.children}
            </div>
        </div>
    )
}