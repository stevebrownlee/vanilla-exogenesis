const a6_0x2e6f=['map','623994qhQkVq','facilities','244768BVUuRt','stateChanged','Lola\x20Wolff','facilityMinerals','1030316NSJjsi','121QaLJjK','set','Iron','Chromium','entries','transientState','facilityId','selectedMinerals','mineralId','colonyId','883592zZtHNF','Mars','colonyMinerals','Europa','6809KvELZX','selectedFacility','208143CLYkti','Sodium','Katrina\x20Bahringer','Earth','1FewigN','96302VBdKTB','find','minerals','dispatchEvent','quantity','colonies'];const a6_0xecf4=function(_0xe529a3,_0x354e3d){_0xe529a3=_0xe529a3-0x9f;let _0x2e6f88=a6_0x2e6f[_0xe529a3];return _0x2e6f88;};const a6_0x1447c2=a6_0xecf4;(function(_0xf0e2cf,_0xb7b5f1){const _0x52e243=a6_0xecf4;while(!![]){try{const _0x16805f=-parseInt(_0x52e243(0xa1))+parseInt(_0x52e243(0xb2))+parseInt(_0x52e243(0xb8))+-parseInt(_0x52e243(0xa3))+parseInt(_0x52e243(0xa7))+-parseInt(_0x52e243(0xbd))*-parseInt(_0x52e243(0xbc))+-parseInt(_0x52e243(0xa8))*parseInt(_0x52e243(0xb6));if(_0x16805f===_0xb7b5f1)break;else _0xf0e2cf['push'](_0xf0e2cf['shift']());}catch(_0xc96479){_0xf0e2cf['push'](_0xf0e2cf['shift']());}}}(a6_0x2e6f,0x80586));const database={'transientState':{'chosenGovernor':0x0,'selectedFacility':0x0,'selectedMinerals':new Map()},'facilities':[{'id':0x1,'name':'Ganymede','active':!![]},{'id':0x2,'name':'Io','active':!![]},{'id':0x3,'name':'Titan','active':!![]}],'colonies':[{'id':0x1,'name':a6_0x1447c2(0xbb)},{'id':0x2,'name':a6_0x1447c2(0xb5)},{'id':0x3,'name':a6_0x1447c2(0xb3)}],'governors':[{'id':0x1,'name':'Patricia\x20Purdy','colonyId':0x3},{'id':0x2,'name':a6_0x1447c2(0xba),'colonyId':0x2},{'id':0x3,'name':a6_0x1447c2(0xa5),'colonyId':0x1},{'id':0x4,'name':'Damon\x20Hartmann','colonyId':0x3}],'minerals':[{'id':0x1,'name':a6_0x1447c2(0xb9)},{'id':0x2,'name':'Molybdenum'},{'id':0x3,'name':a6_0x1447c2(0xab)},{'id':0x4,'name':'Uranium'},{'id':0x5,'name':a6_0x1447c2(0xaa)}],'facilityMinerals':[{'id':0x1,'facilityId':0x1,'mineralId':0x5,'quantity':0x12},{'id':0x2,'facilityId':0x1,'mineralId':0x3,'quantity':0x4},{'id':0x3,'facilityId':0x3,'mineralId':0x1,'quantity':0x2f},{'id':0x4,'facilityId':0x2,'mineralId':0x2,'quantity':0x5c}],'colonyMinerals':[{'id':0x1,'colonyId':0x1,'mineralId':0x5,'quantity':0x7},{'id':0x2,'colonyId':0x1,'mineralId':0x3,'quantity':0x2}]};export const updateSelectedMinerals=_0x220a7e=>{const _0x3bf0c5=a6_0x1447c2;database[_0x3bf0c5(0xad)][_0x3bf0c5(0xaf)][_0x3bf0c5(0xa9)](_0x220a7e[_0x3bf0c5(0xae)],_0x220a7e['id']),document[_0x3bf0c5(0xc0)](new CustomEvent(_0x3bf0c5(0xa4)));};export const setFacility=_0x43ae18=>{const _0x23eea4=a6_0x1447c2;database[_0x23eea4(0xad)][_0x23eea4(0xb7)]=_0x43ae18,document['dispatchEvent'](new CustomEvent(_0x23eea4(0xa4)));};export const getFacilities=()=>{const _0x36c219=a6_0x1447c2;return database[_0x36c219(0xa2)][_0x36c219(0xa0)](_0x4ef545=>({..._0x4ef545}));};export const getMinerals=()=>{const _0x45e2cf=a6_0x1447c2;return database[_0x45e2cf(0xbf)][_0x45e2cf(0xa0)](_0x540fd6=>({..._0x540fd6}));};export const getGovernors=()=>{return database['governors']['map'](_0x34d26a=>({..._0x34d26a}));};export const getColonies=()=>{const _0x57a091=a6_0x1447c2;return database[_0x57a091(0x9f)][_0x57a091(0xa0)](_0x180815=>({..._0x180815}));};export const setGovernor=_0x30af07=>{const _0x1fa2ae=a6_0x1447c2;database[_0x1fa2ae(0xad)]['chosenGovernor']=_0x30af07,document[_0x1fa2ae(0xc0)](new CustomEvent(_0x1fa2ae(0xa4)));};export const getColonyMinerals=()=>{const _0x3aa567=a6_0x1447c2;return database[_0x3aa567(0xb4)][_0x3aa567(0xa0)](_0xfcfbb3=>({..._0xfcfbb3}));};export const getFacilityMinerals=()=>{const _0x5c37ae=a6_0x1447c2;return database[_0x5c37ae(0xa6)]['map'](_0x22ee94=>({..._0x22ee94}));};export const getTransientState=()=>{const _0x224245=a6_0x1447c2;return database[_0x224245(0xad)];};export const addCustomOrder=()=>{const _0x3868f3=a6_0x1447c2,_0x440a5d=database['governors'][_0x3868f3(0xbe)](_0x322abc=>_0x322abc['id']===database['transientState']['chosenGovernor']);if(_0x440a5d){const _0x46395f=database[_0x3868f3(0x9f)][_0x3868f3(0xbe)](_0x242286=>_0x242286['id']===_0x440a5d[_0x3868f3(0xb1)]),_0x29ac3c=database[_0x3868f3(0xb4)]['filter'](_0x11b5b1=>_0x11b5b1[_0x3868f3(0xb1)]===_0x46395f['id']),_0x3b671a=database[_0x3868f3(0xad)][_0x3868f3(0xaf)];for(const [_0x3966d2,_0xcd5bf3]of _0x3b671a[_0x3868f3(0xac)]()){const _0x47322e=database[_0x3868f3(0xa6)]['find'](_0x53afa4=>_0x53afa4['id']===_0xcd5bf3),_0x5b96e5=_0x29ac3c['find'](_0x4fc05b=>_0x4fc05b[_0x3868f3(0xb0)]===_0x47322e[_0x3868f3(0xb0)]);_0x5b96e5?_0x5b96e5[_0x3868f3(0xc1)]++:database[_0x3868f3(0xb4)]['push']({'id':database[_0x3868f3(0xb4)][database[_0x3868f3(0xb4)]['length']-0x1]['id']++,'mineralId':_0x47322e[_0x3868f3(0xb0)],'colonyId':_0x46395f['id'],'quantity':0x1}),_0x47322e[_0x3868f3(0xc1)]--;}database[_0x3868f3(0xad)]['selectedMinerals']=new Map(),document['dispatchEvent'](new CustomEvent(_0x3868f3(0xa4)));}};