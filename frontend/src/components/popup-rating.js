import React, { useState, useEffect } from 'react';
import styles from './RatingModal.module.css';
import { useStore } from '@/layout';
import { project_contract,token_contract } from '@/components/contract';
import { Rating } from './rating';
const RatingModal = ({freelancerName, totalamount}) => {
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
  const addRating = async (r) => {
    
    await wallet.callMethod({ contractId: token_contract, method: 'addRating', args: {rating:r}});
    
  };

  const handleSubmit = () => {
    event.preventDefault();
    alert('Rating submitted successfully!');
    let r =new Rating;
    r.title=title;
    r.rating=rating;
    r.amount=totalamount;
    r.start=start;
    r.finish=finish;
    r.description=comments;
    setIsOpen(false);
    addRating(r);
  };
  
  return (
    <div>
      <button className={styles.rateBtn} onClick={openModal}>Please rate {freelancerName}</button>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>&times;</span>
            <h2>Rate {freelancerName}</h2>
            <form onSubmit={handleSubmit} class="12">
            <label htmlFor="title">Project title:</label>
              <input
                type="text"
                id="rating"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                
                required
              />
              <br></br>
              <label htmlFor="title">Start:</label>
              <input
                type="date"
                id="start"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                
                required
              />
              <br></br>
              <label htmlFor="title">Finish:</label>
              <input
                type="date"
                id="finish"
                value={finish}
                onChange={(e) => setFinish(e.target.value)}
                
                required
              />
              <br></br>
              <label htmlFor="rating">Rating (1-5):</label>
              <input
                type="number"
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                
                required
              /><br /><br />
              <label htmlFor="Total amount">Total amount:{totalamount}</label>
              <br></br>
              <label htmlFor="comments">Comments:</label><br />
              <textarea
                id="comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                cols="40"
                rows="3"
                
                required
              ></textarea><br /><br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RatingModal;
