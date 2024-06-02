// HomeCalendar.tsx
import React from 'react';
import { Calendar } from 'primereact/calendar';
import '../../css/HomeCalendar.css';

const HomeCalendar: React.FC = () => {
    return (
        <div className="calendar-container">
            <Calendar />
        </div>
    );
};

export default HomeCalendar;
