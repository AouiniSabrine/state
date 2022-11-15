import React from "react";
 export default class Profile extends React.Component {
    constructor(){
        
        super();
        this.state={

            fullName:"Coco Chanel",
            imgSrc:"./Coco.jpg",
            bio: "Coco Chanel, byname of Gabrielle Bonheur Chanel, (born August 19, 1883, Saumur, France died January 10, 1971, Paris), French fashion designer who ruled Parisian haute couture for almost six decades.Her elegantly casual designs inspired women of fashion to abandon the complicated, uncomfortable clothes such as petticoats and corsets that were prevalent in 19th-century dress. Among her now-classic innovations were the Chanel suit, the quilted purse, costume jewelry, and the “little black dress.",
            profession: "Fashion Designer",
            timer: 0
  

        }
};


componentDidMount()
{

    setInterval( ()=>{
        this.setState({
        timer: this.state.timer +1 })},1000 );
    
  };


        render()
        { 
            return (
        
            
            <>
            <h1>{this.state.fullName}</h1>
            <h3>{this.state.bio}</h3>
            <img src={this.state.imgSrc} alt="Coco Chanel"></img>
            <h3>{this.state.profession}</h3>
            <p style={{color: "white"}}>{this.state.timer}</p>
            </>
            
            
            
        )
    };

};

    


  
    

