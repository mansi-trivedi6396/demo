import React from 'react'
import { useEffect, useRef, useState } from "react";
import AppBarNew from '../Appbar'
import Footer from '../Footer'
import LoginDialog from './LoginDialog'
import bg from '../../../../images/background.jpg'
import { makeStyles } from '@material-ui/core/styles'
import useComponentVisible from '../useComponentVisible'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    bgImage: {
        // position: 'absolute',
        // maxWidth: '100%',
        // maxHeight: '100%',
        // height: 'auto',
        // width: '100%'
        background: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding:'30px',
        marginTop:'40px'
    },
    dialog_like: {
        backgroundColor: "#fff",
        width: '600px',
        fontFamily: 'DM Sans',
        borderRadius: "6px",
        boxShadow: "2px 2px 10px 0px black",

    },
}))


export default function Login() {
    function useComponentVisible(initialIsVisible) {
        const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
        const ref = useRef(null);
    
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsComponentVisible(false);
            }
        };
    
        useEffect(() => {
            document.addEventListener('click', handleClickOutside, true);
            return () => {
                document.removeEventListener('click', handleClickOutside, true);
            };
        }, []);
    
        return { ref, isComponentVisible, setIsComponentVisible };
    }
     const { ref, isComponentVisible } = useComponentVisible(true);
    const classes = useStyles();
    return (
        <div>
            <AppBarNew />
            <Box className={classes.bgImage}  >
            {/* maxWidth='lg'  */}
                <div className={classes.dialog_like}>
                    <LoginDialog />
                </div>
            </Box>
            <Footer />
        </div>
    )
}

