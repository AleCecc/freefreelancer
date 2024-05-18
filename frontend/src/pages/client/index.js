import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { Milestone } from '@/components/milestone';
import { useStore } from '@/layout';
import styles from '@/styles/app.module.css';
import { Project } from '@/components/project';
import {  StartFreelancing } from '@/components/cards';
import FreelancerComponents from '../freelancer';
import { project_contract,token_contract } from '@/components/contract';
import RatingDisplay from '@/components/ratingdisplay';
import Popuprating from '@/components/popup-rating';
// Contract that the app will interact with
const Component = dynamic(() => import('@/components/vm-component'), {
  ssr: false,
  loading: () => <p>Loading Component...</p>,
});

export default function client() {
  const { signedAccountId, wallet } = useStore();
  const [mst2, viewMilestones] = useState('loading...');
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [finish, setFinish] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [projectamount, setProjectamount] = useState("");
  const [projecttitle, setProjecttitle] = useState("");
  const [milestones, setMilestones] = useState("");
  const [applications, viewApplications] = useState('loading...');
  const [freelancer, setFreelancer] = useState("");
  const [assigned, setAssigned] = useState(false);
  const [totalamount, setTotal]= useState(0);
  
  

  let showassigned =false;
  let newproject= new Project;
  newproject.amount=projectamount;
  newproject.title=projecttitle;
  newproject.comment=comment;
  newproject.finish=finish;
  newproject.start=start;
  newproject.rating=rating;
  const renderlist_applications = () => {
    const listItems = [];
    for (let i = 0; i < applications.length; i++) {
      
      listItems.push(
        <div class="col-sm"   >
          <div class="card">
      <div class="cardbody">
      <h5 class="card-title">Application {i}</h5>
      
        <p  key={"freelancer"+i}>
        Freelancer: {applications[i]}
        </p>
        <div >
          <button onClick={ () =>assignFreelancer(applications[i])}>Assign this Freelancer</button>
        </div>
        </div>
        </div>
        </div>
        
        
        
      ) ;
    }
    return listItems;
  };
  useEffect(() => {
    let tot=0;
    for(let i =0; i< mst2.length;i++){
      tot+=Number(mst2[i].amount);
    }
    setTotal(tot);
  });
  
  useEffect(() => {
    if (!wallet) return;
    wallet.viewMethod({ contractId: project_contract, method: 'viewMilestones' }).then(
      milestones => viewMilestones(milestones)
    );
  }, [wallet]);

  useEffect(() => {
    setLoggedIn(!!signedAccountId);
  }, [signedAccountId]);
  useEffect(() => {
    if (!wallet) return;


    wallet.viewMethod({ contractId: project_contract, method: 'viewApplications' }).then(
      aps => viewApplications(aps)
    );
  }, [wallet]);

  useEffect(() => {
    if (!wallet) return;
    wallet.viewMethod({ contractId: project_contract, method: 'assignedFreelancer' }).then(
      fl => setFreelancer(fl)).then(fl=>setAssigned(true));
  }, [wallet]);
  
  let otherMilestone = new Milestone;
  otherMilestone.amount = amount;
  otherMilestone.date = date;
  otherMilestone.description = description;
  otherMilestone.finished = false;

  let milestonestoadd=otherMilestone;
  const addMilestone = async () => {
    setShowSpinner(true);
    await wallet.callMethod({ contractId: project_contract, method: 'addMilestone', args: {project_milestone:milestonestoadd}});
    setShowSpinner(false);
    
  };
  const acknowledgeMilestone = async (date) => {
    setShowSpinner(true);
    await wallet.callMethod({ contractId: project_contract, method: 'acknowledgeMilestone', args: {title:date}});
    setShowSpinner(false);
  };

  const assignFreelancer = async (acc) => {
    setShowSpinner(true);
    
    await wallet.callMethod({ contractId: project_contract, method: 'assignFreelancer', args: {accid:acc},gas: '100000000000000'});
    setShowSpinner(false);
    
  };
 
  
    const renderlist = () => {
    const listItems = [];
    for (let i = 0; i < mst2.length; i++) {
      
      listItems.push(
        <div class="col-sm">
          <div class="card">
      <div class="cardbody">
      <h5 class="card-title">Milestone {i}</h5>
      <p key={"amount"+i}>
        Amount: {mst2[i].amount}
        </p>
        <p  key={"date"+i}>
        Date: {mst2[i].date}
        </p>
        <p  key={"description"+i}>
        Description: {mst2[i].description}
        </p>
        <div hidden={!mst2[i].finished}>
          <button onClick={ () =>acknowledgeMilestone(mst2[i].date)}>Acknowledge</button>
        </div>
        </div>
        </div>
        </div>
        
        
        
      ) ;
    }
    return listItems;
  };
  
  const deploy=async () => {
    setShowSpinner(true);
    await wallet.callMethod({ contractId: "contractfactory.testnet", method: 'deployContract', args: { } });

    //setGreeting(greeting);
    setShowSpinner(false);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Interacting with the contract: &nbsp;
          <code className={styles.code}>{project_contract}</code>
        </p>
        
      </div>
      <input
        type="string"
        className="form-control w-20"
        placeholder="Description"
        value={otherMilestone.description}
        onChange={t => setDescription(t.target.value)}
      />
      <input
        type="number"
        className="form-control w-20"
        placeholder="Amount in USD"
        value={otherMilestone.amount}
        onChange={t => setAmount(t.target.value)}
      />
      <input
        type="date"
        className="form-control w-20"
        placeholder="Deadline"
        value={otherMilestone.date}
        onChange={t => setDate(t.target.value)}
      />

      

        
          

          

          <div>
            <button className="btn btn-secondary" onClick={addMilestone}>
              <span hidden={showSpinner}> Add a Milestone to the Project </span>
              <i
                className="spinner-border spinner-border-sm"
                hidden={!showSpinner}
              ></i>
            </button>

          </div>
        <br></br>
        
      
        <div className="w-100 text-end align-text-center" hidden={loggedIn}>
          <p className="m-0"> Please login to add milestones </p>
        </div>
       <div class="row">
          {renderlist()}
       </div>
       <div class="row" hidden={!assigned}>
          {renderlist_applications()}
         <center><RatingDisplay> </RatingDisplay></center> 
       </div>
       <Popuprating freelancerName={freelancer} totalamount={totalamount}></Popuprating>
        
      <div className={styles.grid}>
        <StartFreelancing></StartFreelancing>
      </div>
    </main>
  );
}
