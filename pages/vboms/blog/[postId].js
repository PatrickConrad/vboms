import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ContextConsumer } from "../../../state/RootContext";
import styles from 'styles/Blog.module.scss';
import { useRouter } from 'next/router';
// import getStyle from './styleIndex';



function PostId() {
  
  const {state, actions} = useContext(ContextConsumer);

  const router = useRouter();

  useEffect(()=>{
      if(!router.isReady) return;
      actions.test2.getApiData(router.query.postId);
  }, [router.isReady]);

  const myPost = useMemo(() => state.test2.data, [state.test2.data])

    return (
        <div>
        {
            !myPost ? <p>No Posts here</p> : (
                <div>
                    <h3 className={styles.highlightscss}>{myPost.title}</h3>
                    <p>{myPost.body}</p>
                </div>
            )
        }
        </div>
    );
}

export default PostId;
  

