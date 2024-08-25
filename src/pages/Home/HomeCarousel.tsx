import React from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Import theme
import 'primereact/resources/primereact.min.css';                  // Import CSS
import 'primeicons/primeicons.css';
import '../../css/HomeCarousel.css';                            // Import icons

interface CarouselItem {
    title: string;
    description: string;
    imageUrl: string;
}

const HomeCarousel: React.FC = () => {
    const items: CarouselItem[] = [
        {
            title: 'Slide 1',
            description: 'This is the first slide.',
            imageUrl: 'https://images.pexels.com/photos/1024975/pexels-photo-1024975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            title: 'Slide 2',
            description: 'This is the second slide.',
            imageUrl: 'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            title: 'Roses',
            description: 'The flower I should get.',
            imageUrl: 'https://images.pexels.com/photos/196664/pexels-photo-196664.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            title: 'Slide 4',
            description: 'This is the fourth slide.',
            imageUrl: 'https://images.pexels.com/photos/1021145/pexels-photo-1021145.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
    ];

    const itemTemplate = (item: CarouselItem) => {
        return (
            <div className="carousel-item">
                <img src={item.imageUrl} alt={item.title} className="carousel-image" />
                <div className="carousel-caption">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <Button label="Learn More" className="p-button-outlined" />
                </div>
            </div>
        );
    };

    return (
        <div className="home-carousel">
            <Carousel
                value={items}
                numVisible={1}
                numScroll={1}
                itemTemplate={itemTemplate}
                autoplayInterval={3000}
                circular
            />
        </div>
    );
};

export default HomeCarousel;
