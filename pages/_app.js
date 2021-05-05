import {useRouter,withRouter} from 'next/router';
import { ThemeProvider, ThemeContext, withTheme } from "styled-components";

const CustomApp = ({ Component, pageProps ,theme}) => {
   
    let {
      query: { clientId },
    } = useRouter();
   
  
        return(
            <>
            
            <ThemeContext.Provider value={theme}>
             <nav><h1>Main Nav:{clientId} </h1></nav>  
             <Component {...pageProps  } />
             </ThemeContext.Provider>
             
             </>
        )
    
  
    
  };

  CustomApp.getInitialProps = async function(context) {
    
    let clientId = context.ctx.query.clientId;
    clientId = clientId ? clientId :'currencies-direct';
    const theme = (clientId == 'TorFX'
      ? await import("../styles/TorFX.scss")
      : clientId == 'currencies-direct' ? await import("../styles/currencies-direct.scss") :
      await import("../styles/Ramsdens.scss")
    ).default;
    // console.log(".........."+theme);
    // console.log("cid....."+clientId);
    return { theme };
    
  };

setInterval(() => {
  }, 10)
 

export default CustomApp;