export const getTax=(price)=>{
    if(price>1000 && price<2500)
    return Math.floor(price*(12/100))
    else if(price>=2500 && price<7500)
    return Math.floor(price*(18/100));
    else if(price>=7500)
    return Math.floor(price*(28/100))
    else
    return 0
    
  }