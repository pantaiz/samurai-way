import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type mapStateToPropsForRedirecttyp={
    isAuth:boolean
}
export const mapStateToPropsForRedirect = (state:AppStateType):mapStateToPropsForRedirecttyp => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect <T>(Component:ComponentType<T>)  {
  function RedirectComponent(props:mapStateToPropsForRedirecttyp){
      let {isAuth,...restProps}=props
          if (!isAuth) return<Redirect to={'/login'}/>
          return <Component{...restProps as T}/>

  }
  const  ConnectedAuthRedirectComponent=connect(mapStateToPropsForRedirect)(RedirectComponent)
  return ConnectedAuthRedirectComponent
}