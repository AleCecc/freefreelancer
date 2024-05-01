import dynamic from 'next/dynamic';
import project1 from "/public/project1.jpg";
import project2 from "/public/project2.jpg";
import project3 from "/public/project3.jpeg";
import { project_contract,token_contract } from '@/components/contract';
import styles from '@/styles/app.module.css';
import { BecomeClient, DocsCard, HelloNearCard } from '@/components/cards';
import Image from 'next/image';
import client from '../client';
import { useStore } from '@/layout';
import { useState, useEffect } from 'react';
import { Milestone } from '@/components/milestone';
import { NutFill } from 'react-bootstrap-icons';
const Component = dynamic(() => import('@/components/vm-component'), {
  ssr: false,
  loading: () => <p>Loading Component...</p>,
});

export default function freelancer() {
  const { signedAccountId, wallet } = useStore();
  const [loggedIn, setLoggedIn] = useState(false);
  const [assignedProjects, viewProjects] = useState(false);
  const [milestones, setMilestones] = useState(null);
  const [appliedProjects, setappliedProjects] = useState(null);
  const [showSpinner, setShowSpinner] = useState(null);
  const [hasToken, sethasToken] = useState(null);
  
  useEffect(() => {
    if (!wallet) return;
    setLoggedIn(!!signedAccountId);
  }, [signedAccountId]);

  useEffect(() => {
    if (!wallet) return;

    wallet.viewMethod({ contractId: project_contract, method: 'viewMilestones' })
      .then(milestonesData => {
        setMilestones(milestonesData); // Store result in state
      })
      .catch(error => {
        // Handle any errors here
        console.error('Error fetching milestones:', error);
      });

  }, [wallet]);

  useEffect(() => {
    if (!wallet) return;

    wallet.viewMethod({ contractId: token_contract, method: 'viewappliedProjects' })
      .then(projectsData => {
        setappliedProjects(projectsData); // Store result in state
      })
      .catch(error => {
        // Handle any errors here
        console.error('Error fetching project:', error);
      });

  }, [wallet]);

  
  const mintToken = async () => {
    
    setShowSpinner(true);
    await wallet.callMethod({ contractId: token_contract, method: 'mintToken', args: { today:Date()} });
    setShowSpinner(false);
  };

  
  useEffect(() => {
    if (!wallet) return;

    wallet.viewMethod({ contractId: token_contract, method: 'viewStartdate' })
      .then(stdate => {
        sethasToken(stdate); // Store result in state
      })
      .catch(error => {
        // Handle any errors here
        console.error('Error fetching project:', error);
      });

  }, [wallet]);

  const freelancerPropose = async () => {
    
    setShowSpinner(true);
    if (!wallet) return;
    await wallet.callMethod({ contractId: project_contract, method: 'freelancerPropose', args: { today:Date()} });
    await wallet.callMethod({ contractId: token_contract, method: 'applyforProject', args: { } });
    setShowSpinner(false);
  };


  return (
    
      <main className={styles.main}>
        <div className={styles.description}>
        <p>{hasToken}</p>
          
        </div>
    
      
    
        <div hidden={hasToken}>
            <button hidden={hasToken} className="btn btn-secondary" onClick={mintToken}>
              <span hidden={showSpinner}> Add </span>
              <i
                className="spinner-border spinner-border-sm"
                hidden={!showSpinner}
              ></i>
            </button>
          </div>
        <div class="card-group">
        
  <div class="card">
  <center><Image
          className={styles.logo}
          src={project1}
          alt="P1"
          width={129}
          height={120}
          priority
        /></center>
    <div class="card-body">
      <h5 class="card-title">Website Development for E-commerce Startup"</h5>
      <p class="card-text">A startup company in the fashion industry needs a freelance web developer to create an e-commerce website from scratch. The website should include user-friendly navigation, product listing pages, shopping cart functionality, secure payment gateways, and responsive design. The freelancer will work closely with the client to understand branding requirements and ensure seamless integration of features. Experience with platforms like Shopify, WooCommerce, or custom PHP development is preferred.</p>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 days ago</small></p>
    </div>
    
    <button id="greenbutton">Apply</button>
    
  </div>
  <div class="card">
  <center><Image
          className={styles.logo}
          src={project2}
          alt="NP2"
          width={129}
          height={120}
          priority
        />
        </center>
    <div class="card-body">
      <h5 class="card-title">Mobile App Development for Health & Fitness Tracker</h5>
      <p class="card-text">A health and wellness startup is seeking a freelance mobile app developer to build a fitness tracking app for iOS and Android platforms. The app should allow users to log workouts, track progress, set fitness goals, and receive personalized recommendations. Integration with wearable devices (like Fitbit or Apple Watch) for real-time data syncing is essential. The freelancer will collaborate with the client's team to design a user-friendly interface and implement robust data security measures.
Skills Required: Mobile app development (iOS/Android), UI/UX design, integration with wearable devices, API integration, data security.</p>
      <p class="card-text"><small class="text-body-secondary">Last updated 2 months ago</small></p>
    </div>
    <button onClick={""}>Apply</button>
  </div>
  
  <div class="card">
  <center><Image
          className={styles.logo}
          src={project3}
          alt="P3"
          width={129}
          height={120}
          priority
        /></center>
    <div class="card-body">
      <h5 class="card-title">Content Creation for Digital Marketing Campaign</h5>
      <p class="card-text">A digital marketing agency is looking for a freelance content creator to develop engaging content for a client's upcoming marketing campaign. The project involves crafting blog articles, social media posts, email newsletters, and website copy aligned with the client's brand voice and campaign objectives. The freelancer will collaborate with the agency's team to brainstorm ideas, conduct keyword research, and deliver high-quality content optimized for SEO.</p>
      <p class="card-text"><small class="text-body-secondary">Last updated 10 mins ago</small></p>
    </div>
    <button onClick={""}>Apply</button>
  </div>
</div>
        <hr />

        <div className={styles.grid}>
          <BecomeClient></BecomeClient>
        </div>
      </main>
    
  );
}

