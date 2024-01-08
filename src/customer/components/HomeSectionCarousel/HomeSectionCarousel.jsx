import React, { useState, useRef } from 'react';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';


const HomeSectionCarousel = ({ data, sectionName }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const slidePrev = () => {
        if (carouselRef.current) {
            const newIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : 0;
            setActiveIndex(newIndex);
            carouselRef.current.slideTo(newIndex);
        }
    };

    const slideNext = () => {
        console.log(carouselRef);
        if (carouselRef.current) {
            const newIndex = activeIndex + 1 < items.length ? activeIndex + 1 : items.length - 1;
            setActiveIndex(newIndex);
            carouselRef.current.slideTo(newIndex);
            console.log(activeIndex)
        }
    };

    // const handleSlideChanged = ({ item }) => {
    //     setActiveIndex(item);
    // };

    const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} key={item.id} />);

    return (
        


            <div className='border'>
            <h2  className='text-2xl font-extrabold text-gray-800 py-5 text-left'>{sectionName}</h2>

                <div className='relative p-5'>
                    <AliceCarousel
                        items={items}
                        responsive={responsive}
                        disableButtonsControls
                        disableDotsControls
                        // onSlideChanged={handleSlideChanged}
                        stagePadding={{ paddingLeft: 20, paddingRight: 20 }}
                        ref={carouselRef}
                    />
                    {activeIndex !== items.length - 5 && (
                        <Button
                            className='z-50 bg-white'
                            variant='contained'
                            onClick={slideNext}
                            sx={{
                                position: 'absolute',
                                top: '8rem',
                                right: '0rem',
                                transform: 'translateX(50%) rotate(90deg)',
                                bgcolor: 'white',
                            }}
                            aria-label='next'
                        >
                            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                        </Button>
                    )}
                    {activeIndex !== 0 && (
                        <Button
                            className='z-50 bg-white'
                            variant='contained'
                            onClick={slidePrev}
                            sx={{
                                position: 'absolute',
                                top: '8rem',
                                left: '0rem',
                                transform: 'translateX(-50%) rotate(-90deg)',
                                bgcolor: 'white',
                            }}
                            aria-label='previous'
                        >
                            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                        </Button>
                    )}
                </div>
            </div>
        
            );
};

export default HomeSectionCarousel;
