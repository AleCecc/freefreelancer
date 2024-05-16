
import { NearBindgen, near, call, view, UnorderedMap, includeBytes, NearPromise, validateAccountId, UnorderedSet, LookupSet, Vector, initialize } from 'near-sdk-js';
import { AccountId } from 'near-sdk-js/lib/types';
import { transfer } from 'near-workspaces';
const ONE_NEAR = BigInt("1000000000000000000000000");
export interface Milestone {
    amount: number;
    description: string;
    date: Date;
    finished: Boolean;
};

@NearBindgen({})
export class Subcontract {



    freelancer_address: String;
    client_address: String;
    milestones: UnorderedMap<Milestone> = new UnorderedMap<Milestone>("mst-vec");
    freelancers:UnorderedMap<number>=new UnorderedMap<number>("flc");

    constructor() {
        this.freelancer_address;
        this.client_address;
        this.milestones;
        this.freelancers;
    }
    @initialize({})
    init({ accountid }: { accountid: String }) {
        this.client_address = near.predecessorAccountId.toString();
    }
    @call({})
    assignFreelancer({ accid }: { accid: String }): void {
        const user: AccountId = near.currentAccountId();
        if(near.currentAccountId=near.predecessorAccountId){
        this.freelancer_address = accid;
        
    }
        //funktioniert  
    }

    @call({})
    freelancerPropose({  }: { }): void {
        
        let keys = this.freelancers._keys.toArray();
        let index=keys.length;
        this.freelancers.set(near.predecessorAccountId.toString(),index);
        

    
        //funktioniert  
    }
    


    @call({})
    addMilestone({ project_milestone, title }: { project_milestone: Milestone, title:string}): String {

        this.milestones.set(title, project_milestone);
        return "Added successfully"
        //funktioniert  
    }

    @view({})
    viewMilestones({ }: {}): any[]{
        
        let ms = [];
        let keys = this.milestones._keys.toArray();
        //funktioniert
        //let val =  this.milestones.get("title" as string) as Milestone;
        
        return keys;
        for (let i = 0; i < keys.length; i++) {
            let token = this.milestones.get(keys[i][1]);
            ms.push(token);
        } //return ms;
    }



    @call({ payableFunction: true })
    acknowledgeMilestone({ index}: {index:string}): String {


        this.milestones.remove(index);
        let mst= this.milestones.get(index);
        let amt = mst.amount
        NearPromise.new(this.freelancer_address.toString()).transfer(BigInt(amt));
    
        return "Acknowledeged successfully"
        //funktioniert


    }

    @call({})
    finishMilestone({ index }: { index: string }): void {
        let newMs=this.milestones.get(index);
        newMs.finished=true;
        this.milestones.set(index, newMs);

    }


}