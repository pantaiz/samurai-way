import preloader from "../../../assets/image/Loader.svg";
import React from "react";

export const Preloader = () => {
return<div style={{justifyContent:"center"}}>
    <img alt={'preloader'} src={preloader}/>
</div>
}