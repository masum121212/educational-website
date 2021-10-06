import { useEffect, useState } from 'react';

const DataLoad = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('./tools.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return [services];
};

export default DataLoad;