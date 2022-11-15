import { useEffect, useState } from 'react';

const useDisplayActivities = () => {
    const [activities, setActivities] = useState([]);

    useEffect( () => {
        const url = `http://localhost:5000/activity`;
        fetch(url)
        .then(res => res.json())
        .then(data => setActivities(data));
    }, [activities]);

    return [activities, setActivities];
}

export default useDisplayActivities;