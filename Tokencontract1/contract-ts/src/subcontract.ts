import { NearBindgen, near, call, view, UnorderedMap, includeBytes, NearPromise, validateAccountId, UnorderedSet, LookupSet, Vector, initialize } from 'near-sdk-js';
import { AccountId } from 'near-sdk-js/lib/types';
import { transfer } from 'near-workspaces';

interface Project{
title:string;
amount:number;
start:Date;
finish:Date;
rating:number;
comment:string;
}


@NearBindgen({})
export class Contract {
  owner_id: String; 
  tokens: UnorderedMap<Project> = new UnorderedMap<Project>("tkns"); 
  appliedProjects: UnorderedMap<Project> = new UnorderedMap<Project>("appprjct"); 
  start:String;

  constructor() {
    this.owner_id;
    this.tokens;
    this.start;
    this.appliedProjects;
    
}

  @initialize({})
  init({ }: { }) {
    this.owner_id = near.predecessorAccountId();
  }

  @call({})
    mintToken({today}:{today:String}):String{
      this.start=today;
      return this.start;
    }

  @call({})
  addProject({project,title }: {project:Project,title:string }){
    
  this.tokens.set(title,project)
  }

  @call({})
  applyforProject({project,title }: {project:Project,title:string }){
    
  this.appliedProjects.set(title,project)
  }

  @call({})
  viewappliedProjects({ }: {}): any[]{
  return this.appliedProjects._keys.toArray();
  
  }

  @view({})
  viewStartdate({}:{}):String{
    return this.start.toString();
  }
  
  @view({})
  viewRatings({}:{}):any[]{
    let keys=this.tokens._keys.toArray();
    
    return keys;
    
    
    for(let i=0;keys.length;i++){
      this.tokens.get(keys[i])
    }
  }


}