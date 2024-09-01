import React from 'react';
import '../../css/Home.css';
import HomeHeader from './HomeHeader';

const Home: React.FC = () => {
    // const [formData, setFormData] = useState<{ name: string; password: string }[]>([]);

    // const handleSubmit = (formDataItem: { name: string; password: string }) => {
    //     // Handle form submission here
    //     setFormData(prevData => [...prevData, formDataItem]);
    //     console.log('Form submitted with data:', formData);
    // };

    return (
        <div className="home-container">
            {/* Header Section */}
            <HomeHeader />

            {/* Main Content */}
            <div className="main-content">
                <div className="form-calendar-container section-spacing">
                    {/* Carousel Section */}
                    {/* <HomeCarousel /> */}

                    {/* Feature Section */}
                    {/* <HomeFeature /> */}

                    {/* Form and Calendar Section */}
                    {/* <div className="form-calendar">
                        <HomeForm onSubmit={handleSubmit} />
                        <HomeCalendar />
                    </div> */}

                    {/* Data Table Section */}
                    {/* <FormTable data={formData} /> */}
                </div>
            </div>
        </div>
    );
};

export default Home;
