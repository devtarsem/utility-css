const fs = require('fs')
const prompt = require('prompt')

export class buildUI{
 
    buildingRoot(){
        fs.mkdirSync("Utility-UI")
    }

    
    

    


    buildingRootSetup(){
        const css = `
        
            *{
                margin : 0;
                padding : 0;
                box-sizing: border-box;
                
            }
            html{
                font-size: 62.5%;
            }


        `
        fs.writeFileSync("Utility-UI/root.css", css)
        const importFile = "@import './Utility-UI/root.css';\n"
        fs.writeFileSync("Utility-UI/import.css", importFile)
    }


    buildingFlex(){

        const flex = `
        
        .flex{
            display: flex;
        }
        .flex-1{
            align-items: center;
            justify-content: center;
        }
        .flex-2{
            align-items: center;
            justify-content: space-between;
        }
        .flex-3{
            align-items: center;
            justify-content: space-around;
        }
        .flex-dir{
            flex-direction: column;
        }
        .flex-end{
            align-items: end;
        }
        

        `

        fs.writeFileSync("Utility-Ui/utility_flex.css", flex)
        const importFile = "@import './Utility-UI/utility_flex.css';\n "
        fs.appendFileSync("Utility-UI/import.css", importFile)

    }


    buildingGrid(){
        prompt.start()
        const inp = prompt.get(['column_count'], (err, result)=>{

            let gridCol = []

            for(let i = 1; i<=result.column_count; i++){
                const grids = `
                    .grid-${i}-col  {
                        grid-template-columns : repeat(${i}, 1fr);
                    }
                    .grid-${i}-row  {
                        grid-template-rows : repeat(${i}, 1fr);
                    }
                `
                gridCol.push(grids)

            }

            console.log(gridCol)
            fs.writeFileSync("Utility-Ui/utility_grid.css", gridCol.join(' '))
            const importFile = "@import './Utility-UI/utility_grid.css';\n "
            fs.appendFileSync("Utility-UI/import.css", importFile)
     })
     
    }

    buildingPads(){
        prompt.start()
        const inp = prompt.get(['pad_count', "pad_step", "pad_units"], (err, result)=>{

            let pad = []

            for(let i = 1; i<=result.pad_count/result.pad_step; i++){
                const pads = `
                    .pad${i*result.pad_step}  {
                        padding : ${i*result.pad_step/10}${result.pad_units};
                    }
                   
                `
                pad.push(pads)

            }
            console.log(pad)

            fs.writeFileSync("Utility-Ui/utility_pads.css", pad.join(' '))
            const importFile = "@import './Utility-UI/utility_pads.css';\n "
            fs.appendFileSync("Utility-UI/import.css", importFile)
     })
    }


    buildingMargins(){
        prompt.start()
        const inp = prompt.get(['margin_count', "margin_step", "margin_units"], (err, result)=>{

            let margins = []

            for(let i = 1; i<=result.margin_count/result.margin_step; i++){
                const margin = `
                    .margin${i*result.margin_step}  {
                        margin : ${i*result.margin_step/10}${result.margin_units};
                    }
                   
                `
                margins.push(margin)

            }

            fs.writeFileSync("Utility-Ui/utility_margins.css", margins.join(' '))
            const importFile = "@import './Utility-UI/utility_margins.css';\n "
            fs.appendFileSync("Utility-UI/import.css", importFile)
     })
    }

    buildingGaps(){
        prompt.start()
        const inp = prompt.get(['gap_count', "gap_step", "gap_units"], (err, result)=>{

            let gaps = []

            for(let i = 1; i<=result.gap_count/result.gap_step; i++){
                const gap = `
                    .gap${i*result.gap_step}  {
                        gap : ${i*result.gap_step/10}${result.gap_units};
                    }
                   
                `
                gaps.push(gap)

            }

            fs.writeFileSync("Utility-Ui/utility_gaps.css", gaps.join(' '))
            const importFile = "@import './Utility-UI/utility_gaps.css';\n "
            fs.appendFileSync("Utility-UI/import.css", importFile)
     })
    }

