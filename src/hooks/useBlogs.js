import { useEffect, useState } from 'react';

const useBlogs = () => {
    const [blogList, setBlogList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("blogs.json")
            .then(result => result.json())
            .then(data => { setBlogList(data); setLoading(false) })

    }, []);


    return [blogList, loading];
};

export default useBlogs;