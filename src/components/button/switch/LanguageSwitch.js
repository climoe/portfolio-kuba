import React, {useCallback, useState} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GlobeHemisphereWest, Translate } from "phosphor-react";

import { LanguageContextProvider, useLanguageContext } from "../../context/LanguageContext";

import "./styles.scss"


export const LanguageSwitch = ({sticky}) => {
    
    const [isEn, setIsEn] = useState(true);
    const languageContext = useLanguageContext();

    const toggleSwitch = useCallback(() => {
            setIsEn(!isEn); 
            languageContext.update()
        },[isEn, languageContext]
    )

    return (
        <LanguageContextProvider>
            <div className="switch-container" 
                data-sticky={sticky}  
                data-darkmode={isEn}
                style={{ justifyContent: isEn ? 'flex-end' : 'flex-start' }}
                onClick={toggleSwitch}> 
                <motion.div 
                    layout 
                    className="handle"
                    data-sticky={sticky} >
                    <AnimatePresence exitBeforeEnter initial={false}>
                        <motion.i
                            className={'icon'}
                            key={isEn ? 'en' : 'pl'}
                            initial={{ y: -30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 30, opacity: 0 }} 
                            transition={{ duration: .2 }}
                        >
                        {isEn ?  
                            <GlobeHemisphereWest size={"3rem"}/> :
                            <Translate size={"3rem"}/> }
                        </motion.i>
                    </AnimatePresence>
                </motion.div>
            </div>   
        </LanguageContextProvider>
    )
}