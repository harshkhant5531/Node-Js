const path = require('path');
const { clearScreenDown } = require('readline');

//normalize
const normalize = path.normalize("C:/Users//..khant/OneDrive/Desktop/...JavaScript/Node Js");
console.log("Normalize Path::" + normalize);

//extname
const extname = path.extname("C:/Users//..khant/OneDrive/Desktop/...JavaScript/Node Js.js");
console.log("extname Path::" + extname);

//basename
const basename = path.basename("C:/Users//..khant/OneDrive/Desktop/...JavaScript/Node Js.js");
console.log("basename Path::" + basename);

//dirname
const dirname = path.dirname("C:/Users//..khant/OneDrive/Desktop/...JavaScript/Node Js.js");
console.log("dirname Path::" + dirname);
//spilt
const sp = "C:\\Users\\khant\\OneDrive\\Desktop\\JavaScript\\NodeJs".split(path.sep);
cosnsole.log("spilt Path::" + sp);