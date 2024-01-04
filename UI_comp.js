// const fs  = require('fs')

// class UIComp{

//     nav(){
//         const y=0;
//         const nav_resuable = `function Nav(){
//             ${if(y==1){
//                 return(
//                     <div className='class'>
//                         <h1 className>hero</h1>
//                     </div>
//                 )
//             }}
            
//         }
//         `
//         fs.mkdirSync('UI-COMP')
//         fs.writeFileSync('UI-COMP/utility_nav.jsx', nav_resuable)
//     }
// }

// const UINew = new UIComp()
// UINew.nav()
// // export default UINew;

export default function Nav(props){
    return(
        <div className="div">
            <h1>Hello ji my name is {props.name}</h1>
        </div>
    )
}
