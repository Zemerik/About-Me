import React from "react";
import {Cmd, HeroContainer, PreName, PreNameMobile, PreWrapper, Seperator,} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
    return (
        <HeroContainer data-testid="welcome">
            <div className="info-section">
                <PreName>
                    {`
 ******** ******** ****     **** ******** *******   ** **   ** **  ********       ********** ******** *******   ****     **** ** ****     **     **     **      
//////** /**///// /**/**   **/**/**///// /**////** /**/**  ** //* **//////       /////**/// /**///// /**////** /**/**   **/**/**/**/**   /**    ****   /**      
     **  /**      /**//** ** /**/**      /**   /** /**/** **   / /**                 /**    /**      /**   /** /**//** ** /**/**/**//**  /**   **//**  /**      
    **   /******* /** //***  /**/******* /*******  /**/****      /*********          /**    /******* /*******  /** //***  /**/**/** //** /**  **  //** /**      
   **    /**////  /**  //*   /**/**////  /**///**  /**/**/**     ////////**          /**    /**////  /**///**  /**  //*   /**/**/**  //**/** **********/**      
  **     /**      /**   /    /**/**      /**  //** /**/**//**           /**          /**    /**      /**  //** /**   /    /**/**/**   //****/**//////**/**      
 ********/********/**        /**/********/**   //**/**/** //**    ********           /**    /********/**   //**/**        /**/**/**    //***/**     /**/********
//////// //////// //         // //////// //     // // //   //    ////////            //     //////// //     // //         // // //      /// //      // //////// 
`}
                </PreName>

                <PreWrapper>
                    <PreNameMobile>
                        {`
        
 :::===== :::===== :::=======  :::===== :::====  ::: :::  ===  == :::===       :::==== :::===== :::====  :::=======  ::: :::= === :::====  :::     
      === :::      ::: === === :::      :::  === ::: ::: ===  ==  :::          :::==== :::      :::  === ::: === === ::: :::===== :::  === :::     
    ===   ======   === === === ======   =======  === ======        =====         ===   ======   =======  === === === === ======== ======== ===     
  ===     ===      ===     === ===      === ===  === === ===          ===        ===   ===      === ===  ===     === === === ==== ===  === ===     
 ======== ======== ===     === ======== ===  === === ===  ===     ======         ===   ======== ===  === ===     === === ===  === ===  === ========
                                                                                                                                                   
                                          
`}
                    </PreNameMobile>
                </PreWrapper>
                <div>Welcome to Hemang Yadav (Zemerik)'s Terminal</div>
                <Seperator>----</Seperator>
                <div>
                    For a list of available commands, type <Cmd>help</Cmd>.
                </div>
                <br/>
            </div>
        </HeroContainer>
    );
};

export default Welcome;
