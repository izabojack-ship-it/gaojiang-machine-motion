(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Ql={name:"高將精機廠",nameEn:"FAIR OAKS",full:"高將精機廠 FAIR OAKS",tagline:"高速精密沖床機械作動展示",taglineEn:"High-speed precision press motion showcase",model:"FMT-350"},eh={code:"FMT-350",name:"FMT-350高速精密沖床",nameEn:"FMT-350 High-speed Precision Press",description:"頭座馬達帶動皮帶輪組，傳動飛輪和制動器；同時油壓提供飛輪和制動器作動，帶動曲柄軸。曲柄軸帶動連桿組與配重連桿組，帶動滑塊上下移動運轉。",descriptionEn:"Power is transmitted from the crown motor through the pulleys to the flywheel and brake. Controlled by hydraulic pressure, the flywheel engages the crankshaft, which in turn actuates the main and sub-connecting rods to drive the vertical movement of the slide."},th=[{id:"carbon",color:"#14171c",label:"碳黑"},{id:"steel",color:"#2a3038",label:"鋼灰"},{id:"ink",color:"#0b1220",label:"墨藍"},{id:"workshop",color:"#1c1814",label:"工坊"},{id:"studio",color:"#e8e4dc",label:"亮室"}],nh=[{id:"fmth01a0100",code:"FMTH01A0100",name:"腳座組",nameEn:"Press Base",group:1,number:1,role:"main",color:"#1E4C8A",modelUrl:"/models/fmth01a0100.glb",description:"沖床腳座部位，作為整機落地支撐與安裝基準，承受機台自重並將沖壓反力傳遞至地基。",descriptionEn:"Press base area. Supports the machine on the floor and transfers stamping reaction into the foundation.",slot:{order:8,explodeY:-1.15,explodeX:0,explodeZ:0},motion:{type:"static"}},{id:"fmth01a0300_right",code:"FMTH01A0300-R",name:"中座組（右）",nameEn:"Middle Seat (Right)",group:2,number:2,role:"mid_right",color:"#C9CED4",modelUrl:"/models/fmth01a0300_right.glb",description:"沖床的中座部位右側，與左側對稱引導滑塊，維持高速沖壓剛性與對中精度。",descriptionEn:"Right side of the press bed. Guides the slide with the left side and keeps rigidity at high speed.",slot:{order:5,explodeY:-1.62,explodeX:0,explodeZ:0},motion:{type:"static"}},{id:"fmth01a0300_left",code:"FMTH01A0300-L",name:"中座組（左）",nameEn:"Middle Seat (Left)",group:3,number:3,role:"mid_left",color:"#C9CED4",modelUrl:"/models/fmth01a0300_left.glb",description:"沖床的中座部位左側，與右側共同支撐滑塊行程，確保上下運轉穩定。",descriptionEn:"Left side of the press bed. Supports the slide stroke with the right side for stable travel.",slot:{order:5,explodeY:-1.62,explodeX:0,explodeZ:0},motion:{type:"static"}},{id:"fmth01a0500",code:"FMTH01A0500",name:"滑座組",nameEn:"Slide Assembly",group:4,number:4,role:"upper",color:"#E8622A",modelUrl:"/models/fmth01a0500.glb",description:"頭座馬達帶動皮帶輪組，傳動飛輪和制動器；同時油壓提供飛輪和制動器作動，帶動曲柄軸。曲柄軸帶動連桿組與配重連桿組，帶動滑塊上下移動運轉。",descriptionEn:"Power is transmitted from the crown motor through the pulleys to the flywheel and brake. Controlled by hydraulic pressure, the flywheel engages the crankshaft, which in turn actuates the main and sub-connecting rods to drive the vertical movement of the slide.",slot:{order:1,explodeY:.62,explodeX:0,explodeZ:0},motion:{type:"static"}},{id:"fmth02d0100",code:"FMTH02D0100",name:"頭座組",nameEn:"Crown Assembly",group:5,number:5,role:"flywheel",color:"#C9CED4",modelUrl:"/models/fmth02d0100.glb",description:"頭座部位安裝馬達與皮帶輪組，將動力傳至飛輪與制動器，並由油壓控制接合與制動。",descriptionEn:"The crown houses the motor and pulley set that drive the flywheel and brake, with hydraulic control of engagement and braking.",slot:{order:2,explodeY:.62,explodeX:0,explodeZ:0},motion:{type:"spin",axis:"x",rpm:28}},{id:"fmth02a0201",code:"FMTH02A0201",name:"曲柄軸組",nameEn:"Crankshaft Assembly",group:6,number:6,role:"crank",color:"#AEB5BC",modelUrl:"/models/fmth02a0201.glb",description:"曲柄軸接受飛輪動力，帶動連桿組與配重連桿組，將旋轉運動轉換為滑塊上下行程。",descriptionEn:"The crankshaft takes power from the flywheel and drives the main and counterweight rods, converting rotation into the slide stroke.",slot:{order:3,explodeY:.42,explodeX:0,explodeZ:0},motion:{type:"spin",axis:"x",rpm:28}},{id:"fmth03a01a1",code:"FMTH03A01A1",name:"連桿組",nameEn:"Connecting Rod",group:7,number:7,role:"rod",color:"#AEB5BC",modelUrl:"/models/fmth03a01a1.glb",description:"主連桿連接曲柄軸與滑塊，傳遞衝壓力，帶動滑塊上下移動運轉。",descriptionEn:"The main connecting rod links the crankshaft to the slide and transmits punching force through the vertical stroke.",slot:{order:4,explodeY:-.08,explodeX:0,explodeZ:0},motion:{type:"rod",stroke:.16}},{id:"fmth05a0101",code:"FMTH05A0101",name:"配重連桿組",nameEn:"Counterweight Rod",group:8,number:8,role:"slider",color:"#E8622A",modelUrl:"/models/fmth05a0101.glb",description:"配重連桿與主連桿同步作動，抵消滑塊質量慣性，穩定高速沖壓的動態平衡。",descriptionEn:"The counterweight rod moves with the main rod to cancel slide inertia and stabilize high-speed dynamic balance.",slot:{order:6,explodeY:-.08,explodeX:0,explodeZ:0},motion:{type:"stroke",axis:"y",amplitude:.18}},{id:"fmth04d0101",code:"FMTH04D0101",name:"下座／工作台組",nameEn:"Bolster / Bed",group:10,number:10,role:"bed",color:"#1E4C8A",modelUrl:"/models/fmth04d0101.glb",description:"下座與工作台承載模具，承受沖壓反力並維持定位精度。",descriptionEn:"Bed and bolster support the die and absorb stamping reaction forces.",slot:{order:7,explodeY:-1.62,explodeX:0,explodeZ:0},motion:{type:"static"}},{id:"fach03a0101",code:"FACH03A0101",name:"機架／外罩組",nameEn:"Frame / Housing",group:11,number:11,role:"housing",color:"#C9CED4",modelUrl:"/models/fach03a0101.glb",description:"沖床主體外罩與結構機架，承載內部傳動與滑塊系統。",descriptionEn:"Main housing and structural frame carrying the drive and slider systems.",slot:{order:0,explodeY:2.08,explodeX:0,explodeZ:0},motion:{type:"static"}}],ih=[{id:"operation",label:"沖壓行程",labelEn:"Stroke",duration:0,camera:"mechanism_side",highlightCycle:!1,loop:!0,spm:28},{id:"explode",label:"爆炸分解",labelEn:"Exploded",duration:10,camera:"pullback",highlightCycle:!0},{id:"tour",label:"影片巡覽",labelEn:"Film Tour",duration:14,camera:"cinematic",highlightCycle:!0}],bt={brand:Ql,assembly:eh,themes:th,modules:nh,sequences:ih};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mo="160",ti={ROTATE:0,DOLLY:1,PAN:2},ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sh=0,Vo=1,rh=2,jc=1,Zc=2,xn=3,cn=0,Nt=1,Ut=2,Dn=0,Ei=1,Wo=2,Xo=3,qo=4,oh=5,Vn=100,ah=101,ch=102,Yo=103,Ko=104,lh=200,hh=201,uh=202,dh=203,to=204,no=205,fh=206,ph=207,mh=208,gh=209,_h=210,xh=211,vh=212,yh=213,Mh=214,Sh=0,Eh=1,Th=2,qs=3,bh=4,Ah=5,wh=6,Rh=7,Jc=0,Ch=1,Lh=2,In=0,Ph=1,Dh=2,Ih=3,Qc=4,Uh=5,Nh=6,$o="attached",Oh="detached",el=300,wi=301,Ri=302,io=303,so=304,tr=306,Ci=1e3,Kt=1001,Ys=1002,yt=1003,ro=1004,Gs=1005,Ft=1006,tl=1007,$n=1008,Un=1009,Fh=1010,Bh=1011,So=1012,nl=1013,Ln=1014,vn=1015,ns=1016,il=1017,sl=1018,qn=1020,zh=1021,$t=1023,kh=1024,Hh=1025,Yn=1026,Li=1027,Gh=1028,rl=1029,Vh=1030,ol=1031,al=1033,ur=33776,dr=33777,fr=33778,pr=33779,jo=35840,Zo=35841,Jo=35842,Qo=35843,cl=36196,ea=37492,ta=37496,na=37808,ia=37809,sa=37810,ra=37811,oa=37812,aa=37813,ca=37814,la=37815,ha=37816,ua=37817,da=37818,fa=37819,pa=37820,ma=37821,mr=36492,ga=36494,_a=36495,Wh=36283,xa=36284,va=36285,ya=36286,is=2300,Pi=2301,gr=2302,Ma=2400,Sa=2401,Ea=2402,Xh=2500,qh=0,ll=1,oo=2,hl=3e3,Kn=3001,Yh=3200,Kh=3201,ul=0,$h=1,jt="",tt="srgb",mt="srgb-linear",Eo="display-p3",nr="display-p3-linear",Ks="linear",st="srgb",$s="rec709",js="p3",ii=7680,Ta=519,jh=512,Zh=513,Jh=514,dl=515,Qh=516,eu=517,tu=518,nu=519,ao=35044,ba="300 es",co=1035,yn=2e3,Zs=2001;class Qn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Aa=1234567;const Ti=Math.PI/180,Di=180/Math.PI;function tn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[s&255]+wt[s>>8&255]+wt[s>>16&255]+wt[s>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function Mt(s,e,t){return Math.max(e,Math.min(t,s))}function To(s,e){return(s%e+e)%e}function iu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function su(s,e,t){return s!==e?(t-s)/(e-s):0}function Qi(s,e,t){return(1-t)*s+t*e}function ru(s,e,t,n){return Qi(s,e,1-Math.exp(-t*n))}function ou(s,e=1){return e-Math.abs(To(s,e*2)-e)}function au(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function cu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function lu(s,e){return s+Math.floor(Math.random()*(e-s+1))}function hu(s,e){return s+Math.random()*(e-s)}function uu(s){return s*(.5-Math.random())}function du(s){s!==void 0&&(Aa=s);let e=Aa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fu(s){return s*Ti}function pu(s){return s*Di}function lo(s){return(s&s-1)===0&&s!==0}function mu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Js(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function gu(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function on(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function et(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ss={DEG2RAD:Ti,RAD2DEG:Di,generateUUID:tn,clamp:Mt,euclideanModulo:To,mapLinear:iu,inverseLerp:su,lerp:Qi,damp:ru,pingpong:ou,smoothstep:au,smootherstep:cu,randInt:lu,randFloat:hu,randFloatSpread:uu,seededRandom:du,degToRad:fu,radToDeg:pu,isPowerOfTwo:lo,ceilPowerOfTwo:mu,floorPowerOfTwo:Js,setQuaternionFromProperEuler:gu,normalize:et,denormalize:on};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,i,r,o,a,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],x=i[4],M=i[7],L=i[2],R=i[5],T=i[8];return r[0]=o*_+a*v+c*L,r[3]=o*m+a*x+c*R,r[6]=o*p+a*M+c*T,r[1]=l*_+h*v+u*L,r[4]=l*m+h*x+u*R,r[7]=l*p+h*M+u*T,r[2]=d*_+f*v+g*L,r[5]=d*m+f*x+g*R,r[8]=d*p+f*M+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_r.makeScale(e,t)),this}rotate(e){return this.premultiply(_r.makeRotation(-e)),this}translate(e,t){return this.premultiply(_r.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _r=new We;function fl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function rs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _u(){const s=rs("canvas");return s.style.display="block",s}const wa={};function es(s){s in wa||(wa[s]=!0,console.warn(s))}const Ra=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ca=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),hs={[mt]:{transfer:Ks,primaries:$s,toReference:s=>s,fromReference:s=>s},[tt]:{transfer:st,primaries:$s,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[nr]:{transfer:Ks,primaries:js,toReference:s=>s.applyMatrix3(Ca),fromReference:s=>s.applyMatrix3(Ra)},[Eo]:{transfer:st,primaries:js,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ca),fromReference:s=>s.applyMatrix3(Ra).convertLinearToSRGB()}},xu=new Set([mt,nr]),Ze={enabled:!0,_workingColorSpace:mt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!xu.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=hs[e].toReference,i=hs[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return hs[s].primaries},getTransfer:function(s){return s===jt?Ks:hs[s].transfer}};function bi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function xr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let si;class pl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{si===void 0&&(si=rs("canvas")),si.width=e.width,si.height=e.height;const n=si.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bi(t[n]/255)*255):t[n]=bi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vu=0;class ml{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=tn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(vr(i[o].image)):r.push(vr(i[o]))}else r=vr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function vr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?pl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yu=0;class St extends Qn{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=Kt,i=Kt,r=Ft,o=$n,a=$t,c=Un,l=St.DEFAULT_ANISOTROPY,h=jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=tn(),this.name="",this.source=new ml(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Kn?tt:jt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==el)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ci:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case Ys:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ci:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case Ys:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===tt?Kn:hl}set encoding(e){es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Kn?tt:jt}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=el;St.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,M=(f+1)/2,L=(p+1)/2,R=(h+d)/4,T=(u+_)/4,I=(g+m)/4;return x>M&&x>L?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=R/n,r=T/n):M>L?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=R/i,r=I/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=T/r,i=I/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mu extends Qn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(es("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Kn?tt:jt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new St(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ml(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends Mu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gl extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Su extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const L=Math.sqrt(x),R=Math.atan2(L,p*v);m=Math.sin(m*R)/L,a=Math.sin(a*R)/L}const M=a*v;if(c=c*m+d*M,l=l*m+f*M,h=h*m+g*M,u=u*m+_*M,m===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,n=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(La.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(La.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yr.copy(this).projectOnVector(e),this.sub(yr)}reflect(e){return this.sub(yr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yr=new w,La=new nn;class Je{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jt):Jt.fromBufferAttribute(r,o),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),us.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),us.copy(n.boundingBox)),us.applyMatrix4(e.matrixWorld),this.union(us)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hi),ds.subVectors(this.max,Hi),ri.subVectors(e.a,Hi),oi.subVectors(e.b,Hi),ai.subVectors(e.c,Hi),Sn.subVectors(oi,ri),En.subVectors(ai,oi),Fn.subVectors(ri,ai);let t=[0,-Sn.z,Sn.y,0,-En.z,En.y,0,-Fn.z,Fn.y,Sn.z,0,-Sn.x,En.z,0,-En.x,Fn.z,0,-Fn.x,-Sn.y,Sn.x,0,-En.y,En.x,0,-Fn.y,Fn.x,0];return!Mr(t,ri,oi,ai,ds)||(t=[1,0,0,0,1,0,0,0,1],!Mr(t,ri,oi,ai,ds))?!1:(fs.crossVectors(Sn,En),t=[fs.x,fs.y,fs.z],Mr(t,ri,oi,ai,ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const dn=[new w,new w,new w,new w,new w,new w,new w,new w],Jt=new w,us=new Je,ri=new w,oi=new w,ai=new w,Sn=new w,En=new w,Fn=new w,Hi=new w,ds=new w,fs=new w,Bn=new w;function Mr(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Bn.fromArray(s,r);const a=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),c=e.dot(Bn),l=t.dot(Bn),h=n.dot(Bn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Eu=new Je,Gi=new w,Sr=new w;class ln{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Eu.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gi.subVectors(e,this.center);const t=Gi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Gi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gi.copy(e.center).add(Sr)),this.expandByPoint(Gi.copy(e.center).sub(Sr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new w,Er=new w,ps=new w,Tn=new w,Tr=new w,ms=new w,br=new w;class Oi{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Er.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(Er);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ps),a=Tn.dot(this.direction),c=-Tn.dot(ps),l=Tn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Er).addScaledVector(ps,d),f}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const n=fn.dot(this.direction),i=fn.dot(fn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,i,r){Tr.subVectors(t,e),ms.subVectors(n,e),br.crossVectors(Tr,ms);let o=this.direction.dot(br),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tn.subVectors(this.origin,e);const c=a*this.direction.dot(ms.crossVectors(Tn,ms));if(c<0)return null;const l=a*this.direction.dot(Tr.cross(Tn));if(l<0||c+l>o)return null;const h=-a*Tn.dot(br);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(e,t,n,i,r,o,a,c,l,h,u,d,f,g,_,m){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,_,m)}set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ci.setFromMatrixColumn(e,0).length(),r=1/ci.setFromMatrixColumn(e,1).length(),o=1/ci.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tu,e,bu)}lookAt(e,t,n){const i=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),bn.crossVectors(n,kt),bn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),bn.crossVectors(n,kt)),bn.normalize(),gs.crossVectors(kt,bn),i[0]=bn.x,i[4]=gs.x,i[8]=kt.x,i[1]=bn.y,i[5]=gs.y,i[9]=kt.y,i[2]=bn.z,i[6]=gs.z,i[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],x=n[7],M=n[11],L=n[15],R=i[0],T=i[4],I=i[8],y=i[12],A=i[1],H=i[5],G=i[9],$=i[13],D=i[2],O=i[6],N=i[10],q=i[14],X=i[3],Y=i[7],K=i[11],ee=i[15];return r[0]=o*R+a*A+c*D+l*X,r[4]=o*T+a*H+c*O+l*Y,r[8]=o*I+a*G+c*N+l*K,r[12]=o*y+a*$+c*q+l*ee,r[1]=h*R+u*A+d*D+f*X,r[5]=h*T+u*H+d*O+f*Y,r[9]=h*I+u*G+d*N+f*K,r[13]=h*y+u*$+d*q+f*ee,r[2]=g*R+_*A+m*D+p*X,r[6]=g*T+_*H+m*O+p*Y,r[10]=g*I+_*G+m*N+p*K,r[14]=g*y+_*$+m*q+p*ee,r[3]=v*R+x*A+M*D+L*X,r[7]=v*T+x*H+M*O+L*Y,r[11]=v*I+x*G+M*N+L*K,r[15]=v*y+x*$+M*q+L*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,x=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,M=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,L=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,R=t*v+n*x+i*M+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=v*T,e[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*T,e[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*p+n*c*p)*T,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*T,e[4]=x*T,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*T,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*T,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*f+t*c*f)*T,e[8]=M*T,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*T,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*T,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*T,e[12]=L*T,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*T,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*T,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,v=c*l,x=c*h,M=c*u,L=n.x,R=n.y,T=n.z;return i[0]=(1-(_+p))*L,i[1]=(f+M)*L,i[2]=(g-x)*L,i[3]=0,i[4]=(f-M)*R,i[5]=(1-(d+p))*R,i[6]=(m+v)*R,i[7]=0,i[8]=(g+x)*T,i[9]=(m-v)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ci.set(i[0],i[1],i[2]).length();const o=ci.set(i[4],i[5],i[6]).length(),a=ci.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Qt.copy(this);const l=1/r,h=1/o,u=1/a;return Qt.elements[0]*=l,Qt.elements[1]*=l,Qt.elements[2]*=l,Qt.elements[4]*=h,Qt.elements[5]*=h,Qt.elements[6]*=h,Qt.elements[8]*=u,Qt.elements[9]*=u,Qt.elements[10]*=u,t.setFromRotationMatrix(Qt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=yn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===yn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Zs)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=yn){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*l,f=(n+i)*h;let g,_;if(a===yn)g=(o+r)*u,_=-2*u;else if(a===Zs)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ci=new w,Qt=new Le,Tu=new w(0,0,0),bu=new w(1,1,1),bn=new w,gs=new w,kt=new w,Pa=new Le,Da=new nn;class ir{constructor(e=0,t=0,n=0,i=ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Da.setFromEuler(this),this.setFromQuaternion(Da,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ir.DEFAULT_ORDER="XYZ";class bo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Au=0;const Ia=new w,li=new nn,pn=new Le,_s=new w,Vi=new w,wu=new w,Ru=new nn,Ua=new w(1,0,0),Na=new w(0,1,0),Oa=new w(0,0,1),Cu={type:"added"},Lu={type:"removed"};class rt extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rt.DEFAULT_UP.clone();const e=new w,t=new ir,n=new nn,i=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Le},normalMatrix:{value:new We}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.multiply(li),this}rotateOnWorldAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.premultiply(li),this}rotateX(e){return this.rotateOnAxis(Ua,e)}rotateY(e){return this.rotateOnAxis(Na,e)}rotateZ(e){return this.rotateOnAxis(Oa,e)}translateOnAxis(e,t){return Ia.copy(e).applyQuaternion(this.quaternion),this.position.add(Ia.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ua,e)}translateY(e){return this.translateOnAxis(Na,e)}translateZ(e){return this.translateOnAxis(Oa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_s.copy(e):_s.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Vi,_s,this.up):pn.lookAt(_s,Vi,this.up),this.quaternion.setFromRotationMatrix(pn),i&&(pn.extractRotation(i.matrixWorld),li.setFromRotationMatrix(pn),this.quaternion.premultiply(li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Cu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,e,wu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,Ru,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}rt.DEFAULT_UP=new w(0,1,0);rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new w,mn=new w,Ar=new w,gn=new w,hi=new w,ui=new w,Fa=new w,wr=new w,Rr=new w,Cr=new w;let xs=!1;class qt{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),en.subVectors(e,t),i.cross(en);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){en.subVectors(i,t),mn.subVectors(n,t),Ar.subVectors(e,t);const o=en.dot(en),a=en.dot(mn),c=en.dot(Ar),l=mn.dot(mn),h=mn.dot(Ar),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getUV(e,t,n,i,r,o,a,c){return xs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xs=!0),this.getInterpolation(e,t,n,i,r,o,a,c)}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gn.x),c.addScaledVector(o,gn.y),c.addScaledVector(a,gn.z),c)}static isFrontFacing(e,t,n,i){return en.subVectors(n,t),mn.subVectors(e,t),en.cross(mn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),en.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return xs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xs=!0),qt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return qt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;hi.subVectors(i,n),ui.subVectors(r,n),wr.subVectors(e,n);const c=hi.dot(wr),l=ui.dot(wr);if(c<=0&&l<=0)return t.copy(n);Rr.subVectors(e,i);const h=hi.dot(Rr),u=ui.dot(Rr);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(hi,o);Cr.subVectors(e,r);const f=hi.dot(Cr),g=ui.dot(Cr);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(ui,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Fa.subVectors(r,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Fa,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(hi,o).addScaledVector(ui,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Lr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class _e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=To(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Lr(o,r,e+1/3),this.g=Lr(o,r,e),this.b=Lr(o,r,e-1/3)}return Ze.toWorkingColorSpace(this,i),this}setStyle(e,t=tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tt){const n=_l[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return Ze.fromWorkingColorSpace(Rt.copy(this),e),Math.round(Mt(Rt.r*255,0,255))*65536+Math.round(Mt(Rt.g*255,0,255))*256+Math.round(Mt(Rt.b*255,0,255))}getHexString(e=tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Rt.copy(this),t);const n=Rt.r,i=Rt.g,r=Rt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=tt){Ze.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,n=Rt.g,i=Rt.b;return e!==tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(An),this.setHSL(An.h+e,An.s+t,An.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(vs);const n=Qi(An.h,vs.h,t),i=Qi(An.s,vs.s,t),r=Qi(An.l,vs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new _e;_e.NAMES=_l;let Pu=0;class an extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=tn(),this.name="",this.type="Material",this.blending=Ei,this.side=cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=to,this.blendDst=no,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ta,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==to&&(n.blendSrc=this.blendSrc),this.blendDst!==no&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ta&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mn extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new w,ys=new ue;class Et{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ao,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ys.fromBufferAttribute(this,t),ys.applyMatrix3(e),this.setXY(t,ys.x,ys.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=on(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=on(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=on(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=on(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=on(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ao&&(e.usage=this.usage),e}}class xl extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vl extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pt extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Du=0;const Wt=new Le,Pr=new rt,di=new w,Ht=new Je,Wi=new Je,vt=new w;class Ct extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=tn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fl(e)?vl:xl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,n){return Wt.makeTranslation(e,t,n),this.applyMatrix4(Wt),this}scale(e,t,n){return Wt.makeScale(e,t,n),this.applyMatrix4(Wt),this}lookAt(e){return Pr.lookAt(e),Pr.updateMatrix(),this.applyMatrix4(Pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Je);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Wi.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(Ht.min,Wi.min),Ht.expandByPoint(vt),vt.addVectors(Ht.max,Wi.max),Ht.expandByPoint(vt)):(Ht.expandByPoint(Wi.min),Ht.expandByPoint(Wi.max))}Ht.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)vt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(vt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)vt.fromBufferAttribute(a,l),c&&(di.fromBufferAttribute(e,l),vt.add(di)),i=Math.max(i,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let A=0;A<a;A++)l[A]=new w,h[A]=new w;const u=new w,d=new w,f=new w,g=new ue,_=new ue,m=new ue,p=new w,v=new w;function x(A,H,G){u.fromArray(i,A*3),d.fromArray(i,H*3),f.fromArray(i,G*3),g.fromArray(o,A*2),_.fromArray(o,H*2),m.fromArray(o,G*2),d.sub(u),f.sub(u),_.sub(g),m.sub(g);const $=1/(_.x*m.y-m.x*_.y);isFinite($)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar($),v.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar($),l[A].add(p),l[H].add(p),l[G].add(p),h[A].add(v),h[H].add(v),h[G].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let A=0,H=M.length;A<H;++A){const G=M[A],$=G.start,D=G.count;for(let O=$,N=$+D;O<N;O+=3)x(n[O+0],n[O+1],n[O+2])}const L=new w,R=new w,T=new w,I=new w;function y(A){T.fromArray(r,A*3),I.copy(T);const H=l[A];L.copy(H),L.sub(T.multiplyScalar(T.dot(H))).normalize(),R.crossVectors(I,H);const $=R.dot(h[A])<0?-1:1;c[A*4]=L.x,c[A*4+1]=L.y,c[A*4+2]=L.z,c[A*4+3]=$}for(let A=0,H=M.length;A<H;++A){const G=M[A],$=G.start,D=G.count;for(let O=$,N=$+D;O<N;O+=3)y(n[O+0]),y(n[O+1]),y(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new w,r=new w,o=new w,a=new w,c=new w,l=new w,h=new w,u=new w;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Et(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ct,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ba=new Le,zn=new Oi,Ms=new ln,za=new w,fi=new w,pi=new w,mi=new w,Dr=new w,Ss=new w,Es=new ue,Ts=new ue,bs=new ue,ka=new w,Ha=new w,Ga=new w,As=new w,ws=new w;class Ae extends rt{constructor(e=new Ct,t=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ss.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Dr.fromBufferAttribute(u,e),o?Ss.addScaledVector(Dr,h):Ss.addScaledVector(Dr.sub(t),h))}t.add(Ss)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(r),zn.copy(e.ray).recast(e.near),!(Ms.containsPoint(zn.origin)===!1&&(zn.intersectSphere(Ms,za)===null||zn.origin.distanceToSquared(za)>(e.far-e.near)**2))&&(Ba.copy(r).invert(),zn.copy(e.ray).applyMatrix4(Ba),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,L=x;M<L;M+=3){const R=a.getX(M),T=a.getX(M+1),I=a.getX(M+2);i=Rs(this,p,e,n,l,h,u,R,T,I),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);i=Rs(this,o,e,n,l,h,u,v,x,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,L=x;M<L;M+=3){const R=M,T=M+1,I=M+2;i=Rs(this,p,e,n,l,h,u,R,T,I),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,x=m+1,M=m+2;i=Rs(this,o,e,n,l,h,u,v,x,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Iu(s,e,t,n,i,r,o,a){let c;if(e.side===Nt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===cn,a),c===null)return null;ws.copy(a),ws.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ws);return l<t.near||l>t.far?null:{distance:l,point:ws.clone(),object:s}}function Rs(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,fi),s.getVertexPosition(c,pi),s.getVertexPosition(l,mi);const h=Iu(s,e,t,n,fi,pi,mi,As);if(h){i&&(Es.fromBufferAttribute(i,a),Ts.fromBufferAttribute(i,c),bs.fromBufferAttribute(i,l),h.uv=qt.getInterpolation(As,fi,pi,mi,Es,Ts,bs,new ue)),r&&(Es.fromBufferAttribute(r,a),Ts.fromBufferAttribute(r,c),bs.fromBufferAttribute(r,l),h.uv1=qt.getInterpolation(As,fi,pi,mi,Es,Ts,bs,new ue),h.uv2=h.uv1),o&&(ka.fromBufferAttribute(o,a),Ha.fromBufferAttribute(o,c),Ga.fromBufferAttribute(o,l),h.normal=qt.getInterpolation(As,fi,pi,mi,ka,Ha,Ga,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new w,materialIndex:0};qt.getNormal(fi,pi,mi,u.normal),h.face=u}return h}class Bt extends Ct{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(u,2));function g(_,m,p,v,x,M,L,R,T,I,y){const A=M/T,H=L/I,G=M/2,$=L/2,D=R/2,O=T+1,N=I+1;let q=0,X=0;const Y=new w;for(let K=0;K<N;K++){const ee=K*H-$;for(let re=0;re<O;re++){const W=re*A-G;Y[_]=W*v,Y[m]=ee*x,Y[p]=D,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[p]=R>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(re/T),u.push(1-K/I),q+=1}}for(let K=0;K<I;K++)for(let ee=0;ee<T;ee++){const re=d+ee+O*K,W=d+ee+O*(K+1),j=d+(ee+1)+O*(K+1),ae=d+(ee+1)+O*K;c.push(re,W,ae),c.push(W,j,ae),X+=6}a.addGroup(f,X,y),f+=X,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ii(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Pt(s){const e={};for(let t=0;t<s.length;t++){const n=Ii(s[t]);for(const i in n)e[i]=n[i]}return e}function Uu(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function yl(s){return s.getRenderTarget()===null?s.outputColorSpace:Ze.workingColorSpace}const Nu={clone:Ii,merge:Pt};var Ou=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ou,this.fragmentShader=Fu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=Uu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ml extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dt extends Ml{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Di*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ti*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Di*2*Math.atan(Math.tan(Ti*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ti*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gi=-90,_i=1;class Bu extends rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Dt(gi,_i,e,t);i.layers=this.layers,this.add(i);const r=new Dt(gi,_i,e,t);r.layers=this.layers,this.add(r);const o=new Dt(gi,_i,e,t);o.layers=this.layers,this.add(o);const a=new Dt(gi,_i,e,t);a.layers=this.layers,this.add(a);const c=new Dt(gi,_i,e,t);c.layers=this.layers,this.add(c);const l=new Dt(gi,_i,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Sl extends St{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:wi,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zu extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(es("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Kn?tt:jt),this.texture=new Sl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Bt(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:Dn});r.uniforms.tEquirect.value=t;const o=new Ae(i,r),a=t.minFilter;return t.minFilter===$n&&(t.minFilter=Ft),new Bu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Ir=new w,ku=new w,Hu=new We;class Yt{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ir.subVectors(n,t).cross(ku.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ir),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hu.getNormalMatrix(e),i=this.coplanarPoint(Ir).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new ln,Cs=new w;class Ao{constructor(e=new Yt,t=new Yt,n=new Yt,i=new Yt,r=new Yt,o=new Yt){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],v=i[13],x=i[14],M=i[15];if(n[0].setComponents(c-r,d-l,m-f,M-p).normalize(),n[1].setComponents(c+r,d+l,m+f,M+p).normalize(),n[2].setComponents(c+o,d+h,m+g,M+v).normalize(),n[3].setComponents(c-o,d-h,m-g,M-v).normalize(),n[4].setComponents(c-a,d-u,m-_,M-x).normalize(),t===yn)n[5].setComponents(c+a,d+u,m+_,M+x).normalize();else if(t===Zs)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(e){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Cs.x=i.normal.x>0?e.max.x:e.min.x,Cs.y=i.normal.y>0?e.max.y:e.min.y,Cs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function El(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Gu(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,d=l.usage,f=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),l.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){const d=h.array,f=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,l),f.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];t?s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}class sr extends Ct{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*d-o;for(let x=0;x<l;x++){const M=x*u-r;g.push(M,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const x=v+l*p,M=v+l*(p+1),L=v+1+l*(p+1),R=v+1+l*p;f.push(x,M,R),f.push(M,L,R)}this.setIndex(f),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(_,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ku=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$u=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ju=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ju=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Qu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,td=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,id=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vd="gl_FragColor = linearToOutputTexel( gl_FragColor );",yd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Md=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ed=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ld=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Dd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Id=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ud=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Od=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$d=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ef=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,rf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,of=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,af=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,df=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ff=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_f=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ef=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Af=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Df=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,If=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Of=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ff=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$f=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Zf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ip=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,op=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,up=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:Vu,alphahash_pars_fragment:Wu,alphamap_fragment:Xu,alphamap_pars_fragment:qu,alphatest_fragment:Yu,alphatest_pars_fragment:Ku,aomap_fragment:$u,aomap_pars_fragment:ju,batching_pars_vertex:Zu,batching_vertex:Ju,begin_vertex:Qu,beginnormal_vertex:ed,bsdfs:td,iridescence_fragment:nd,bumpmap_pars_fragment:id,clipping_planes_fragment:sd,clipping_planes_pars_fragment:rd,clipping_planes_pars_vertex:od,clipping_planes_vertex:ad,color_fragment:cd,color_pars_fragment:ld,color_pars_vertex:hd,color_vertex:ud,common:dd,cube_uv_reflection_fragment:fd,defaultnormal_vertex:pd,displacementmap_pars_vertex:md,displacementmap_vertex:gd,emissivemap_fragment:_d,emissivemap_pars_fragment:xd,colorspace_fragment:vd,colorspace_pars_fragment:yd,envmap_fragment:Md,envmap_common_pars_fragment:Sd,envmap_pars_fragment:Ed,envmap_pars_vertex:Td,envmap_physical_pars_fragment:Od,envmap_vertex:bd,fog_vertex:Ad,fog_pars_vertex:wd,fog_fragment:Rd,fog_pars_fragment:Cd,gradientmap_pars_fragment:Ld,lightmap_fragment:Pd,lightmap_pars_fragment:Dd,lights_lambert_fragment:Id,lights_lambert_pars_fragment:Ud,lights_pars_begin:Nd,lights_toon_fragment:Fd,lights_toon_pars_fragment:Bd,lights_phong_fragment:zd,lights_phong_pars_fragment:kd,lights_physical_fragment:Hd,lights_physical_pars_fragment:Gd,lights_fragment_begin:Vd,lights_fragment_maps:Wd,lights_fragment_end:Xd,logdepthbuf_fragment:qd,logdepthbuf_pars_fragment:Yd,logdepthbuf_pars_vertex:Kd,logdepthbuf_vertex:$d,map_fragment:jd,map_pars_fragment:Zd,map_particle_fragment:Jd,map_particle_pars_fragment:Qd,metalnessmap_fragment:ef,metalnessmap_pars_fragment:tf,morphcolor_vertex:nf,morphnormal_vertex:sf,morphtarget_pars_vertex:rf,morphtarget_vertex:of,normal_fragment_begin:af,normal_fragment_maps:cf,normal_pars_fragment:lf,normal_pars_vertex:hf,normal_vertex:uf,normalmap_pars_fragment:df,clearcoat_normal_fragment_begin:ff,clearcoat_normal_fragment_maps:pf,clearcoat_pars_fragment:mf,iridescence_pars_fragment:gf,opaque_fragment:_f,packing:xf,premultiplied_alpha_fragment:vf,project_vertex:yf,dithering_fragment:Mf,dithering_pars_fragment:Sf,roughnessmap_fragment:Ef,roughnessmap_pars_fragment:Tf,shadowmap_pars_fragment:bf,shadowmap_pars_vertex:Af,shadowmap_vertex:wf,shadowmask_pars_fragment:Rf,skinbase_vertex:Cf,skinning_pars_vertex:Lf,skinning_vertex:Pf,skinnormal_vertex:Df,specularmap_fragment:If,specularmap_pars_fragment:Uf,tonemapping_fragment:Nf,tonemapping_pars_fragment:Of,transmission_fragment:Ff,transmission_pars_fragment:Bf,uv_pars_fragment:zf,uv_pars_vertex:kf,uv_vertex:Hf,worldpos_vertex:Gf,background_vert:Vf,background_frag:Wf,backgroundCube_vert:Xf,backgroundCube_frag:qf,cube_vert:Yf,cube_frag:Kf,depth_vert:$f,depth_frag:jf,distanceRGBA_vert:Zf,distanceRGBA_frag:Jf,equirect_vert:Qf,equirect_frag:ep,linedashed_vert:tp,linedashed_frag:np,meshbasic_vert:ip,meshbasic_frag:sp,meshlambert_vert:rp,meshlambert_frag:op,meshmatcap_vert:ap,meshmatcap_frag:cp,meshnormal_vert:lp,meshnormal_frag:hp,meshphong_vert:up,meshphong_frag:dp,meshphysical_vert:fp,meshphysical_frag:pp,meshtoon_vert:mp,meshtoon_frag:gp,points_vert:_p,points_frag:xp,shadow_vert:vp,shadow_frag:yp,sprite_vert:Mp,sprite_frag:Sp},oe={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},rn={basic:{uniforms:Pt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Pt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new _e(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Pt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Pt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Pt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new _e(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Pt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Pt([oe.points,oe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Pt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Pt([oe.common,oe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Pt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Pt([oe.sprite,oe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Pt([oe.common,oe.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Pt([oe.lights,oe.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};rn.physical={uniforms:Pt([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Ls={r:0,b:0,g:0};function Ep(s,e,t,n,i,r,o){const a=new _e(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(m,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),v=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===tr)?(h===void 0&&(h=new Ae(new Bt(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Ii(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Ze.getTransfer(x.colorSpace)!==st,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ae(new sr(2,2),new Zn({name:"BackgroundMaterial",uniforms:Ii(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(x.colorSpace)!==st,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,p){m.getRGB(Ls,yl(s)),n.buffers.color.setClear(Ls.r,Ls.g,Ls.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function Tp(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null);let l=c,h=!1;function u(D,O,N,q,X){let Y=!1;if(o){const K=_(q,N,O);l!==K&&(l=K,f(l.object)),Y=p(D,q,N,X),Y&&v(D,q,N,X)}else{const K=O.wireframe===!0;(l.geometry!==q.id||l.program!==N.id||l.wireframe!==K)&&(l.geometry=q.id,l.program=N.id,l.wireframe=K,Y=!0)}X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,I(D,O,N,q),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(D){return n.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,O,N){const q=N.wireframe===!0;let X=a[D.id];X===void 0&&(X={},a[D.id]=X);let Y=X[O.id];Y===void 0&&(Y={},X[O.id]=Y);let K=Y[q];return K===void 0&&(K=m(d()),Y[q]=K),K}function m(D){const O=[],N=[],q=[];for(let X=0;X<i;X++)O[X]=0,N[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:N,attributeDivisors:q,object:D,attributes:{},index:null}}function p(D,O,N,q){const X=l.attributes,Y=O.attributes;let K=0;const ee=N.getAttributes();for(const re in ee)if(ee[re].location>=0){const j=X[re];let ae=Y[re];if(ae===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor)),j===void 0||j.attribute!==ae||ae&&j.data!==ae.data)return!0;K++}return l.attributesNum!==K||l.index!==q}function v(D,O,N,q){const X={},Y=O.attributes;let K=0;const ee=N.getAttributes();for(const re in ee)if(ee[re].location>=0){let j=Y[re];j===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));const ae={};ae.attribute=j,j&&j.data&&(ae.data=j.data),X[re]=ae,K++}l.attributes=X,l.attributesNum=K,l.index=q}function x(){const D=l.newAttributes;for(let O=0,N=D.length;O<N;O++)D[O]=0}function M(D){L(D,0)}function L(D,O){const N=l.newAttributes,q=l.enabledAttributes,X=l.attributeDivisors;N[D]=1,q[D]===0&&(s.enableVertexAttribArray(D),q[D]=1),X[D]!==O&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,O),X[D]=O)}function R(){const D=l.newAttributes,O=l.enabledAttributes;for(let N=0,q=O.length;N<q;N++)O[N]!==D[N]&&(s.disableVertexAttribArray(N),O[N]=0)}function T(D,O,N,q,X,Y,K){K===!0?s.vertexAttribIPointer(D,O,N,X,Y):s.vertexAttribPointer(D,O,N,q,X,Y)}function I(D,O,N,q){if(n.isWebGL2===!1&&(D.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const X=q.attributes,Y=N.getAttributes(),K=O.defaultAttributeValues;for(const ee in Y){const re=Y[ee];if(re.location>=0){let W=X[ee];if(W===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(W=D.instanceColor)),W!==void 0){const j=W.normalized,ae=W.itemSize,ye=t.get(W);if(ye===void 0)continue;const xe=ye.buffer,Ue=ye.type,Ne=ye.bytesPerElement,we=n.isWebGL2===!0&&(Ue===s.INT||Ue===s.UNSIGNED_INT||W.gpuType===nl);if(W.isInterleavedBufferAttribute){const Xe=W.data,B=Xe.stride,Tt=W.offset;if(Xe.isInstancedInterleavedBuffer){for(let Ee=0;Ee<re.locationSize;Ee++)L(re.location+Ee,Xe.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let Ee=0;Ee<re.locationSize;Ee++)M(re.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,xe);for(let Ee=0;Ee<re.locationSize;Ee++)T(re.location+Ee,ae/re.locationSize,Ue,j,B*Ne,(Tt+ae/re.locationSize*Ee)*Ne,we)}else{if(W.isInstancedBufferAttribute){for(let Xe=0;Xe<re.locationSize;Xe++)L(re.location+Xe,W.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Xe=0;Xe<re.locationSize;Xe++)M(re.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,xe);for(let Xe=0;Xe<re.locationSize;Xe++)T(re.location+Xe,ae/re.locationSize,Ue,j,ae*Ne,ae/re.locationSize*Xe*Ne,we)}}else if(K!==void 0){const j=K[ee];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(re.location,j);break;case 3:s.vertexAttrib3fv(re.location,j);break;case 4:s.vertexAttrib4fv(re.location,j);break;default:s.vertexAttrib1fv(re.location,j)}}}}R()}function y(){G();for(const D in a){const O=a[D];for(const N in O){const q=O[N];for(const X in q)g(q[X].object),delete q[X];delete O[N]}delete a[D]}}function A(D){if(a[D.id]===void 0)return;const O=a[D.id];for(const N in O){const q=O[N];for(const X in q)g(q[X].object),delete q[X];delete O[N]}delete a[D.id]}function H(D){for(const O in a){const N=a[O];if(N[D.id]===void 0)continue;const q=N[D.id];for(const X in q)g(q[X].object),delete q[X];delete N[D.id]}}function G(){$(),h=!0,l!==c&&(l=c,f(l.object))}function $(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:G,resetDefaultState:$,dispose:y,releaseStatesOfGeometry:A,releaseStatesOfProgram:H,initAttributes:x,enableAttribute:M,disableUnusedAttributes:R}}function bp(s,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Ap(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,M=o||e.has("OES_texture_float"),L=x&&M,R=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:L,maxSamples:R}}function wp(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Yt,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const v=r?0:n,x=v*4;let M=p.clippingState||null;c.value=M,M=h(g,d,x,f);for(let L=0;L!==x;++L)M[L]=t[L];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=f;x!==_;++x,M+=4)o.copy(u[x]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Rp(s){let e=new WeakMap;function t(o,a){return a===io?o.mapping=wi:a===so&&(o.mapping=Ri),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===io||a===so)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new zu(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class wo extends Ml{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Mi=4,Va=[.125,.215,.35,.446,.526,.582],Wn=20,Ur=new wo,Wa=new _e;let Nr=null,Or=0,Fr=0;const Gn=(1+Math.sqrt(5))/2,xi=1/Gn,Xa=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,Gn,xi),new w(0,Gn,-xi),new w(xi,0,Gn),new w(-xi,0,Gn),new w(Gn,xi,0),new w(-Gn,xi,0)];class ho{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Nr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ka(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ya(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nr,Or,Fr),e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wi||e.mapping===Ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:ns,format:$t,colorSpace:mt,depthBuffer:!1},i=qa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qa(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cp(r)),this._blurMaterial=Lp(r,e,t)}return i}_compileMaterial(e){const t=new Ae(this._lodPlanes[0],e);this._renderer.compile(t,Ur)}_sceneToCubeUV(e,t,n,i){const a=new Dt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Wa),h.toneMapping=In,h.autoClear=!1;const f=new Mn({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),g=new Ae(new Bt,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Wa),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;Ps(i,v*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===wi||e.mapping===Ri;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ka()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ya());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ae(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Ps(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ur)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Xa[(i-1)%Xa.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ae(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Wn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Wn;m>Wn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wn}`);const p=[];let v=0;for(let T=0;T<Wn;++T){const I=T/_,y=Math.exp(-I*I/2);p.push(y),T===0?v+=y:T<m&&(v+=2*y)}for(let T=0;T<p.length;T++)p[T]=p[T]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const M=this._sizeLods[i],L=3*M*(i>x-Mi?i-x+Mi:0),R=4*(this._cubeSize-M);Ps(t,L,R,3*M,2*M),c.setRenderTarget(t),c.render(u,Ur)}}function Cp(s){const e=[],t=[],n=[];let i=s;const r=s-Mi+1+Va.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Mi?c=Va[o-s+Mi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),x=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let R=0;R<f;R++){const T=R%3*2/3-1,I=R>2?0:-1,y=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];v.set(y,_*g*R),x.set(d,m*g*R);const A=[R,R,R,R,R,R];M.set(A,p*g*R)}const L=new Ct;L.setAttribute("position",new Et(v,_)),L.setAttribute("uv",new Et(x,m)),L.setAttribute("faceIndex",new Et(M,p)),e.push(L),i>Mi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function qa(s,e,t){const n=new jn(s,e,t);return n.texture.mapping=tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Lp(s,e,t){const n=new Float32Array(Wn),i=new w(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Ya(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Ka(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Ro(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Pp(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===io||c===so,h=c===wi||c===Ri;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new ho(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new ho(s));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Dp(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ip(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let x=0,M=v.length;x<M;x+=3){const L=v[x+0],R=v[x+1],T=v[x+2];d.push(L,R,R,T,T,L)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const L=x+0,R=x+1,T=x+2;d.push(L,R,R,T,T,L)}}else return;const m=new(fl(d)?vl:xl)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Up(s,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,g){s.drawElements(r,g,a,f*c),t.update(g,r,1)}function u(f,g,_){if(_===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*c,_),t.update(g,r,_)}function d(f,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,_);let p=0;for(let v=0;v<_;v++)p+=g[v];t.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Np(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Op(s,e){return s[0]-e[0]}function Fp(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Bp(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new nt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==_){let O=function(){$.dispose(),r.delete(h),h.removeEventListener("dispose",O)};var f=O;m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,L=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let y=0;x===!0&&(y=1),M===!0&&(y=2),L===!0&&(y=3);let A=h.attributes.position.count*y,H=1;A>e.maxTextureSize&&(H=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const G=new Float32Array(A*H*4*_),$=new gl(G,A,H,_);$.type=vn,$.needsUpdate=!0;const D=y*4;for(let N=0;N<_;N++){const q=R[N],X=T[N],Y=I[N],K=A*H*4*N;for(let ee=0;ee<q.count;ee++){const re=ee*D;x===!0&&(o.fromBufferAttribute(q,ee),G[K+re+0]=o.x,G[K+re+1]=o.y,G[K+re+2]=o.z,G[K+re+3]=0),M===!0&&(o.fromBufferAttribute(X,ee),G[K+re+4]=o.x,G[K+re+5]=o.y,G[K+re+6]=o.z,G[K+re+7]=0),L===!0&&(o.fromBufferAttribute(Y,ee),G[K+re+8]=o.x,G[K+re+9]=o.y,G[K+re+10]=o.z,G[K+re+11]=Y.itemSize===4?o.w:1)}}m={count:_,texture:$,size:new ue(A,H)},r.set(h,m),h.addEventListener("dispose",O)}let p=0;for(let x=0;x<d.length;x++)p+=d[x];const v=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[h.id]=_}for(let M=0;M<g;M++){const L=_[M];L[0]=M,L[1]=d[M]}_.sort(Fp);for(let M=0;M<8;M++)M<g&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Op);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const L=a[M],R=L[0],T=L[1];R!==Number.MAX_SAFE_INTEGER&&T?(m&&h.getAttribute("morphTarget"+M)!==m[R]&&h.setAttribute("morphTarget"+M,m[R]),p&&h.getAttribute("morphNormal"+M)!==p[R]&&h.setAttribute("morphNormal"+M,p[R]),i[M]=T,v+=T):(m&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),p&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const x=h.morphTargetsRelative?1:1-v;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function zp(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Tl extends St{constructor(e,t,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:Yn,h!==Yn&&h!==Li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Yn&&(n=Ln),n===void 0&&h===Li&&(n=qn),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:yt,this.minFilter=c!==void 0?c:yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const bl=new St,Al=new Tl(1,1);Al.compareFunction=dl;const wl=new gl,Rl=new Su,Cl=new Sl,$a=[],ja=[],Za=new Float32Array(16),Ja=new Float32Array(9),Qa=new Float32Array(4);function Fi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=$a[i];if(r===void 0&&(r=new Float32Array(i),$a[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function gt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function _t(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function rr(s,e){let t=ja[e];t===void 0&&(t=new Int32Array(e),ja[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function kp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Hp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2fv(this.addr,e),_t(t,e)}}function Gp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;s.uniform3fv(this.addr,e),_t(t,e)}}function Vp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4fv(this.addr,e),_t(t,e)}}function Wp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Qa.set(n),s.uniformMatrix2fv(this.addr,!1,Qa),_t(t,n)}}function Xp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Ja.set(n),s.uniformMatrix3fv(this.addr,!1,Ja),_t(t,n)}}function qp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Za.set(n),s.uniformMatrix4fv(this.addr,!1,Za),_t(t,n)}}function Yp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Kp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2iv(this.addr,e),_t(t,e)}}function $p(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;s.uniform3iv(this.addr,e),_t(t,e)}}function jp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4iv(this.addr,e),_t(t,e)}}function Zp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Jp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2uiv(this.addr,e),_t(t,e)}}function Qp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;s.uniform3uiv(this.addr,e),_t(t,e)}}function em(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4uiv(this.addr,e),_t(t,e)}}function tm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Al:bl;t.setTexture2D(e||r,i)}function nm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Rl,i)}function im(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Cl,i)}function sm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||wl,i)}function rm(s){switch(s){case 5126:return kp;case 35664:return Hp;case 35665:return Gp;case 35666:return Vp;case 35674:return Wp;case 35675:return Xp;case 35676:return qp;case 5124:case 35670:return Yp;case 35667:case 35671:return Kp;case 35668:case 35672:return $p;case 35669:case 35673:return jp;case 5125:return Zp;case 36294:return Jp;case 36295:return Qp;case 36296:return em;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return nm;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return sm}}function om(s,e){s.uniform1fv(this.addr,e)}function am(s,e){const t=Fi(e,this.size,2);s.uniform2fv(this.addr,t)}function cm(s,e){const t=Fi(e,this.size,3);s.uniform3fv(this.addr,t)}function lm(s,e){const t=Fi(e,this.size,4);s.uniform4fv(this.addr,t)}function hm(s,e){const t=Fi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function um(s,e){const t=Fi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function dm(s,e){const t=Fi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function fm(s,e){s.uniform1iv(this.addr,e)}function pm(s,e){s.uniform2iv(this.addr,e)}function mm(s,e){s.uniform3iv(this.addr,e)}function gm(s,e){s.uniform4iv(this.addr,e)}function _m(s,e){s.uniform1uiv(this.addr,e)}function xm(s,e){s.uniform2uiv(this.addr,e)}function vm(s,e){s.uniform3uiv(this.addr,e)}function ym(s,e){s.uniform4uiv(this.addr,e)}function Mm(s,e,t){const n=this.cache,i=e.length,r=rr(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||bl,r[o])}function Sm(s,e,t){const n=this.cache,i=e.length,r=rr(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Rl,r[o])}function Em(s,e,t){const n=this.cache,i=e.length,r=rr(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Cl,r[o])}function Tm(s,e,t){const n=this.cache,i=e.length,r=rr(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||wl,r[o])}function bm(s){switch(s){case 5126:return om;case 35664:return am;case 35665:return cm;case 35666:return lm;case 35674:return hm;case 35675:return um;case 35676:return dm;case 5124:case 35670:return fm;case 35667:case 35671:return pm;case 35668:case 35672:return mm;case 35669:case 35673:return gm;case 5125:return _m;case 36294:return xm;case 36295:return vm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return Sm;case 35680:case 36300:case 36308:case 36293:return Em;case 36289:case 36303:case 36311:case 36292:return Tm}}class Am{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rm(t.type)}}class wm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bm(t.type)}}class Rm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Br=/(\w+)(\])?(\[|\.)?/g;function ec(s,e){s.seq.push(e),s.map[e.id]=e}function Cm(s,e,t){const n=s.name,i=n.length;for(Br.lastIndex=0;;){const r=Br.exec(n),o=Br.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){ec(t,l===void 0?new Am(a,s,e):new wm(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Rm(a),ec(t,u)),t=u}}}class Vs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Cm(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function tc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Lm=37297;let Pm=0;function Dm(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Im(s){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(s);let n;switch(e===t?n="":e===js&&t===$s?n="LinearDisplayP3ToLinearSRGB":e===$s&&t===js&&(n="LinearSRGBToLinearDisplayP3"),s){case mt:case nr:return[n,"LinearTransferOETF"];case tt:case Eo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function nc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Dm(s.getShaderSource(e),o)}else return i}function Um(s,e){const t=Im(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Nm(s,e){let t;switch(e){case Ph:t="Linear";break;case Dh:t="Reinhard";break;case Ih:t="OptimizedCineon";break;case Qc:t="ACESFilmic";break;case Nh:t="AgX";break;case Uh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Om(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Si).join(`
`)}function Fm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Si).join(`
`)}function Bm(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zm(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Si(s){return s!==""}function ic(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const km=/^[ \t]*#include +<([\w\d./]+)>/gm;function uo(s){return s.replace(km,Gm)}const Hm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Gm(s,e){let t=ke[e];if(t===void 0){const n=Hm.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return uo(t)}const Vm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rc(s){return s.replace(Vm,Wm)}function Wm(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function oc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xm(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===jc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Zc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===xn&&(e="SHADOWMAP_TYPE_VSM"),e}function qm(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case wi:case Ri:e="ENVMAP_TYPE_CUBE";break;case tr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ym(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ri:e="ENVMAP_MODE_REFRACTION";break}return e}function Km(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Jc:e="ENVMAP_BLENDING_MULTIPLY";break;case Ch:e="ENVMAP_BLENDING_MIX";break;case Lh:e="ENVMAP_BLENDING_ADD";break}return e}function $m(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function jm(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Xm(t),l=qm(t),h=Ym(t),u=Km(t),d=$m(t),f=t.isWebGL2?"":Om(t),g=Fm(t),_=Bm(r),m=i.createProgram();let p,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Si).join(`
`),p.length>0&&(p+=`
`),v=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Si).join(`
`),v.length>0&&(v+=`
`)):(p=[oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Si).join(`
`),v=[f,oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?ke.tonemapping_pars_fragment:"",t.toneMapping!==In?Nm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Um("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Si).join(`
`)),o=uo(o),o=ic(o,t),o=sc(o,t),a=uo(a),a=ic(a,t),a=sc(a,t),o=rc(o),a=rc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ba?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ba?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=x+p+o,L=x+v+a,R=tc(i,i.VERTEX_SHADER,M),T=tc(i,i.FRAGMENT_SHADER,L);i.attachShader(m,R),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function I(G){if(s.debug.checkShaderErrors){const $=i.getProgramInfoLog(m).trim(),D=i.getShaderInfoLog(R).trim(),O=i.getShaderInfoLog(T).trim();let N=!0,q=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(N=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,R,T);else{const X=nc(i,R,"vertex"),Y=nc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+X+`
`+Y)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(D===""||O==="")&&(q=!1);q&&(G.diagnostics={runnable:N,programLog:$,vertexShader:{log:D,prefix:p},fragmentShader:{log:O,prefix:v}})}i.deleteShader(R),i.deleteShader(T),y=new Vs(i,m),A=zm(i,m)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=i.getProgramParameter(m,Lm)),H},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pm++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=T,this}let Zm=0;class Jm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Qm(e),t.set(e,n)),n}}class Qm{constructor(e){this.id=Zm++,this.code=e,this.usedTimes=0}}function eg(s,e,t,n,i,r,o){const a=new bo,c=new Jm,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function m(y,A,H,G,$){const D=G.fog,O=$.geometry,N=y.isMeshStandardMaterial?G.environment:null,q=(y.isMeshStandardMaterial?t:e).get(y.envMap||N),X=q&&q.mapping===tr?q.image.height:null,Y=g[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const K=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ee=K!==void 0?K.length:0;let re=0;O.morphAttributes.position!==void 0&&(re=1),O.morphAttributes.normal!==void 0&&(re=2),O.morphAttributes.color!==void 0&&(re=3);let W,j,ae,ye;if(Y){const lt=rn[Y];W=lt.vertexShader,j=lt.fragmentShader}else W=y.vertexShader,j=y.fragmentShader,c.update(y),ae=c.getVertexShaderID(y),ye=c.getFragmentShaderID(y);const xe=s.getRenderTarget(),Ue=$.isInstancedMesh===!0,Ne=$.isBatchedMesh===!0,we=!!y.map,Xe=!!y.matcap,B=!!q,Tt=!!y.aoMap,Ee=!!y.lightMap,Pe=!!y.bumpMap,me=!!y.normalMap,it=!!y.displacementMap,Fe=!!y.emissiveMap,b=!!y.metalnessMap,S=!!y.roughnessMap,F=y.anisotropy>0,te=y.clearcoat>0,J=y.iridescence>0,ne=y.sheen>0,ge=y.transmission>0,le=F&&!!y.anisotropyMap,pe=te&&!!y.clearcoatMap,be=te&&!!y.clearcoatNormalMap,Be=te&&!!y.clearcoatRoughnessMap,Z=J&&!!y.iridescenceMap,je=J&&!!y.iridescenceThicknessMap,He=ne&&!!y.sheenColorMap,De=ne&&!!y.sheenRoughnessMap,Se=!!y.specularMap,he=!!y.specularColorMap,C=!!y.specularIntensityMap,ie=ge&&!!y.transmissionMap,ve=ge&&!!y.thicknessMap,fe=!!y.gradientMap,Q=!!y.alphaMap,P=y.alphaTest>0,se=!!y.alphaHash,ce=!!y.extensions,Re=!!O.attributes.uv1,Te=!!O.attributes.uv2,qe=!!O.attributes.uv3;let Ye=In;return y.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Ye=s.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:j,defines:y.defines,customVertexShaderID:ae,customFragmentShaderID:ye,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ne,instancing:Ue,instancingColor:Ue&&$.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:mt,map:we,matcap:Xe,envMap:B,envMapMode:B&&q.mapping,envMapCubeUVHeight:X,aoMap:Tt,lightMap:Ee,bumpMap:Pe,normalMap:me,displacementMap:d&&it,emissiveMap:Fe,normalMapObjectSpace:me&&y.normalMapType===$h,normalMapTangentSpace:me&&y.normalMapType===ul,metalnessMap:b,roughnessMap:S,anisotropy:F,anisotropyMap:le,clearcoat:te,clearcoatMap:pe,clearcoatNormalMap:be,clearcoatRoughnessMap:Be,iridescence:J,iridescenceMap:Z,iridescenceThicknessMap:je,sheen:ne,sheenColorMap:He,sheenRoughnessMap:De,specularMap:Se,specularColorMap:he,specularIntensityMap:C,transmission:ge,transmissionMap:ie,thicknessMap:ve,gradientMap:fe,opaque:y.transparent===!1&&y.blending===Ei,alphaMap:Q,alphaTest:P,alphaHash:se,combine:y.combine,mapUv:we&&_(y.map.channel),aoMapUv:Tt&&_(y.aoMap.channel),lightMapUv:Ee&&_(y.lightMap.channel),bumpMapUv:Pe&&_(y.bumpMap.channel),normalMapUv:me&&_(y.normalMap.channel),displacementMapUv:it&&_(y.displacementMap.channel),emissiveMapUv:Fe&&_(y.emissiveMap.channel),metalnessMapUv:b&&_(y.metalnessMap.channel),roughnessMapUv:S&&_(y.roughnessMap.channel),anisotropyMapUv:le&&_(y.anisotropyMap.channel),clearcoatMapUv:pe&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:be&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:je&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:He&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(y.sheenRoughnessMap.channel),specularMapUv:Se&&_(y.specularMap.channel),specularColorMapUv:he&&_(y.specularColorMap.channel),specularIntensityMapUv:C&&_(y.specularIntensityMap.channel),transmissionMapUv:ie&&_(y.transmissionMap.channel),thicknessMapUv:ve&&_(y.thicknessMap.channel),alphaMapUv:Q&&_(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(me||F),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:Te,vertexUv3s:qe,pointsUvs:$.isPoints===!0&&!!O.attributes.uv&&(we||Q),fog:!!D,useFog:y.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:$.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:re,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ye,useLegacyLights:s._useLegacyLights,decodeVideoTexture:we&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===st,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ut,flipSided:y.side===Nt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ce&&y.extensions.derivatives===!0,extensionFragDepth:ce&&y.extensions.fragDepth===!0,extensionDrawBuffers:ce&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const H in y.defines)A.push(H),A.push(y.defines[H]);return y.isRawShaderMaterial===!1&&(v(A,y),x(A,y),A.push(s.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function v(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function x(y,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function M(y){const A=g[y.type];let H;if(A){const G=rn[A];H=Nu.clone(G.uniforms)}else H=y.uniforms;return H}function L(y,A){let H;for(let G=0,$=l.length;G<$;G++){const D=l[G];if(D.cacheKey===A){H=D,++H.usedTimes;break}}return H===void 0&&(H=new jm(s,A,y,r),l.push(H)),H}function R(y){if(--y.usedTimes===0){const A=l.indexOf(y);l[A]=l[l.length-1],l.pop(),y.destroy()}}function T(y){c.remove(y)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:L,releaseProgram:R,releaseShaderCache:T,programs:l,dispose:I}}function tg(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function ng(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ac(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function cc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||ng),n.length>1&&n.sort(d||ac),i.length>1&&i.sort(d||ac)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function ig(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new cc,s.set(n,[o])):i>=r.length?(o=new cc,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function sg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new _e};break;case"SpotLight":t={position:new w,direction:new w,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new w,halfWidth:new w,halfHeight:new w};break}return s[e.id]=t,t}}}function rg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let og=0;function ag(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function cg(s,e){const t=new sg,n=rg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new w);const r=new w,o=new Le,a=new Le;function c(h,u){let d=0,f=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let _=0,m=0,p=0,v=0,x=0,M=0,L=0,R=0,T=0,I=0,y=0;h.sort(ag);const A=u===!0?Math.PI:1;for(let G=0,$=h.length;G<$;G++){const D=h[G],O=D.color,N=D.intensity,q=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=O.r*N*A,f+=O.g*N*A,g+=O.b*N*A;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],N);y++}else if(D.isDirectionalLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity*A),D.castShadow){const K=D.shadow,ee=n.get(D);ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,i.directionalShadow[_]=ee,i.directionalShadowMap[_]=X,i.directionalShadowMatrix[_]=D.shadow.matrix,M++}i.directional[_]=Y,_++}else if(D.isSpotLight){const Y=t.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(O).multiplyScalar(N*A),Y.distance=q,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[p]=Y;const K=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,K.updateMatrices(D),D.castShadow&&I++),i.spotLightMatrix[p]=K.matrix,D.castShadow){const ee=n.get(D);ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,i.spotShadow[p]=ee,i.spotShadowMap[p]=X,R++}p++}else if(D.isRectAreaLight){const Y=t.get(D);Y.color.copy(O).multiplyScalar(N),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[v]=Y,v++}else if(D.isPointLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity*A),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const K=D.shadow,ee=n.get(D);ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,ee.shadowCameraNear=K.camera.near,ee.shadowCameraFar=K.camera.far,i.pointShadow[m]=ee,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=D.shadow.matrix,L++}i.point[m]=Y,m++}else if(D.isHemisphereLight){const Y=t.get(D);Y.skyColor.copy(D.color).multiplyScalar(N*A),Y.groundColor.copy(D.groundColor).multiplyScalar(N*A),i.hemi[x]=Y,x++}}v>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const H=i.hash;(H.directionalLength!==_||H.pointLength!==m||H.spotLength!==p||H.rectAreaLength!==v||H.hemiLength!==x||H.numDirectionalShadows!==M||H.numPointShadows!==L||H.numSpotShadows!==R||H.numSpotMaps!==T||H.numLightProbes!==y)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=v,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=R+T-I,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=y,H.directionalLength=_,H.pointLength=m,H.spotLength=p,H.rectAreaLength=v,H.hemiLength=x,H.numDirectionalShadows=M,H.numPointShadows=L,H.numSpotShadows=R,H.numSpotMaps=T,H.numLightProbes=y,i.version=og++)}function l(h,u){let d=0,f=0,g=0,_=0,m=0;const p=u.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const M=h[v];if(M.isDirectionalLight){const L=i.directional[d];L.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(p),d++}else if(M.isSpotLight){const L=i.spot[g];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(p),L.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const L=i.rectArea[_];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),L.halfWidth.set(M.width*.5,0,0),L.halfHeight.set(0,M.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const L=i.point[f];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const L=i.hemi[m];L.direction.setFromMatrixPosition(M.matrixWorld),L.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function lc(s,e){const t=new cg(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function lg(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new lc(s,e),t.set(r,[c])):o>=a.length?(c=new lc(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class hg extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ug extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pg(s,e,t){let n=new Ao;const i=new ue,r=new ue,o=new nt,a=new hg({depthPacking:Kh}),c=new ug,l={},h=t.maxTextureSize,u={[cn]:Nt,[Nt]:cn,[Ut]:Ut},d=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:dg,fragmentShader:fg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ct;g.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ae(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jc;let p=this.type;this.render=function(R,T,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=s.getRenderTarget(),A=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Dn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const $=p!==xn&&this.type===xn,D=p===xn&&this.type!==xn;for(let O=0,N=R.length;O<N;O++){const q=R[O],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const Y=X.getFrameExtents();if(i.multiply(Y),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,X.mapSize.y=r.y)),X.map===null||$===!0||D===!0){const ee=this.type!==xn?{minFilter:yt,magFilter:yt}:{};X.map!==null&&X.map.dispose(),X.map=new jn(i.x,i.y,ee),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const K=X.getViewportCount();for(let ee=0;ee<K;ee++){const re=X.getViewport(ee);o.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),G.viewport(o),X.updateMatrices(q,ee),n=X.getFrustum(),M(T,I,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===xn&&v(X,I),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,A,H)};function v(R,T){const I=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new jn(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(T,null,I,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(T,null,I,f,_,null)}function x(R,T,I,y){let A=null;const H=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(H!==void 0)A=H;else if(A=I.isPointLight===!0?c:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const G=A.uuid,$=T.uuid;let D=l[G];D===void 0&&(D={},l[G]=D);let O=D[$];O===void 0&&(O=A.clone(),D[$]=O,T.addEventListener("dispose",L)),A=O}if(A.visible=T.visible,A.wireframe=T.wireframe,y===xn?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:u[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,I.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const G=s.properties.get(A);G.light=I}return A}function M(R,T,I,y,A){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&A===xn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const $=e.update(R),D=R.material;if(Array.isArray(D)){const O=$.groups;for(let N=0,q=O.length;N<q;N++){const X=O[N],Y=D[X.materialIndex];if(Y&&Y.visible){const K=x(R,Y,y,A);R.onBeforeShadow(s,R,T,I,$,K,X),s.renderBufferDirect(I,null,$,K,R,X),R.onAfterShadow(s,R,T,I,$,K,X)}}}else if(D.visible){const O=x(R,D,y,A);R.onBeforeShadow(s,R,T,I,$,O,null),s.renderBufferDirect(I,null,$,O,R,null),R.onAfterShadow(s,R,T,I,$,O,null)}}const G=R.children;for(let $=0,D=G.length;$<D;$++)M(G[$],T,I,y,A)}function L(R){R.target.removeEventListener("dispose",L);for(const I in l){const y=l[I],A=R.target.uuid;A in y&&(y[A].dispose(),delete y[A])}}}function mg(s,e,t){const n=t.isWebGL2;function i(){let P=!1;const se=new nt;let ce=null;const Re=new nt(0,0,0,0);return{setMask:function(Te){ce!==Te&&!P&&(s.colorMask(Te,Te,Te,Te),ce=Te)},setLocked:function(Te){P=Te},setClear:function(Te,qe,Ye,at,lt){lt===!0&&(Te*=at,qe*=at,Ye*=at),se.set(Te,qe,Ye,at),Re.equals(se)===!1&&(s.clearColor(Te,qe,Ye,at),Re.copy(se))},reset:function(){P=!1,ce=null,Re.set(-1,0,0,0)}}}function r(){let P=!1,se=null,ce=null,Re=null;return{setTest:function(Te){Te?Ne(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(Te){se!==Te&&!P&&(s.depthMask(Te),se=Te)},setFunc:function(Te){if(ce!==Te){switch(Te){case Sh:s.depthFunc(s.NEVER);break;case Eh:s.depthFunc(s.ALWAYS);break;case Th:s.depthFunc(s.LESS);break;case qs:s.depthFunc(s.LEQUAL);break;case bh:s.depthFunc(s.EQUAL);break;case Ah:s.depthFunc(s.GEQUAL);break;case wh:s.depthFunc(s.GREATER);break;case Rh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=Te}},setLocked:function(Te){P=Te},setClear:function(Te){Re!==Te&&(s.clearDepth(Te),Re=Te)},reset:function(){P=!1,se=null,ce=null,Re=null}}}function o(){let P=!1,se=null,ce=null,Re=null,Te=null,qe=null,Ye=null,at=null,lt=null;return{setTest:function($e){P||($e?Ne(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function($e){se!==$e&&!P&&(s.stencilMask($e),se=$e)},setFunc:function($e,ut,sn){(ce!==$e||Re!==ut||Te!==sn)&&(s.stencilFunc($e,ut,sn),ce=$e,Re=ut,Te=sn)},setOp:function($e,ut,sn){(qe!==$e||Ye!==ut||at!==sn)&&(s.stencilOp($e,ut,sn),qe=$e,Ye=ut,at=sn)},setLocked:function($e){P=$e},setClear:function($e){lt!==$e&&(s.clearStencil($e),lt=$e)},reset:function(){P=!1,se=null,ce=null,Re=null,Te=null,qe=null,Ye=null,at=null,lt=null}}}const a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,_=[],m=null,p=!1,v=null,x=null,M=null,L=null,R=null,T=null,I=null,y=new _e(0,0,0),A=0,H=!1,G=null,$=null,D=null,O=null,N=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Y=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=Y>=1):K.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=Y>=2);let ee=null,re={};const W=s.getParameter(s.SCISSOR_BOX),j=s.getParameter(s.VIEWPORT),ae=new nt().fromArray(W),ye=new nt().fromArray(j);function xe(P,se,ce,Re){const Te=new Uint8Array(4),qe=s.createTexture();s.bindTexture(P,qe),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<ce;Ye++)n&&(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)?s.texImage3D(se,0,s.RGBA,1,1,Re,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(se+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return qe}const Ue={};Ue[s.TEXTURE_2D]=xe(s.TEXTURE_2D,s.TEXTURE_2D,1),Ue[s.TEXTURE_CUBE_MAP]=xe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ue[s.TEXTURE_2D_ARRAY]=xe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ue[s.TEXTURE_3D]=xe(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ne(s.DEPTH_TEST),c.setFunc(qs),Fe(!1),b(Vo),Ne(s.CULL_FACE),me(Dn);function Ne(P){d[P]!==!0&&(s.enable(P),d[P]=!0)}function we(P){d[P]!==!1&&(s.disable(P),d[P]=!1)}function Xe(P,se){return f[P]!==se?(s.bindFramebuffer(P,se),f[P]=se,n&&(P===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=se),P===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=se)),!0):!1}function B(P,se){let ce=_,Re=!1;if(P)if(ce=g.get(se),ce===void 0&&(ce=[],g.set(se,ce)),P.isWebGLMultipleRenderTargets){const Te=P.texture;if(ce.length!==Te.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let qe=0,Ye=Te.length;qe<Ye;qe++)ce[qe]=s.COLOR_ATTACHMENT0+qe;ce.length=Te.length,Re=!0}}else ce[0]!==s.COLOR_ATTACHMENT0&&(ce[0]=s.COLOR_ATTACHMENT0,Re=!0);else ce[0]!==s.BACK&&(ce[0]=s.BACK,Re=!0);Re&&(t.isWebGL2?s.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function Tt(P){return m!==P?(s.useProgram(P),m=P,!0):!1}const Ee={[Vn]:s.FUNC_ADD,[ah]:s.FUNC_SUBTRACT,[ch]:s.FUNC_REVERSE_SUBTRACT};if(n)Ee[Yo]=s.MIN,Ee[Ko]=s.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Ee[Yo]=P.MIN_EXT,Ee[Ko]=P.MAX_EXT)}const Pe={[lh]:s.ZERO,[hh]:s.ONE,[uh]:s.SRC_COLOR,[to]:s.SRC_ALPHA,[_h]:s.SRC_ALPHA_SATURATE,[mh]:s.DST_COLOR,[fh]:s.DST_ALPHA,[dh]:s.ONE_MINUS_SRC_COLOR,[no]:s.ONE_MINUS_SRC_ALPHA,[gh]:s.ONE_MINUS_DST_COLOR,[ph]:s.ONE_MINUS_DST_ALPHA,[xh]:s.CONSTANT_COLOR,[vh]:s.ONE_MINUS_CONSTANT_COLOR,[yh]:s.CONSTANT_ALPHA,[Mh]:s.ONE_MINUS_CONSTANT_ALPHA};function me(P,se,ce,Re,Te,qe,Ye,at,lt,$e){if(P===Dn){p===!0&&(we(s.BLEND),p=!1);return}if(p===!1&&(Ne(s.BLEND),p=!0),P!==oh){if(P!==v||$e!==H){if((x!==Vn||R!==Vn)&&(s.blendEquation(s.FUNC_ADD),x=Vn,R=Vn),$e)switch(P){case Ei:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wo:s.blendFunc(s.ONE,s.ONE);break;case Xo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ei:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Xo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,L=null,T=null,I=null,y.set(0,0,0),A=0,v=P,H=$e}return}Te=Te||se,qe=qe||ce,Ye=Ye||Re,(se!==x||Te!==R)&&(s.blendEquationSeparate(Ee[se],Ee[Te]),x=se,R=Te),(ce!==M||Re!==L||qe!==T||Ye!==I)&&(s.blendFuncSeparate(Pe[ce],Pe[Re],Pe[qe],Pe[Ye]),M=ce,L=Re,T=qe,I=Ye),(at.equals(y)===!1||lt!==A)&&(s.blendColor(at.r,at.g,at.b,lt),y.copy(at),A=lt),v=P,H=!1}function it(P,se){P.side===Ut?we(s.CULL_FACE):Ne(s.CULL_FACE);let ce=P.side===Nt;se&&(ce=!ce),Fe(ce),P.blending===Ei&&P.transparent===!1?me(Dn):me(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),a.setMask(P.colorWrite);const Re=P.stencilWrite;l.setTest(Re),Re&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),F(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ne(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(P){G!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),G=P)}function b(P){P!==sh?(Ne(s.CULL_FACE),P!==$&&(P===Vo?s.cullFace(s.BACK):P===rh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),$=P}function S(P){P!==D&&(X&&s.lineWidth(P),D=P)}function F(P,se,ce){P?(Ne(s.POLYGON_OFFSET_FILL),(O!==se||N!==ce)&&(s.polygonOffset(se,ce),O=se,N=ce)):we(s.POLYGON_OFFSET_FILL)}function te(P){P?Ne(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function J(P){P===void 0&&(P=s.TEXTURE0+q-1),ee!==P&&(s.activeTexture(P),ee=P)}function ne(P,se,ce){ce===void 0&&(ee===null?ce=s.TEXTURE0+q-1:ce=ee);let Re=re[ce];Re===void 0&&(Re={type:void 0,texture:void 0},re[ce]=Re),(Re.type!==P||Re.texture!==se)&&(ee!==ce&&(s.activeTexture(ce),ee=ce),s.bindTexture(P,se||Ue[P]),Re.type=P,Re.texture=se)}function ge(){const P=re[ee];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function le(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Be(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function je(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function He(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function De(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function C(P){ae.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),ae.copy(P))}function ie(P){ye.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),ye.copy(P))}function ve(P,se){let ce=u.get(se);ce===void 0&&(ce=new WeakMap,u.set(se,ce));let Re=ce.get(P);Re===void 0&&(Re=s.getUniformBlockIndex(se,P.name),ce.set(P,Re))}function fe(P,se){const Re=u.get(se).get(P);h.get(se)!==Re&&(s.uniformBlockBinding(se,Re,P.__bindingPointIndex),h.set(se,Re))}function Q(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},ee=null,re={},f={},g=new WeakMap,_=[],m=null,p=!1,v=null,x=null,M=null,L=null,R=null,T=null,I=null,y=new _e(0,0,0),A=0,H=!1,G=null,$=null,D=null,O=null,N=null,ae.set(0,0,s.canvas.width,s.canvas.height),ye.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ne,disable:we,bindFramebuffer:Xe,drawBuffers:B,useProgram:Tt,setBlending:me,setMaterial:it,setFlipSided:Fe,setCullFace:b,setLineWidth:S,setPolygonOffset:F,setScissorTest:te,activeTexture:J,bindTexture:ne,unbindTexture:ge,compressedTexImage2D:le,compressedTexImage3D:pe,texImage2D:Se,texImage3D:he,updateUBOMapping:ve,uniformBlockBinding:fe,texStorage2D:He,texStorage3D:De,texSubImage2D:be,texSubImage3D:Be,compressedTexSubImage2D:Z,compressedTexSubImage3D:je,scissor:C,viewport:ie,reset:Q}}function gg(s,e,t,n,i,r,o){const a=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,S){return f?new OffscreenCanvas(b,S):rs("canvas")}function _(b,S,F,te){let J=1;if((b.width>te||b.height>te)&&(J=te/Math.max(b.width,b.height)),J<1||S===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ne=S?Js:Math.floor,ge=ne(J*b.width),le=ne(J*b.height);u===void 0&&(u=g(ge,le));const pe=F?g(ge,le):u;return pe.width=ge,pe.height=le,pe.getContext("2d").drawImage(b,0,0,ge,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ge+"x"+le+")."),pe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return lo(b.width)&&lo(b.height)}function p(b){return a?!1:b.wrapS!==Kt||b.wrapT!==Kt||b.minFilter!==yt&&b.minFilter!==Ft}function v(b,S){return b.generateMipmaps&&S&&b.minFilter!==yt&&b.minFilter!==Ft}function x(b){s.generateMipmap(b)}function M(b,S,F,te,J=!1){if(a===!1)return S;if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ne=S;if(S===s.RED&&(F===s.FLOAT&&(ne=s.R32F),F===s.HALF_FLOAT&&(ne=s.R16F),F===s.UNSIGNED_BYTE&&(ne=s.R8)),S===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(ne=s.R8UI),F===s.UNSIGNED_SHORT&&(ne=s.R16UI),F===s.UNSIGNED_INT&&(ne=s.R32UI),F===s.BYTE&&(ne=s.R8I),F===s.SHORT&&(ne=s.R16I),F===s.INT&&(ne=s.R32I)),S===s.RG&&(F===s.FLOAT&&(ne=s.RG32F),F===s.HALF_FLOAT&&(ne=s.RG16F),F===s.UNSIGNED_BYTE&&(ne=s.RG8)),S===s.RGBA){const ge=J?Ks:Ze.getTransfer(te);F===s.FLOAT&&(ne=s.RGBA32F),F===s.HALF_FLOAT&&(ne=s.RGBA16F),F===s.UNSIGNED_BYTE&&(ne=ge===st?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(ne=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(ne=s.RGB5_A1)}return(ne===s.R16F||ne===s.R32F||ne===s.RG16F||ne===s.RG32F||ne===s.RGBA16F||ne===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function L(b,S,F){return v(b,F)===!0||b.isFramebufferTexture&&b.minFilter!==yt&&b.minFilter!==Ft?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function R(b){return b===yt||b===ro||b===Gs?s.NEAREST:s.LINEAR}function T(b){const S=b.target;S.removeEventListener("dispose",T),y(S),S.isVideoTexture&&h.delete(S)}function I(b){const S=b.target;S.removeEventListener("dispose",I),H(S)}function y(b){const S=n.get(b);if(S.__webglInit===void 0)return;const F=b.source,te=d.get(F);if(te){const J=te[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&A(b),Object.keys(te).length===0&&d.delete(F)}n.remove(b)}function A(b){const S=n.get(b);s.deleteTexture(S.__webglTexture);const F=b.source,te=d.get(F);delete te[S.__cacheKey],o.memory.textures--}function H(b){const S=b.texture,F=n.get(b),te=n.get(S);if(te.__webglTexture!==void 0&&(s.deleteTexture(te.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(F.__webglFramebuffer[J]))for(let ne=0;ne<F.__webglFramebuffer[J].length;ne++)s.deleteFramebuffer(F.__webglFramebuffer[J][ne]);else s.deleteFramebuffer(F.__webglFramebuffer[J]);F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer[J])}else{if(Array.isArray(F.__webglFramebuffer))for(let J=0;J<F.__webglFramebuffer.length;J++)s.deleteFramebuffer(F.__webglFramebuffer[J]);else s.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&s.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let J=0;J<F.__webglColorRenderbuffer.length;J++)F.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(F.__webglColorRenderbuffer[J]);F.__webglDepthRenderbuffer&&s.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let J=0,ne=S.length;J<ne;J++){const ge=n.get(S[J]);ge.__webglTexture&&(s.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(S[J])}n.remove(S),n.remove(b)}let G=0;function $(){G=0}function D(){const b=G;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),G+=1,b}function O(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function N(b,S){const F=n.get(b);if(b.isVideoTexture&&it(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const te=b.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(F,b,S);return}}t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+S)}function q(b,S){const F=n.get(b);if(b.version>0&&F.__version!==b.version){ae(F,b,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+S)}function X(b,S){const F=n.get(b);if(b.version>0&&F.__version!==b.version){ae(F,b,S);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+S)}function Y(b,S){const F=n.get(b);if(b.version>0&&F.__version!==b.version){ye(F,b,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+S)}const K={[Ci]:s.REPEAT,[Kt]:s.CLAMP_TO_EDGE,[Ys]:s.MIRRORED_REPEAT},ee={[yt]:s.NEAREST,[ro]:s.NEAREST_MIPMAP_NEAREST,[Gs]:s.NEAREST_MIPMAP_LINEAR,[Ft]:s.LINEAR,[tl]:s.LINEAR_MIPMAP_NEAREST,[$n]:s.LINEAR_MIPMAP_LINEAR},re={[jh]:s.NEVER,[nu]:s.ALWAYS,[Zh]:s.LESS,[dl]:s.LEQUAL,[Jh]:s.EQUAL,[tu]:s.GEQUAL,[Qh]:s.GREATER,[eu]:s.NOTEQUAL};function W(b,S,F){if(F?(s.texParameteri(b,s.TEXTURE_WRAP_S,K[S.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,K[S.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,K[S.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,ee[S.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,ee[S.minFilter])):(s.texParameteri(b,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(b,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==Kt||S.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(b,s.TEXTURE_MAG_FILTER,R(S.magFilter)),s.texParameteri(b,s.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==yt&&S.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,re[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===yt||S.minFilter!==Gs&&S.minFilter!==$n||S.type===vn&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===ns&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(b,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function j(b,S){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",T));const te=S.source;let J=d.get(te);J===void 0&&(J={},d.set(te,J));const ne=O(S);if(ne!==b.__cacheKey){J[ne]===void 0&&(J[ne]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[ne].usedTimes++;const ge=J[b.__cacheKey];ge!==void 0&&(J[b.__cacheKey].usedTimes--,ge.usedTimes===0&&A(S)),b.__cacheKey=ne,b.__webglTexture=J[ne].texture}return F}function ae(b,S,F){let te=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=s.TEXTURE_3D);const J=j(b,S),ne=S.source;t.bindTexture(te,b.__webglTexture,s.TEXTURE0+F);const ge=n.get(ne);if(ne.version!==ge.__version||J===!0){t.activeTexture(s.TEXTURE0+F);const le=Ze.getPrimaries(Ze.workingColorSpace),pe=S.colorSpace===jt?null:Ze.getPrimaries(S.colorSpace),be=S.colorSpace===jt||le===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Be=p(S)&&m(S.image)===!1;let Z=_(S.image,Be,!1,i.maxTextureSize);Z=Fe(S,Z);const je=m(Z)||a,He=r.convert(S.format,S.colorSpace);let De=r.convert(S.type),Se=M(S.internalFormat,He,De,S.colorSpace,S.isVideoTexture);W(te,S,je);let he;const C=S.mipmaps,ie=a&&S.isVideoTexture!==!0&&Se!==cl,ve=ge.__version===void 0||J===!0,fe=L(S,Z,je);if(S.isDepthTexture)Se=s.DEPTH_COMPONENT,a?S.type===vn?Se=s.DEPTH_COMPONENT32F:S.type===Ln?Se=s.DEPTH_COMPONENT24:S.type===qn?Se=s.DEPTH24_STENCIL8:Se=s.DEPTH_COMPONENT16:S.type===vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Yn&&Se===s.DEPTH_COMPONENT&&S.type!==So&&S.type!==Ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Ln,De=r.convert(S.type)),S.format===Li&&Se===s.DEPTH_COMPONENT&&(Se=s.DEPTH_STENCIL,S.type!==qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=qn,De=r.convert(S.type))),ve&&(ie?t.texStorage2D(s.TEXTURE_2D,1,Se,Z.width,Z.height):t.texImage2D(s.TEXTURE_2D,0,Se,Z.width,Z.height,0,He,De,null));else if(S.isDataTexture)if(C.length>0&&je){ie&&ve&&t.texStorage2D(s.TEXTURE_2D,fe,Se,C[0].width,C[0].height);for(let Q=0,P=C.length;Q<P;Q++)he=C[Q],ie?t.texSubImage2D(s.TEXTURE_2D,Q,0,0,he.width,he.height,He,De,he.data):t.texImage2D(s.TEXTURE_2D,Q,Se,he.width,he.height,0,He,De,he.data);S.generateMipmaps=!1}else ie?(ve&&t.texStorage2D(s.TEXTURE_2D,fe,Se,Z.width,Z.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Z.width,Z.height,He,De,Z.data)):t.texImage2D(s.TEXTURE_2D,0,Se,Z.width,Z.height,0,He,De,Z.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ie&&ve&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,Se,C[0].width,C[0].height,Z.depth);for(let Q=0,P=C.length;Q<P;Q++)he=C[Q],S.format!==$t?He!==null?ie?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,Z.depth,He,he.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,Se,he.width,he.height,Z.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,Z.depth,He,De,he.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Q,Se,he.width,he.height,Z.depth,0,He,De,he.data)}else{ie&&ve&&t.texStorage2D(s.TEXTURE_2D,fe,Se,C[0].width,C[0].height);for(let Q=0,P=C.length;Q<P;Q++)he=C[Q],S.format!==$t?He!==null?ie?t.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,he.width,he.height,He,he.data):t.compressedTexImage2D(s.TEXTURE_2D,Q,Se,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?t.texSubImage2D(s.TEXTURE_2D,Q,0,0,he.width,he.height,He,De,he.data):t.texImage2D(s.TEXTURE_2D,Q,Se,he.width,he.height,0,He,De,he.data)}else if(S.isDataArrayTexture)ie?(ve&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,Se,Z.width,Z.height,Z.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,He,De,Z.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Se,Z.width,Z.height,Z.depth,0,He,De,Z.data);else if(S.isData3DTexture)ie?(ve&&t.texStorage3D(s.TEXTURE_3D,fe,Se,Z.width,Z.height,Z.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,He,De,Z.data)):t.texImage3D(s.TEXTURE_3D,0,Se,Z.width,Z.height,Z.depth,0,He,De,Z.data);else if(S.isFramebufferTexture){if(ve)if(ie)t.texStorage2D(s.TEXTURE_2D,fe,Se,Z.width,Z.height);else{let Q=Z.width,P=Z.height;for(let se=0;se<fe;se++)t.texImage2D(s.TEXTURE_2D,se,Se,Q,P,0,He,De,null),Q>>=1,P>>=1}}else if(C.length>0&&je){ie&&ve&&t.texStorage2D(s.TEXTURE_2D,fe,Se,C[0].width,C[0].height);for(let Q=0,P=C.length;Q<P;Q++)he=C[Q],ie?t.texSubImage2D(s.TEXTURE_2D,Q,0,0,He,De,he):t.texImage2D(s.TEXTURE_2D,Q,Se,He,De,he);S.generateMipmaps=!1}else ie?(ve&&t.texStorage2D(s.TEXTURE_2D,fe,Se,Z.width,Z.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,He,De,Z)):t.texImage2D(s.TEXTURE_2D,0,Se,He,De,Z);v(S,je)&&x(te),ge.__version=ne.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function ye(b,S,F){if(S.image.length!==6)return;const te=j(b,S),J=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+F);const ne=n.get(J);if(J.version!==ne.__version||te===!0){t.activeTexture(s.TEXTURE0+F);const ge=Ze.getPrimaries(Ze.workingColorSpace),le=S.colorSpace===jt?null:Ze.getPrimaries(S.colorSpace),pe=S.colorSpace===jt||ge===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const be=S.isCompressedTexture||S.image[0].isCompressedTexture,Be=S.image[0]&&S.image[0].isDataTexture,Z=[];for(let Q=0;Q<6;Q++)!be&&!Be?Z[Q]=_(S.image[Q],!1,!0,i.maxCubemapSize):Z[Q]=Be?S.image[Q].image:S.image[Q],Z[Q]=Fe(S,Z[Q]);const je=Z[0],He=m(je)||a,De=r.convert(S.format,S.colorSpace),Se=r.convert(S.type),he=M(S.internalFormat,De,Se,S.colorSpace),C=a&&S.isVideoTexture!==!0,ie=ne.__version===void 0||te===!0;let ve=L(S,je,He);W(s.TEXTURE_CUBE_MAP,S,He);let fe;if(be){C&&ie&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ve,he,je.width,je.height);for(let Q=0;Q<6;Q++){fe=Z[Q].mipmaps;for(let P=0;P<fe.length;P++){const se=fe[P];S.format!==$t?De!==null?C?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,P,0,0,se.width,se.height,De,se.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,P,he,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,P,0,0,se.width,se.height,De,Se,se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,P,he,se.width,se.height,0,De,Se,se.data)}}}else{fe=S.mipmaps,C&&ie&&(fe.length>0&&ve++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ve,he,Z[0].width,Z[0].height));for(let Q=0;Q<6;Q++)if(Be){C?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Z[Q].width,Z[Q].height,De,Se,Z[Q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,he,Z[Q].width,Z[Q].height,0,De,Se,Z[Q].data);for(let P=0;P<fe.length;P++){const ce=fe[P].image[Q].image;C?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,P+1,0,0,ce.width,ce.height,De,Se,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,P+1,he,ce.width,ce.height,0,De,Se,ce.data)}}else{C?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,De,Se,Z[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,he,De,Se,Z[Q]);for(let P=0;P<fe.length;P++){const se=fe[P];C?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,P+1,0,0,De,Se,se.image[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,P+1,he,De,Se,se.image[Q])}}}v(S,He)&&x(s.TEXTURE_CUBE_MAP),ne.__version=J.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function xe(b,S,F,te,J,ne){const ge=r.convert(F.format,F.colorSpace),le=r.convert(F.type),pe=M(F.internalFormat,ge,le,F.colorSpace);if(!n.get(S).__hasExternalTextures){const Be=Math.max(1,S.width>>ne),Z=Math.max(1,S.height>>ne);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,ne,pe,Be,Z,S.depth,0,ge,le,null):t.texImage2D(J,ne,pe,Be,Z,0,ge,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),me(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,J,n.get(F).__webglTexture,0,Pe(S)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,te,J,n.get(F).__webglTexture,ne),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(b,S,F){if(s.bindRenderbuffer(s.RENDERBUFFER,b),S.depthBuffer&&!S.stencilBuffer){let te=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(F||me(S)){const J=S.depthTexture;J&&J.isDepthTexture&&(J.type===vn?te=s.DEPTH_COMPONENT32F:J.type===Ln&&(te=s.DEPTH_COMPONENT24));const ne=Pe(S);me(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,te,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,te,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,te,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,b)}else if(S.depthBuffer&&S.stencilBuffer){const te=Pe(S);F&&me(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,te,s.DEPTH24_STENCIL8,S.width,S.height):me(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,b)}else{const te=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let J=0;J<te.length;J++){const ne=te[J],ge=r.convert(ne.format,ne.colorSpace),le=r.convert(ne.type),pe=M(ne.internalFormat,ge,le,ne.colorSpace),be=Pe(S);F&&me(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,pe,S.width,S.height):me(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,pe,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,pe,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ne(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N(S.depthTexture,0);const te=n.get(S.depthTexture).__webglTexture,J=Pe(S);if(S.depthTexture.format===Yn)me(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0);else if(S.depthTexture.format===Li)me(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function we(b){const S=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ne(S.__webglFramebuffer,b)}else if(F){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]=s.createRenderbuffer(),Ue(S.__webglDepthbuffer[te],b,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),Ue(S.__webglDepthbuffer,b,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(b,S,F){const te=n.get(b);S!==void 0&&xe(te.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&we(b)}function B(b){const S=b.texture,F=n.get(b),te=n.get(S);b.addEventListener("dispose",I),b.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=S.version,o.memory.textures++);const J=b.isWebGLCubeRenderTarget===!0,ne=b.isWebGLMultipleRenderTargets===!0,ge=m(b)||a;if(J){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let pe=0;pe<S.mipmaps.length;pe++)F.__webglFramebuffer[le][pe]=s.createFramebuffer()}else F.__webglFramebuffer[le]=s.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)F.__webglFramebuffer[le]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(ne)if(i.drawBuffers){const le=b.texture;for(let pe=0,be=le.length;pe<be;pe++){const Be=n.get(le[pe]);Be.__webglTexture===void 0&&(Be.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&me(b)===!1){const le=ne?S:[S];F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let pe=0;pe<le.length;pe++){const be=le[pe];F.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[pe]);const Be=r.convert(be.format,be.colorSpace),Z=r.convert(be.type),je=M(be.internalFormat,Be,Z,be.colorSpace,b.isXRRenderTarget===!0),He=Pe(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,He,je,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,F.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Ue(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture),W(s.TEXTURE_CUBE_MAP,S,ge);for(let le=0;le<6;le++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)xe(F.__webglFramebuffer[le][pe],b,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,pe);else xe(F.__webglFramebuffer[le],b,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);v(S,ge)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const le=b.texture;for(let pe=0,be=le.length;pe<be;pe++){const Be=le[pe],Z=n.get(Be);t.bindTexture(s.TEXTURE_2D,Z.__webglTexture),W(s.TEXTURE_2D,Be,ge),xe(F.__webglFramebuffer,b,Be,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,0),v(Be,ge)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?le=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,te.__webglTexture),W(le,S,ge),a&&S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)xe(F.__webglFramebuffer[pe],b,S,s.COLOR_ATTACHMENT0,le,pe);else xe(F.__webglFramebuffer,b,S,s.COLOR_ATTACHMENT0,le,0);v(S,ge)&&x(le),t.unbindTexture()}b.depthBuffer&&we(b)}function Tt(b){const S=m(b)||a,F=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let te=0,J=F.length;te<J;te++){const ne=F[te];if(v(ne,S)){const ge=b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,le=n.get(ne).__webglTexture;t.bindTexture(ge,le),x(ge),t.unbindTexture()}}}function Ee(b){if(a&&b.samples>0&&me(b)===!1){const S=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],F=b.width,te=b.height;let J=s.COLOR_BUFFER_BIT;const ne=[],ge=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=n.get(b),pe=b.isWebGLMultipleRenderTargets===!0;if(pe)for(let be=0;be<S.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let be=0;be<S.length;be++){ne.push(s.COLOR_ATTACHMENT0+be),b.depthBuffer&&ne.push(ge);const Be=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Be===!1&&(b.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),pe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,le.__webglColorRenderbuffer[be]),Be===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ge]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ge])),pe){const Z=n.get(S[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Z,0)}s.blitFramebuffer(0,0,F,te,0,0,F,te,J,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let be=0;be<S.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,le.__webglColorRenderbuffer[be]);const Be=n.get(S[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,Be,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Pe(b){return Math.min(i.maxSamples,b.samples)}function me(b){const S=n.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function it(b){const S=o.render.frame;h.get(b)!==S&&(h.set(b,S),b.update())}function Fe(b,S){const F=b.colorSpace,te=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===co||F!==mt&&F!==jt&&(Ze.getTransfer(F)===st?a===!1?e.has("EXT_sRGB")===!0&&te===$t?(b.format=co,b.minFilter=Ft,b.generateMipmaps=!1):S=pl.sRGBToLinear(S):(te!==$t||J!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}this.allocateTextureUnit=D,this.resetTextureUnits=$,this.setTexture2D=N,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=Y,this.rebindTextures=Xe,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=me}function _g(s,e,t){const n=t.isWebGL2;function i(r,o=jt){let a;const c=Ze.getTransfer(o);if(r===Un)return s.UNSIGNED_BYTE;if(r===il)return s.UNSIGNED_SHORT_4_4_4_4;if(r===sl)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Fh)return s.BYTE;if(r===Bh)return s.SHORT;if(r===So)return s.UNSIGNED_SHORT;if(r===nl)return s.INT;if(r===Ln)return s.UNSIGNED_INT;if(r===vn)return s.FLOAT;if(r===ns)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===zh)return s.ALPHA;if(r===$t)return s.RGBA;if(r===kh)return s.LUMINANCE;if(r===Hh)return s.LUMINANCE_ALPHA;if(r===Yn)return s.DEPTH_COMPONENT;if(r===Li)return s.DEPTH_STENCIL;if(r===co)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Gh)return s.RED;if(r===rl)return s.RED_INTEGER;if(r===Vh)return s.RG;if(r===ol)return s.RG_INTEGER;if(r===al)return s.RGBA_INTEGER;if(r===ur||r===dr||r===fr||r===pr)if(c===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ur)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===dr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===pr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ur)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===dr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===pr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===jo||r===Zo||r===Jo||r===Qo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===jo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ea||r===ta)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ea)return c===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ta)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===na||r===ia||r===sa||r===ra||r===oa||r===aa||r===ca||r===la||r===ha||r===ua||r===da||r===fa||r===pa||r===ma)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===na)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ia)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===sa)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ra)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===oa)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===aa)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ca)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===la)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ha)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ua)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===da)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===fa)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===pa)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ma)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mr||r===ga||r===_a)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===mr)return c===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ga)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_a)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wh||r===xa||r===va||r===ya)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===mr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===xa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===va)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ya)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qn?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class xg extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ft extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vg={type:"move"};class zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vg)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class yg extends Qn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const v=[],x=[],M=new ue;let L=null;const R=new Dt;R.layers.enable(1),R.viewport=new nt;const T=new Dt;T.layers.enable(2),T.viewport=new nt;const I=[R,T],y=new xg;y.layers.enable(1),y.layers.enable(2);let A=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let j=v[W];return j===void 0&&(j=new zr,v[W]=j),j.getTargetRaySpace()},this.getControllerGrip=function(W){let j=v[W];return j===void 0&&(j=new zr,v[W]=j),j.getGripSpace()},this.getHand=function(W){let j=v[W];return j===void 0&&(j=new zr,v[W]=j),j.getHandSpace()};function G(W){const j=x.indexOf(W.inputSource);if(j===-1)return;const ae=v[j];ae!==void 0&&(ae.update(W.inputSource,W.frame,l||o),ae.dispatchEvent({type:W.type,data:W.inputSource}))}function $(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",D);for(let W=0;W<v.length;W++){const j=x[W];j!==null&&(x[W]=null,v[W].disconnect(j))}A=null,H=null,e.setRenderTarget(m),f=null,d=null,u=null,i=null,p=null,re.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",$),i.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(M),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new jn(f.framebufferWidth,f.framebufferHeight,{format:$t,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,ae=null,ye=null;_.depth&&(ye=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=_.stencil?Li:Yn,ae=_.stencil?qn:Ln);const xe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(xe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new jn(d.textureWidth,d.textureHeight,{format:$t,type:Un,depthTexture:new Tl(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ue=e.properties.get(p);Ue.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),re.setContext(i),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(W){for(let j=0;j<W.removed.length;j++){const ae=W.removed[j],ye=x.indexOf(ae);ye>=0&&(x[ye]=null,v[ye].disconnect(ae))}for(let j=0;j<W.added.length;j++){const ae=W.added[j];let ye=x.indexOf(ae);if(ye===-1){for(let Ue=0;Ue<v.length;Ue++)if(Ue>=x.length){x.push(ae),ye=Ue;break}else if(x[Ue]===null){x[Ue]=ae,ye=Ue;break}if(ye===-1)break}const xe=v[ye];xe&&xe.connect(ae)}}const O=new w,N=new w;function q(W,j,ae){O.setFromMatrixPosition(j.matrixWorld),N.setFromMatrixPosition(ae.matrixWorld);const ye=O.distanceTo(N),xe=j.projectionMatrix.elements,Ue=ae.projectionMatrix.elements,Ne=xe[14]/(xe[10]-1),we=xe[14]/(xe[10]+1),Xe=(xe[9]+1)/xe[5],B=(xe[9]-1)/xe[5],Tt=(xe[8]-1)/xe[0],Ee=(Ue[8]+1)/Ue[0],Pe=Ne*Tt,me=Ne*Ee,it=ye/(-Tt+Ee),Fe=it*-Tt;j.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Fe),W.translateZ(it),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const b=Ne+it,S=we+it,F=Pe-Fe,te=me+(ye-Fe),J=Xe*we/S*b,ne=B*we/S*b;W.projectionMatrix.makePerspective(F,te,J,ne,b,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function X(W,j){j===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(j.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;y.near=T.near=R.near=W.near,y.far=T.far=R.far=W.far,(A!==y.near||H!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,H=y.far);const j=W.parent,ae=y.cameras;X(y,j);for(let ye=0;ye<ae.length;ye++)X(ae[ye],j);ae.length===2?q(y,R,T):y.projectionMatrix.copy(R.projectionMatrix),Y(W,y,j)};function Y(W,j,ae){ae===null?W.matrix.copy(j.matrixWorld):(W.matrix.copy(ae.matrixWorld),W.matrix.invert(),W.matrix.multiply(j.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Di*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)};let K=null;function ee(W,j){if(h=j.getViewerPose(l||o),g=j,h!==null){const ae=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ye=!1;ae.length!==y.cameras.length&&(y.cameras.length=0,ye=!0);for(let xe=0;xe<ae.length;xe++){const Ue=ae[xe];let Ne=null;if(f!==null)Ne=f.getViewport(Ue);else{const Xe=u.getViewSubImage(d,Ue);Ne=Xe.viewport,xe===0&&(e.setRenderTargetTextures(p,Xe.colorTexture,d.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(p))}let we=I[xe];we===void 0&&(we=new Dt,we.layers.enable(xe),we.viewport=new nt,I[xe]=we),we.matrix.fromArray(Ue.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Ue.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),xe===0&&(y.matrix.copy(we.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ye===!0&&y.cameras.push(we)}}for(let ae=0;ae<v.length;ae++){const ye=x[ae],xe=v[ae];ye!==null&&xe!==void 0&&xe.update(ye,j,l||o)}K&&K(W,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const re=new El;re.setAnimationLoop(ee),this.setAnimationLoop=function(W){K=W},this.dispose=function(){}}}function Mg(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,yl(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Nt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Nt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Nt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Sg(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,x){const M=x.program;n.uniformBlockBinding(v,M)}function l(v,x){let M=i[v.id];M===void 0&&(g(v),M=h(v),i[v.id]=M,v.addEventListener("dispose",m));const L=x.program;n.updateUBOMapping(v,L);const R=e.render.frame;r[v.id]!==R&&(d(v),r[v.id]=R)}function h(v){const x=u();v.__bindingPointIndex=x;const M=s.createBuffer(),L=v.__size,R=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,L,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,M),M}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=i[v.id],M=v.uniforms,L=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let R=0,T=M.length;R<T;R++){const I=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,A=I.length;y<A;y++){const H=I[y];if(f(H,R,y,L)===!0){const G=H.__offset,$=Array.isArray(H.value)?H.value:[H.value];let D=0;for(let O=0;O<$.length;O++){const N=$[O],q=_(N);typeof N=="number"||typeof N=="boolean"?(H.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,G+D,H.__data)):N.isMatrix3?(H.__data[0]=N.elements[0],H.__data[1]=N.elements[1],H.__data[2]=N.elements[2],H.__data[3]=0,H.__data[4]=N.elements[3],H.__data[5]=N.elements[4],H.__data[6]=N.elements[5],H.__data[7]=0,H.__data[8]=N.elements[6],H.__data[9]=N.elements[7],H.__data[10]=N.elements[8],H.__data[11]=0):(N.toArray(H.__data,D),D+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,x,M,L){const R=v.value,T=x+"_"+M;if(L[T]===void 0)return typeof R=="number"||typeof R=="boolean"?L[T]=R:L[T]=R.clone(),!0;{const I=L[T];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return L[T]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function g(v){const x=v.uniforms;let M=0;const L=16;for(let T=0,I=x.length;T<I;T++){const y=Array.isArray(x[T])?x[T]:[x[T]];for(let A=0,H=y.length;A<H;A++){const G=y[A],$=Array.isArray(G.value)?G.value:[G.value];for(let D=0,O=$.length;D<O;D++){const N=$[D],q=_(N),X=M%L;X!==0&&L-X<q.boundary&&(M+=L-X),G.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=q.storage}}}const R=M%L;return R>0&&(M+=L-R),v.__size=M,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class Ll{constructor(e={}){const{canvas:t=_u(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tt,this._useLegacyLights=!1,this.toneMapping=In,this.toneMappingExposure=1;const x=this;let M=!1,L=0,R=0,T=null,I=-1,y=null;const A=new nt,H=new nt;let G=null;const $=new _e(0);let D=0,O=t.width,N=t.height,q=1,X=null,Y=null;const K=new nt(0,0,O,N),ee=new nt(0,0,O,N);let re=!1;const W=new Ao;let j=!1,ae=!1,ye=null;const xe=new Le,Ue=new ue,Ne=new w,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return T===null?q:1}let B=n;function Tt(E,U){for(let k=0;k<E.length;k++){const V=E[k],z=t.getContext(V,U);if(z!==null)return z}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mo}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",se,!1),B===null){const U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),B=Tt(U,E),B===null)throw Tt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ee,Pe,me,it,Fe,b,S,F,te,J,ne,ge,le,pe,be,Be,Z,je,He,De,Se,he,C,ie;function ve(){Ee=new Dp(B),Pe=new Ap(B,Ee,e),Ee.init(Pe),he=new _g(B,Ee,Pe),me=new mg(B,Ee,Pe),it=new Np(B),Fe=new tg,b=new gg(B,Ee,me,Fe,Pe,he,it),S=new Rp(x),F=new Pp(x),te=new Gu(B,Pe),C=new Tp(B,Ee,te,Pe),J=new Ip(B,te,it,C),ne=new zp(B,J,te,it),He=new Bp(B,Pe,b),Be=new wp(Fe),ge=new eg(x,S,F,Ee,Pe,C,Be),le=new Mg(x,Fe),pe=new ig,be=new lg(Ee,Pe),je=new Ep(x,S,F,me,ne,d,c),Z=new pg(x,ne,Pe),ie=new Sg(B,it,Pe,me),De=new bp(B,Ee,it,Pe),Se=new Up(B,Ee,it,Pe),it.programs=ge.programs,x.capabilities=Pe,x.extensions=Ee,x.properties=Fe,x.renderLists=pe,x.shadowMap=Z,x.state=me,x.info=it}ve();const fe=new yg(x,B);this.xr=fe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const E=Ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(O,N,!1))},this.getSize=function(E){return E.set(O,N)},this.setSize=function(E,U,k=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=E,N=U,t.width=Math.floor(E*q),t.height=Math.floor(U*q),k===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(O*q,N*q).floor()},this.setDrawingBufferSize=function(E,U,k){O=E,N=U,q=k,t.width=Math.floor(E*k),t.height=Math.floor(U*k),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(K)},this.setViewport=function(E,U,k,V){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,U,k,V),me.viewport(A.copy(K).multiplyScalar(q).floor())},this.getScissor=function(E){return E.copy(ee)},this.setScissor=function(E,U,k,V){E.isVector4?ee.set(E.x,E.y,E.z,E.w):ee.set(E,U,k,V),me.scissor(H.copy(ee).multiplyScalar(q).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(E){me.setScissorTest(re=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){Y=E},this.getClearColor=function(E){return E.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(E=!0,U=!0,k=!0){let V=0;if(E){let z=!1;if(T!==null){const de=T.texture.format;z=de===al||de===ol||de===rl}if(z){const de=T.texture.type,Me=de===Un||de===Ln||de===So||de===qn||de===il||de===sl,Ce=je.getClearColor(),Ie=je.getClearAlpha(),Ge=Ce.r,Oe=Ce.g,ze=Ce.b;Me?(f[0]=Ge,f[1]=Oe,f[2]=ze,f[3]=Ie,B.clearBufferuiv(B.COLOR,0,f)):(g[0]=Ge,g[1]=Oe,g[2]=ze,g[3]=Ie,B.clearBufferiv(B.COLOR,0,g))}else V|=B.COLOR_BUFFER_BIT}U&&(V|=B.DEPTH_BUFFER_BIT),k&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",se,!1),pe.dispose(),be.dispose(),Fe.dispose(),S.dispose(),F.dispose(),ne.dispose(),C.dispose(),ie.dispose(),ge.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",lt),fe.removeEventListener("sessionend",$e),ye&&(ye.dispose(),ye=null),ut.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=it.autoReset,U=Z.enabled,k=Z.autoUpdate,V=Z.needsUpdate,z=Z.type;ve(),it.autoReset=E,Z.enabled=U,Z.autoUpdate=k,Z.needsUpdate=V,Z.type=z}function se(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ce(E){const U=E.target;U.removeEventListener("dispose",ce),Re(U)}function Re(E){Te(E),Fe.remove(E)}function Te(E){const U=Fe.get(E).programs;U!==void 0&&(U.forEach(function(k){ge.releaseProgram(k)}),E.isShaderMaterial&&ge.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,k,V,z,de){U===null&&(U=we);const Me=z.isMesh&&z.matrixWorld.determinant()<0,Ce=$l(E,U,k,V,z);me.setMaterial(V,Me);let Ie=k.index,Ge=1;if(V.wireframe===!0){if(Ie=J.getWireframeAttribute(k),Ie===void 0)return;Ge=2}const Oe=k.drawRange,ze=k.attributes.position;let ht=Oe.start*Ge,zt=(Oe.start+Oe.count)*Ge;de!==null&&(ht=Math.max(ht,de.start*Ge),zt=Math.min(zt,(de.start+de.count)*Ge)),Ie!==null?(ht=Math.max(ht,0),zt=Math.min(zt,Ie.count)):ze!=null&&(ht=Math.max(ht,0),zt=Math.min(zt,ze.count));const xt=zt-ht;if(xt<0||xt===1/0)return;C.setup(z,V,Ce,k,Ie);let un,ot=De;if(Ie!==null&&(un=te.get(Ie),ot=Se,ot.setIndex(un)),z.isMesh)V.wireframe===!0?(me.setLineWidth(V.wireframeLinewidth*Xe()),ot.setMode(B.LINES)):ot.setMode(B.TRIANGLES);else if(z.isLine){let Ve=V.linewidth;Ve===void 0&&(Ve=1),me.setLineWidth(Ve*Xe()),z.isLineSegments?ot.setMode(B.LINES):z.isLineLoop?ot.setMode(B.LINE_LOOP):ot.setMode(B.LINE_STRIP)}else z.isPoints?ot.setMode(B.POINTS):z.isSprite&&ot.setMode(B.TRIANGLES);if(z.isBatchedMesh)ot.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)ot.renderInstances(ht,xt,z.count);else if(k.isInstancedBufferGeometry){const Ve=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ar=Math.min(k.instanceCount,Ve);ot.renderInstances(ht,xt,ar)}else ot.render(ht,xt)};function qe(E,U,k){E.transparent===!0&&E.side===Ut&&E.forceSinglePass===!1?(E.side=Nt,E.needsUpdate=!0,ls(E,U,k),E.side=cn,E.needsUpdate=!0,ls(E,U,k),E.side=Ut):ls(E,U,k)}this.compile=function(E,U,k=null){k===null&&(k=E),m=be.get(k),m.init(),v.push(m),k.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),E!==k&&E.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(x._useLegacyLights);const V=new Set;return E.traverse(function(z){const de=z.material;if(de)if(Array.isArray(de))for(let Me=0;Me<de.length;Me++){const Ce=de[Me];qe(Ce,k,z),V.add(Ce)}else qe(de,k,z),V.add(de)}),v.pop(),m=null,V},this.compileAsync=function(E,U,k=null){const V=this.compile(E,U,k);return new Promise(z=>{function de(){if(V.forEach(function(Me){Fe.get(Me).currentProgram.isReady()&&V.delete(Me)}),V.size===0){z(E);return}setTimeout(de,10)}Ee.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Ye=null;function at(E){Ye&&Ye(E)}function lt(){ut.stop()}function $e(){ut.start()}const ut=new El;ut.setAnimationLoop(at),typeof self<"u"&&ut.setContext(self),this.setAnimationLoop=function(E){Ye=E,fe.setAnimationLoop(E),E===null?ut.stop():ut.start()},fe.addEventListener("sessionstart",lt),fe.addEventListener("sessionend",$e),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(U),U=fe.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,T),m=be.get(E,v.length),m.init(),v.push(m),xe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),W.setFromProjectionMatrix(xe),ae=this.localClippingEnabled,j=Be.init(this.clippingPlanes,ae),_=pe.get(E,p.length),_.init(),p.push(_),sn(E,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,Y),this.info.render.frame++,j===!0&&Be.beginShadows();const k=m.state.shadowsArray;if(Z.render(k,E,U),j===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),je.render(_,E),m.setupLights(x._useLegacyLights),U.isArrayCamera){const V=U.cameras;for(let z=0,de=V.length;z<de;z++){const Me=V[z];Fo(_,E,Me,Me.viewport)}}else Fo(_,E,U);T!==null&&(b.updateMultisampleRenderTarget(T),b.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(x,E,U),C.resetDefaultState(),I=-1,y=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function sn(E,U,k,V){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){V&&Ne.setFromMatrixPosition(E.matrixWorld).applyMatrix4(xe);const Me=ne.update(E),Ce=E.material;Ce.visible&&_.push(E,Me,Ce,k,Ne.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||W.intersectsObject(E))){const Me=ne.update(E),Ce=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ne.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ne.copy(Me.boundingSphere.center)),Ne.applyMatrix4(E.matrixWorld).applyMatrix4(xe)),Array.isArray(Ce)){const Ie=Me.groups;for(let Ge=0,Oe=Ie.length;Ge<Oe;Ge++){const ze=Ie[Ge],ht=Ce[ze.materialIndex];ht&&ht.visible&&_.push(E,Me,ht,k,Ne.z,ze)}}else Ce.visible&&_.push(E,Me,Ce,k,Ne.z,null)}}const de=E.children;for(let Me=0,Ce=de.length;Me<Ce;Me++)sn(de[Me],U,k,V)}function Fo(E,U,k,V){const z=E.opaque,de=E.transmissive,Me=E.transparent;m.setupLightsView(k),j===!0&&Be.setGlobalState(x.clippingPlanes,k),de.length>0&&Kl(z,de,U,k),V&&me.viewport(A.copy(V)),z.length>0&&cs(z,U,k),de.length>0&&cs(de,U,k),Me.length>0&&cs(Me,U,k),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Kl(E,U,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const de=Pe.isWebGL2;ye===null&&(ye=new jn(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?ns:Un,minFilter:$n,samples:de?4:0})),x.getDrawingBufferSize(Ue),de?ye.setSize(Ue.x,Ue.y):ye.setSize(Js(Ue.x),Js(Ue.y));const Me=x.getRenderTarget();x.setRenderTarget(ye),x.getClearColor($),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();const Ce=x.toneMapping;x.toneMapping=In,cs(E,k,V),b.updateMultisampleRenderTarget(ye),b.updateRenderTargetMipmap(ye);let Ie=!1;for(let Ge=0,Oe=U.length;Ge<Oe;Ge++){const ze=U[Ge],ht=ze.object,zt=ze.geometry,xt=ze.material,un=ze.group;if(xt.side===Ut&&ht.layers.test(V.layers)){const ot=xt.side;xt.side=Nt,xt.needsUpdate=!0,Bo(ht,k,V,zt,xt,un),xt.side=ot,xt.needsUpdate=!0,Ie=!0}}Ie===!0&&(b.updateMultisampleRenderTarget(ye),b.updateRenderTargetMipmap(ye)),x.setRenderTarget(Me),x.setClearColor($,D),x.toneMapping=Ce}function cs(E,U,k){const V=U.isScene===!0?U.overrideMaterial:null;for(let z=0,de=E.length;z<de;z++){const Me=E[z],Ce=Me.object,Ie=Me.geometry,Ge=V===null?Me.material:V,Oe=Me.group;Ce.layers.test(k.layers)&&Bo(Ce,U,k,Ie,Ge,Oe)}}function Bo(E,U,k,V,z,de){E.onBeforeRender(x,U,k,V,z,de),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(x,U,k,V,E,de),z.transparent===!0&&z.side===Ut&&z.forceSinglePass===!1?(z.side=Nt,z.needsUpdate=!0,x.renderBufferDirect(k,U,V,z,E,de),z.side=cn,z.needsUpdate=!0,x.renderBufferDirect(k,U,V,z,E,de),z.side=Ut):x.renderBufferDirect(k,U,V,z,E,de),E.onAfterRender(x,U,k,V,z,de)}function ls(E,U,k){U.isScene!==!0&&(U=we);const V=Fe.get(E),z=m.state.lights,de=m.state.shadowsArray,Me=z.state.version,Ce=ge.getParameters(E,z.state,de,U,k),Ie=ge.getProgramCacheKey(Ce);let Ge=V.programs;V.environment=E.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(E.isMeshStandardMaterial?F:S).get(E.envMap||V.environment),Ge===void 0&&(E.addEventListener("dispose",ce),Ge=new Map,V.programs=Ge);let Oe=Ge.get(Ie);if(Oe!==void 0){if(V.currentProgram===Oe&&V.lightsStateVersion===Me)return ko(E,Ce),Oe}else Ce.uniforms=ge.getUniforms(E),E.onBuild(k,Ce,x),E.onBeforeCompile(Ce,x),Oe=ge.acquireProgram(Ce,Ie),Ge.set(Ie,Oe),V.uniforms=Ce.uniforms;const ze=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ze.clippingPlanes=Be.uniform),ko(E,Ce),V.needsLights=Zl(E),V.lightsStateVersion=Me,V.needsLights&&(ze.ambientLightColor.value=z.state.ambient,ze.lightProbe.value=z.state.probe,ze.directionalLights.value=z.state.directional,ze.directionalLightShadows.value=z.state.directionalShadow,ze.spotLights.value=z.state.spot,ze.spotLightShadows.value=z.state.spotShadow,ze.rectAreaLights.value=z.state.rectArea,ze.ltc_1.value=z.state.rectAreaLTC1,ze.ltc_2.value=z.state.rectAreaLTC2,ze.pointLights.value=z.state.point,ze.pointLightShadows.value=z.state.pointShadow,ze.hemisphereLights.value=z.state.hemi,ze.directionalShadowMap.value=z.state.directionalShadowMap,ze.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ze.spotShadowMap.value=z.state.spotShadowMap,ze.spotLightMatrix.value=z.state.spotLightMatrix,ze.spotLightMap.value=z.state.spotLightMap,ze.pointShadowMap.value=z.state.pointShadowMap,ze.pointShadowMatrix.value=z.state.pointShadowMatrix),V.currentProgram=Oe,V.uniformsList=null,Oe}function zo(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Vs.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function ko(E,U){const k=Fe.get(E);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function $l(E,U,k,V,z){U.isScene!==!0&&(U=we),b.resetTextureUnits();const de=U.fog,Me=V.isMeshStandardMaterial?U.environment:null,Ce=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:mt,Ie=(V.isMeshStandardMaterial?F:S).get(V.envMap||Me),Ge=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Oe=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),ze=!!k.morphAttributes.position,ht=!!k.morphAttributes.normal,zt=!!k.morphAttributes.color;let xt=In;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(xt=x.toneMapping);const un=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ot=un!==void 0?un.length:0,Ve=Fe.get(V),ar=m.state.lights;if(j===!0&&(ae===!0||E!==y)){const Vt=E===y&&V.id===I;Be.setState(V,E,Vt)}let ct=!1;V.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==ar.state.version||Ve.outputColorSpace!==Ce||z.isBatchedMesh&&Ve.batching===!1||!z.isBatchedMesh&&Ve.batching===!0||z.isInstancedMesh&&Ve.instancing===!1||!z.isInstancedMesh&&Ve.instancing===!0||z.isSkinnedMesh&&Ve.skinning===!1||!z.isSkinnedMesh&&Ve.skinning===!0||z.isInstancedMesh&&Ve.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ve.instancingColor===!1&&z.instanceColor!==null||Ve.envMap!==Ie||V.fog===!0&&Ve.fog!==de||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Be.numPlanes||Ve.numIntersection!==Be.numIntersection)||Ve.vertexAlphas!==Ge||Ve.vertexTangents!==Oe||Ve.morphTargets!==ze||Ve.morphNormals!==ht||Ve.morphColors!==zt||Ve.toneMapping!==xt||Pe.isWebGL2===!0&&Ve.morphTargetsCount!==ot)&&(ct=!0):(ct=!0,Ve.__version=V.version);let Nn=Ve.currentProgram;ct===!0&&(Nn=ls(V,U,z));let Ho=!1,ki=!1,cr=!1;const At=Nn.getUniforms(),On=Ve.uniforms;if(me.useProgram(Nn.program)&&(Ho=!0,ki=!0,cr=!0),V.id!==I&&(I=V.id,ki=!0),Ho||y!==E){At.setValue(B,"projectionMatrix",E.projectionMatrix),At.setValue(B,"viewMatrix",E.matrixWorldInverse);const Vt=At.map.cameraPosition;Vt!==void 0&&Vt.setValue(B,Ne.setFromMatrixPosition(E.matrixWorld)),Pe.logarithmicDepthBuffer&&At.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&At.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,ki=!0,cr=!0)}if(z.isSkinnedMesh){At.setOptional(B,z,"bindMatrix"),At.setOptional(B,z,"bindMatrixInverse");const Vt=z.skeleton;Vt&&(Pe.floatVertexTextures?(Vt.boneTexture===null&&Vt.computeBoneTexture(),At.setValue(B,"boneTexture",Vt.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(At.setOptional(B,z,"batchingTexture"),At.setValue(B,"batchingTexture",z._matricesTexture,b));const lr=k.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0&&Pe.isWebGL2===!0)&&He.update(z,k,Nn),(ki||Ve.receiveShadow!==z.receiveShadow)&&(Ve.receiveShadow=z.receiveShadow,At.setValue(B,"receiveShadow",z.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(On.envMap.value=Ie,On.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),ki&&(At.setValue(B,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&jl(On,cr),de&&V.fog===!0&&le.refreshFogUniforms(On,de),le.refreshMaterialUniforms(On,V,q,N,ye),Vs.upload(B,zo(Ve),On,b)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Vs.upload(B,zo(Ve),On,b),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&At.setValue(B,"center",z.center),At.setValue(B,"modelViewMatrix",z.modelViewMatrix),At.setValue(B,"normalMatrix",z.normalMatrix),At.setValue(B,"modelMatrix",z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Vt=V.uniformsGroups;for(let hr=0,Jl=Vt.length;hr<Jl;hr++)if(Pe.isWebGL2){const Go=Vt[hr];ie.update(Go,Nn),ie.bind(Go,Nn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Nn}function jl(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Zl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,U,k){Fe.get(E.texture).__webglTexture=U,Fe.get(E.depthTexture).__webglTexture=k;const V=Fe.get(E);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=k===void 0,V.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,U){const k=Fe.get(E);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,k=0){T=E,L=U,R=k;let V=!0,z=null,de=!1,Me=!1;if(E){const Ie=Fe.get(E);Ie.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(B.FRAMEBUFFER,null),V=!1):Ie.__webglFramebuffer===void 0?b.setupRenderTarget(E):Ie.__hasExternalTextures&&b.rebindTextures(E,Fe.get(E.texture).__webglTexture,Fe.get(E.depthTexture).__webglTexture);const Ge=E.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Me=!0);const Oe=Fe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Oe[U])?z=Oe[U][k]:z=Oe[U],de=!0):Pe.isWebGL2&&E.samples>0&&b.useMultisampledRTT(E)===!1?z=Fe.get(E).__webglMultisampledFramebuffer:Array.isArray(Oe)?z=Oe[k]:z=Oe,A.copy(E.viewport),H.copy(E.scissor),G=E.scissorTest}else A.copy(K).multiplyScalar(q).floor(),H.copy(ee).multiplyScalar(q).floor(),G=re;if(me.bindFramebuffer(B.FRAMEBUFFER,z)&&Pe.drawBuffers&&V&&me.drawBuffers(E,z),me.viewport(A),me.scissor(H),me.setScissorTest(G),de){const Ie=Fe.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ie.__webglTexture,k)}else if(Me){const Ie=Fe.get(E.texture),Ge=U||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ie.__webglTexture,k||0,Ge)}I=-1},this.readRenderTargetPixels=function(E,U,k,V,z,de,Me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){me.bindFramebuffer(B.FRAMEBUFFER,Ce);try{const Ie=E.texture,Ge=Ie.format,Oe=Ie.type;if(Ge!==$t&&he.convert(Ge)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Oe===ns&&(Ee.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Oe!==Un&&he.convert(Oe)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===vn&&(Pe.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-V&&k>=0&&k<=E.height-z&&B.readPixels(U,k,V,z,he.convert(Ge),he.convert(Oe),de)}finally{const Ie=T!==null?Fe.get(T).__webglFramebuffer:null;me.bindFramebuffer(B.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(E,U,k=0){const V=Math.pow(2,-k),z=Math.floor(U.image.width*V),de=Math.floor(U.image.height*V);b.setTexture2D(U,0),B.copyTexSubImage2D(B.TEXTURE_2D,k,0,0,E.x,E.y,z,de),me.unbindTexture()},this.copyTextureToTexture=function(E,U,k,V=0){const z=U.image.width,de=U.image.height,Me=he.convert(k.format),Ce=he.convert(k.type);b.setTexture2D(k,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment),U.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,V,E.x,E.y,z,de,Me,Ce,U.image.data):U.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,V,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,Me,U.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,V,E.x,E.y,Me,Ce,U.image),V===0&&k.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(E,U,k,V,z=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=E.max.x-E.min.x+1,Me=E.max.y-E.min.y+1,Ce=E.max.z-E.min.z+1,Ie=he.convert(V.format),Ge=he.convert(V.type);let Oe;if(V.isData3DTexture)b.setTexture3D(V,0),Oe=B.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)b.setTexture2DArray(V,0),Oe=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const ze=B.getParameter(B.UNPACK_ROW_LENGTH),ht=B.getParameter(B.UNPACK_IMAGE_HEIGHT),zt=B.getParameter(B.UNPACK_SKIP_PIXELS),xt=B.getParameter(B.UNPACK_SKIP_ROWS),un=B.getParameter(B.UNPACK_SKIP_IMAGES),ot=k.isCompressedTexture?k.mipmaps[z]:k.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,ot.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ot.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,E.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,E.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,E.min.z),k.isDataTexture||k.isData3DTexture?B.texSubImage3D(Oe,z,U.x,U.y,U.z,de,Me,Ce,Ie,Ge,ot.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Oe,z,U.x,U.y,U.z,de,Me,Ce,Ie,ot.data)):B.texSubImage3D(Oe,z,U.x,U.y,U.z,de,Me,Ce,Ie,Ge,ot),B.pixelStorei(B.UNPACK_ROW_LENGTH,ze),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ht),B.pixelStorei(B.UNPACK_SKIP_PIXELS,zt),B.pixelStorei(B.UNPACK_SKIP_ROWS,xt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,un),z===0&&V.generateMipmaps&&B.generateMipmap(Oe),me.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),me.unbindTexture()},this.resetState=function(){L=0,R=0,T=null,me.reset(),C.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Eo?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===nr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===tt?Kn:hl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Kn?tt:mt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Eg extends Ll{}Eg.prototype.isWebGL1Renderer=!0;class Pl extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Tg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ao,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lt=new w;class Co{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=on(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=on(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=on(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=on(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Co(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const hc=new w,uc=new nt,dc=new nt,bg=new w,fc=new Le,Ds=new w,kr=new ln,pc=new Le,Hr=new Oi;class Ag extends Ae{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$o,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Je),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ds),this.boundingBox.expandByPoint(Ds)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ln),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ds),this.boundingSphere.expandByPoint(Ds)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kr.copy(this.boundingSphere),kr.applyMatrix4(i),e.ray.intersectsSphere(kr)!==!1&&(pc.copy(i).invert(),Hr.copy(e.ray).applyMatrix4(pc),!(this.boundingBox!==null&&Hr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Hr)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$o?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Oh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;uc.fromBufferAttribute(i.attributes.skinIndex,e),dc.fromBufferAttribute(i.attributes.skinWeight,e),hc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=dc.getComponent(r);if(o!==0){const a=uc.getComponent(r);fc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(bg.copy(hc).applyMatrix4(fc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Dl extends rt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wg extends St{constructor(e=null,t=1,n=1,i,r,o,a,c,l=yt,h=yt,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mc=new Le,Rg=new Le;class Lo{constructor(e=[],t=[]){this.uuid=tn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Rg;mc.multiplyMatrices(a,t[r]),mc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Lo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new wg(t,e,e,$t,vn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Dl),this.bones.push(o),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class fo extends Et{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vi=new Le,gc=new Le,Is=[],_c=new Je,Cg=new Le,Xi=new Ae,qi=new ln;class Lg extends Ae{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Cg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Je),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vi),_c.copy(e.boundingBox).applyMatrix4(vi),this.boundingBox.union(_c)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vi),qi.copy(e.boundingSphere).applyMatrix4(vi),this.boundingSphere.union(qi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Xi.geometry=this.geometry,Xi.material=this.material,Xi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qi.copy(this.boundingSphere),qi.applyMatrix4(n),e.ray.intersectsSphere(qi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,vi),gc.multiplyMatrices(n,vi),Xi.matrixWorld=gc,Xi.raycast(e,Is);for(let o=0,a=Is.length;o<a;o++){const c=Is[o];c.instanceId=r,c.object=this,t.push(c)}Is.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Po extends an{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xc=new w,vc=new w,yc=new Le,Gr=new Oi,Us=new ln;class Do extends rt{constructor(e=new Ct,t=new Po){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)xc.fromBufferAttribute(t,i-1),vc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xc.distanceTo(vc);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(i),Us.radius+=r,e.ray.intersectsSphere(Us)===!1)return;yc.copy(i).invert(),Gr.copy(e.ray).applyMatrix4(yc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new w,h=new w,u=new w,d=new w,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let x=p,M=v-1;x<M;x+=f){const L=g.getX(x),R=g.getX(x+1);if(l.fromBufferAttribute(m,L),h.fromBufferAttribute(m,R),Gr.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(d);I<e.near||I>e.far||t.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let x=p,M=v-1;x<M;x+=f){if(l.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),Gr.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Mc=new w,Sc=new w;class Il extends Do{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Mc.fromBufferAttribute(t,i),Sc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Mc.distanceTo(Sc);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pg extends Do{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ul extends an{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ec=new Le,po=new Oi,Ns=new ln,Os=new w;class Dg extends rt{constructor(e=new Ct,t=new Ul){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(i),Ns.radius+=r,e.ray.intersectsSphere(Ns)===!1)return;Ec.copy(i).invert(),po.copy(e.ray).applyMatrix4(Ec);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Os.fromBufferAttribute(u,m),Tc(Os,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Os.fromBufferAttribute(u,g),Tc(Os,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Tc(s,e,t,n,i,r,o){const a=po.distanceSqToPoint(s);if(a<t){const c=new w;po.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class Nl extends St{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class os extends Ct{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Mt(i,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new w,d=new ue,f=new w,g=new w,_=new w;let m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let v=0;v<=t;v++){const x=n+v*h*i,M=Math.sin(x),L=Math.cos(x);for(let R=0;R<=e.length-1;R++){u.x=e[R].x*M,u.y=e[R].y,u.z=e[R].x*L,o.push(u.x,u.y,u.z),d.x=v/t,d.y=R/(e.length-1),a.push(d.x,d.y);const T=c[3*R+0]*M,I=c[3*R+1],y=c[3*R+0]*L;l.push(T,I,y)}}for(let v=0;v<t;v++)for(let x=0;x<e.length-1;x++){const M=x+v*e.length,L=M,R=M+e.length,T=M+e.length+1,I=M+1;r.push(L,R,I),r.push(T,I,R)}this.setIndex(r),this.setAttribute("position",new pt(o,3)),this.setAttribute("uv",new pt(a,2)),this.setAttribute("normal",new pt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.points,e.segments,e.phiStart,e.phiLength)}}class Io extends Ct{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new w,h=new ue;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(a,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Gt extends Ct{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new pt(u,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(f,2));function v(){const M=new w,L=new w;let R=0;const T=(t-e)/n;for(let I=0;I<=r;I++){const y=[],A=I/r,H=A*(t-e)+e;for(let G=0;G<=i;G++){const $=G/i,D=$*c+a,O=Math.sin(D),N=Math.cos(D);L.x=H*O,L.y=-A*n+m,L.z=H*N,u.push(L.x,L.y,L.z),M.set(O,T,N).normalize(),d.push(M.x,M.y,M.z),f.push($,1-A),y.push(g++)}_.push(y)}for(let I=0;I<i;I++)for(let y=0;y<r;y++){const A=_[y][I],H=_[y+1][I],G=_[y+1][I+1],$=_[y][I+1];h.push(A,H,$),h.push(H,G,$),R+=6}l.addGroup(p,R,0),p+=R}function x(M){const L=g,R=new ue,T=new w;let I=0;const y=M===!0?e:t,A=M===!0?1:-1;for(let G=1;G<=i;G++)u.push(0,m*A,0),d.push(0,A,0),f.push(.5,.5),g++;const H=g;for(let G=0;G<=i;G++){const D=G/i*c+a,O=Math.cos(D),N=Math.sin(D);T.x=y*N,T.y=m*A,T.z=y*O,u.push(T.x,T.y,T.z),d.push(0,A,0),R.x=O*.5+.5,R.y=N*.5*A+.5,f.push(R.x,R.y),g++}for(let G=0;G<i;G++){const $=L+G,D=H+G;M===!0?h.push(D,D+1,$):h.push(D+1,D,$),I+=3}l.addGroup(p,I,M===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Fs=new w,Bs=new w,Vr=new w,zs=new qt;class Ig extends Ct{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(Ti*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:m,c:p}=zs;if(_.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),zs.getNormal(Vr),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){const x=(v+1)%3,M=u[v],L=u[x],R=zs[h[v]],T=zs[h[x]],I=`${M}_${L}`,y=`${L}_${M}`;y in d&&d[y]?(Vr.dot(d[y].normal)<=r&&(f.push(R.x,R.y,R.z),f.push(T.x,T.y,T.z)),d[y]=null):I in d||(d[I]={index0:l[v],index1:l[x],normal:Vr.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];Fs.fromBufferAttribute(a,_),Bs.fromBufferAttribute(a,m),f.push(Fs.x,Fs.y,Fs.z),f.push(Bs.x,Bs.y,Bs.z)}this.setAttribute("position",new pt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Zt extends an{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ul,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ot extends Zt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ks(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Ug(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ng(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function bc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Ol(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class as{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Og extends as{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ma,endingEnd:Ma}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sa:r=e,a=2*t-n;break;case Ea:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Sa:o=e,c=2*n-t;break;case Ea:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,M=f*m-f*_;for(let L=0;L!==a;++L)r[L]=p*o[h+L]+v*o[l+L]+x*o[c+L]+M*o[u+L];return r}}class Fg extends as{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class Bg extends as{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class hn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ks(t,this.TimeBufferType),this.values=ks(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ks(e.times,Array),values:ks(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Og(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case is:t=this.InterpolantFactoryMethodDiscrete;break;case Pi:t=this.InterpolantFactoryMethodLinear;break;case gr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return is;case this.InterpolantFactoryMethodLinear:return Pi;case this.InterpolantFactoryMethodSmooth:return gr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Ug(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===gr,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=Pi;class Bi extends hn{}Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=is;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;class Fl extends hn{}Fl.prototype.ValueTypeName="color";class Ui extends hn{}Ui.prototype.ValueTypeName="number";class zg extends as{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)nn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Jn extends hn{InterpolantFactoryMethodLinear(e){return new zg(this.times,this.values,this.getValueSize(),e)}}Jn.prototype.ValueTypeName="quaternion";Jn.prototype.DefaultInterpolation=Pi;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;class zi extends hn{}zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=is;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ni extends hn{}Ni.prototype.ValueTypeName="vector";class kg{constructor(e,t=-1,n,i=Xh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=tn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Gg(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(hn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=Ng(c);c=bc(c,1,h),l=bc(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ui(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];Ol(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){const x=d[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new Ui(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(Ni,f+".position",d,"pos",i),n(Jn,f+".quaternion",d,"rot",i),n(Ni,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Hg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ui;case"vector":case"vector2":case"vector3":case"vector4":return Ni;case"color":return Fl;case"quaternion":return Jn;case"bool":case"boolean":return Bi;case"string":return zi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Gg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Hg(s.type);if(s.times===void 0){const t=[],n=[];Ol(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Pn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Vg{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Wg=new Vg;class ei{constructor(e){this.manager=e!==void 0?e:Wg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ei.DEFAULT_MATERIAL_NAME="__DEFAULT";const _n={};class Xg extends Error{constructor(e,t){super(e),this.response=t}}class Qs extends ei{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Pn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(_n[e]!==void 0){_n[e].push({onLoad:t,onProgress:n,onError:i});return}_n[e]=[],_n[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=_n[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){u.read().then(({done:x,value:M})=>{if(x)p.close();else{_+=M.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let R=0,T=h.length;R<T;R++){const I=h[R];I.onProgress&&I.onProgress(L)}p.enqueue(M),v()}})}}});return new Response(m)}else throw new Xg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Pn.add(e,l);const h=_n[e];delete _n[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=_n[e];if(h===void 0)throw this.manager.itemError(e),l;delete _n[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class qg extends ei{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Pn.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=rs("img");function c(){h(),Pn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Yg extends ei{constructor(e){super(e)}load(e,t,n,i){const r=new St,o=new qg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class or extends rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Kg extends or{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Wr=new Le,Ac=new w,wc=new w;class Uo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ao,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ac.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ac),wc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wc),t.updateMatrixWorld(),Wr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $g extends Uo{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Di*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class jg extends or{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new $g}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Rc=new Le,Yi=new w,Xr=new w;class Zg extends Uo{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Yi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Yi),Xr.copy(n.position),Xr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Xr),n.updateMatrixWorld(),i.makeTranslation(-Yi.x,-Yi.y,-Yi.z),Rc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rc)}}class Bl extends or{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Zg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Jg extends Uo{constructor(){super(new wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ws extends or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.shadow=new Jg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ts{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Qg extends ei{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Pn.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Pn.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Pn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Pn.add(e,c),r.manager.itemStart(e)}}class e_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Cc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Cc(){return(typeof performance>"u"?Date:performance).now()}const No="\\[\\]\\.:\\/",t_=new RegExp("["+No+"]","g"),Oo="[^"+No+"]",n_="[^"+No.replace("\\.","")+"]",i_=/((?:WC+[\/:])*)/.source.replace("WC",Oo),s_=/(WCOD+)?/.source.replace("WCOD",n_),r_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oo),o_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oo),a_=new RegExp("^"+i_+s_+r_+o_+"$"),c_=["material","materials","bones","map"];class l_{constructor(e,t,n){const i=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qe{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,n):new Qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(t_,"")}static parseTrackName(e){const t=a_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);c_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=l_;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class h_{constructor(e,t,n=0,i=1/0){this.ray=new Oi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new bo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return mo(e,this,n,t),n.sort(Lc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)mo(e[i],this,n,t);return n.sort(Lc),n}}function Lc(s,e){return s.distance-e.distance}function mo(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)mo(i[r],e,t,!0)}}class go{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mo);const Pc={type:"change"},qr={type:"start"},Dc={type:"end"},Hs=new Oi,Ic=new Yt,u_=Math.cos(70*ss.DEG2RAD);class d_ extends Qn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ti.ROTATE,MIDDLE:ti.DOLLY,RIGHT:ti.PAN},this.touches={ONE:ni.ROTATE,TWO:ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",be),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",be),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Pc),n.update(),r=i.NONE},this.update=function(){const C=new w,ie=new nn().setFromUnitVectors(e.up,new w(0,1,0)),ve=ie.clone().invert(),fe=new w,Q=new nn,P=new w,se=2*Math.PI;return function(Re=null){const Te=n.object.position;C.copy(Te).sub(n.target),C.applyQuaternion(ie),a.setFromVector3(C),n.autoRotate&&r===i.NONE&&G(A(Re)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let qe=n.minAzimuthAngle,Ye=n.maxAzimuthAngle;isFinite(qe)&&isFinite(Ye)&&(qe<-Math.PI?qe+=se:qe>Math.PI&&(qe-=se),Ye<-Math.PI?Ye+=se:Ye>Math.PI&&(Ye-=se),qe<=Ye?a.theta=Math.max(qe,Math.min(Ye,a.theta)):a.theta=a.theta>(qe+Ye)/2?Math.max(qe,a.theta):Math.min(Ye,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?a.radius=K(a.radius):a.radius=K(a.radius*l),C.setFromSpherical(a),C.applyQuaternion(ve),Te.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let at=!1;if(n.zoomToCursor&&R){let lt=null;if(n.object.isPerspectiveCamera){const $e=C.length();lt=K($e*l);const ut=$e-lt;n.object.position.addScaledVector(M,ut),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const $e=new w(L.x,L.y,0);$e.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),at=!0;const ut=new w(L.x,L.y,0);ut.unproject(n.object),n.object.position.sub(ut).add($e),n.object.updateMatrixWorld(),lt=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;lt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(lt).add(n.object.position):(Hs.origin.copy(n.object.position),Hs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Hs.direction))<u_?e.lookAt(n.target):(Ic.setFromNormalAndCoplanarPoint(n.object.up,n.target),Hs.intersectPlane(Ic,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),at=!0);return l=1,R=!1,at||fe.distanceToSquared(n.object.position)>o||8*(1-Q.dot(n.object.quaternion))>o||P.distanceToSquared(n.target)>0?(n.dispatchEvent(Pc),fe.copy(n.object.position),Q.copy(n.object.quaternion),P.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",je),n.domElement.removeEventListener("pointerdown",b),n.domElement.removeEventListener("pointercancel",F),n.domElement.removeEventListener("wheel",ne),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",F),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",be),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new go,c=new go;let l=1;const h=new w,u=new ue,d=new ue,f=new ue,g=new ue,_=new ue,m=new ue,p=new ue,v=new ue,x=new ue,M=new w,L=new ue;let R=!1;const T=[],I={};let y=!1;function A(C){return C!==null?2*Math.PI/60*n.autoRotateSpeed*C:2*Math.PI/60/60*n.autoRotateSpeed}function H(C){const ie=Math.abs(C*.01);return Math.pow(.95,n.zoomSpeed*ie)}function G(C){c.theta-=C}function $(C){c.phi-=C}const D=function(){const C=new w;return function(ve,fe){C.setFromMatrixColumn(fe,0),C.multiplyScalar(-ve),h.add(C)}}(),O=function(){const C=new w;return function(ve,fe){n.screenSpacePanning===!0?C.setFromMatrixColumn(fe,1):(C.setFromMatrixColumn(fe,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(ve),h.add(C)}}(),N=function(){const C=new w;return function(ve,fe){const Q=n.domElement;if(n.object.isPerspectiveCamera){const P=n.object.position;C.copy(P).sub(n.target);let se=C.length();se*=Math.tan(n.object.fov/2*Math.PI/180),D(2*ve*se/Q.clientHeight,n.object.matrix),O(2*fe*se/Q.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(ve*(n.object.right-n.object.left)/n.object.zoom/Q.clientWidth,n.object.matrix),O(fe*(n.object.top-n.object.bottom)/n.object.zoom/Q.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function q(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(C,ie){if(!n.zoomToCursor)return;R=!0;const ve=n.domElement.getBoundingClientRect(),fe=C-ve.left,Q=ie-ve.top,P=ve.width,se=ve.height;L.x=fe/P*2-1,L.y=-(Q/se)*2+1,M.set(L.x,L.y,1).unproject(n.object).sub(n.object.position).normalize()}function K(C){return Math.max(n.minDistance,Math.min(n.maxDistance,C))}function ee(C){u.set(C.clientX,C.clientY)}function re(C){Y(C.clientX,C.clientX),p.set(C.clientX,C.clientY)}function W(C){g.set(C.clientX,C.clientY)}function j(C){d.set(C.clientX,C.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const ie=n.domElement;G(2*Math.PI*f.x/ie.clientHeight),$(2*Math.PI*f.y/ie.clientHeight),u.copy(d),n.update()}function ae(C){v.set(C.clientX,C.clientY),x.subVectors(v,p),x.y>0?q(H(x.y)):x.y<0&&X(H(x.y)),p.copy(v),n.update()}function ye(C){_.set(C.clientX,C.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),N(m.x,m.y),g.copy(_),n.update()}function xe(C){Y(C.clientX,C.clientY),C.deltaY<0?X(H(C.deltaY)):C.deltaY>0&&q(H(C.deltaY)),n.update()}function Ue(C){let ie=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?$(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),ie=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?$(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),ie=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?G(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),ie=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?G(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),ie=!0;break}ie&&(C.preventDefault(),n.update())}function Ne(C){if(T.length===1)u.set(C.pageX,C.pageY);else{const ie=he(C),ve=.5*(C.pageX+ie.x),fe=.5*(C.pageY+ie.y);u.set(ve,fe)}}function we(C){if(T.length===1)g.set(C.pageX,C.pageY);else{const ie=he(C),ve=.5*(C.pageX+ie.x),fe=.5*(C.pageY+ie.y);g.set(ve,fe)}}function Xe(C){const ie=he(C),ve=C.pageX-ie.x,fe=C.pageY-ie.y,Q=Math.sqrt(ve*ve+fe*fe);p.set(0,Q)}function B(C){n.enableZoom&&Xe(C),n.enablePan&&we(C)}function Tt(C){n.enableZoom&&Xe(C),n.enableRotate&&Ne(C)}function Ee(C){if(T.length==1)d.set(C.pageX,C.pageY);else{const ve=he(C),fe=.5*(C.pageX+ve.x),Q=.5*(C.pageY+ve.y);d.set(fe,Q)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const ie=n.domElement;G(2*Math.PI*f.x/ie.clientHeight),$(2*Math.PI*f.y/ie.clientHeight),u.copy(d)}function Pe(C){if(T.length===1)_.set(C.pageX,C.pageY);else{const ie=he(C),ve=.5*(C.pageX+ie.x),fe=.5*(C.pageY+ie.y);_.set(ve,fe)}m.subVectors(_,g).multiplyScalar(n.panSpeed),N(m.x,m.y),g.copy(_)}function me(C){const ie=he(C),ve=C.pageX-ie.x,fe=C.pageY-ie.y,Q=Math.sqrt(ve*ve+fe*fe);v.set(0,Q),x.set(0,Math.pow(v.y/p.y,n.zoomSpeed)),q(x.y),p.copy(v);const P=(C.pageX+ie.x)*.5,se=(C.pageY+ie.y)*.5;Y(P,se)}function it(C){n.enableZoom&&me(C),n.enablePan&&Pe(C)}function Fe(C){n.enableZoom&&me(C),n.enableRotate&&Ee(C)}function b(C){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",S),n.domElement.addEventListener("pointerup",F)),He(C),C.pointerType==="touch"?Be(C):te(C))}function S(C){n.enabled!==!1&&(C.pointerType==="touch"?Z(C):J(C))}function F(C){De(C),T.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",F)),n.dispatchEvent(Dc),r=i.NONE}function te(C){let ie;switch(C.button){case 0:ie=n.mouseButtons.LEFT;break;case 1:ie=n.mouseButtons.MIDDLE;break;case 2:ie=n.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case ti.DOLLY:if(n.enableZoom===!1)return;re(C),r=i.DOLLY;break;case ti.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;W(C),r=i.PAN}else{if(n.enableRotate===!1)return;ee(C),r=i.ROTATE}break;case ti.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;ee(C),r=i.ROTATE}else{if(n.enablePan===!1)return;W(C),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(qr)}function J(C){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;j(C);break;case i.DOLLY:if(n.enableZoom===!1)return;ae(C);break;case i.PAN:if(n.enablePan===!1)return;ye(C);break}}function ne(C){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(C.preventDefault(),n.dispatchEvent(qr),xe(ge(C)),n.dispatchEvent(Dc))}function ge(C){const ie=C.deltaMode,ve={clientX:C.clientX,clientY:C.clientY,deltaY:C.deltaY};switch(ie){case 1:ve.deltaY*=16;break;case 2:ve.deltaY*=100;break}return C.ctrlKey&&!y&&(ve.deltaY*=10),ve}function le(C){C.key==="Control"&&(y=!0,document.addEventListener("keyup",pe,{passive:!0,capture:!0}))}function pe(C){C.key==="Control"&&(y=!1,document.removeEventListener("keyup",pe,{passive:!0,capture:!0}))}function be(C){n.enabled===!1||n.enablePan===!1||Ue(C)}function Be(C){switch(Se(C),T.length){case 1:switch(n.touches.ONE){case ni.ROTATE:if(n.enableRotate===!1)return;Ne(C),r=i.TOUCH_ROTATE;break;case ni.PAN:if(n.enablePan===!1)return;we(C),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case ni.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;B(C),r=i.TOUCH_DOLLY_PAN;break;case ni.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Tt(C),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(qr)}function Z(C){switch(Se(C),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ee(C),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Pe(C),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;it(C),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Fe(C),n.update();break;default:r=i.NONE}}function je(C){n.enabled!==!1&&C.preventDefault()}function He(C){T.push(C.pointerId)}function De(C){delete I[C.pointerId];for(let ie=0;ie<T.length;ie++)if(T[ie]==C.pointerId){T.splice(ie,1);return}}function Se(C){let ie=I[C.pointerId];ie===void 0&&(ie=new ue,I[C.pointerId]=ie),ie.set(C.pageX,C.pageY)}function he(C){const ie=C.pointerId===T[0]?T[1]:T[0];return I[ie]}n.domElement.addEventListener("contextmenu",je),n.domElement.addEventListener("pointerdown",b),n.domElement.addEventListener("pointercancel",F),n.domElement.addEventListener("wheel",ne,{passive:!1}),document.addEventListener("keydown",le,{passive:!0,capture:!0}),this.update()}}function Uc(s,e){if(e===qh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===oo||e===ll){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===oo)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class f_ extends ei{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new x_(t)}),this.register(function(t){return new w_(t)}),this.register(function(t){return new R_(t)}),this.register(function(t){return new C_(t)}),this.register(function(t){return new y_(t)}),this.register(function(t){return new M_(t)}),this.register(function(t){return new S_(t)}),this.register(function(t){return new E_(t)}),this.register(function(t){return new __(t)}),this.register(function(t){return new T_(t)}),this.register(function(t){return new v_(t)}),this.register(function(t){return new A_(t)}),this.register(function(t){return new b_(t)}),this.register(function(t){return new m_(t)}),this.register(function(t){return new L_(t)}),this.register(function(t){return new P_(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=ts.extractUrlBase(e);o=ts.resolveURL(l,this.path)}else o=ts.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Qs(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===zl){try{o[Ke.KHR_BINARY_GLTF]=new D_(e)}catch(u){i&&i(u);return}r=JSON.parse(o[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new X_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ke.KHR_MATERIALS_UNLIT:o[u]=new g_;break;case Ke.KHR_DRACO_MESH_COMPRESSION:o[u]=new I_(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:o[u]=new U_;break;case Ke.KHR_MESH_QUANTIZATION:o[u]=new N_;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function p_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class m_{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new _e(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],mt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ws(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Bl(h),l.distance=u;break;case"spot":l=new jg(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Cn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class g_{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return Mn}extendParams(e,t,n){const i=[];e.color=new _e(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],mt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,tt))}return Promise.all(i)}}class __{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class x_{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ue(a,a)}return Promise.all(r)}}class v_{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class y_{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new _e(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],mt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,tt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class M_{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class S_{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new _e().setRGB(a[0],a[1],a[2],mt),Promise.all(r)}}class E_{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class T_{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new _e().setRGB(a[0],a[1],a[2],mt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,tt)),Promise.all(r)}}class b_{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class A_{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class w_{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class R_{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class C_{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class L_{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class P_{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Xt.TRIANGLES&&l.mode!==Xt.TRIANGLE_STRIP&&l.mode!==Xt.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new Le,m=new w,p=new nn,v=new w(1,1,1),x=new Lg(g.geometry,g.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&v.fromBufferAttribute(c.SCALE,M),x.setMatrixAt(M,_.compose(m,p,v));for(const M in c)if(M==="_COLOR_0"){const L=c[M];x.instanceColor=new fo(L.array,L.itemSize,L.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,c[M]);rt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const zl="glTF",Ki=12,Nc={JSON:1313821514,BIN:5130562};class D_{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ki),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zl)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ki,r=new DataView(e,Ki);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Nc.JSON){const l=new Uint8Array(e,Ki+o,a);this.content=n.decode(l)}else if(c===Nc.BIN){const l=Ki+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class I_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=_o[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=_o[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Ai[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},a,l,mt,d)})})}}class U_{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class N_{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class kl extends as{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,v=1-m,x=p-d+u;for(let M=0;M!==a;M++){const L=o[_+M+a],R=o[_+M+c]*h,T=o[g+M+a],I=o[g+M]*h;r[M]=v*L+x*R+m*T+p*I}return r}}const O_=new nn;class F_ extends kl{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return O_.fromArray(r).normalize().toArray(r),r}}const Xt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ai={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Oc={9728:yt,9729:Ft,9984:ro,9985:tl,9986:Gs,9987:$n},Fc={33071:Kt,33648:Ys,10497:Ci},Yr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_o={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},wn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},B_={CUBICSPLINE:void 0,LINEAR:Pi,STEP:is},Kr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function z_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Zt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:cn})),s.DefaultMaterial}function Hn(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Cn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function k_(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function H_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function G_(s){let e;const t=s.extensions&&s.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$r(t.attributes):e=s.indices+":"+$r(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+$r(s.targets[n]);return e}function $r(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function xo(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function V_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const W_=new Le;class X_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new p_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Yg(this.options.manager):this.textureLoader=new Qg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Hn(r,a,i),Cn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(ts.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Yr[i.type],a=Ai[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Et(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Yr[i.type],l=Ai[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(v);x||(_=new l(a,p*f,i.count*f/h),x=new Tg(_,f/h),t.cache.add(v,x)),m=new Co(x,c,d%f/h,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),m=new Et(_,c,g);if(i.sparse!==void 0){const p=Yr.SCALAR,v=Ai[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,L=new v(o[1],x,i.sparse.count*p),R=new l(o[2],M,i.sparse.count*c);a!==null&&(m=new Et(m.array.slice(),m.itemSize,m.normalized));for(let T=0,I=L.length;T<I;T++){const y=L[T];if(m.setX(y,R[T*c]),c>=2&&m.setY(y,R[T*c+1]),c>=3&&m.setZ(y,R[T*c+2]),c>=4&&m.setW(y,R[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Oc[d.magFilter]||Ft,h.minFilter=Oc[d.minFilter]||$n,h.wrapS=Fc[d.wrapS]||Ci,h.wrapT=Fc[d.wrapT]||Ci,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new St(_);m.needsUpdate=!0,d(m)}),t.load(ts.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||V_(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Ul,an.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Po,an.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Zt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[Ke.KHR_MATERIALS_UNLIT]){const u=i[Ke.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new _e(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],mt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,tt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ut);const h=r.alphaMode||Kr.OPAQUE;if(h===Kr.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Kr.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Mn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ue(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Mn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Mn){const u=r.emissiveFactor;a.emissive=new _e().setRGB(u[0],u[1],u[2],mt)}return r.emissiveTexture!==void 0&&o!==Mn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,tt)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Cn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Hn(i,u,r),u})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Bc(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=G_(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Bc(new Ct,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?z_(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const v=l[f];if(m.mode===Xt.TRIANGLES||m.mode===Xt.TRIANGLE_STRIP||m.mode===Xt.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Ag(_,v):new Ae(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Xt.TRIANGLE_STRIP?p.geometry=Uc(p.geometry,ll):m.mode===Xt.TRIANGLE_FAN&&(p.geometry=Uc(p.geometry,oo));else if(m.mode===Xt.LINES)p=new Il(_,v);else if(m.mode===Xt.LINE_STRIP)p=new Do(_,v);else if(m.mode===Xt.LINE_LOOP)p=new Pg(_,v);else if(m.mode===Xt.POINTS)p=new Dg(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&H_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Cn(p,r),m.extensions&&Hn(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Hn(i,u[0],r),u[0];const d=new ft;r.extensions&&Hn(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dt(ss.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new wo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Cn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Le;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Lo(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let v=0,x=d.length;v<x;v++){const M=d[v],L=f[v],R=g[v],T=_[v],I=m[v];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const y=n._createAnimationTracks(M,L,R,T,I);if(y)for(let A=0;A<y.length;A++)p.push(y[A])}return new kg(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,W_)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Dl:l.length>1?h=new ft:l.length===1?h=l[0]:h=new rt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Cn(h,r),r.extensions&&Hn(n,h,r),r.matrix!==void 0){const u=new Le;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new ft;n.name&&(r.name=i.createUniqueName(n.name)),Cn(r,n),n.extensions&&Hn(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof an||d instanceof St)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];wn[r.path]===wn.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(wn[r.path]){case wn.weights:l=Ui;break;case wn.rotation:l=Jn;break;case wn.position:case wn.scale:l=Ni;break;default:switch(n.itemSize){case 1:l=Ui;break;case 2:case 3:default:l=Ni;break}break}const h=i.interpolation!==void 0?B_[i.interpolation]:Pi,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+wn[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=xo(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Jn?F_:kl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function q_(s,e,t){const n=e.attributes,i=new Je;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new w(c[0],c[1],c[2]),new w(l[0],l[1],l[2])),a.normalized){const h=xo(Ai[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new w,c=new w;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=xo(Ai[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new ln;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Bc(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=_o[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Ze.workingColorSpace!==mt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Cn(s,e),q_(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?k_(s,e.targets,t):s})}const jr=new WeakMap;class Y_ extends ei{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new Qs(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,tt).catch(n)}decodeDracoFile(e,t,n,i,r=mt,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(jr.has(e)){const c=jr.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(c=>(i=c,new Promise((l,h)=>{i._callbacks[r]={resolve:l,reject:h},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),jr.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Ct;e.index&&t.setIndex(new Et(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,c=new Et(o,a);r==="color"&&(this._assignVertexColorSpace(c,i.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==tt)return;const n=new _e;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Qs(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=K_.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function K_(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(h){s.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(s)});break;case"decode":const c=a.buffer,l=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(c),l),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,c,l){const h=l.attributeIDs,u=l.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(c);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(c,c.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let v,x;if(l.useUniqueIDs)x=h[m],v=a.GetAttributeByUniqueId(d,x);else{if(x=a.GetAttributeId(d,o[h[m]]),x===-1)continue;v=a.GetAttribute(d,x)}const M=i(o,a,d,m,p,v);m==="color"&&(M.vertexColorSpace=l.vertexColorSpace),_.attributes.push(M)}return g===o.TRIANGULAR_MESH&&(_.index=n(o,a,d)),o.destroy(d),_}function n(o,a,c){const h=c.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(c,u,d);const f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function i(o,a,c,l,h,u){const d=u.num_components(),g=c.num_points()*d,_=g*h.BYTES_PER_ELEMENT,m=r(o,h),p=o._malloc(_);a.GetAttributeDataArrayForAllPoints(c,u,m,_,p);const v=new h(o.HEAPF32.buffer,p,g).slice();return o._free(p),{name:l,array:v,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}const vo=new f_,Hl=new Y_;Hl.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");vo.setDRACOLoader(Hl);function zc(s){return`./${String(s||"").replace(/^\/+/,"")}`}const $_=4*1024*1024,kc=8;async function j_(s,e){const t=Math.ceil(e/kc),n=await Promise.all(Array.from({length:kc},(o,a)=>{const c=a*t,l=Math.min(e-1,(a+1)*t-1);return fetch(s,{headers:{Range:`bytes=${c}-${l}`}}).then(async h=>{if(h.status!==206)throw new Error(`range ${h.status}`);return new Uint8Array(await h.arrayBuffer())})})),i=new Uint8Array(e);let r=0;for(const o of n)i.set(o,r),r+=o.byteLength;return i.buffer}async function Hc(s){let e;try{const n=await fetch(s,{method:"HEAD"}),i=Number(n.headers.get("content-length"))||0;if(n.ok&&i>$_&&n.headers.get("accept-ranges")==="bytes"){const r=await j_(s,i);e=await vo.parseAsync(r,"")}}catch(n){console.warn("parallel fetch failed, falling back",s,n)}e||(e=await vo.loadAsync(s));const t=e.scene||e.scenes[0];return t.updateMatrixWorld(!0),t}function Gc(s){const e=new ft;return e.add(s),e.updateMatrixWorld(!0),e}function Zr(s,e=2.4){s.updateMatrixWorld(!0);const t=new Je().setFromObject(s);if(t.isEmpty())return 1;const n=t.getSize(new w),i=t.getCenter(new w),r=Math.max(n.x,n.y,n.z)||1,o=e/r;return s.position.sub(i),s.scale.setScalar(o),s.updateMatrixWorld(!0),o}async function Vc(s){try{if((await fetch(s,{method:"HEAD"})).ok)return!0}catch{}try{const e=await fetch(s,{method:"GET",headers:{Range:"bytes=0-1"}});return e.ok||e.status===206}catch{return!1}}class Z_ extends Pl{constructor(e=null){super();const t=new Bt;t.deleteAttribute("uv");const n=new Zt({side:Nt}),i=new Zt;let r=5;e!==null&&e._useLegacyLights===!1&&(r=900);const o=new Bl(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);const a=new Ae(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const c=new Ae(t,i);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);const l=new Ae(t,i);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);const h=new Ae(t,i);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);const u=new Ae(t,i);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);const d=new Ae(t,i);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);const f=new Ae(t,i);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);const g=new Ae(t,yi(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);const _=new Ae(t,yi(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);const m=new Ae(t,yi(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const p=new Ae(t,yi(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const v=new Ae(t,yi(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const x=new Ae(t,yi(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function yi(s){const e=new Mn;return e.color.setScalar(s),e}function J_(s){const e=new ho(s),t=e.fromScene(new Z_,.02).texture;return e.dispose(),t}function Wc(s,e,t){if(t.current){try{t.current.dispose()}catch{}t.current=null}const n=new _e(e||"#14171c"),i={h:0,s:0,l:0};n.getHSL(i);const r=i.l>.45,o=r?n.clone().lerp(new _e(16777215),.25):n.clone().lerp(new _e(0),.35),a=r?n.clone().lerp(new _e(8947848),.2):n.clone().lerp(new _e(2765632),.25),c=document.createElement("canvas");c.width=8,c.height=256;const l=c.getContext("2d"),h=l.createRadialGradient(4,110,2,4,140,140);h.addColorStop(0,"#"+a.clone().lerp(new _e(3818837),.35).getHexString()),h.addColorStop(.45,"#"+n.getHexString()),h.addColorStop(1,"#"+o.getHexString()),l.fillStyle=h,l.fillRect(0,0,8,256),t.current=new Nl(c),t.current.colorSpace=tt,s.background=t.current}function Xc(s,e,t){const n=new _e(e||"#9aa0a8"),i={h:0,s:0,l:0};n.getHSL(i);const r=i.s<.18,o=!r&&i.s>.08,a=r||o?new _e(e||"#CDD2D8"):new _e().setHSL(i.h,Math.min(.06,i.s),ss.clamp(i.l,.42,.72)),c=r?.12:o?.28:.9,l=r?.48:o?.38:.2,h=r?.18:o?.4:.9,u=r?.7:o?1.05:2.15;s.traverse(d=>{var _,m;if(!d.isMesh)return;d.castShadow=!0,d.receiveShadow=!0;const f=new Ot({color:a.clone(),metalness:c,roughness:l,clearcoat:h,clearcoatRoughness:o?.16:.08,reflectivity:.95,envMap:t||null,envMapIntensity:t?u:u*.7,side:Ut}),g=(Math.random()-.5)*.03;f.roughness=ss.clamp(l+g,.12,.58),f.color.offsetHSL(0,0,g*.35),Array.isArray(d.material)?(d.material.forEach(p=>{var v;return(v=p==null?void 0:p.dispose)==null?void 0:v.call(p)}),d.material=d.material.map(()=>f.clone())):((m=(_=d.material)==null?void 0:_.dispose)==null||m.call(_),d.material=f)})}function qc(s,e,t="#0066FF"){s.traverse(n=>{if(!n.isMesh||!n.material)return;const i=Array.isArray(n.material)?n.material:[n.material];for(const r of i)r.emissive&&(e?(r.userData._prevEmissive=r.emissive.getHex(),r.userData._prevIntensity=r.emissiveIntensity??0,r.emissive.set(t),r.emissiveIntensity=.35):r.userData._prevEmissive!=null?(r.emissive.setHex(r.userData._prevEmissive),r.emissiveIntensity=r.userData._prevIntensity||0,delete r.userData._prevEmissive,delete r.userData._prevIntensity):(r.emissive.setHex(0),r.emissiveIntensity=0))})}const Zi=28;function Jr(s){return s<.5?4*s*s*s:1-(-2*s+2)**3/2}function Q_(s,e=Zi,t="zh"){const n=e/60*Math.PI*2,i=(s*n%(Math.PI*2)+Math.PI*2)%(Math.PI*2),r=Math.cos(i);let o;r>.85?o="tdc":r<-.85?o="bdc":Math.sin(i)>0?o="down":o="up";const a={tdc:"上死點",bdc:"下死點 · 沖壓到位",down:"滑塊下行",up:"回程上升"},c={tdc:"TDC",bdc:"BDC · stamp",down:"Down stroke",up:"Return"};return{key:o,angleDeg:Math.round(i*180/Math.PI),label:t==="en"?c[o]:a[o],progress:i/(Math.PI*2)}}const It={navy:"#1E4C8A",orange:"#E8622A",grey:"#C9CED4",steel:"#AEB5BC",logoBlue:"#8FBCDE",black:"#1A1A1A"},er=[{id:"housing",code:"FACH03A0101",name:"機架／外罩組",nameEn:"Frame / Housing",number:1,description:"沖床主體外罩與結構機架，承載內部傳動與滑塊系統。",descriptionEn:"Main housing and structural frame carrying the drive and slider systems.",color:It.grey,finish:"paint",explode:{x:0,y:2.35,z:0},stagger:[0,.38]},{id:"drive",code:"FMTH02A0201",name:"曲柄軸組",nameEn:"Crankshaft Assembly",number:6,description:"曲柄軸接受飛輪動力，帶動連桿組與配重連桿組，將旋轉運動轉換為滑塊上下行程。",descriptionEn:"The crankshaft takes power from the flywheel and drives the main and counterweight rods, converting rotation into the slide stroke.",color:It.steel,finish:"paint",explode:{x:.55,y:.95,z:.2},stagger:[.1,.5]},{id:"slider",code:"FMTH05A0101",name:"配重連桿組",nameEn:"Counterweight Rod",number:8,description:"配重連桿與主連桿同步作動，抵消滑塊質量慣性，穩定高速沖壓的動態平衡。",descriptionEn:"The counterweight rod moves with the main rod to cancel slide inertia and stabilize high-speed dynamic balance.",color:It.orange,finish:"paint",explode:{x:0,y:.18,z:.95},stagger:[.2,.58]},{id:"sideL",code:"FMTH01A0300-L",name:"中座組（左）",nameEn:"Middle Seat (Left)",number:3,description:"沖床的中座部位左側，與右側共同支撐滑塊行程，確保上下運轉穩定。",descriptionEn:"Left side of the press bed. Supports the slide stroke with the right side for stable travel.",color:It.grey,finish:"paint",explode:{x:-1.55,y:-.85,z:0},stagger:[.3,.78]},{id:"sideR",code:"FMTH01A0300-R",name:"中座組（右）",nameEn:"Middle Seat (Right)",number:2,description:"沖床的中座部位右側，與左側對稱引導滑塊，維持高速沖壓剛性與對中精度。",descriptionEn:"Right side of the press bed. Guides the slide with the left side and keeps rigidity at high speed.",color:It.grey,finish:"paint",explode:{x:1.55,y:-.85,z:0},stagger:[.3,.78]},{id:"base",code:"FMTH04D0101",name:"下座／工作台組",nameEn:"Bolster / Bed",number:10,description:"下座與工作台承載模具，承受沖壓反力並維持定位精度。",descriptionEn:"Bed and bolster support the die and absorb stamping reaction forces.",color:It.navy,finish:"paint",explode:{x:0,y:-2.25,z:0},stagger:[.3,.78]}];function Ji(s){return/^NAUO(206[89]|207\d|208\d|209\d)/.test((s==null?void 0:s.name)||"")}function Xs(s){return/^NAUO(1688|1689)/.test((s==null?void 0:s.name)||"")}function e0(s){return/^NAUO(1679|1582)/.test((s==null?void 0:s.name)||"")}function Gl(s,e,t,n,i,r){const o=n&&i&&Math.abs(n.y-n.z)<r*.08&&n.y>r*.14&&n.x<i.x*.16&&s>.54&&e>.2,a=n&&i&&n.x>i.x*.32&&n.y<r*.12&&n.z<i.z*.55&&s>.5&&s<.84,c=n&&i&&s>.5&&s<.72&&n.y<r*.1&&n.x>i.x*.22,l=n&&s>.52&&s<.72&&e>.2&&n.y<r*.08;return o||a||c||l?"drive":s>=.58?"housing":e>.33&&s>=.18&&s<.66?t<0?"sideL":"sideR":s>=.22&&s<.58?"slider":"base"}function t0(s,e){const[t,n]=e||[0,1],i=Math.max(.001,n-t),r=ss.clamp((s-t)/i,0,1);return r*r*(3-2*r)}function n0(s,e){s.updateMatrixWorld(!0);const t=new Je().setFromObject(s),n=t.getSize(new w),i=t.min.y,r=Math.max(n.y,.001),o=(t.min.x+t.max.x)*.5,a=new Je,c=new w;s.traverse(l=>{var R,T;if(!l.isMesh||l.name==="fairOaksDecal")return;l.castShadow=!0,l.receiveShadow=!0,a.setFromObject(l),c.copy(a.getCenter(new w));const h=(c.y-i)/r,u=Math.abs(c.x-o)/Math.max(n.x,.001),d=a.getSize(new w),f=Ji(l)?"base":Xs(l)?"slider":l.userData.bandId||Gl(h,u,c.x-o,d,n,r),g=er.find(I=>I.id===f)||er[0],_=e0(l);let m=Ji(l)?It.black:_?It.steel:Xs(l)?It.orange:f==="slider"&&h>.5?It.steel:g.color;if(f==="slider"&&!_&&!Ji(l)&&!Xs(l)&&c.y<-.7&&!/^NAUO1684(_|$)/.test(l.name||"")){const I=Math.abs(c.x-o),y=Math.abs(c.z-(t.min.z+t.max.z)*.5);y>.3||I>.6?m=Math.min(d.x,d.y,d.z)<.014?"#C9CED3":"#3A3F46":y<=.2&&c.y>-1.16&&c.y<-.83&&(m=It.steel)}const p=new _e(m),v=Ji(l),x=v||g.finish==="paint"||p.getHSL({h:0,s:0,l:0}).s>.16,M=!_&&!v&&x&&p.getHSL({h:0,s:0,l:0}).s<.18,L=new Ot({color:p,metalness:v?.06:M?.12:x?.28:.9,roughness:v?.58:M?.48:x?.38:.2,clearcoat:v?.04:M?.18:x?.4:.9,clearcoatRoughness:v?.55:M?.38:x?.22:.1,envMap:e||null,envMapIntensity:e?v?.25:M?.7:x?1.05:2.15:1,side:Ut});Array.isArray(l.material)?(l.material.forEach(I=>{var y;return(y=I==null?void 0:I.dispose)==null?void 0:y.call(I)}),l.material=l.material.map(()=>L.clone())):((T=(R=l.material)==null?void 0:R.dispose)==null||T.call(R),l.material=L),l.userData.bandId=f})}function i0(s){s.updateMatrixWorld(!0);const e=new Je().setFromObject(s);if(e.isEmpty())return null;const t=e.getSize(new w),n=document.createElement("canvas");n.width=1024,n.height=256;const i=n.getContext("2d");i.clearRect(0,0,1024,256),i.fillStyle=It.logoBlue,i.fillRect(24,36,976,184),i.fillStyle="#ffffff",i.font='bold 92px "Segoe UI", "Noto Sans TC", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText("FAIR OAKS",512,128);const r=new Nl(n);r.colorSpace=tt;const o=t.x*.42,a=o*.28,c=new Ae(new sr(o,a),new Mn({map:r,transparent:!0,depthWrite:!1}));return c.name="fairOaksDecal",c.position.set((e.min.x+e.max.x)*.5,e.min.y+t.y*.82,e.max.z+.01),s.add(c),c}function s0(s,e,t){s.pivot.updateMatrixWorld(!0),e==null||e.pivot.updateMatrixWorld(!0),t==null||t.pivot.updateMatrixWorld(!0);const n=[];s.pivot.traverse(f=>{f.isMesh&&n.push(f)});const i=new Je,r=[];for(const f of n)/^NAUO380/.test(f.name||"")&&(i.setFromObject(f),!i.isEmpty()&&r.push({mc:i.getCenter(new w)}));if(!r.length)return;const o=new w;for(const f of r)o.add(f.mc);o.multiplyScalar(1/r.length);const a=new ft;a.name="driveSpin",s.pivot.add(a),a.position.copy(s.pivot.worldToLocal(o.clone()));for(const f of n){if(f.parent===a)continue;const g=f.name||"";if(/^NAUO352(_|$)/.test(g))continue;if(/^NAUO(736|380|381|382|383|384|301|260|167|314|719|745|746)/.test(g)){a.attach(f);continue}if(i.setFromObject(f),i.isEmpty())continue;const _=i.getSize(new w),m=i.getCenter(new w),p=Math.hypot(m.y-o.y,m.z-o.z),v=Math.abs(_.y-_.z)<Math.max(_.y,_.z)*.1,x=Math.min(_.y,_.z);p<.04&&v&&x>.28&&_.x<x*.85&&a.attach(f)}const c=[],l=f=>{if(!f.isMesh)return;let g=f;for(;g;){if(g===a)return;g=g.parent}if(/^film/.test(f.name||"")||f.name==="fairOaksDecal"||Xl(f)||(i.setFromObject(f),i.isEmpty()))return;const _=i.getSize(new w),m=i.getCenter(new w),p=Math.max(_.x,_.y,_.z);if(p>.55)return;const v=Math.hypot(m.y-o.y,m.z-o.z),x=Math.abs(m.x),M=Math.abs(_.y-_.z)<Math.max(_.y,_.z)*.15,L=Math.max(_.y,_.z);if(v<.02&&M&&L>.06&&L<.22&&_.x<.15&&x<.72){c.push(f);return}x>.72&&x<1.02&&v<.2&&p<.2&&_.x<.06&&c.push(f)};s.pivot.traverse(f=>l(f)),e==null||e.pivot.traverse(f=>l(f));for(const f of c)a.attach(f);const h=[];for(const f of[s,e,t])f==null||f.pivot.traverse(g=>{g.isMesh&&/^NAUO1047(_|$)/.test(g.name||"")&&h.push(g)});for(const f of h)a.attach(f);const u=[];a.traverse(f=>{if(!f.isMesh||(i.setFromObject(f),i.isEmpty()))return;const g=i.getCenter(new w);Math.hypot(g.y-o.y,g.z-o.z)>.3&&u.push(f)});for(const f of u)s.pivot.attach(f);let d=null;if(a.traverse(f=>{!d&&f.isMesh&&/^NAUO736(_|$)/.test(f.name||"")&&(d=f)}),d){s.shaft736=d,s.shaftMidPlanes=[new Yt(new w(-1,0,0),.5),new Yt(new w(1,0,0),.5)],d.material.clipShadows=!0;const g=d.material.clone();g.clippingPlanes=[new Yt(new w(1,0,0),-.5),new Yt(new w(-1,0,0),-.5)],g.clipIntersection=!0,g.clipShadows=!0;const _=new Ae(d.geometry,g);_.name="filmShaftEnds",_.castShadow=d.castShadow,_.receiveShadow=d.receiveShadow,_.visible=!1,_.position.copy(d.position),_.quaternion.copy(d.quaternion),_.scale.copy(d.scale),a.add(_),s.filmShaftEnds=_}if(t){const f=new ft;f.name="journalSpin",t.pivot.add(f),f.position.copy(t.pivot.worldToLocal(o.clone()));const g=/^NAUO(584|749|624)(_|$)/,_=[];for(const m of[s,e,t])m==null||m.pivot.traverse(p=>{p.isMesh&&g.test(p.name||"")&&_.push(p)});for(const m of _)f.attach(m);s.journalSpin=f}{const f=new ft;f.name="journalFixed",s.pivot.add(f),f.position.copy(s.pivot.worldToLocal(o.clone()));const g=[];for(const _ of[s,e,t])_==null||_.pivot.traverse(m=>{m.isMesh&&/^NAUO1136(_|$)/.test(m.name||"")&&g.push(m)});for(const _ of g)f.attach(_);s.journalFixed=f}s.spin=a,s.axis=o.clone()}function r0(s){const e=[];s.root.traverse(n=>{n.isMesh&&/^NAUO707(_\d+)?$/.test(n.name||"")&&e.push(n)});const t=new Je;e.forEach((n,i)=>{n.updateWorldMatrix(!0,!1),n.geometry.boundingBox||n.geometry.computeBoundingBox(),t.copy(n.geometry.boundingBox).applyMatrix4(n.matrixWorld);const r=t.min.y+.006,o=t.min.y-.022,a=new Bt(t.max.x-t.min.x+.0016,r-o,t.max.z-t.min.z+.0016),c=Array.isArray(n.material)?n.material[0]:n.material,l=new Ae(a,c);l.name=`strapJointFiller_${i}`,l.castShadow=!0,l.receiveShadow=!0;const h=new Le().makeTranslation((t.min.x+t.max.x)/2,(r+o)/2,(t.min.z+t.max.z)/2);new Le().copy(n.matrixWorld).invert().multiply(h).decompose(l.position,l.quaternion,l.scale),n.add(l)})}function o0(s){const e=[];s.root.traverse(i=>{i.isMesh&&/^NAUO602(_\d+)?$/.test(i.name||"")&&e.push(i)});const t=new Je,n=new Je;e.forEach((i,r)=>{i.updateWorldMatrix(!0,!1),i.geometry.boundingBox||i.geometry.computeBoundingBox(),t.copy(i.geometry.boundingBox).applyMatrix4(i.matrixWorld);const o=(t.min.x+t.max.x)/2;let a=null,c=null;if(s.root.traverse(f=>{if(!f.isMesh||!f.geometry)return;const g=/^NAUO584(_\d+)?$/.test(f.name||""),_=/^NAUO520(_\d+)?$/.test(f.name||"");!g&&!_||(f.updateWorldMatrix(!0,!1),f.geometry.boundingBox||f.geometry.computeBoundingBox(),n.copy(f.geometry.boundingBox).applyMatrix4(f.matrixWorld),!(o<n.min.x-.1||o>n.max.x+.1)&&(g?a=n.clone():c=n.clone()))}),!a||!c)return;const l=Array.isArray(i.material)?i.material[0]:i.material,h=-.418,u=-.368,d=(f,g,_)=>{const m=new Bt(t.max.x-t.min.x+.001,u-h,g-f),p=new Ae(m,l);p.name=`towerJointFiller_${r}${_}`,p.castShadow=!0,p.receiveShadow=!0;const v=new Le().makeTranslation(o,(u+h)/2,(f+g)/2);new Le().copy(i.matrixWorld).invert().multiply(v).decompose(p.position,p.quaternion,p.scale),i.add(p)};d(a.max.z+.002,t.max.z+.0025,"f"),d(t.min.z-.0025,a.min.z-.002,"b")})}function a0(s,e){const t=e==null?void 0:e.journalSpin,n=e==null?void 0:e.journalFixed;if(!t||!n)return;t.updateMatrixWorld(!0),n.updateMatrixWorld(!0);const i=new w;t.getWorldPosition(i);const r=[],o=[];t.traverse(u=>{u.isMesh&&(/^NAUO584(_\d+)?$/.test(u.name||"")?r.push(u):/^NAUO749(_\d+)?$/.test(u.name||"")&&o.push(u))});const a=new Je,c=new Je;r.forEach((u,d)=>{u.updateWorldMatrix(!0,!1),u.geometry.boundingBox||u.geometry.computeBoundingBox(),a.copy(u.geometry.boundingBox).applyMatrix4(u.matrixWorld);for(const y of o)y.updateWorldMatrix(!0,!1),y.geometry.boundingBox||y.geometry.computeBoundingBox(),c.copy(y.geometry.boundingBox).applyMatrix4(y.matrixWorld),!(c.max.x<a.min.x-.05||c.min.x>a.max.x+.05)&&(a.min.x=Math.min(a.min.x,c.min.x),a.max.x=Math.max(a.max.x,c.max.x));const f=(a.max.x-a.min.x)/2-4e-4,g=.078,_=.132,m=[new ue(g,-f),new ue(_,-f),new ue(_,f),new ue(g,f),new ue(g,-f)],p=new os(m,64);p.rotateZ(Math.PI/2);const v=Array.isArray(u.material)?u.material[0]:u.material,x=new Ae(p,v);x.name=`bearingRing_${d}`,x.castShadow=!0,x.receiveShadow=!0;const M=new Le().makeTranslation((a.min.x+a.max.x)/2,i.y,i.z);new Le().copy(t.matrixWorld).invert().multiply(M).decompose(x.position,x.quaternion,x.scale),t.add(x);const R=(y,A,H)=>{const G=new Gt(_,_,A-y,64);G.rotateZ(Math.PI/2);const $=new Ae(G,v);$.name=`bearingCap_${d}${H}`,$.castShadow=!0,$.receiveShadow=!0;const D=new Le().makeTranslation((y+A)/2,i.y,i.z);new Le().copy(t.matrixWorld).invert().multiply(D).decompose($.position,$.quaternion,$.scale),t.add($)},T=.006,I=8e-4;R(a.min.x-I-T,a.min.x-I,"a"),R(a.max.x+I,a.max.x+I+T,"b"),Yc(t,i,v,a.min.x-I-T,-1,`${d}a`),Yc(t,i,v,a.max.x+I+T,1,`${d}b`)});const l=[];t.traverse(u=>{u.isMesh&&/^NAUO624(_\d+)?$/.test(u.name||"")&&l.push(u)});const h=new Je;l.forEach((u,d)=>{u.updateWorldMatrix(!0,!1),u.geometry.boundingBox||u.geometry.computeBoundingBox(),h.copy(u.geometry.boundingBox).applyMatrix4(u.matrixWorld);const f=Array.isArray(u.material)?u.material[0]:u.material;Kc(t,i,f,h.min.x-8e-4,-1,`${d}a`),Kc(t,i,f,h.max.x+8e-4,1,`${d}b`)})}function Xn(s,e,t,n,i){const r=new Le().makeTranslation(t,n,i);new Le().copy(s.matrixWorld).invert().multiply(r).decompose(e.position,e.quaternion,e.scale),e.castShadow=!0,e.receiveShadow=!0,s.add(e)}function Yc(s,e,t,n,i,r){const o=t.clone?t.clone():t;o.color&&(o.color=o.color.clone().multiplyScalar(.42));const a=.005,c=new Ae(new Gt(.105,.105,a,48),t);c.geometry.rotateZ(Math.PI/2),c.name=`bearingFaceFlange_${r}`,Xn(s,c,n+i*(a/2),e.y,e.z);for(let _=0;_<10;_+=1){const m=_/10*Math.PI*2,p=new Ae(new Gt(.0075,.0075,.006,14),t);p.geometry.rotateZ(Math.PI/2),p.name=`bearingFaceBolt_${r}_${_}`,Xn(s,p,n+i*(a+.0028),e.y+Math.cos(m)*.0845,e.z+Math.sin(m)*.0845)}const l=[new ue(.106,-.002),new ue(.124,-.002),new ue(.124,.002),new ue(.106,.002),new ue(.106,-.002)],h=new os(l,48);h.rotateZ(Math.PI/2);const u=new Ae(h,o);u.name=`bearingFaceBack_${r}`,Xn(s,u,n,e.y,e.z);for(let _=0;_<18;_+=1){const m=(_+.5)/18*Math.PI*2,p=new Ae(new Gt(.0063,.0063,.01,12),t);p.geometry.rotateZ(Math.PI/2),p.name=`bearingFaceRoller_${r}_${_}`,Xn(s,p,n+i*8e-4,e.y+Math.cos(m)*.1152,e.z+Math.sin(m)*.1152)}const d=[new ue(.1248,-a/2),new ue(.132,-a/2),new ue(.132,a/2),new ue(.1248,a/2),new ue(.1248,-a/2)],f=new os(d,48);f.rotateZ(Math.PI/2);const g=new Ae(f,t);g.name=`bearingFaceRim_${r}`,Xn(s,g,n+i*(a/2),e.y,e.z)}function Kc(s,e,t,n,i,r){const a=new Ae(new Gt(.047,.047,.004,36),t);a.geometry.rotateZ(Math.PI/2),a.name=`sleeveFaceDisc_${r}`,Xn(s,a,n+i*(.004/2),e.y,e.z);for(let c=0;c<6;c+=1){const l=c/6*Math.PI*2,h=new Ae(new Gt(.0055,.0055,.0045,12),t);h.geometry.rotateZ(Math.PI/2),h.name=`sleeveFaceBolt_${r}_${c}`,Xn(s,h,n+i*(.004+.002),e.y+Math.cos(l)*.0345,e.z+Math.sin(l)*.0345)}}function c0(s){s.updateMatrixWorld(!0);const e=new Je().setFromObject(s),t=e.getSize(new w),n=e.min.y,i=Math.max(t.y,.001),r=(e.min.x+e.max.x)*.5,o=new Je,a=new w,c=new w,l=Object.fromEntries(er.map(m=>[m.id,[]]));s.traverse(m=>{if(!m.isMesh||m.name==="fairOaksDecal"||(o.setFromObject(m),o.isEmpty()))return;a.copy(o.getCenter(new w)),c.copy(o.getSize(new w));const p=(a.y-n)/i,v=Math.abs(a.x-r)/Math.max(t.x,.001),x=Ji(m)?"base":Xs(m)?"slider":Gl(p,v,a.x-r,c,t,i);l[x].push({mesh:m,c:a.clone()})});const h=[];for(const m of er){const p=l[m.id];if(!p.length)continue;const v=new ft;v.name=`band_${m.id}`;const x=new w;for(const M of p)x.add(M.c);x.multiplyScalar(1/p.length),s.add(v),v.position.copy(x);for(const{mesh:M}of p)v.attach(M);h.push({id:m.id,def:m,pivot:v,count:p.length,home:v.position.clone(),homeQuat:v.quaternion.clone()})}const u=h.find(m=>m.id==="drive"),d=h.find(m=>m.id==="housing"),f=h.find(m=>m.id==="slider");u&&s0(u,d,f),u&&a0({},u);const g=Math.min(.07,i*.028),_={root:s,bands:h,stroke:g,size:t,counts:Object.fromEntries(h.map(m=>[m.id,m.count]))};return w0(_,f),C0(_),z0(_),R0(_),r0(_),o0(_),_}function l0(s,e){if(s)for(const t of s.bands){const n=t0(e,t.def.stagger),{x:i=0,y:r=0,z:o=0}=t.def.explode;t.pivot.position.set(t.home.x+i*n,t.home.y+r*n,t.home.z+o*n),t.pivot.quaternion.copy(t.homeQuat)}}function h0(s,e,t,n=28){if(!s)return;const i=e*(n/60)*Math.PI*2,r=s.bands.find(c=>c.id==="slider");if(r){const c=-s.stroke*.5*(1-Math.cos(i))*t;r.pivot.position.y+=c}const o=s.bands.find(c=>c.id==="drive");o!=null&&o.spin&&(o.spin.rotation.x=i*t),o!=null&&o.journalSpin&&(o.journalSpin.rotation.x=0);const a=s.filmBeltRatio||0;for(const c of s.filmMotorSpins||[])c.rotation.x=i*a*t}function Qr(s){if(s){for(const e of s.bands)e.pivot.position.copy(e.home),e.pivot.quaternion.copy(e.homeQuat),e.spin&&e.spin.rotation.set(0,0,0),e.journalSpin&&e.journalSpin.rotation.set(0,0,0);for(const e of s.filmMotorSpins||[])e.rotation.set(0,0,0)}}function Vl(s){const e=s.name||"";if(/^NAUO(520|602|527|528|418|609|584|749)/.test(e)||/^NAUO(60[34]|53[7-9]|54[0-9]|55[0-2]|75[23])(_\d+)?$/.test(e))return!0;const t=/^NAUO120[89]_(\d+)$/.exec(e);return!!t&&+t[1]>=36&&+t[1]<=43}const eo=new w;function u0(s){const e=s.name||"";if(/^NAUO(65[345]|659|66[01]|67[03])(_\d+)?$/.test(e))return!0;if(!/^NAUO(118[4-9]|119[0-5])(_\d+)?$/.test(e)||!s.geometry)return!1;s.geometry.boundingBox||s.geometry.computeBoundingBox();const t=s.geometry.boundingBox;eo.set((t.min.x+t.max.x)/2,(t.min.y+t.max.y)/2,(t.min.z+t.max.z)/2),s.updateWorldMatrix(!0,!1),eo.applyMatrix4(s.matrixWorld);const n=Math.abs(eo.x);return n>.03&&n<.054||n>.37&&n<.388||n>.457&&n<.476}function Wl(s){const e=s.name||"";if(/^NAUO(711|710|709|708|707|705|704|624|639|648|649|650)(_|$)/.test(e))return!0;const t=/^NAUO120[89]_(\d+)$/.exec(e);return!!t&&+t[1]>=24&&+t[1]<=35}const d0=/^NAUO(1198|120[3-9]|121[0-3]|121[89]|122[01]|115[89]|116[0-5]|117[1-9]|118[0-3])(_\d+)?$/,$i=new w;function f0(s){if(!d0.test(s.name||""))return!1;if(s.userData._balLink!==void 0)return s.userData._balLink;if(!s.geometry)return!1;s.geometry.boundingBox||s.geometry.computeBoundingBox();const e=s.geometry.boundingBox;$i.set((e.min.x+e.max.x)/2,(e.min.y+e.max.y)/2,(e.min.z+e.max.z)/2),s.updateWorldMatrix(!0,!1),$i.applyMatrix4(s.matrixWorld);const t=Math.abs($i.x),n=t>.072&&t<.146||t>.293&&t<.352,i=Math.abs($i.y+.4)<.18&&Math.abs($i.z)<.2;return s.userData._balLink=n&&i,s.userData._balLink}function p0(s){return/^NAUO61[0-9](_|$)/.test(s.name||"")}function Xl(s){return Wl(s)||Vl(s)||p0(s)||u0(s)}function m0(s){return/^NAUO(1570|1563|1564|1566|1567|157[1-9]|963|1582)/.test(s.name||"")}function yo(s){return/^NAUO(879|877|861|880|881|837|842|944|949|950|245|246|3[0-9]|4[0-9]|5[01]|6[6-9]|7[01]|8[45]|21[2-5])(_|$)/.test(s.name||"")}function g0(s){return Wl(s)||/^NAUO(1210|1213)/.test(s.name||"")}function _0(s){return s!=null&&s.isMesh?s.name==="fairOaksDecal"?!0:/^NAUO(754|900|899|898|896|897|879|861)/.test(s.name||""):!1}function x0(s){let e=s;for(;e;){if(e.name==="driveSpin"||e.name==="journalSpin"||e.name==="journalFixed")return!0;e=e.parent}return!1}const v0=/^(NAUO677|NAUO1565|NAUO1580)/,y0=/^(NAUO1380|NAUO1799|NAUO1782|NAUO196[1-7]|NAUO1971|NAUO1359|NAUO1368|NAUO1373|NAUO1319|NAUO1311|NAUO1298|NAUO1273|NAUO1804|NAUO1809)/,ql=/^(NAUO1679|NAUO1582)/;function M0(s){if(!s.isMesh)return!1;if(y0.test(s.name||""))return!0;let e=s,t=!1;for(;e;){if(e.name==="band_slider"){t=!0;break}e=e.parent}if(!t||!s.geometry||s.name==="NAUO1684")return!1;s.geometry.computeBoundingBox();const n=s.geometry.boundingBox.clone().applyMatrix4(s.matrixWorld),i=(n.min.x+n.max.x)/2;return Math.abs(i)>.62}function S0(s){if(!s.isMesh||s.userData.filmRod||!s.geometry||x0(s)||Vl(s)||g0(s)||m0(s)||f0(s)||ql.test(s.name||""))return!1;if(v0.test(s.name||""))return!0;s.geometry.computeBoundingBox();const e=s.geometry.boundingBox.clone().applyMatrix4(s.matrixWorld),t=(e.min.x+e.max.x)/2,n=(e.min.y+e.max.y)/2,i=(e.min.z+e.max.z)/2,r=Math.abs(t)<.14||Math.abs(Math.abs(t)-.423)<.14,o=n>-.78&&n<-.26;return r&&o&&Math.abs(i)<.18}function E0(s,e){const t=Array.isArray(s.material)?s.material:[s.material];for(const n of t)n!=null&&n.color&&(e?(n.userData._filmColor==null&&(n.userData._filmColor=n.color.getHex()),n.color.set(It.steel)):n.userData._filmColor!=null&&(n.color.setHex(n.userData._filmColor),delete n.userData._filmColor))}function T0(s,e){for(const t of s.bands||[])t.pivot.updateMatrixWorld(!0),t.pivot.traverse(n=>{n.isMesh&&(S0(n)&&(n.visible=!e),M0(n)&&(n.visible=!e),yo(n)&&(n.visible=!e),ql.test(n.name||"")&&E0(n,e))});s.filmRods&&(s.filmRods.visible=!!e);for(const t of s.filmSidePlugs||[])t.visible=!!e;Yl(s,e),b0(s,e),A0(s,e)}function b0(s,e){const t=s.bands.find(a=>a.id==="slider"),n=s.bands.find(a=>a.id==="housing"),i=s.bands.find(a=>a.id==="drive");if(!t||!n)return;const r=e?[n.pivot,i==null?void 0:i.pivot].filter(Boolean):[t.pivot];for(const a of r)a.updateMatrixWorld(!0);t.pivot.updateMatrixWorld(!0),n.pivot.updateMatrixWorld(!0);const o=[];for(const a of r)a.traverse(c=>{if(!c.isMesh||!Xl(c))return;let l=c;for(;l;){if(l.name==="journalSpin"||l.name==="driveSpin"||l.name==="journalFixed")return;l=l.parent}o.push(c)});for(const a of o)if(e)a.userData.filmHome=a.parent,t.pivot.attach(a);else{const c=a.userData.filmHome,l=c&&c.parent?c:n.pivot;l.updateMatrixWorld(!0),l.attach(a)}}function A0(s,e){const t=s.bands.find(o=>o.id==="slider"),n=s.bands.find(o=>o.id==="housing");if(!t||!n)return;t.pivot.updateMatrixWorld(!0),n.pivot.updateMatrixWorld(!0);const i=(o,a,c)=>{const l=[];a.traverse(h=>{h.isMesh&&o.test(h.name||"")&&l.push(h)});for(const h of l)c.attach(h)},r=/^NAUO(963|1570|1563|1564|1566|1567|157[1-9])/;e?i(r,t.pivot,n.pivot):i(r,n.pivot,t.pivot),i(/^NAUO1582/,n.pivot,t.pivot)}function w0(s,e,t){if(!e)return;e.pivot.updateMatrixWorld(!0);const n=[];if(e.pivot.traverse(h=>{h.isMesh&&/^NAUO1582/.test(h.name||"")&&n.push(h)}),n.length||e.pivot.traverse(h=>{h.isMesh&&/^NAUO1679/.test(h.name||"")&&n.push(h)}),!n.length)return;const i=new Ot({color:It.steel,metalness:.28,roughness:.38,clearcoat:.4,clearcoatRoughness:.22}),r=new w;e.pivot.getWorldScale(r);const o=1/Math.max(r.x,1e-4),a=1/Math.max(r.y,1e-4),c=new ft;c.name="filmRods",c.visible=!1,e.pivot.add(c);const l=new Je;for(const h of n){l.setFromObject(h);const u=(l.min.x+l.max.x)/2,d=(l.min.z+l.max.z)/2,f=new Ae(new Gt(.06*o,.06*o,.11*a,32),i.clone());f.position.copy(e.pivot.worldToLocal(new w(u,-.64,d))),f.userData.filmRod=!0,f.castShadow=!0,c.add(f)}s.filmRods=c}function R0(s){const e=new Ot({color:It.grey,metalness:.12,roughness:.42}),t=[],n=[{id:"sideL",x:-.654},{id:"sideR",x:.654}];for(const i of n){const r=s.bands.find(c=>c.id===i.id);if(!r)continue;r.pivot.updateMatrixWorld(!0);const o=new w;r.pivot.getWorldScale(o);const a=new Ae(new Bt(.06/Math.max(o.x,1e-4),.46/Math.max(o.y,1e-4),.32/Math.max(o.z,1e-4)),e);a.name=`filmSidePlug_${i.id}`,a.visible=!1,a.castShadow=!0,r.pivot.add(a),a.position.copy(r.pivot.worldToLocal(new w(i.x,-1.015,0))),t.push(a)}s.filmSidePlugs=t}function C0(s){const e=s.bands.find(g=>g.id==="housing");if(!e)return;e.pivot.updateMatrixWorld(!0);const t=new Je;e.pivot.traverse(g=>{!g.isMesh||g.name==="fairOaksDecal"||t.expandByObject(g)});const n=s.bands.find(g=>g.id==="drive");if(n&&(n.pivot.updateMatrixWorld(!0),n.pivot.traverse(g=>{g.isMesh&&/^NAUO380/.test(g.name||"")&&t.expandByObject(g)})),t.isEmpty())return;t.min.y-=.03,t.max.y+=.05,t.min.z-=.03,t.max.z+=.03,t.max.y=t.min.y+(t.max.y-t.min.y)*.83;const i=t.getSize(new w),r=t.getCenter(new w),o=new w;s.root.updateMatrixWorld(!0),s.root.getWorldScale(o);const a=1/Math.max(o.x,1e-4),c=new Ot({color:"#39424c",metalness:.05,roughness:.22,transparent:!0,opacity:.18,depthWrite:!1,side:Ut}),l=new ft;l.name="filmGlass",l.visible=!1,l.renderOrder=2,l.userData.worldBox=t.clone();const h=.007,u=(g,_,m,p,v,x)=>{const M=new Ae(new Bt(g*a,_*a,m*a),c.clone());M.position.copy(s.root.worldToLocal(new w(p,v,x))),l.add(M)};u(i.x*.99,i.y,h,r.x,r.y,t.max.z),u(i.x*.99,i.y,h,r.x,r.y,t.min.z),u(h,i.y,i.z,t.min.x,r.y,r.z),u(h,i.y,i.z,t.max.x,r.y,r.z);const d=new Bt(i.x*.99*a,i.y*a,i.z*a),f=new Il(new Ig(d),new Po({color:11844290,transparent:!0,opacity:.55}));f.name="filmGlassEdges",f.position.copy(s.root.worldToLocal(r.clone())),l.add(f),d.dispose(),s.root.add(l),s.filmGlass=l}function L0(s,e){const t=e.y-s.y,n=e.z-s.z,i=Math.atan2(n,t),r=Math.max(Math.hypot(t,n),1e-6),o=Math.acos(Math.min(1,Math.max(-1,(s.r-e.r)/r))),a=(u,d)=>{const f=Math.cos(d),g=Math.sin(d);return{p:new w(u.x,u.y+f*u.r,u.z+g*u.r),oy:f,oz:g}},c=[],l=(u,d,f,g)=>{for(let _=0;_<=g;_+=1)c.push(a(u,d+f*_/g))},h=(u,d,f)=>{for(let g=1;g<f;g+=1){const _=g/f,m=u.oy*(1-_)+d.oy*_,p=u.oz*(1-_)+d.oz*_,v=Math.hypot(m,p)||1;c.push({p:u.p.clone().lerp(d.p,_),oy:m/v,oz:p/v})}};return l(s,i+o,Math.PI*2-2*o,48),h(a(s,i-o),a(e,i-o),10),l(e,i-o,2*o,14),h(a(e,i+o),a(s,i+o),10),c}function P0(s,e,t,n){const i=e*.5,r=t*.5,o=n*.5,a=s.length,c=new Float32Array(a*4*3),l=[];for(let u=0;u<a;u+=1){const d=s[u],f=d.p||d,g=(d.oy||0)*o,_=(d.oz||0)*o,m=u*4,p=[[f.x-i,f.y-g,f.z-_],[f.x+i,f.y-g,f.z-_],[f.x+r,f.y+g,f.z+_],[f.x-r,f.y+g,f.z+_]];for(let M=0;M<4;M+=1)c[(m+M)*3]=p[M][0],c[(m+M)*3+1]=p[M][1],c[(m+M)*3+2]=p[M][2];const v=(u+1)%a*4,x=m;l.push(x,x+1,v+1,x,v+1,v),l.push(x+1,x+2,v+2,x+1,v+2,v+1),l.push(x+2,x+3,v+3,x+2,v+3,v+2),l.push(x+3,x,v,x+3,v,v+3)}const h=new Ct;return h.setAttribute("position",new Et(c,3)),h.setIndex(l),h.computeVertexNormals(),h}function D0(s,e,t,n){const i=new ft,r=t*.22,o=t*.56,a=(c,l,h)=>{const u=new Ae(new Gt(c,c,l,48),n);return u.position.y=h,u};return i.add(a(s,r,-(o+r)*.5)),i.add(a(e,o,0)),i.add(a(s,r,(o+r)*.5)),i.rotation.z=Math.PI/2,i}const I0=/^NAUO(946|947|819|820|821|830|944)/;function U0(s){return(s==null?void 0:s.isMesh)&&I0.test(s.name||"")}function Yl(s,e){const t=s.bands.find(n=>n.id==="housing");t&&(t.pivot.updateMatrixWorld(!0),t.pivot.traverse(n=>{!n.isMesh||/^film/.test(n.name||"")||U0(n)&&(n.visible=!e)}))}function N0(s){var e;return(e=s.filmGlass)!=null&&e.userData.worldBox?s.filmGlass.userData.worldBox.clone():s.filmGlass?new Je().setFromObject(s.filmGlass):null}function O0(s){const e=s.geometry.attributes.position,t=new w,n=e.count,i=new Float32Array(n),r=new Float32Array(n),o=new Float32Array(n);let a=0,c=0,l=1/0,h=-1/0;for(let T=0;T<n;T+=1)t.fromBufferAttribute(e,T),s.localToWorld(t),i[T]=t.x,r[T]=t.y,o[T]=t.z,a+=t.y,c+=t.z,t.x<l&&(l=t.x),t.x>h&&(h=t.x);const u=a/n,d=c/n;let f=0;for(let T=0;T<n;T+=1){const I=Math.hypot(r[T]-u,o[T]-d);I>f&&(f=I)}const g=(l+h)*.5<0?-1:1,_=Math.max(h-l,1e-6),m=24,p=new Array(m).fill(0),v=new Array(m).fill(0);for(let T=0;T<n;T+=1){const I=Math.hypot(r[T]-u,o[T]-d),y=Math.min(m-1,Math.max(0,Math.floor((i[T]-l)/_*m)));I>p[y]&&(p[y]=I),v[y]+=1}let x=null,M=-1;for(let T=0;T<m;){if(!v[T]||p[T]<.16){T+=1;continue}const I=p[T];let y=T;for(;y+1<m&&v[y+1]&&Math.abs(p[y+1]-I)/I<.045;)y+=1;const A=l+(T+.5)/m*_,H=l+(y+.5)/m*_,G=Math.abs(H-A),D=((A+H)*.5-l)/_,O=g>0?D>.78:D<.22,N=I>=.175&&I<=.215,q=(O?.15:1)*G*(N?5:1);G>=.024&&q>M&&(M=q,x={r:I,x0:A,x1:H}),T=y+1}const L=.03;return{x:x?g>0?Math.max(x.x0+.008,x.x1-L):Math.min(x.x1-.008,x.x0+L):g<0?l+.075+L:h-.075-L,y:u,z:d,r:x?x.r:f||.194,side:g}}function F0(s,e,t){const n=new ft;n.name="filmTopDrive";const i=new Zt({color:"#2b2e33",metalness:.5,roughness:.5}),r=(d,f,g,_,m,p,v,x)=>{const M=new Ae(new Bt(f*s,g*s,_*s,2,2,2),x);return M.name=d,M.position.set(m*s,p*s,v*s),M.castShadow=!0,M.receiveShadow=!0,n.add(M),M},o=(d,f,g,_,m,p,v,x=48)=>{const M=new Ae(new Gt(f*s,f*s,g*s,x),v);return M.name=d,M.rotation.z=Math.PI/2,M.position.set(_*s,m*s,p*s),M.castShadow=!0,n.add(M),M},a=.022;r("filmMotorPlinth",.3,a,.135,-.01,e+a*.5,0,t.motor);const c=.063,l=.071,h=e+a+l;o("filmMotorBody",c,.27,.03,h,0,i,40);const u=13;for(let d=0;d<u;d+=1){const f=-.09+d/(u-1)*.225;o(`filmMotorFin${d}`,l,.005,f,h,0,i,40)}return o("filmMotorBell",.066,.08,.2,h,0,t.motor,40),o("filmMotorNose",.03,.025,.25,h,0,t.motor,24),r("filmMotorJBox",.1,.105,.115,-.15,h-.012,0,t.motor),r("filmMotorJBox2",.05,.07,.09,-.22,h-.03,0,t.motor),r("filmMotorFootA",.035,l,.11,-.05,e+a+l*.5,0,t.motor),r("filmMotorFootB",.035,l,.11,.12,e+a+l*.5,0,t.motor),n}function B0(s){const e=[];return s.pivot.traverse(t=>{if(!t.isMesh||!t.geometry||!/^NAUO380(_1)?$/.test(t.name||""))return;const n=O0(t);e.push({name:t.name,x:n.x,y:n.y,z:n.z,r:n.r,side:n.side})}),e.sort((t,n)=>t.x-n.x),e}function z0(s){const e=s.bands.find(N=>N.id==="drive");if(!e)return;e.pivot.updateMatrixWorld(!0);const t=B0(e);if(!t.length)return;const n=new ft;n.name="filmBelt",n.visible=!1,s.root.add(n);const i=new w;s.root.updateMatrixWorld(!0),s.root.getWorldScale(i);const r=1/Math.max(i.x,1e-4),o=N0(s),a=.008,c=o?o.max.y:t[0].y+t[0].r+.55,l=o?(o.min.x+o.max.x)*.5:0,h=o?(o.min.z+o.max.z)*.5:0,u=o?o.max.x-o.min.x:2.16,d=o?o.max.z-o.min.z:.88,f=new Ot({color:"#39424c",metalness:.05,roughness:.22,transparent:!0,opacity:.15,depthWrite:!1,side:Ut}),g=new Zt({color:"#999FA6",metalness:.3,roughness:.5}),_=new Zt({color:"#1b1d20",metalness:.08,roughness:.85,side:Ut}),m=new Zt({color:"#999FA6",metalness:.3,roughness:.5}),p=new Ae(new Bt(u*1*r,a*r,d*1*r),f);p.name="filmRoof",p.renderOrder=2,p.position.copy(s.root.worldToLocal(new w(l,c+a*.5,h))),n.add(p);const v=.0145,x=.019,M=.0235,L=.046,R=t.reduce((N,q)=>N+q.y,0)/t.length,T=t.reduce((N,q)=>N+q.r,0)/t.length,I=R+T*2.2,y=[],A=t.reduce((N,q)=>N+q.z,0)/t.length,G=F0(r,.185-I,{motor:g});G.position.copy(s.root.worldToLocal(new w(0,I,A))),n.add(G);const $=new Zt({color:"#C9CDD2",metalness:.12,roughness:.55}),D=[-.4805,-.2655,.023,.4805];for(const N of D)for(const q of[1,-1]){const X=new Ae(new Bt(.1*r,.088*r,.034*r),$);X.name="filmBeamPad",X.position.copy(s.root.worldToLocal(new w(N,.128,q*.303))),X.castShadow=!0,X.receiveShadow=!0,n.add(X);for(const Y of[-.03,.03])for(const K of[-.024,.024]){const ee=new Ae(new Gt(.0105*r,.0105*r,.014*r,16),$);ee.name="filmBeamPadBolt",ee.rotation.x=Math.PI/2,ee.position.copy(s.root.worldToLocal(new w(N+Y,.128+K,q*.324))),ee.castShadow=!0,n.add(ee)}}for(const N of t){const q=N.x,X=new ft;X.name=N.side<0?"filmMotorSpinL":"filmMotorSpinR",X.position.copy(s.root.worldToLocal(new w(q,I,A))),n.add(X);const Y=D0(.057*r,L*r,.03*r,m);Y.name=N.side<0?"filmMotorPulleyL":"filmMotorPulleyR",X.add(Y),y.push(X);const K=N.r+v*.2,ee=L+v*.2,W=L0({x:N.x,y:N.y,z:N.z,r:K},{x:q,y:I,z:A,r:ee}).map(ae=>({p:s.root.worldToLocal(ae.p.clone()),oy:ae.oy,oz:ae.oz})),j=new Ae(P0(W,x*r,M*r,v*r),_);j.name=N.side<0?"filmVeeBeltL":"filmVeeBeltR",j.castShadow=!0,n.add(j)}const O=[{y:-.3581,z:-.1092,r:.0479},{y:-.4415,z:.1055,r:.0475}];for(const N of t){const q=N.side;for(const X of O){const Y=new Gt(X.r*1.02*r,X.r*1.02*r,.058*r,40);Y.rotateZ(Math.PI/2);const K=new Ae(Y,g);K.name="filmBossPin",K.castShadow=!0,K.receiveShadow=!0,K.position.copy(s.root.worldToLocal(new w(q*.903,X.y,X.z))),n.add(K)}}s.filmBelt=n,s.filmRoof=p,s.filmMotorSpins=y,s.filmBeltRatio=t[0].r/L}function $c(s,e){if(!s.material)return;const t=Array.isArray(s.material)?s.material:[s.material];for(const n of t)e?(n.userData._solid||(n.userData._solid={transparent:n.transparent,opacity:n.opacity,depthWrite:n.depthWrite,side:n.side}),n.transparent=!0,n.opacity=.11,n.depthWrite=!1,n.side=cn,n.needsUpdate=!0):n.userData._solid&&(n.transparent=n.userData._solid.transparent,n.opacity=n.userData._solid.opacity,n.depthWrite=n.userData._solid.depthWrite,n.side=n.userData._solid.side,delete n.userData._solid,n.needsUpdate=!0)}const k0=/^NAUO(832|887|911|931|936|927|920|918)/;function H0(s,e){Array.isArray(s.material)||(e?(s.userData._liteMat||(s.userData._liteMat=new Zt({color:"#B9BEC4",metalness:.25,roughness:.5}),s.userData._liteOrig=s.material),s.material=s.userData._liteMat):s.userData._liteOrig&&s.material===s.userData._liteMat&&(s.material=s.userData._liteOrig))}function G0(s,e){s.root.updateMatrixWorld(!0);const t=s.bands.find(i=>i.id==="housing");t&&t.pivot.traverse(i=>{if(i.name==="fairOaksDecal"){i.visible=!e;return}if(i.isMesh){if(yo(i)){i.visible=!e;return}i.visible=!0,k0.test(i.name||"")&&H0(i,e),_0(i)?$c(i,e):$c(i,!1)}});const n=s.bands.find(i=>i.id==="drive");n&&n.pivot.traverse(i=>{if(i.isMesh){if(yo(i)){i.visible=!e;return}i.visible=!0}}),s.filmGlass&&(s.filmGlass.visible=!!e),s.filmBelt&&(s.filmBelt.visible=!!e),Yl(s,e),W0(s,e)}const V0={520:0,527:0,528:0,418:0,602:0};function W0(s,e){const t=s.bands.find(i=>i.id==="housing");if(!t)return;const n=new w;t.pivot.updateMatrixWorld(!0),t.pivot.getWorldScale(n),t.pivot.traverse(i=>{if(!i.isMesh)return;const r=/^NAUO(520|602|527|528|418)/.exec(i.name||"");if(!r)return;i.userData._homeY==null&&(i.userData._homeY=i.position.y);const o=(V0[r[1]]||0)/Math.max(n.y,1e-4);i.position.y=i.userData._homeY-(e?o:0)})}function Rn(s,e){s&&(s._xray=!!e,T0(s,e),G0(s,e),X0(s,e))}function X0(s,e){const t=s.bands.find(o=>o.id==="drive"),n=t==null?void 0:t.shaft736,i=t==null?void 0:t.spin,r=t==null?void 0:t.journalSpin;!n||!i||!r||(i.updateMatrixWorld(!0),r.updateMatrixWorld(!0),e?(n.parent!==r&&r.attach(n),n.material.clippingPlanes=t.shaftMidPlanes):(n.parent!==i&&i.attach(n),n.material.clippingPlanes=null),n.material.needsUpdate=!0,t.filmShaftEnds&&(t.filmShaftEnds.visible=!!e))}function ji(s,e,t="#6ee7c2"){if(!s)return;const n=new _e(t);for(const i of s.bands){const r=e&&i.id===e;i.pivot.traverse(o=>{if(!o.isMesh||!o.material||o.name==="fairOaksDecal")return;const a=Array.isArray(o.material)?o.material:[o.material];for(const c of a)c.color&&(r?(c.userData._origColor==null&&(c.userData._origColor=c.color.getHex()),c.color.copy(n),c.emissive&&(c.emissive.set(t),c.emissiveIntensity=.24)):(c.userData._origColor!=null&&(c.color.setHex(c.userData._origColor),delete c.userData._origColor),c.emissive&&(c.emissive.setHex(0),c.emissiveIntensity=0)))})}}class q0{constructor(e,t){this.container=e,this.catalog=t,this.modules=[],this.selectedId=null,this.mode="idle",this.playing=!1,this.time=0,this.duration=8,this.explodeT=0,this.targetExplodeT=0,this.operationIntensity=0,this.highlightIndex=-1,this.highlightTimer=0,this.onProgress=null,this.onHighlight=null,this.onPartPick=null,this.onCalloutMove=null,this._calloutBand=null,this.onStatus=null,this.onReady=null,this.onPhase=null,this.userPicked=!1,this.lang="zh",this._bgTextureRef={current:null},this._clock=new e_,this._camAnim=null,this._disposed=!1,this.hero=null,this.rig=null,this._lastPhaseKey="",this.viewMode="assembly",this.soloModuleId=null,this._initRenderer(),this._initScene(),this._initLights(),this._bindResize(),this._animate(),window.__viewer=this}_initRenderer(){const e=new Ll({antialias:!0,alpha:!1,powerPreference:"high-performance"});e.localClippingEnabled=!0,e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.setSize(this.container.clientWidth,this.container.clientHeight),e.outputColorSpace=tt,e.toneMapping=Qc,e.toneMappingExposure=1.12,e.shadowMap.enabled=!0,e.shadowMap.type=Zc,this.container.appendChild(e.domElement),this.renderer=e}_initScene(){this.scene=new Pl,Wc(this.scene,"#14171c",this._bgTextureRef);const e=this.container.clientWidth/Math.max(1,this.container.clientHeight);this.camera=new Dt(36,e,.05,200),this.camera.position.set(2.8,1.55,3.4),this.controls=new d_(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.minDistance=.8,this.controls.maxDistance=18,this.controls.target.set(0,.15,0),this.controls.update(),this.root=new ft,this.scene.add(this.root);const t=new Ae(new Io(6,64),new Zt({color:921878,metalness:.7,roughness:.85,transparent:!0,opacity:.45}));t.rotation.x=-Math.PI/2,t.position.y=-1.35,t.receiveShadow=!0,this.scene.add(t),this.ground=t,this.envMap=J_(this.renderer),this.scene.environment=this.envMap,this.raycaster=new h_,this.pointer=new ue,this._pointerDown=null,this._onPointerDown=n=>{this._pointerDown={x:n.clientX,y:n.clientY}},this._onPointerUp=n=>{if(!this._pointerDown)return;const i=n.clientX-this._pointerDown.x,r=n.clientY-this._pointerDown.y;this._pointerDown=null,!(i*i+r*r>36)&&this._onPointer(n)},this.renderer.domElement.addEventListener("pointerdown",this._onPointerDown),this.renderer.domElement.addEventListener("pointerup",this._onPointerUp)}_initLights(){this.scene.add(new Kg(15265522,1711136,.55));const e=new Ws(15988216,1.55);e.position.set(4.2,7.2,3.6),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=.5,e.shadow.camera.far=30,e.shadow.camera.left=-6,e.shadow.camera.right=6,e.shadow.camera.top=6,e.shadow.camera.bottom=-6,e.shadow.bias=-15e-5,this.scene.add(e);const t=new Ws(11061503,.62);t.position.set(-5,3.2,-2.4),this.scene.add(t);const n=new Ws(14212840,.42);n.position.set(.4,2.4,-6),this.scene.add(n)}_bindResize(){this._onResize=()=>{if(!this.container)return;const e=this.container.clientWidth,t=Math.max(1,this.container.clientHeight);this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)},window.addEventListener("resize",this._onResize)}setBackground(e){Wc(this.scene,e,this._bgTextureRef);const t=new _e(e),n={h:0,s:0,l:0};t.getHSL(n),this.ground&&(this.ground.material.color.set(n.l>.45?13421772:921878),this.ground.material.opacity=n.l>.45?.32:.45)}async loadMachine(){var t,n,i;this._status("正在載入整機組立…"),this.clearModules(),this.hero=null,this.rig=null;const e=zc("models/fmth0350.glb");if(!await Vc(e)){this._status("找不到整機模型 fmth0350.glb"),(t=this.onReady)==null||t.call(this,!1);return}try{const r=await Hc(e),o=Gc(r);Zr(o,2.55),n0(o,this.envMap),i0(o),o.updateMatrixWorld(!0);const a=new Je().setFromObject(o);this.ground&&!a.isEmpty()&&(this.ground.position.y=a.min.y-.02),this.root.add(o),this.hero={id:"fmth0350",group:o},this._status("建立整機分層（組立外觀／爆炸／沖程）…"),this.rig=c0(o);const c=o.getObjectByName("fairOaksDecal"),l=this.rig.bands.find(h=>h.id==="housing");c&&l&&l.pivot.attach(c),console.info("[machineRig]",this.rig.counts,"stroke",this.rig.stroke)}catch(r){console.warn("hero load failed",r),this._status("整機載入失敗"),(n=this.onReady)==null||n.call(this,!1);return}this._showHero(),this._fitCamera({cinematic:!0}),this._status("就緒 — 整機組立可播放動作／爆炸演出"),(i=this.onReady)==null||i.call(this,!0),this._loadCatalogModules()}async _loadCatalogModules(){const e=new ft;e.name="moduleLayers",e.visible=!1,this.layerRoot=e,this.root.add(e);for(const t of this.catalog.modules||[]){const n=zc(t.modelUrl);if(await Vc(n))try{const i=await Hc(n),r=Gc(i);Xc(r,t.color||"#9aa0a8",this.envMap),r.userData.moduleId=t.id,r.userData.meta=t,Zr(r,1.7),r.visible=!1,e.add(r),this.modules.push({id:t.id,meta:t,group:r,basePos:new w,baseQuat:new nn,baseScale:new w(1,1,1)})}catch(i){console.warn("module load fail",t.id,i)}}}_showHero(){this.viewMode="assembly",this.soloModuleId=null,this.hero&&(this.hero.group.visible=!0),this.layerRoot&&(this.layerRoot.visible=!1);for(const e of this.modules)e.group.visible=!1}_bandMeta(e){return{id:e.id,code:e.code,name:e.name,nameEn:e.nameEn,number:e.number,group:e.number,role:e.id,color:e.color,description:e.description,descriptionEn:e.descriptionEn}}_canInspectPart(){return this.explodeT>.12||this.targetExplodeT>.12||this.mode==="explode"}focusModule(e){var n,i,r,o,a,c,l;if(this.playing=!1,this.mode="idle",this.operationIntensity=0,this.explodeT=0,this.targetExplodeT=0,Qr(this.rig),ji(this.rig,null),Rn(this.rig,!1),this._calloutBand=null,(n=this.onPartPick)==null||n.call(this,null),this._clearHighlights(),e==="fmth0350"||e==="assembly")return this._showHero(),this._fitCamera({cinematic:!0}),(i=this.onHighlight)==null||i.call(this,null),(r=this.onPhase)==null||r.call(this,null),this._status("檢視：整機組立 FMTH0350"),(o=this.onProgress)==null||o.call(this,0),!0;const t=this.modules.find(h=>h.id===e);if(!t)return this._status(`找不到模組：${e}`),!1;this.viewMode="solo",this.soloModuleId=e,this.hero&&(this.hero.group.visible=!1),this.layerRoot&&(this.layerRoot.visible=!0);for(const h of this.modules)h.group.visible=h.id===e;return t.group.position.set(0,0,0),t.group.scale.set(1,1,1),Zr(t.group,1.7),Xc(t.group,t.meta.color||"#9aa0a8",this.envMap),qc(t.group,!0),this.selectedId=e,(a=this.onHighlight)==null||a.call(this,t.meta),(c=this.onPhase)==null||c.call(this,null),this._fitObjectCamera(t.group),this._status(`檢視：${t.meta.code} ${t.meta.name}`),(l=this.onProgress)==null||l.call(this,0),!0}_fitObjectCamera(e){const t=new Je().setFromObject(e);if(t.isEmpty())return;const n=t.getSize(new w),i=t.getCenter(new w),r=Math.max(n.x,n.y,n.z,.5)*2.15;this._camAnim={fromPos:this.camera.position.clone(),fromTarget:this.controls.target.clone(),toPos:new w(i.x+r*.65,i.y+r*.34,i.z+r*.88),toTarget:i.clone(),t:0,dur:.9}}clearModules(){var e,t,n;for(const i of this.modules)(e=i.group.parent)==null||e.remove(i.group);this.modules=[],(t=this.hero)!=null&&t.group&&((n=this.hero.group.parent)==null||n.remove(this.hero.group)),this.hero=null,this.rig=null,this.selectedId=null}_fitCamera({cinematic:e=!1,pullback:t=1.72}={}){var u;const n=((u=this.hero)==null?void 0:u.group)||this.root,i=new Je().setFromObject(n);if(i.isEmpty())return;const r=i.getSize(new w),o=i.getCenter(new w),c=Math.max(r.x,r.y,r.z,1)*t,l=new w(o.x+c*.78,o.y+c*.28,o.z+c*1.02),h=o.clone();e?this._camAnim={fromPos:this.camera.position.clone(),fromTarget:this.controls.target.clone(),toPos:l,toTarget:h,t:0,dur:1.35}:(this.camera.position.copy(l),this.controls.target.copy(h),this.controls.update())}play(e){var n;this.soloModuleId=null,this._clearHighlights(),this._showHero(),Qr(this.rig),ji(this.rig,null),this._calloutBand=null,(n=this.onPartPick)==null||n.call(this,null);const t=(this.catalog.sequences||[]).find(i=>i.id===e);this.mode=e,this.playing=!0,this.time=0,this.duration=e==="operation"?60/Zi:(t==null?void 0:t.duration)||16,this.highlightIndex=-1,this.highlightTimer=0,this.userPicked=!1,this._lastPhaseKey="",this._tourExplodeFramed=!1,e==="operation"?(this.operationIntensity=1,this.targetExplodeT=0,this.explodeT=0,Rn(this.rig,!0),this._focusAssembledCamera(),this._status("沖壓行程 — 頭部外罩透視，曲柄帶動滑塊沖壓")):e==="explode"?(this.operationIntensity=0,this.targetExplodeT=1,Rn(this.rig,!1),this._focusExplodeCamera(),this._status("爆炸分解 — 展開後點選零件查看說明")):(this.operationIntensity=1,this.targetExplodeT=0,this.explodeT=0,Rn(this.rig,!0),this._focusAssembledCamera(),this._status("影片巡覽 — 沖壓行程 → 爆炸分解"))}_focusAssembledCamera(){var a;const e=((a=this.hero)==null?void 0:a.group)||this.root,t=new Je().setFromObject(e);if(t.isEmpty())return;const n=t.getSize(new w),i=t.getCenter(new w),r=Math.max(n.x,n.y,n.z)*1.22,o=i.clone();o.y+=n.y*.08,this._camAnim={fromPos:this.camera.position.clone(),fromTarget:this.controls.target.clone(),toPos:new w(i.x+r*.16,i.y+r*.2,i.z+r*1.08),toTarget:o,t:0,dur:.7}}_focusExplodeCamera(){var l;const e=((l=this.hero)==null?void 0:l.group)||this.root,t=new Je().setFromObject(e);if(t.isEmpty())return;const n=t.getSize(new w),i=t.getCenter(new w),r=5.2,o=3.2,a=i.clone();a.y-=r*.06;const c=Math.max(n.x+o,n.y+r,n.z+1.2)*1.28;this._camAnim={fromPos:this.camera.position.clone(),fromTarget:this.controls.target.clone(),toPos:new w(a.x+c*.78,a.y+c*.46,a.z+c*.92),toTarget:a,t:0,dur:.85}}stop(){this.playing=!1,this._status("已暫停")}reset(){var e,t,n,i;this.playing=!1,this.mode="idle",this.time=0,this.explodeT=0,this.targetExplodeT=0,this.operationIntensity=0,this.highlightIndex=-1,this.userPicked=!1,this._lastPhaseKey="",this._clearHighlights(),Qr(this.rig),ji(this.rig,null),Rn(this.rig,!1),this._calloutBand=null,this._showHero(),this._fitCamera({cinematic:!0}),(e=this.onProgress)==null||e.call(this,0),(t=this.onHighlight)==null||t.call(this,null),(n=this.onPartPick)==null||n.call(this,null),(i=this.onPhase)==null||i.call(this,null),this._status("已重設")}clearPick(){var e;this._calloutBand&&(this._calloutBand=null,ji(this.rig,null),(e=this.onPartPick)==null||e.call(this,null))}selectModule(e){return this.focusModule(e)}_clearHighlights(){for(const e of this.modules)qc(e.group,!1)}_onPointer(e){var r,o,a,c;const t=this.renderer.domElement.getBoundingClientRect();if(this.pointer.x=(e.clientX-t.left)/t.width*2-1,this.pointer.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera),(o=(r=this.hero)==null?void 0:r.group)!=null&&o.visible&&this.rig){const l=this.raycaster.intersectObject(this.hero.group,!0);if(l.length){const h=this._bandFromObject(l[0].object);if(h){this._pickBand(h);return}}this.clearPick();return}const n=this.raycaster.intersectObjects(this.modules.map(l=>l.group).filter(l=>l.visible),!0);if(!n.length)return;let i=n[0].object;for(;i&&!((a=i.userData)!=null&&a.moduleId);)i=i.parent;(c=i==null?void 0:i.userData)!=null&&c.moduleId&&this.selectModule(i.userData.moduleId)}_bandFromObject(e){var n,i,r;let t=e;for(;t;){const o=((n=t.userData)==null?void 0:n.bandId)||((i=t.name)==null?void 0:i.replace(/^band_/,"")),a=(r=this.rig)==null?void 0:r.bands.find(c=>c.id===o||c.pivot===t);if(a)return a;t=t.parent}return null}_pickBand(e){var n;if(!e)return;this.userPicked=!0,this.playing=!1,this.targetExplodeT=Math.max(this.targetExplodeT,1),this.explodeT=Math.max(this.explodeT,.92),Rn(this.rig,!1),ji(this.rig,e.id);const t=this._bandMeta(e.def);this._calloutBand=e,(n=this.onPartPick)==null||n.call(this,{meta:t,bandId:e.id}),this._status(`${t.code} ${t.name}`)}_applyRig(e,t,n){var i;if(!(!this.rig||this.viewMode==="solo")&&(l0(this.rig,t),n>.001&&t<.2)){h0(this.rig,e,n,Zi);const r=Q_(e,Zi,this.lang);r.key!==this._lastPhaseKey&&(this._lastPhaseKey=r.key,(i=this.onPhase)==null||i.call(this,r))}}_updateSequence(e){var n,i;if(!this.playing){this.explodeT+=(this.targetExplodeT-this.explodeT)*Math.min(1,e*3),this._applyRig(this.time,this.explodeT,this.operationIntensity);return}if(this.time+=e,this.mode==="operation"){const r=60/Zi;(n=this.onProgress)==null||n.call(this,this.time%r/r),this.operationIntensity=1,this.explodeT+=(0-this.explodeT)*Math.min(1,e*4),this._applyRig(this.time,this.explodeT,1),this._orbitCamera(e,.045);return}const t=Math.min(1,this.time/this.duration);if((i=this.onProgress)==null||i.call(this,t),this.mode==="explode"){const r=Jr(Math.min(1,this.time/(this.duration*.28)));this.explodeT=r,this.targetExplodeT=r,this.operationIntensity=0,this._applyRig(this.time,this.explodeT,0)}else if(this.mode==="tour")if(t<.34)this.explodeT=0,this.operationIntensity=1,Rn(this.rig,!0),this._applyRig(this.time,0,1),this._orbitCamera(e,.045);else if(t<.68){this._tourExplodeFramed||(this._tourExplodeFramed=!0,Rn(this.rig,!1),this._focusExplodeCamera());const r=Jr((t-.34)/.34);this.explodeT=r,this.operationIntensity=0,this._applyRig(this.time,r,0),this._orbitCamera(e,.026)}else this.explodeT=1,this.operationIntensity=0,this._applyRig(this.time,1,0),this._orbitCamera(e,.026);t>=1&&this.mode!=="operation"&&(this.playing=!1,this.mode==="explode"||this.explodeT>.8?this._status("演示完成 — 點選零件查看說明"):this._status("演出結束"))}_orbitCamera(e,t){const n=this.camera.position.clone().sub(this.controls.target),i=new go().setFromVector3(n);i.theta+=e*t,n.setFromSpherical(i),this.camera.position.copy(this.controls.target).add(n),this.controls.update()}_animate(){if(this._disposed)return;requestAnimationFrame(()=>this._animate());const e=Math.min(.05,this._clock.getDelta());if(this._camAnim){this._camAnim.t+=e;const t=Math.min(1,this._camAnim.t/this._camAnim.dur),n=Jr(t);this.camera.position.lerpVectors(this._camAnim.fromPos,this._camAnim.toPos,n),this.controls.target.lerpVectors(this._camAnim.fromTarget,this._camAnim.toTarget,n),this.controls.update(),t>=1&&(this._camAnim=null)}if(this._updateSequence(e),this.controls.update(),this._calloutBand&&this.onCalloutMove){const t=this._calloutTmp||(this._calloutTmp=new w);this._calloutBand.pivot.getWorldPosition(t),t.project(this.camera);const n=this.renderer.domElement.getBoundingClientRect(),i=(t.x*.5+.5)*n.width+n.left,r=(-t.y*.5+.5)*n.height+n.top;this.onCalloutMove(i,r,t.z<1)}this.renderer.render(this.scene,this.camera)}_status(e){var t;(t=this.onStatus)==null||t.call(this,e)}dispose(){var e,t,n,i;this._disposed=!0,window.removeEventListener("resize",this._onResize),(t=(e=this.renderer)==null?void 0:e.domElement)==null||t.removeEventListener("pointerdown",this._onPointerDown),(i=(n=this.renderer)==null?void 0:n.domElement)==null||i.removeEventListener("pointerup",this._onPointerUp),this.clearModules(),this.renderer.dispose(),this.container.innerHTML=""}}class Y0{constructor(e){this.root=e,this.lang="zh",this.catalogOpen=!1,this.infoDismissed=!1,this.viewer=null,this.currentMeta=null,this.activeMode=null,this.render(),this.mountViewer()}t(e,t){return this.lang==="en"?t:e}render(){this.root.innerHTML=`
      <div class="stage" data-theme="carbon">
        <div id="viewport"></div>

        <header class="topbar">
          <div class="brand">
            <span class="brand-mark" aria-hidden="true"></span>
            <div class="brand-text">
              <strong>${bt.brand.full}</strong>
              <small>${this.t(bt.brand.tagline,bt.brand.taglineEn)}</small>
            </div>
          </div>
          <div class="top-actions">
            <button type="button" class="ghost" id="btn-catalog">${this.t("零件型錄","Catalog")}</button>
            <button type="button" class="icon-btn" id="btn-fullscreen" title="Fullscreen">⛶</button>
            <button type="button" class="lang-btn" id="btn-lang">${this.lang==="zh"?"EN":"中文"}</button>
          </div>
        </header>

        <aside class="info-panel" id="info-panel" hidden>
          <button type="button" class="icon-btn info-close" id="btn-close-info" title="Close">✕</button>
          <div class="info-code" id="info-code"></div>
          <div class="info-title" id="info-title"></div>
          <div class="info-meta" id="info-meta"></div>
          <p class="info-desc" id="info-desc"></p>
        </aside>

        <div class="part-callout" id="part-callout" hidden>
          <button type="button" class="callout-close" id="btn-close-callout" title="Close">✕</button>
          <div class="callout-code" id="callout-code"></div>
          <div class="callout-name" id="callout-name"></div>
          <p class="callout-desc" id="callout-desc"></p>
        </div>

        <div class="status-pill" id="status-pill">初始化…</div>

        <div class="progress-track" id="progress-track" hidden>
          <div class="progress-fill" id="progress-fill"></div>
        </div>

        <div class="theme-row" id="theme-row">
          ${bt.themes.map(e=>`<button type="button" class="swatch" data-theme="${e.id}" data-color="${e.color}" style="--sw:${e.color}" title="${e.label}"></button>`).join("")}
        </div>

        <footer class="controls">
          <button type="button" class="round-btn" id="btn-reset" title="Reset">↻</button>
          <div class="play-group">
            <button type="button" class="play-btn" id="btn-play-op" data-mode="operation">
              <span class="play-icon">▶</span>
              <span>${this.t("沖壓行程","Stroke")}</span>
            </button>
            <button type="button" class="play-btn alt" id="btn-play-ex" data-mode="explode">
              <span class="play-icon">▣</span>
              <span>${this.t("爆炸分解","Explode")}</span>
            </button>
            <button type="button" class="play-btn ghost-play" id="btn-play-tour" data-mode="tour">
              <span class="play-icon">◎</span>
              <span>${this.t("影片巡覽","Tour")}</span>
            </button>
            <button type="button" class="stop-btn" id="btn-stop" hidden>■</button>
          </div>
        </footer>

        <div class="catalog-drawer" id="catalog-drawer" hidden>
          <div class="catalog-head">
            <h2>${this.t("零件型錄","Parts Catalog")}</h2>
            <button type="button" class="icon-btn" id="btn-close-catalog">✕</button>
          </div>
          <div class="catalog-grid" id="catalog-grid"></div>
        </div>
      </div>
    `,this.els={viewport:this.root.querySelector("#viewport"),infoPanel:this.root.querySelector("#info-panel"),infoCode:this.root.querySelector("#info-code"),infoTitle:this.root.querySelector("#info-title"),infoMeta:this.root.querySelector("#info-meta"),infoDesc:this.root.querySelector("#info-desc"),partCallout:this.root.querySelector("#part-callout"),calloutCode:this.root.querySelector("#callout-code"),calloutName:this.root.querySelector("#callout-name"),calloutDesc:this.root.querySelector("#callout-desc"),status:this.root.querySelector("#status-pill"),progressTrack:this.root.querySelector("#progress-track"),progressFill:this.root.querySelector("#progress-fill"),catalogDrawer:this.root.querySelector("#catalog-drawer"),catalogGrid:this.root.querySelector("#catalog-grid"),btnStop:this.root.querySelector("#btn-stop"),stage:this.root.querySelector(".stage")},this._bindUi(),this._renderCatalog()}_bindUi(){var e;this.root.querySelector("#btn-lang").onclick=()=>{this.lang=this.lang==="zh"?"en":"zh";const t=this.currentMeta;this.render(),this.mountViewer(!0),t&&this._showInfo(t,{force:!0})},this.root.querySelector("#btn-fullscreen").onclick=()=>{var t,n,i;document.fullscreenElement?(i=document.exitFullscreen)==null||i.call(document):(n=(t=this.root).requestFullscreen)==null||n.call(t)},this.root.querySelector("#btn-catalog").onclick=()=>{this._hideCallout(),this._toggleCatalog(!0)},this.root.querySelector("#btn-close-catalog").onclick=()=>this._toggleCatalog(!1),this.root.querySelector("#btn-close-callout").onclick=()=>this._hideCallout(),this.root.querySelector("#btn-close-info").onclick=()=>this._dismissInfo(),this.root.querySelector("#btn-reset").onclick=()=>{var t;(t=this.viewer)==null||t.reset(),this.activeMode=null,this.els.btnStop.hidden=!0,this.els.progressTrack.hidden=!0,this._setActivePlay(null),this.infoDismissed=!1,this._hideInfo(),this._hideCallout()},this.root.querySelector("#btn-stop").onclick=()=>{var t;(t=this.viewer)==null||t.stop(),this.els.btnStop.hidden=!0},this.root.querySelector("#btn-play-op").onclick=()=>this._play("operation"),this.root.querySelector("#btn-play-ex").onclick=()=>this._play("explode"),this.root.querySelector("#btn-play-tour").onclick=()=>this._play("tour"),this.root.querySelectorAll(".swatch").forEach(t=>{t.onclick=()=>{var r;const n=t.dataset.color,i=t.dataset.theme;this.els.stage.dataset.theme=i,(r=this.viewer)==null||r.setBackground(n),this.root.querySelectorAll(".swatch").forEach(o=>o.classList.toggle("active",o===t))}}),(e=this.root.querySelector(".swatch"))==null||e.classList.add("active")}_setActivePlay(e){this.root.querySelectorAll(".play-btn").forEach(t=>{t.classList.toggle("active",t.dataset.mode===e)})}_play(e){var t;this.activeMode=e,(t=this.viewer)==null||t.play(e),this.els.btnStop.hidden=!1,this.els.progressTrack.hidden=!1,this.infoDismissed=!1,this._setActivePlay(e),this._toggleCatalog(!1)}_toggleCatalog(e){this.catalogOpen=e,this.els.catalogDrawer.hidden=!e}_renderCatalog(){var t,n,i,r,o;const e=`
      <button type="button" class="catalog-card" data-id="fmth0350">
        <span class="cc-code">${((t=bt.assembly)==null?void 0:t.code)||"FMT-350"}</span>
        <span class="cc-name">${this.t(((n=bt.assembly)==null?void 0:n.name)||"整機組立",((i=bt.assembly)==null?void 0:i.nameEn)||"Full Assembly")}</span>
        <span class="cc-desc">${this.t(((r=bt.assembly)==null?void 0:r.description)||"完整沖床外觀（不拆解網格）",((o=bt.assembly)==null?void 0:o.descriptionEn)||"Full press appearance")}</span>
        <span class="cc-swatch" style="background:#C9CED4"></span>
      </button>`;this.els.catalogGrid.innerHTML=e+bt.modules.map(a=>`
        <button type="button" class="catalog-card" data-id="${a.id}">
          <span class="cc-code">${a.code}</span>
          <span class="cc-name">${this.t(a.name,a.nameEn)}</span>
          <span class="cc-desc">${this.t(a.description,a.descriptionEn)}</span>
          <span class="cc-swatch" style="background:${a.color}"></span>
        </button>`).join(""),this.els.catalogGrid.querySelectorAll(".catalog-card").forEach(a=>{a.onclick=()=>{var h,u,d,f,g,_;const c=a.dataset.id;if(this.els.btnStop.hidden=!0,this.els.progressTrack.hidden=!0,this._setActivePlay(null),(h=this.viewer)==null?void 0:h.focusModule(c)){this.els.catalogGrid.querySelectorAll(".catalog-card").forEach(p=>{p.classList.toggle("active",p===a)});const m=c==="fmth0350"?{code:((u=bt.assembly)==null?void 0:u.code)||"FMT-350",name:((d=bt.assembly)==null?void 0:d.name)||"整機組立",nameEn:((f=bt.assembly)==null?void 0:f.nameEn)||"Full Assembly",group:0,number:0,role:"assembly",description:((g=bt.assembly)==null?void 0:g.description)||"完整沖床組立外觀。",descriptionEn:((_=bt.assembly)==null?void 0:_.descriptionEn)||"Full press assembly."}:bt.modules.find(p=>p.id===c);m&&this._showInfo(m,{force:!0})}}})}_showInfo(e,{force:t=!1}={}){if(!e)return this._hideInfo();if(this.infoDismissed&&!t)return;this.infoDismissed=!1,this.currentMeta=e,this.els.infoPanel.hidden=!1,this.els.infoCode.textContent=e.code,this.els.infoTitle.textContent=this.t(e.name,e.nameEn);const n=e.number??e.group;this.els.infoMeta.textContent=n!=null&&n!==0?`${this.t("編號","No.")} ${n}`:this.t("整機外觀","Full assembly"),this.els.infoDesc.textContent=this.t(e.description,e.descriptionEn)}_hideInfo(){this.currentMeta=null,this.els.infoPanel.hidden=!0}_dismissInfo(){this.infoDismissed=!0,this._hideInfo(),this.viewer&&(this.viewer.userPicked=!0)}_showCallout(e){if(!e)return this._hideCallout();this._toggleCatalog(!1),this.els.calloutCode.textContent=e.code||"",this.els.calloutName.textContent=this.t(e.name,e.nameEn),this.els.calloutDesc.textContent=this.t(e.description,e.descriptionEn),this.els.partCallout.hidden=!1}_hideCallout(){var e;this.els.partCallout.hidden||(this.els.partCallout.hidden=!0,(e=this.viewer)==null||e.clearPick())}_moveCallout(e,t,n){const i=this.els.partCallout;if(i.hidden||(i.style.visibility=n?"visible":"hidden",!n))return;const r=i.offsetWidth||260,o=i.offsetHeight||120;let a=e+24,c=t-o*.5;a+r>window.innerWidth-8&&(a=Math.max(8,e-r-24)),c=Math.min(Math.max(8,c),window.innerHeight-o-8),i.style.left=`${Math.round(a)}px`,i.style.top=`${Math.round(c)}px`}mountViewer(e=!1){this.viewer&&!e&&(this.viewer.dispose(),this.viewer=null),e&&this.viewer&&(this.viewer.dispose(),this.viewer=null),this.viewer=new q0(this.els.viewport,bt),this.viewer.lang=this.lang,this.viewer.onStatus=t=>{this.els.status.textContent=t},this.viewer.onProgress=t=>{var n;this.els.progressFill.style.width=`${Math.round(t*100)}%`,t>=1&&((n=this.viewer)==null?void 0:n.mode)!=="operation"&&(this.els.btnStop.hidden=!0)},this.viewer.onPhase=()=>{},this.viewer.onHighlight=t=>{var n;t&&((n=this.viewer)!=null&&n.userPicked)&&(this.infoDismissed=!1),this._showInfo(t)},this.viewer.onPartPick=t=>{if(!t){this.els.partCallout.hidden||(this.els.partCallout.hidden=!0);return}this.els.btnStop.hidden=!0,this.infoDismissed=!1,this._showCallout(t.meta)},this.viewer.onCalloutMove=(t,n,i)=>this._moveCallout(t,n,i),this.viewer.onReady=t=>{t&&!this._autoPlayed&&(this._autoPlayed=!0,setTimeout(()=>this._play("operation"),800))},this.viewer.loadMachine()}}const K0=document.getElementById("app");new Y0(K0);
