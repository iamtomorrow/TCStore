"use client";

import { ChildrenProps } from "@/types/Props";
import { createContext, useContext, useState } from "react";

interface RouteContextProps {
    currentRoute: string 
    updateRoute: ( route: string ) => void 
}

const RouteContextInitialState: RouteContextProps = {
    currentRoute: "/",
    updateRoute: ( ) => { }
}

export const RouteContext = createContext<RouteContextProps>( RouteContextInitialState );

export const RouteContextProvider = ({ children }: ChildrenProps) => {
    const [ currentRoute, setCurrentRoute ] = useState<string>("");

    const updateRoute = ( route: string ) => {
        setCurrentRoute( prev => route );
        window.location.href = `/${route}`;
    }

    return (
        <RouteContext.Provider value={{ 
            currentRoute,
            updateRoute
        }}>
            { children }
        </RouteContext.Provider>
    )
}

export const useRouteContext = ( ) => {
    return useContext( RouteContext );
}
