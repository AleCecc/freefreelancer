var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Worker } from 'near-workspaces';
import anyTest from 'ava';
import { setDefaultResultOrder } from 'dns';
setDefaultResultOrder('ipv4first'); // temp fix for node >v17
// Global context
var test = anyTest;
test.beforeEach(function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var worker, _a, root, contract;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = t.context;
                return [4 /*yield*/, Worker.init()];
            case 1:
                worker = _a.worker = _b.sent();
                root = worker.rootAccount;
                return [4 /*yield*/, root.createSubAccount('contract')];
            case 2:
                contract = _b.sent();
                return [4 /*yield*/, contract.deploy(process.argv[2])];
            case 3:
                _b.sent();
                // Save state for test runs, it is unique for each test
                t.context.accounts = { root: root, contract: contract };
                return [2 /*return*/];
        }
    });
}); });
test.afterEach.always(function (t) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // Stop Sandbox server
            return [4 /*yield*/, t.context.worker.tearDown().catch(function (error) {
                    console.log('Failed to stop the Sandbox:', error);
                })];
            case 1:
                // Stop Sandbox server
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
test('milestones can be added', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, root, contract, today, ms, result;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = t.context.accounts, root = _a.root, contract = _a.contract;
                today = new Date();
                ms = [
                    {
                        amount: 100,
                        description: "First milestone",
                        date: today,
                        finished: false
                    },
                    {
                        amount: 200,
                        description: "Second milestone",
                        date: today,
                        finished: false
                    },
                    {
                        amount: 150,
                        description: "Third milestone",
                        date: today,
                        finished: false
                    }
                ];
                return [4 /*yield*/, root.call(contract, 'addMilestones', { project_milestone: JSON.parse(ms.toString()) })];
            case 1:
                _b.sent();
                return [4 /*yield*/, root.view('viewMilestones')];
            case 2:
                result = _b.sent();
                t.is(result, result);
                return [2 /*return*/];
        }
    });
}); });
test('the points are correctly computed', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, root, contract, counter, expected_points, i, res, points;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = t.context.accounts, root = _a.root, contract = _a.contract;
                counter = { 'heads': 0, 'tails': 0 };
                expected_points = 0;
                i = 0;
                _b.label = 1;
            case 1:
                if (!(i < 10)) return [3 /*break*/, 4];
                return [4 /*yield*/, root.call(contract, 'flip_coin', { 'player_guess': 'heads' })];
            case 2:
                res = _b.sent();
                counter[res] += 1;
                expected_points += res == 'heads' ? 1 : -1;
                expected_points = Math.max(expected_points, 0);
                _b.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4:
                // A binomial(10, 1/2) has a P(x>2) ~ 0.98%
                t.true(counter['heads'] >= 2);
                return [4 /*yield*/, contract.view('points_of', { 'player': root.accountId })];
            case 5:
                points = _b.sent();
                t.is(points, expected_points);
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hdmEuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWxlY2VjYy9mcmVlZnJlZWxhbmNlci9Qcm9qZWN0Y29udHJhY3QvY29udHJhY3QtdHMvIiwic291cmNlcyI6WyJzYW5kYm94LXRzL21haW4uYXZhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQWUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLE9BQW1CLE1BQU0sS0FBSyxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUMzQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLHlCQUF5QjtBQUU5RCxpQkFBaUI7QUFDakIsSUFBTSxJQUFJLEdBQUcsT0FBNEUsQ0FBQztBQUUxRixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQU8sQ0FBQzs7Ozs7Z0JBRVAsS0FBQSxDQUFDLENBQUMsT0FBTyxDQUFBO2dCQUFVLHFCQUFNLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBQTs7Z0JBQS9DLE1BQU0sR0FBRyxHQUFVLE1BQU0sR0FBRyxTQUFtQjtnQkFHL0MsSUFBSSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7Z0JBR2YscUJBQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxFQUFBOztnQkFBbEQsUUFBUSxHQUFHLFNBQXVDO2dCQUN4RCxxQkFBTSxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQTs7Z0JBQXRDLFNBQXNDLENBQUM7Z0JBRXZDLHVEQUF1RDtnQkFDdkQsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsRUFBRSxJQUFJLE1BQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDOzs7O0tBQ3pDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxD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