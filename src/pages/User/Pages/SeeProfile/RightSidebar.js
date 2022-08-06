import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box, Container, makeStyles } from "@material-ui/core";


import Squash from "../../../../images/sport/Squash.svg";
import tennis from "../../../../images/sport/tennis.svg";
import Padel from "../../../../images/sport/Padel.svg";
import Golf from "../../../../images/sport/Golf.svg";
import Badminton from "../../../../images/sport/Badminton.svg";
import map from "../../../../images/bg/map.svg";
import gtg_logo from "../../../../images/logo/gtg-logo.svg";
import location from "../../../../images/icon/location.svg";
import info_gray from "../../../../images/icon/info_gray.svg";


const useStyles = makeStyles((theme) => ({
  root_main: {
    flexGrow: 1,
    "& h1, h2, h3, h4, h5, h6, p": {
      margin: "0 0 15px",
      fontFamily: "dm sans",
    },
  },
  root: {
    flexGrow: 1,
    padding: "0 0 100px",
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  shadowBox: {
    boxShadow: "0px 0px 15px 0px #8080803b",
    padding: "30px",
    marginBottom: "30px",
    borderRadius: "20px",
    "& .title": {
      color: "#0a3133",
      fontSize: "17px",
      marginBottom: "50px",
    },
  },
  wrapper: {
    flexWrap: "wrap",
    display: "flex",
    gap: "13px",
    "& .item": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "15px",
      padding: "8px 15px",
      borderRadius: "20px",
      border: "1px solid #e1e1e7",
      backgroundColor: "#f8f8f8",
      color: "#0a3133",
      fontWeight: "600",
    },
  },

  day: {
    borderBottom: "1px solid #eaeaed",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    "& :last-child": {
      borderBottom: "0px solid #eaeaed",
    },
    "& .daytext": {
      fontSize: "17px",
      color: "#0a3133",
    },
    "& .date": {
      fontSize: "14px",
      color: "#0a3133",
    },
  },
  mapBox: {
    maxWidth: "100%",
    height: "293px",
    overflow: "hidden",
  },
  mapBottomLogo: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    top: "-62px",
    "& .logoBox": {
      // backgroundColor: "#0a3133",
      width: "117px",
      height: "117px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      marginBottom: "3px",
      border: "6px solid #fff",
    },
    "& .title": {
      color: "#0a3133",
      fontSize: "22px",
      marginBottom: "5px",
    },
    "& .location": {
      display: "flex",
      gap: "5px",
      fontSize: "15px",
      color: "#979d9d",
      fontWeight: "600",
      marginBottom: "15px",
    },
    "& .ptag": {
      fontSize: "16px",
      color: "#0a3133",
      fontWeight: "600",
      marginBottom: "0px",
      marginTop: '20px',
    },


  },

  // Download App
  // ========================================================================
  // ========================================================================

  tabs_style: {
    "& .MuiTabs-flexContainer": {
      borderBottom: "3px solid #f0f0f0",
    },
    "& .PrivateTabIndicator-colorSecondary-28, .MuiTabs-indicator": {
      backgroundColor: "#209ca3",
      top: "36px",
    },
    "& .MuiTab-wrapper": {
      alignItems: "flex-start",
    },
    "& .MuiTab-textColorInherit.Mui-selected": {
      color: "#209ca3",
    },
    "& .MuiTab-textColorInherit": {
      color: "#cbcccc",
      paddingLeft: "0",
    },
    "& .MuiTab-root": {
      minHeight: "35px",
    },
    "& .tabPanel": {
      padding: "20px 0",
    },
  },

  cards: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "25px",
  },
  cardRounded: {
    width: "400px",
    maxWidth: "100%",
    borderRadius: "20px",
    "& .header": {
      // backgroundColor: "#db5d5d",
      color: "#fff",
      padding: "20px",
      borderRadius: "30px 30px 0 0",
      // backgroundImage: `url(${"static/src/img/main.jpg"})`
    },
    "& .bottom": {
      display: "flex",
      gap: "7px",
      "& h5": {
        marginBottom: 0,
      },
    },
    "& .top": {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "30px",
      "& span": {
        fontSize: "13px",
        fontWeight: "600",
      },
    },
    "& .body": {
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      // alignItems: "center",
      border: "2px solid #80808061",
      borderRadius: "0 0 30px 30px",
      borderTop: "none",
    },
    "& .item": {
      display: "flex",
      gap: "15px",
      alignItems: "center",
      "& h5": {
        marginBottom: "0px",
      },
      marginBottom: "10px",
    },
    "& .right": {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      width: "100px",
    },
    "& .numbers": {
      display: "flex",
      gap: "7px",
      marginTop: "20px",
      "& span": {
        color: "#6cb430",
        backgroundColor: "#e5f5d9",
        width: "23px",
        height: "23px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50px",
      },
    },
  },
  btn_circle: {
    borderRadius: "50px",
    height: "45px",
    width: "45px",
    minWidth: "45px",
    border: "2.5px dashed #1b8186 !important",
    backgroundColor: "#e0eff0",
  },

  // =======================================================
  // ==============================================================

  sport_mans_item: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    borderBottom: "2px solid #eaeaed",
    paddingBottom: "20px",
    "& .right": {
      "& span": {
        fontSize: "13px",
        fontWeight: "500",
        color: "#afb2b4",
      },
    },
    "& .name": {
      marginBottom: "0px",
      fontSize: "17px",
      fontWeight: "600",
      color: "#0a3133",
    },
    "& .images": {
      display: "flex",
      gap: "10px",
      marginTop: "10px",
    },
  },
  sport_mans: {
    display: "grid",
    gridTemplateColumns: "auto auto",
  },

  // See Profile Style Start
  // =============================================================
  // ==============================================================

  menu_right: {
    width: '100%',
    "& .item": {
      gap: "7px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      border: "1px solid #e1e1e7",
      borderRadius: "15px",
      padding: "10px 15px",
      borderLeft: "5px solid #209ca2",
      fontWeight: '600',
      marginBottom: '15px',
    },
    "& .left": {
      display: "flex",
      alignItems: "center",
      gap: "7px",
    },
    "& .right": {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    "& .plusNumber": {
      color: "#6ab928",
      backgroundColor: "#e5f5d9",
      width: "51px",
      height: "35px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50px",
      fontWeight: "600",
      fontSize: "18px",
    },
  },


  // =====================================
  profile_home_items: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gap: '20px',
  },
  profile_home_item: {
    // width: '100%',
    "& .item": {
      gap: "7px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      border: "1px solid #e1e1e7",
      borderRadius: "15px",
      padding: "15px 25px",
      borderLeft: "5px solid #7a41ed",
      fontWeight: '600',
      // marginBottom: '20px',
    },
    "& .left": {
      display: "flex",
      gap: "25px",
    },
    "& .text": {
      "& .title": {
        display: "block",
        marginBottom: '0px',
        fontSize: '19px',
        fontWeight: '600',
      },
      "& span": {
        display: "block",
        color: '#afb2b4',
        fontSize: '17px',
      fontWeight: "500",
      },
    },
    "& .right": {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    "& .plusNumber": {
      color: "#6ab928",
      backgroundColor: "#e5f5d9",
      width: "51px",
      height: "35px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50px",
      fontWeight: "600",
      fontSize: "18px",
    },
  },


  // ---------------------------------end
}));


const Menu = [
  { sport: "Tennis", image: tennis, greenTag: "3,9", tag: "-0,1" },
  { sport: "Golf", image: Golf, greenTag: "5,0", tag: "+0,0" },
  { sport: "Padel", image: Padel, greenTag: "5,0", tag: "+0,0" },
];

const RightSidebar = () => {
  const classes = useStyles();


  return (
    <>
      <Grid item md={4} xs={4} sm={3} style={{paddingTop: '60px'}}>
        <Box className={classes.shadowBox}>
          <h4 className="title">Jakobs nivåer</h4>
          <Box className={classes.menu_right}>
            {Menu.map((data) => (
              <Box className="item">
                <div className="left">
                  <img src={data.image} />
                  <span>{data.sport}</span>
                </div>
                <div className="right">
                  <span className="plusNumber">{data.greenTag}</span>
                  <span className="minusNumber">{data.tag}</span>
                  <img src={info_gray} />
                </div>
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default RightSidebar;
