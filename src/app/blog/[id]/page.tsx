'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'
import api from '@/app/axiosInterceptor/axiosInterceptor';
import { Skeleton } from 'antd';

interface Blog {
    id: string;
    title: string;
    content: string;
}

const IndividualBlog: React.FC = () => {
    const params = useParams();    
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const id  = params.id;
        const fetchBlog = async () => {
            try {
                if (id && typeof id === 'string') {
                    const response = await api.get(`/blogs/${id}`);
                    setBlog(response.data);
                } else {
                    console.error('Invalid blog ID');
                }
            } catch (error) {
                console.error('Error fetching individual blog:', error);
            } finally {
                setLoading(false);
            }
        };
        if (id) {
            fetchBlog();
        }
    }, []); 

    if (loading) {
        return <div>
            <Skeleton avatar paragraph={{ rows: 10 }} />
        </div>
    }

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div>
        <div style={{marginLeft:'0', marginTop:'10%',fontFamily:'poppins'}}>
            <h1 style={{marginBottom:'2%',textAlign:'center',fontSize:'40px'}}>{blog.title}</h1>
            <div style={{textAlign:'center'}} className='blog-page' dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
        </div>
    );
};

export default IndividualBlog;
