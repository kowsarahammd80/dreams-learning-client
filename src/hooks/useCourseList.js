import { useEffect, useState } from 'react';

const useCourseList = () => {
    const [courseList, setCourseList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("courseList.json")
            .then(result => result.json())
            .then(data => { setCourseList(data); setLoading(false) })

    }, []);


    return [courseList, loading];
};

export default useCourseList;