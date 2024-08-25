import React, { useState } from 'react';
import '../css/Home.css'; // Import custom CSS file for homepage styling
import FormTable from './Home/FormTable';
import HomeCalendar from './Home/HomeCalendar';
import HomeForm from './Home/HomeForm';
import HomeCarousel from './Home/HomeCarousel';

const Home: React.FC = () => {
    const [formData, setFormData] = useState<{ name: string; password: string }[]>([]);

    const handleSubmit = (formDataItem: { name: string; password: string }) => {
        // Handle form submission here
        setFormData(prevData => [...prevData, formDataItem]);
        console.log('Form submitted with data:', formData);
    };

    return (
        <div className="home-container">
            {/* <div className="section-spacing">
                <HeartAnimation />
            </div> */}
            <div className="form-calendar-container section-spacing">
                <div>
                    <HomeForm onSubmit={handleSubmit} />
                </div>
                <br></br>
                <div>
                    <HomeCalendar />
                </div>
                <div>
                    <HomeCarousel />
                </div>
            </div>
            <div className="section-spacing">
                <FormTable data={formData} />
            </div>
        </div>
    );
};

export default Home;
