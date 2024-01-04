class UI_comp{
    nav(){
        const nav_resuable = `function Nav(){
                return(
                    <div className='class'>
                        <h1 className>hero</h1>
                    </div>
                )
        }
        `
        fs.mkdirSync('UI-COMP')
        fs.writeFileSync('UI-COMP/utility_nav.jsx', nav_resuable)
    }
}

if(process.argv[2]=='nav'){
    UI_comp.nav()
}
