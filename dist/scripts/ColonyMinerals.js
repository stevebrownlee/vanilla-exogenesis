const a1_0x5c4c=['1132922jknFRb','\x20Minerals</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','127937cqEveu','<div>','join','find','name','8jsdVjV','77194WMEfvi','\x0a\x20\x20\x20\x20\x20\x20\x20\x20','colonyId','207771FZBeDr','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2>','842809uIcdct','2722288KGpmOq','filter','1JsybSA','quantity','mineralId','chosenGovernor','470255UCfuBZ'];const a1_0x4d4e=function(_0x498d81,_0x3a52a4){_0x498d81=_0x498d81-0xef;let _0x5c4c7b=a1_0x5c4c[_0x498d81];return _0x5c4c7b;};(function(_0x349e16,_0x5e1f90){const _0x434804=a1_0x4d4e;while(!![]){try{const _0x594dc8=parseInt(_0x434804(0xef))*parseInt(_0x434804(0x101))+parseInt(_0x434804(0xf4))+parseInt(_0x434804(0xf3))+parseInt(_0x434804(0xff))+parseInt(_0x434804(0xfc))*parseInt(_0x434804(0xfb))+parseInt(_0x434804(0xf6))+-parseInt(_0x434804(0x102));if(_0x594dc8===_0x5e1f90)break;else _0x349e16['push'](_0x349e16['shift']());}catch(_0xdc5d2d){_0x349e16['push'](_0x349e16['shift']());}}}(a1_0x5c4c,0xa545e));import{getColonies,getColonyMinerals,getGovernors,getMinerals,getTransientState}from'./database.js';const minerals=getMinerals(),colonies=getColonies(),governors=getGovernors();export const ColonyMinerals=()=>{const _0x12bd16=a1_0x4d4e,_0x1fdaa4=getTransientState();if(_0x1fdaa4[_0x12bd16(0xf2)]!==0x0){const _0x1920a3=governors[_0x12bd16(0xf9)](_0x396034=>_0x396034['id']===_0x1fdaa4[_0x12bd16(0xf2)]),_0x333275=colonies[_0x12bd16(0xf9)](_0x44d1e6=>_0x44d1e6['id']===_0x1920a3['colonyId']),_0x3bae52=getColonyMinerals();return _0x12bd16(0x100)+_0x333275[_0x12bd16(0xfa)]+_0x12bd16(0xf5)+_0x3bae52[_0x12bd16(0x103)](_0x4f9711=>_0x4f9711[_0x12bd16(0xfe)]===_0x333275['id'])['map'](_0x3d4043=>{const _0x44cc91=_0x12bd16,_0x2d212e=minerals[_0x44cc91(0xf9)](_0x43fce4=>_0x43fce4['id']===_0x3d4043[_0x44cc91(0xf1)]);return _0x44cc91(0xf7)+_0x3d4043[_0x44cc91(0xf0)]+'\x20tons\x20of\x20'+_0x2d212e[_0x44cc91(0xfa)]+'</div>';})[_0x12bd16(0xf8)]('')+_0x12bd16(0xfd);}else return'<h2>Colony\x20Minerals</h2>';};