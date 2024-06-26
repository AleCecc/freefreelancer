import { Worker, NearAccount } from 'near-workspaces';
import anyTest, { TestFn } from 'ava';
import { setDefaultResultOrder } from 'dns';import { Milestone } from '../src/subcontract.ts';
 setDefaultResultOrder('ipv4first'); // temp fix for node >v17

// Global context
const test = anyTest as TestFn<{ worker: Worker, accounts: Record<string, NearAccount> }>;

test.beforeEach(async (t) => {
  // Create sandbox, accounts, deploy contracts, etc.
  const worker = t.context.worker = await Worker.init();

  // Deploy contract
  const root = worker.rootAccount;

  // Get wasm file path from package.json test script in folder above
  const contract = await root.createSubAccount('contract');
  await contract.deploy(process.argv[2]);

  // Save state for test runs, it is unique for each test
  t.context.accounts = { root, contract };
});

test.afterEach.always(async (t) => {
  // Stop Sandbox server
  await t.context.worker.tearDown().catch((error) => {
    console.log('Failed to stop the Sandbox:', error);
  });
});

test('milestones can be added', async (t) => {
  const { root, contract } = t.context.accounts;
  var today = new Date();
  const ms:Milestone[]=[
    {
        amount: 100,
        description: "First milestone",
        date: today,
        finished:false
    },
    {
        amount: 200,
        description: "Second milestone",
        date: today,
        finished:false
    },
    {
        amount: 150,
        description: "Third milestone",
        date: today,
        finished:false
    }
];


  await root.call(contract,'addMilestones', {project_milestone:JSON.parse(ms.toString())});
  const result = await root.view('viewMilestones');
  t.is(result,result)
});

test('the points are correctly computed', async (t) => {
  const { root, contract } = t.context.accounts;

  let counter: {[key:string]:number} = { 'heads': 0, 'tails': 0 }
  let expected_points = 0;

  for(let i=0; i<10; i++){
    const res = await root.call(contract, 'flip_coin', { 'player_guess': 'heads' })
    counter[res as string] += 1;
    expected_points += res == 'heads' ? 1 : -1;
    expected_points = Math.max(expected_points, 0);
  }

  // A binomial(10, 1/2) has a P(x>2) ~ 0.98%
  t.true(counter['heads'] >= 2);

  const points: number = await contract.view('points_of', { 'player': root.accountId });
  t.is(points, expected_points);
});