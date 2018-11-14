const mongoose=require('mongoose');
const schema=require('../schema/workspaceSchema');

const Workspacemodal=mongoose.model('Sneeddb',schema);

createModal=async (data)=>{
    const obj=new Workspacemodal (data);
    const result= await obj.save();
    //console.log(result);
};
const workspacesRawData=[
    {
    workspaceid:1,
    workspacename:"Wipro",
    capacity:300,
    type:"Open Desk",
    availability:true,
    rates:[{planName:"Monthly Rates",price:30000},
    {planName:"Daily Rates",price:2000},
    {planName:"Hourly Rates",price:400}
    ]

},
{
    workspaceid:2,
    workspacename:"Airtel",
    capacity:20,
    type:"Meeting Room",
    availability:true,
    rates:[{planName:"Monthly Rates",price:40000},
    {planName:"Daily Rates",price:1000},
    {planName:"Hourly Rates",price:300}
    ]

},{
    workspaceid:3,
    workspacename:"IBM",
    capacity:5,
    type:"Private Cabin",
    availability:true,
    rates:[{planName:"Monthly Rates",price:10000},
    {planName:"Daily Rates",price:1200},
    {planName:"Hourly Rates",price:500}
    ]

},{
    workspaceid:4,
    workspacename:"Infosys",
    capacity:10,
    type:"Meeting Room",
    availability:true,
    rates:[{planName:"Monthly Rates",price:14000},
    {planName:"Daily Rates",price:800},
    {planName:"Hourly Rates",price:100}
    ]

},{
    workspaceid:5,
    workspacename:"TCS",
    capacity:2,
    type:"Private Cabin",
    availability:true,
    rates:[{planName:"Monthly Rates",price:1000},
    {planName:"Daily Rates",price:500},
    {planName:"Hourly Rates",price:100}
    ]

},{
    workspaceid:6,
    workspacename:"CTS",
    capacity:500,
    type:"Open Desk",
    availability:true,
    rates:[{planName:"Monthly Rates",price:50000},
    {planName:"Daily Rates",price:5000},
    {planName:"Hourly Rates",price:600}
    ]

},{
    workspaceid:7,
    workspacename:"ThoughtWorks",
    capacity:3,
    type:"Private Cabin",
    availability:true,
    rates:[{planName:"Monthly Rates",price:12000},
    {planName:"Daily Rates",price:800},
    {planName:"Hourly Rates",price:400}
    ]

},{
    workspaceid:8,
    workspacename:"SAP Labs",
    capacity:300,
    type:"Open Desk",
    availability:false,
    rates:[{planName:"Monthly Rates",price:30000},
    {planName:"Daily Rates",price:2000},
    {planName:"Hourly Rates",price:400}
    ]

},{
    workspaceid:9,
    workspacename:"Capillary",
    capacity:15,
    type:"Meeting Romm",
    availability:true,
    rates:[{planName:"Monthly Rates",price:35000},
    {planName:"Daily Rates",price:3000},
    {planName:"Hourly Rates",price:400}
    ]

},{
    workspaceid:10,
    workspacename:"Tansi Honda",
    capacity:8,
    type:"Private Cabin",
    availability:true,
    rates:[{planName:"Monthly Rates",price:3000},
    {planName:"Daily Rates",price:700},
    {planName:"Hourly Rates",price:400}
    ]

},{
    workspaceid:11,
    workspacename:"Tata Motors",
    capacity:100,
    type:"Training Room",
    availability:true,
    rates:[{planName:"Monthly Rates",price:30000},
    {planName:"Daily Rates",price:2000},
    {planName:"Hourly Rates",price:400}
    ]

},{
    workspaceid:12,
    workspacename:"Kritunga",
    capacity:300,
    type:"Event Space",
    availability:true,
    rates:[{planName:"Monthly Rates",price:50000},
    {planName:"Daily Rates",price:3000},
    {planName:"Hourly Rates",price:900}
    ]

}]
 //createModal();
 //workspacesRawData.map((data)=>{createModal(data)});


module.exports= Workspacemodal;