    buildShadeTints(){
        prompt.start()
        const inp = prompt.get(["hex_Codes"], (err, result)=>{

            let codes = []
            let codesInput = result.hex_Codes.split(',')
            console.log(codesInput)

            const definifiningroot = `
                :root{
            `

            fs.writeFileSync("Utility-Ui/utility_colors.css", definifiningroot)


            for(let i = 0; i<codesInput.length; i++){
                for(let j = 10; j<=100;){
                    let css;
                    if(j==100){
                        css = `
                        --color-${codesInput[i].split('-')[1]}-${j} : ${codesInput[i].split('-')[0]}
                    `
                    }else{
                        css = `
                            --color-${codesInput[i].split('-')[1]}-${j} : ${codesInput[i].split('-')[0]}${j}
                        `
                    }
                    j = j + 10
                    codes.push(css)
                }
            }

            fs.appendFileSync("Utility-Ui/utility_colors.css", codes.join(' '), (err)=>{console.log("appended")})

            const close = `}`

            fs.appendFileSync("Utility-Ui/utility_colors.css", close, (err)=>{console.log("appended")})
            const importFile = "@import './Utility-UI/utility_colors.css';\n "
            fs.appendFileSync("Utility-UI/import.css", importFile)

     })
    }


    buildGradients(){
        prompt.start()
        const inp = prompt.get(["number_of_gradients"], (err,result)=>{
            let grads = []
            for(let i = 1; i<=result.number_of_gradients; i++){
                let r1 = Math.trunc(Math.random()*255);
                let g1 = Math.trunc(Math.random()*255);
                let b1 = Math.trunc(Math.random()*255);
                let r2 = Math.trunc(Math.random()*255);
                let g2 = Math.trunc(Math.random()*255);
                let b2 = Math.trunc(Math.random()*255);
                const grad = `
                    .grid${i} {
                        background-image : linear-gradient(to left, rgb(${r1},${g1},${b1}), rgb(${r2},${g2},${b2}));
                    }
                `
                grads.push(grad)
                
    
            }
            fs.writeFileSync("Utility-Ui/utility_gradients.css", grads.join(' '))
            const importFile = "@import './Utility-UI/utility_gradients.css';\n "
            fs.appendFileSync("Utility-UI/import.css", importFile)

        })
   

    }

