import React, { useEffect, useContext, useState } from 'react';

import './View.css';
import { FirebaseContext } from '../../store/Context';
import { postContext } from '../../store/PostContext';
function View() {
  const { postDetails } = useContext(postContext)
  const { firebase } = useContext(FirebaseContext)
  const [userDetails, setUserdetails] = useState()

  useEffect(()=>{
    const { userId } = postDetails
    firebase.firestore().collection('users').where('id','==',userId).get()
      .then((res)=>{
        res.forEach((doc)=>{
          setUserdetails(doc.data())
        })
      })
  },[])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt="post image"
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phonenumber}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
