
import { NearBindgen, near, call, view, UnorderedMap, includeBytes, NearPromise, validateAccountId, UnorderedSet, LookupSet, Vector, initialize } from 'near-sdk-js';
import { AccountId } from 'near-sdk-js/lib/types';
import {  transfer } from 'near-workspaces';
const ONE_NEAR = BigInt("1000000000000000000000000");
export class Milestone {
    amount: number;
    description: string;
    date: Date;
    finished: Boolean;
};

export class Project {
    title: string;
    milestones: UnorderedMap<Milestone>;
    freelancer: string;
    client: string;
}
const FIVE_TGAS = BigInt("50000000000000");
const NO_DEPOSIT = BigInt(0);
@NearBindgen({})
export class Subcontract {

    
    freelancer_address: string;
    client_address: string;
    milestones: UnorderedMap<Milestone> = new UnorderedMap<Milestone>("mst-vec");
    freelancer_applications: UnorderedMap<string> = new UnorderedMap<string>("flc");

    constructor() {
        this.freelancer_address="";
        this.client_address="";
        this.milestones;
        this.freelancer_applications;
    }
    @initialize({})
    init({ accountid }: { accountid: String }) {
        this.client_address = near.predecessorAccountId.toString();
    }
    @call({})
    assignFreelancer({ accid }: { accid: string }): NearPromise {
        const user: AccountId = near.currentAccountId();
        let ms: Milestone[] = []
        let keys=this.milestones._keys;
        for(let i=0;i<this.milestones.length;i++){
            ms.push(this.milestones.get(keys.get(i)))
        }
        //if (near.currentAccountId = near.predecessorAccountId) {
            this.freelancer_address = user;
        const promise =NearPromise.new("token1805.testnet")
                .functionCall("assignProject", JSON.stringify({ project:ms}), NO_DEPOSIT, FIVE_TGAS)
        return promise.asReturn();
        
        //}
        //funktioniert  
    }
    @view({})
    assignedFreelancer({}:{}):string{
        return this.freelancer_address.toString();
    }
    @call({})
    freelancerApply({ }: {}): void {

        let freelancer =near.predecessorAccountId();
        let index = this.freelancer_applications._keys.length;
        this.freelancer_applications.set(index.toString(),freelancer);
        //funktioniert  
    }
    @view({})
    viewApplications({  }: { }): string[] {
        let freelancers=[]
        let keys=this.freelancer_applications._keys;
        for(let i=0;i<this.freelancer_applications.length;i++){
            freelancers.push(this.freelancer_applications.get(keys.get(i)))
        }

        return freelancers;

        
    }


    @call({})
    addMilestone({ project_milestone}: { project_milestone: Milestone}): String {
        this.milestones.set(project_milestone.date.toString(), project_milestone);
        return "Added successfully"
        //funktioniert  
    }
    



    @view({})
    viewMilestones({  }: { }): Milestone[] {
        let ms: Milestone[] = []
        let keys=this.milestones._keys;
        for(let i=0;i<this.milestones.length;i++){
            ms.push(this.milestones.get(keys.get(i)))
        }

        return ms;

        
    }

   


    @call({ payableFunction: true })
    acknowledgeMilestone({ title }: { title: string }): String {
        let mst=this.milestones.get(title);
        
        NearPromise.new(this.freelancer_address).transfer(BigInt(mst.amount));
        this.milestones.remove(title);
        
        

        return "Acknowledeged successfully"
        //funktioniert


    }

    @call({})
    finishMilestone({ title }: { title: string }): string {
        let newMs = this.milestones.get(title);
        
        newMs.finished = true;
        this.milestones.remove(title);
        this.milestones.set(title, newMs);
        return "Milestone set for approval"
    }


}