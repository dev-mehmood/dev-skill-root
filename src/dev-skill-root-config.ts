import { navigateToUrl, registerApplication, start } from "single-spa";
//https://dmitripavlutin.com/parse-url-javascript/
// https://medium.com/jspoint/typescript-module-system-5022cac310f6
import {store} from '@dev-skill/store';
// import {userSelectors} from '@dev-skill/navbar';
// https://www.credera.com/insights/typescript-adding-custom-type-definitions-for-existing-libraries/
const routeLookup = {

}
window.addEventListener(
  'single-spa:before-routing-event',
  ({detail, detail: {newUrl, oldUrl}}:any ) => {
    debugger
   detail.cancelNavigation(()=>{  
    
      return new Promise<Function>((resolve:Function, reject:Function)=>{
       if(!store.getState('user.loggedIn')) {
         navigateToUrl('/Blogs');
         
       }
        
        resolve(false)
     }) 
  });
  
  //   cancelNavigation(n0ew Promise<Function>((resolve:Function, reject:Function)=>{
  //     setTimeout(() => {
  //       resolve(false)
  //     }, 300);
  //  }));
  // cancelNavigation()
    //   cancelNavigation(new Promise<Function>((resolve:Function, reject:Function)=>{
  //     setTimeout(() => {
  //       resolve(false)
  //     }, 300);
  //  }));
  },
);
// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "navbar",
  app: () => System.import("@dev-skill/navbar"),
  activeWhen: ["/"]
});

registerApplication({
  name: "blogs",
  app: () => System.import("@dev-skill/blogs"),
  activeWhen: ["/Blogs"]
});


start({
  urlRerouteOnly: true,
});
