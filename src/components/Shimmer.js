import React from "react";
const Shimmer = () => {
    return (
            <div className="shimmerRestaCard">
            {Array(30)
            .fill("")
            .map((e,index)=>(
            <div key={index} className="shimmer-card"></div>
            )
            )}
            </div>
    
    )
}

export default Shimmer;