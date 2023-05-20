import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../../components/Profile";

const Topbar = () => {
  const {user} = useAuth0();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <div style={{ display:"flex", backgroundColor:"#00804e", justifyContent:"space-between",   }}>
    
      {/* SEARCH BAR */}
      <div classname="barra" style={{display:"flex",backgroundColor:colors.primary[400], borderRadius:"3px", height:"30px", alignItems:"center", marginLeft:"10px", marginTop:"8px"}}
        
      >
        <InputBase sx={{ ml: 2, flex: 2, }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1}}>
          <SearchIcon />
        </IconButton>
      </div>

      <div>
      <Profile/>
      </div>

      {/* <div style={{display:"flex", alignItems:"center", marginLeft:"auto"}}>
        <p className="name"style={{color:"white", paddingRight:"20px"}}>{user.name}</p>
            
      <img  style={{width: '30px', height: '30px',borderRadius: '50%' }} src={user.picture} alt="" />
      
      </div>  */}


      {/* ICONS */}
      <div style= {{display:"flex"}}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon />          
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>

        
        {/* <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton> */}
      </div>
    
    </div>
  );
};

export default Topbar;