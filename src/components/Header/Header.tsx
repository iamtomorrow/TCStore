
import Image from "next/image";
import "./Header.css";
import Logo from "@/assets/images/logo.jpg";
import { BiMenu, BiSearch, BiShoppingBag } from "react-icons/bi";
import { Theme } from "@/theme/theme";
import { TiUserOutline } from "react-icons/ti";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

interface Props {
    restricted: boolean
}

const categories = [
    {
        id: "892535",
        key: "svjsnv",
        name: "Moda Feminina"
    },
    {
        id: "892531",
        key: "kcmaks",
        name: "Bebê"
    },
    {
        id: "892545",
        key: "iutwew",
        name: "Utencílios"
    },
    {
        id: "892525",
        key: "iutwdw",
        name: "Calçados"
    },
    {
        id: "822530",
        key: "xsasxs",
        name: "Celulares"
    },
    {
        id: "822630",
        key: "aascsxs",
        name: "Bijuterias"
    },
    {
        id: "832630",
        key: "iascsxs",
        name: "Brinquedos"
    },
]

export const Header = ({ restricted }: Props) => {
    return (
        <div
        className="header--container">
            <header
            className="header">
                <div
                style={{
                    width: "100%",
                    height: "120px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>

                    <div
                    style={{
                        minWidth: "20%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        // backgroundColor: "red"
                    }}>
                        <button
                        className="header-button">
                            <BiMenu 
                                size={36}
                                color={ Theme.primary.iconColorOnSurface }
                                className="header-icon"
                            />
                        </button>
                    </div>

                    <div
                    style={{
                        width: "100%",
                        height: "100%",
                        // backgroundColor: "green"
                    }}>
                        <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Image 
                                src={ Logo }
                                alt="Logo"
                                width={1000}
                                height={1000}
                                style={{
                                    width: 140
                                }}
                            />
                        </div>
                    </div>

                    <div
                    style={{
                        minWidth: "20%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around",
                        // backgroundColor: "blue"
                    }}>
                        <button
                        className="header-button">
                            <BiShoppingBag 
                                size={36}
                                color={ Theme.primary.iconColorOnSurface }
                                className="header-icon"
                            />
                        </button>

                        <button
                        className="header-button">
                            <TiUserOutline
                                size={36}
                                color={ Theme.primary.iconColorOnSurface }
                                className="header-icon"
                            />
                        </button>
                    </div>
                </div>

                {
                    !restricted &&
                    <>
                    <div
                    style={{
                        width: "100%",
                        height: 80,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // backgroundColor: "yellow"
                    }}>
                        <div
                        style={{
                            width: "90%",
                            height: 50,
                            borderRadius: 20,
                            display: "flex",
                            flexDirection: "row",
                            border: `1px solid rgba(256, 256, 256, 0.3)`,
                            // border: `1px solid ${ Theme.primary.borderColorOnSurface }`,
                            // backgroundColor: "red"
                        }}>
                            <input 
                                placeholder="O que você busca?"
                                style={{
                                    flex: 1,
                                    maxWidth: "auto",
                                    height: "100%",
                                    background: "none",
                                    border: "none",
                                    outline: "none",
                                    paddingLeft: 20,
                                    paddingRight: 20,
                                    color: Theme.primary.textColorOnSurface
                                }}
                            />
                            <button
                            style={{
                                minWidth: 60,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: 12,
                                // backgroundColor: "red"
                            }}>
                                <BiSearch 
                                    size={30}
                                    color={ Theme.primary.iconColorOnSurface }
                                    className="header-icon"
                                />
                            </button>
                        </div>
                    </div>

                    <div
                    style={{
                        width: "100%",
                        height: 70,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // backgroundColor: "red",
                    }}>
                        <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            padding: 10,
                        }}> 
                            <button
                            style={{
                                minWidth: 40,
                                height: 40,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                                <MdArrowBackIos
                                    color="#ffffff"
                                    size={26}
                                />
                            </button>
                            
                            <div
                            style={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                overflowX: "auto",
                            }}>
                            {
                                categories.map((item, index) => (
                                    <CategoryItem 
                                        id={ item.id }
                                        key={ item.key }
                                        name={ item.name }
                                    />
                                ))
                            }
                            </div>

                            <button
                            style={{
                                minWidth: 40,
                                height: 40,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                // backgroundColor: "red"
                            }}>
                                <MdArrowForwardIos
                                    color="#ffffff"
                                    size={26}
                                />
                            </button>
                        </div>
                    </div>
                    </>
                }
            </header>
        </div>
    )
}