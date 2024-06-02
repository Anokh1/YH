import React, { useState } from 'react';
import '../css/Home.css'; // Import custom CSS file for homepage styling
import HeartAnimation from './Home/HeartAnimation';
import HomeForm from './Home/HomeForm';
import FormTable from './Home/FormTable';
import { Calendar } from 'primereact/calendar';
import HomeCalendar from './Home/HomeCalendar';

const Home: React.FC = () => {
    const [formData, setFormData] = useState<{ name: string; password: string }[]>([]);

    const handleSubmit = (formDataItem: { name: string; password: string }) => {
        // Handle form submission here
        setFormData(prevData => [...prevData, formDataItem]);
        console.log('Form submitted with data:', formData);
    };

    return (
        <div className="home-container"> {/* Apply custom class */}
            <div>
                {/* <HeartAnimation /> */}
            </div>
            <div className="form-calendar-container">
                <div>
                    <HomeForm onSubmit={handleSubmit} />
                </div>
                <br></br>
                <div>
                    // TODO implement calendar
                    {/* <HomeCalendar /> */}
                </div>
            </div>
            <div>
                <FormTable data={formData} />
            </div>
        </div>
    );
};


export default Home;
