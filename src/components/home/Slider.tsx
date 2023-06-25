import { useState, useEffect } from 'react';
import Services from '../../Services';

export default function Slider(){
    const [slideIndex, setSlideIndex] = useState(0);
    const [sliderImages, setSliderImages] = useState([]);

    useEffect(() => {
        fetchAllBill();

        setTimeout(() => {
            plusSlides(1);
        }, 8000)
    }, []);

    function fetchAllBill(){
        Services.slideshow().then(({data}: any)=>{
            setSliderImages(data);
        })
        .catch(({response}: any)=>{
            console.log(response);
        })
    }

    function plusSlides(n: number) {
        showSlidesManual(slideIndex + n);
    }
    
    function showSlidesManual(n: number) {
        if (n > (sliderImages.length - 1)){
            setSlideIndex(0);
        } else if (n < 0) {
            setSlideIndex(sliderImages.length - 1);
        } else {
            setSlideIndex(n);
        }
    }
    
    function showSlideRepeat() {
        if(slideIndex === undefined){
            setSlideIndex(0);
        }
    
        let n: number = slideIndex + 1;
        let arrLength: number = sliderImages.length;
    
        setSlideIndex(slideIndex +1);
    
        if (n > (arrLength - 1)){
            setSlideIndex(0);
        }
    
        if (n < 0) {
            setSlideIndex(arrLength - 1);
        }
    }

    return(
        <>
            <div className="h-100">
                <div className="carousel-indicators" >
                    {
                        sliderImages.map((x: string, index: number) => 
                            <button type="button" data-bs-target="#carouselExampleDark" key={index} onClick={() => { setSlideIndex(index)}} className={index===slideIndex ? 'active' : ''}></button>
                        )
                    } 
                </div>
                <div className="">
                    {
                        sliderImages.map((x: string, index: number) => 
                            <div className={(index === slideIndex) ? 'active': ''} key={index}>
                                <img src={x} className="imgContainer"  style={{'display': index === slideIndex ? 'block' : 'none'}}></img>
                            </div>
                        )
                    }
                </div>
                <button className="carousel-control-prev" type="button" onClick={() => plusSlides(-1)} data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" onClick={() => plusSlides(1)} data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                
                {/* <img src={require('../../assets/images/slider/1.jpg')} /> */}
            </div>
        </>
    );
}