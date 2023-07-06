import React from 'react';
import { ImSpinner6 } from "react-icons/im";

function Loading(){
  return(
    <div className="flex h-full items-center justify-center">
   <ImSpinner6 className="animate-spin text-5xl"/>
    </div>
  );
}

export default Loading;