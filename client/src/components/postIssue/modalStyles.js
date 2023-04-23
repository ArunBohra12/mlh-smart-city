import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  postBtn: {
    "& button": {
      color: "#fff",
      backgroundColor: "#5235A6",
    },
  },
  modal: {
    borderRadius: "25px",
    height: "95vh",
    // maxHeight: '70vh',
    overflow: "auto",

    "& h1": {
      margin: "0 auto",
      textAlign: "center",
      color: "#2B2A35",
      marginBottom: "1rem",
      fontSize: "1.2rem",
      fontWeight: "600",
    },

    "& p": {
      margin: "0",
      fontSize: "1rem",
      color: "#656565",
      marginBottom: "0.7rem",
    },

    "& form": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },

    "& h3": {
      margin: "0",
      color: "#2B2A35",
      fontSize: "1rem",
      marginBottom: "0.5rem",
      fontWeight: "500",
    },

    "& input": {
      width: "80%",
      border: "1px solid #230C53",
      borderRadius: "3px",
      marginBottom: "1.2rem",
      padding: "0.5rem 0.5rem",
      fontSize: "1rem",

      "&:focus": {
        outline: "none",
      },
    },

    "& div": {
      width: "80%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },

    "& textarea": {
      width: "80%",
      height: "5rem",
      resize: "none",
      borderRadius: "3px",
      marginBottom: "1rem",
      border: "1px solid #230C53",
      fontWeight: "400",
      fontSize: "16px",
      color: "#2B2A35",
      padding: "0.4rem 0.8rem 0 0.8rem",

      "&:focus": {
        outline: "none",
        border: "2px solid #230C53",
      },
    },

    "& option": {
      outline: "none",
    },

    "& select": {
      width: "100%",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "19px",

      border: "1px solid #230C53",
      borderRadius: "3px",
      padding: "0.4rem 0 0.4rem 0.4rem",
      marginBottom: "0.8rem",

      "&:focus": {
        outline: "none",
      },
    },
  },
}));