    buildBtn(){
        prompt.start()
        const inp = prompt.get(['btn_number','bg_color', "fg_color"], (err, result)=>{

            let css='';
            console.log(Number(result.btn_number)===10)

            if(Number(Number(result.btn_number))===1){
                css = `
                    .btnUtil{
                        border: none;
                        padding: 1rem 2rem;
                        cursor: pointer;
                    }

                    .btnUtil:hover{
                        opacity: 0.5;
                    }

                    .btn1{
                        background-color: ${result.bg_color};
                        color: ${result.fg_color};
                        transition: all 0.2s;
                    }
                `
            }
            else if(Number(result.btn_number)===2){
                css = `
                    .btnUtil{
                        border: none;
                        padding: 1rem 2rem;
                        cursor: pointer;
                    }

                    .btnUtil:hover{
                        opacity: 0.5;
                    }
                    .btn2{
                        background-color: ${result.bg_color};
                        color: ${result.fg_color};
                        padding: 1rem 4rem;
                        font-weight: 600;
                    }
                `
            }
            else if(Number(result.btn_number)===3){
                css = `
                .btnUtil{
                    border: none;
                    padding: 1rem 2rem;
                    cursor: pointer;
                }

                .btnUtil:hover{
                    opacity: 0.5;
                }
                .btn3{
                    padding: 2rem 2rem;
                    background-color: ${result.bg_color};
                    color: ${result.fg_color};
                    border-radius: 0.2rem;
                }
                
                `

            }
            else if(Number(result.btn_number)===4){
                css = `
                .btnUtil{
                    border: none;
                    padding: 1rem 2rem;
                    cursor: pointer;
                }

                .btnUtil:hover{
                    opacity: 0.5;
                }
                .btn4{
                    background-color: ${result.bg_color};
                    color: ${result.fg_color};
                    border-radius: 0.2rem;
                    border: 0.1rem solid green;
                }
                
                `
            }
            else if(Number(result.btn_number)===5){
                css = `
                .btnUtil{
                    border: none;
                    padding: 1rem 2rem;
                    cursor: pointer;
                }

                .btnUtil:hover{
                    opacity: 0.5;
                }
                .btn5{
                    padding: 0.5rem 1rem;
                    background-color: ${result.bg_color};
                    color: ${result.fg_color};
                    border-radius: 0.1rem;
                }
                
                `
            }
            else if(Number(result.btn_number)===6){
                css = `
                .btnUtil{
                    border: none;
                    padding: 1rem 2rem;
                    cursor: pointer;
                }

                .btnUtil:hover{
                    opacity: 0.5;
                }
                .btn6{
                    background-color: ${result.bg_color};
                    color: ${result.fg_color};
                    border-radius: 5rem;
                }
                
                `
            }
            else if(Number(result.btn_number)===7){
                css = `
                .btnUtil{
                    border: none;
                    padding: 1rem 2rem;
                    cursor: pointer;
                }

                .btnUtil:hover{
                    opacity: 0.5;
                }
                .btn7{
                    background-color: ${result.bg_color};
                    color: ${result.fg_color};
                    border-radius: 0 5rem 5rem 0;
                }
                
                `
            }
            else if(Number(result.btn_number)===8){
                css = `
                .btnUtil{
                    border: none;
                    padding: 1rem 2rem;
                    cursor: pointer;
                }

                .btnUtil:hover{
                    opacity: 0.5;
                }
                
                .btn8{
                    background-color: ${result.bg_color};
                    color: ${result.fg_color};
                    border-radius:  5rem 5rem ;
                    box-shadow: 0.2rem 0.2rem 0 green;
                }
                `
            }
            else if(Number(result.btn_number)===9){
                css = `
                .btnUtil{
                    border: none;
                    padding: 1rem 2rem;
                    cursor: pointer;
                }

                .btnUtil:hover{
                    opacity: 0.5;
                }
                
                .btn9{
                    border-radius:  5rem 5rem ;
                    color: #000;
                    box-shadow: inset 0 0 0 0.2rem green;
                    background: none;
                    color: ${result.fg_color};
                }
                `
            }
            else if(Number(result.btn_number)===10){
                css = `
                .btnUtil{
                    border: none;
                    padding: 1rem 2rem;
                    cursor: pointer;
                }

                .btnUtil:hover{
                    opacity: 0.5;
                }
                .btn10{
                    border-radius: 0.5rem;
                    background-color: ${result.bg_color};
                    color: ${result.fg_color};
                }

                `
            }
            fs.writeFileSync('Utility-UI/utility_btn.css', css)
            const importFile = "@import './Utility-UI/utility_btn.css';\n "
            fs.appendFileSync("Utility-UI/import.css", importFile)
        
     })
    }

    

}






const UI = new buildUI()
if(!fs.existsSync(`Utility-UI`)){
    UI.buildingRoot()
    UI.buildingRootSetup()
}
if(process.argv[2]==="flex"){
    UI.buildingFlex()
}else if(process.argv[2]==="grid"){
    UI.buildingGrid()
}else if(process.argv[2]==='pads'){
    UI.buildingPads()
}else if(process.argv[2]==='margins'){
    UI.buildingMargins()
}else if(process.argv[2]==='color'){
    UI.buildShadeTints()
}else if(process.argv[2]==='gaps'){
    UI.buildingGaps()
}else if(process.argv[2]==='grads'){
    UI.buildGradients()
}else if(process.argv[2]==='btns'){
    UI.buildBtn()
}