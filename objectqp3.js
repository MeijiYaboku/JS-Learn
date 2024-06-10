weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature

//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}

wc ={}
for(data of weatherData){
    district = data.district
    temp = data.weather
    if(district in wc){
       oldtemp =wc[district]
       if(oldtemp>temp){
        wc[district]=oldtemp
       }
       else{
        wc[district]=temp
       }
       

    }
    else{
        wc[district]=temp
    }
}
console.log(wc);