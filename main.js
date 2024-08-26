function App(){
    const st1 = { color: 'red', backgroundColor: 'lime', }
    const st2 = { color: 'blue', backgroundColor: 'coral', }
    let today =   new Date()
    const birthday = new Date("December 1, 1994")
    return(
        <div>
            <h1 style={st1}>Nattapol Dedruktip</h1>
            <p style={st2}> Age : {((today -birthday)/(86400000*365)).toFixed(1)}</p>
            <p>today : {today.toDateString()} </p>
            <p> Year  = {((today -birthday)/(86400000*365)).toFixed(2)}</p>
            <p> leftOfyear  = {((((today -birthday)/(86400000*365)).toFixed(2)).split('.')[1] /100)} year</p>
            <p> month : {(((((today -birthday)/(86400000*365)).toFixed(2)).split('.')[1] /100)*12).toFixed(2) } months</p>
            <p> leftOfmonth :{(((((today -birthday)/(86400000*365)).toFixed(2)).split('.')[1] /100)*12).toFixed(2).split('.')[1]/100} </p>
            <p> day : {(0.12*31).toFixed(2)} days</p>
            <p>This method will NOT get the result that PRECISELY</p>
            <p>my age : 29 years  9 month 3.7 day</p>
        </div>
    )
}

















ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)