import GeneralNavBar from "../navbar/generalNavBar/GeneralNavBar";
import Slider from "./Slider";
import HomeBody from "./HomeBody";

export default function Home(){
  
  return( 
    <>
      <div style={{'minHeight':'100vh'}}>
        <div>
          <GeneralNavBar></GeneralNavBar>
        </div>
        <div>
          <Slider></Slider>
        </div>
      </div>

      <div className="px-5">
        <HomeBody/>
      </div>
    </>
  );
}