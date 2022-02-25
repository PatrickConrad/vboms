import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ContextConsumer } from "../../../state/RootContext";
import { setLayout } from "../../../layouts"

function Blog(props) {
  const styles = props.styles.vboms.pages.blog
  const {state, actions} = useContext(ContextConsumer);
  useEffect(()=>{
    actions.test.getApiData();
    actions.vboms.global.setLoading(false);
  }, []);

  const myPosts = useMemo(() => state.test.data, [state.test.data])

    return (
    
        <div className={styles.blogContainer}>
            <h1>My Blog</h1>
        {
            !myPosts || myPosts.length < 1 ? <p>No Posts here</p> : 
                myPosts.map(p=>{
                    return (
                        <div key={p.id}>
                            <h3 >{p.title}</h3>
                            <p>{p.body}</p>
                        </div>
                    )
                })
        }
                                
        </div>
);
}

const metaData = {
    title: "New Blog",
    keyWords: 'blog words here',
    description: 'Blog description'
}

Blog.getLayout = (Blog, data=metaData)=> setLayout({page:Blog, data, appName: "vboms"})

export default Blog;
  

