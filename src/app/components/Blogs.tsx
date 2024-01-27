'use client';
import styles from '../styles/blog.module.css';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { useRouter } from 'next/navigation';
import api from '../axiosInterceptor/axiosInterceptor';

interface Blog {
  _id: string;
  title: string;
  description: string;
  image: any;
}

const Blog: React.FC = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchTopBlogs = async () => {
    try {
      const response = await api.get('/blogs/top3');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching top blogs:', error);
    }
  };

  useEffect(() => {
    fetchTopBlogs();
  }, []);

  const handleBlogClick = (_id: string) => {
    console.log(_id);
    router.push(`/blog/${_id}`);
  };

  if (blogs.length === 0) {
    return null; 
  }

  return (
    <div className={styles.blog}>
      <h5 className={styles.blog_heading}>OUR BLOG</h5>
      <h4 className={styles.blog_heading2}>Latest Posts</h4>
      <Row>
        {blogs.map((blog) => (
          <Col key={blog._id} xs={24} sm={24} md={24} lg={8} xl={8}>
            <div className={styles.blog_content} onClick={() => handleBlogClick(blog._id)}>
              <Image
                src={blog.image}
                alt="Blog"
                width={415}
                height={280}
                className={styles.image}
              />
              <h5 className={styles.title}>{blog.title}</h5>
              <p className={styles.desc}>{blog.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Blog;