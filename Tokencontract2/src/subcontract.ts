import { NearBindgen, near, call, view, UnorderedMap, includeBytes, NearPromise, validateAccountId, UnorderedSet, LookupSet, Vector, initialize } from 'near-sdk-js';
import { AccountId } from 'near-sdk-js/lib/types';
import { transfer } from 'near-workspaces';

export interface Milestone {
  amount: number;
  description: string;
  date: Date;
  finished: Boolean;
};

interface Rating{
title:string;
amount:number;
start:Date;
finish:Date;
rating:number;
comment:string;
}


@NearBindgen({})
export class Contract {
  owner_id: string; 
  ratings: UnorderedMap<Rating> = new UnorderedMap<Rating>("tkns"); 
  appliedProjects: UnorderedMap<Milestone> = new UnorderedMap<Milestone>("apprjct");
  assignedProjects: UnorderedMap<Milestone> = new UnorderedMap<Milestone>("asprjct"); 
  active:boolean;

  constructor() {
    this.owner_id;
    this.ratings;
    this.active=false;
    this.appliedProjects;
    
}

  @initialize({})
  init({ }: { }) {
    this.owner_id = near.predecessorAccountId();
  }

  @call({})
    mintToken({today}:{today:string}):boolean{
      this.active=true;
      return this.active;
    }

  @call({})
  addRating({rating}: {rating:Rating}){
    
  this.ratings.set(rating.title,rating);
  }
  @call({})
  assignProject({project}: {project:Milestone[]}):string{
  for(let i=0;i<project.length;i++){
  this.assignedProjects.set(this.assignedProjects.length.toString(),project[i])
  }
  return "Assigned successfully"
  }
  
  @call({})
  applyforProject({project,title }: {project:Milestone,title:string }){
    
  this.appliedProjects.set(title,project)
  }

  @view({})
  viewProject({ }: {}): Milestone[]{
    let ms: Milestone[] = [];
    let keys=this.assignedProjects._keys;
    for(let i=0;i<this.assignedProjects.length;i++){
        ms.push(this.assignedProjects.get(keys.get(i)))
    }

    return ms;
  
  }

  @view({})
  viewActivestdate({}:{}):boolean{
    return this.active;
    
  }
  
  @view({})
  viewRatings({}:{}):any[]{
    let revs: Rating[] = []
        let keys=this.ratings._keys;
        for(let i=0;i<this.ratings.length;i++){
            revs.push(this.ratings.get(keys.get(i)))
        }

        return revs;
  }


}