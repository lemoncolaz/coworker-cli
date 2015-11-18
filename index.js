//#!usr/local/bin/env node
//
//var program = require('commander');
//
//program
//    .version('1.0.0')
//	.usage('[options] <file>')
//	.option('-i, --init', 'Initialize the config file')
//	.option('-t, --template', 'Read the given fragment path and output the path of main template[s]')
//    .parse(process.argv);
//
//if(program.init){
//    console.log('Init the config file...');
//	console.log('  - init');
//}
//
//if(program.template){
//    console.log('Read path of the specific template and output path of the main template');
//	console.log('    - template');
//}


var cmder = require('commander');
var wf = require('./logic/walkFolders');
var go = require('./logic/globalObject');
var getmain = require('./logic/anaMain');

wf('/Users/wangyujing/Work/Coworker/mdetail-new/m-detail-huangye/m-detail-huangye_dev_BRANCH/mdetai-web/src/main/');

var b = getmain(go, '/Users/wangyujing/Work/Coworker/mdetail-new/m-detail-huangye/m-detail-huangye_dev_BRANCH/mdetai-web/src/main/webapp/views/fragment/m3info/main/general/common/bodyfooter_common.html')

console.log(b);