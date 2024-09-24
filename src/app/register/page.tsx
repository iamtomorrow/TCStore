"use client";

import "./page.css";

import { Header } from "@/components/Header/Header";
import { Theme } from "@/theme/theme";
import { useState } from "react";

const Register = ( ) => {
    const [ hasDiscount, setHasDiscount ] = useState<boolean>( false );
    const [ hasInstallment, setHasInstallment ] = useState<boolean>( false );
    const [ isCashValid, setIsCashValid ] = useState<boolean>(false);
    const [ isPIXValid, setIsPIXValid ] = useState<boolean>(false);
    const [ isCredtiCardValid, setIsCreditCardValid ] = useState<boolean>(false);
    const [ isDebitCardValid, setIsDebitCardValid ] = useState<boolean>(false);

    return (
        <div 
        style={{
            backgroundColor: Theme.primary.backgroundColor,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center"
        }}>
            <Header restricted={ true }/>

            <div
            style={{
                width: "100%",
                height: "auto",
            }}>
                <div
                style={{
                    width: "100%",
                    height: 120,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: "red"
                }}>

                </div>

                <div
                style={{
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <div
                    className="register-form--container">
                        <div
                        style={{
                            width: "100%",
                            height: 100,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <p
                            style={{
                                fontSize: 30,
                                color: Theme.primary.textColorOnSurface
                            }}>Registrar produto</p>
                        </div>

                        <div
                        style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "center",
                        }}>
                            <div
                            className="register-form-input--container">
                                <input 
                                    className="register-form-input"
                                    placeholder="Nome do produto"
                                    type="text"
                                />
                            </div>

                            <div
                            style={{
                                width: "90%",
                                height: "auto",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }}>
                                <div
                                className="register-form-input--container">
                                    <input 
                                        className="register-form-input"
                                        placeholder="Código QR"
                                        type="number"
                                    />
                                </div>

                                <div
                                className="register-form-input--container">
                                    <input 
                                        className="register-form-input"
                                        placeholder="Código de barra"
                                        type="number"
                                    />
                                </div>
                            </div>

                            <div
                            className="register-form-input--container">
                                <input 
                                    className="register-form-input"
                                    placeholder="Descrição"
                                    type="text"
                                />
                            </div>

                            <div
                            style={{
                                width: "90%",
                                height: "auto",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}>
                                <div
                                className="register-form-input--container">
                                    <input 
                                        className="register-form-input"
                                        placeholder="Quantidade"
                                        type="number"
                                    />
                                </div>

                                <div
                                className="register-form-input--container">
                                    <input 
                                        className="register-form-input"
                                        placeholder="Categoria"
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div
                            style={{
                                width: "90%",
                                height: "auto",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }}>
                                <div
                                onClick={ ( ) => setHasDiscount( prev => !prev ) }
                                className="register-form-checkbox-input--container">
                                    <p
                                    className="register-form-checkbox-input-p">Desconto</p>
                                    <input 
                                        className="register-form-checkbox-input"
                                        placeholder="Desconto"
                                        type="checkbox"
                                        checked={ hasDiscount }
                                    />
                                </div>

                                <div
                                onClick={ ( ) => setHasInstallment( prev => !prev ) }
                                className="register-form-checkbox-input--container">
                                    <p
                                    className="register-form-checkbox-input-p">Parcelamento</p>
                                    <input 
                                        className="register-form-checkbox-input"
                                        placeholder="Parcelamento"
                                        type="checkbox"
                                        checked={ hasInstallment }
                                    />
                                </div>
                            </div>

                            <div
                            style={{
                                width: "90%",
                                height: "auto",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }}>
                                <div
                                onClick={ ( ) => setIsCashValid( prev => !prev ) }
                                className="register-form-checkbox-input--container">
                                    <p
                                    className="register-form-checkbox-input-p">Dinheiro</p>
                                    <input 
                                        className="register-form-checkbox-input"
                                        placeholder="Dinheiro"
                                        type="checkbox"
                                        checked={ isCashValid }
                                    />
                                </div>

                                <div
                                onClick={ ( ) => setIsPIXValid( prev => !prev ) }
                                className="register-form-checkbox-input--container">
                                    <p
                                    className="register-form-checkbox-input-p">PIX</p>
                                    <input 
                                        className="register-form-checkbox-input"
                                        placeholder="PIX"
                                        type="checkbox"
                                        checked={ isPIXValid }
                                    />
                                </div>

                                <div
                                onClick={ ( ) => setIsCreditCardValid( prev => !prev ) }
                                className="register-form-checkbox-input--container">
                                    <p
                                    className="register-form-checkbox-input-p">Cartão de crédito</p>
                                    <input 
                                        className="register-form-checkbox-input"
                                        placeholder="Cartão de crédito"
                                        type="checkbox"
                                        checked={ isCredtiCardValid }
                                    />
                                </div>

                                <div
                                onClick={ ( ) => setIsDebitCardValid( prev => !prev ) }
                                className="register-form-checkbox-input--container">
                                    <p
                                    className="register-form-checkbox-input-p">Cartão de débito</p>
                                    <input 
                                        className="register-form-checkbox-input"
                                        placeholder="Cartão de débito"
                                        type="checkbox"
                                        checked={ isDebitCardValid }
                                    />
                                </div>
                            </div>

                            <div
                            style={{
                                width: "90%",
                                height: "auto",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }}>
                                <div
                                className="register-form-input--container">
                                    <input 
                                        className="register-form-input"
                                        placeholder="Preço base"
                                        type="number"
                                    />
                                </div>

                                {
                                    hasDiscount &&
                                    <div
                                    className="register-form-input--container">
                                        <input 
                                            className="register-form-input"
                                            placeholder="Preço com desconto"
                                            type="number"
                                        />
                                    </div>
                                }

                                
                                {
                                    hasInstallment &&
                                    <div
                                    className="register-form-input--container">
                                        <input 
                                            className="register-form-input"
                                            placeholder="Número de parcelas"
                                            type="number"
                                        />
                                    </div>
                                }
                            </div>
                            
                            <div
                            // onClick={ ( ) => setIsDebitCardValid( prev => !prev ) }
                            className="register-form-file-input--container">
                                <p
                                className="register-form-file-input-p">inserir imagens</p>
                                <input 
                                    className="register-form-file-input"
                                    placeholder="Inserir Imagem"
                                    title="Inserir Imagem"
                                    type="file"
                                    multiple={ true }
                                />
                            </div>
                            
                            <div
                            style={{
                                width: "100%",
                                height: 120,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-around",
                                paddingLeft: 16,
                                paddingRight: 16,
                            }}>
                               <button
                                className="cancel-button">
                                    <p
                                    style={{
                                        color: Theme.primary.textColorOnSurface,
                                        fontSize: 20,
                                    }}>Cancelar</p>
                                </button>
                                <button
                                className="register-button">
                                    <p
                                    style={{
                                        fontSize: 20,
                                    }}>Registrar</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;