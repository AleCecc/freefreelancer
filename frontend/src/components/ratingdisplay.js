import React, { useState, useEffect } from 'react';
import styles from './RatingModal.module.css';
import { useStore } from '@/layout';
import { project_contract,token_contract } from '@/components/contract';
import { Rating } from './rating';
const RatingDisplay = ({freelancerName, totalamount}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [freelancer, setFreelancer] = useState('');
  const [rating, setRating] = useState('');
  const [title, setTitle] = useState('');
  const [comments, setComments] = useState('');
  const { signedAccountId, wallet } = useStore();
  const [start, setStart] = useState("");
  const [finish, setFinish] = useState("");
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    if (!wallet) return;
    wallet.viewMethod({ contractId: token_contract, method: 'viewRatings' }).then(
      ratings => setRating(ratings)
    );
  }, [wallet]);

  const renderlist = () => {
    const listItems = [];
    for (let i = 0; i < rating.length; i++) {
      
      listItems.push(
        <div class="card">
      <div class="card-body">
        <h3>{i+1 }. Rating</h3>
      <p>Title: {rating[i].title} </p>
      <p>Amount: {rating[i].amount} </p>
      <p>Start: {rating[i].start} </p>
      <p>Finish: {rating[i].finish} </p>
      <p>Rating: {rating[i].rating} </p>
      <p>Description: {rating[i].description} </p>
      </div>
    </div>
          
        
        
        
        
        
      ) ;
    }
    return listItems;
  };
  
  return (
    <div>
      {renderlist()}
    </div>
  );
};

export default RatingDisplay;
