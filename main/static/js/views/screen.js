import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Screen");
    }


    async getHtml() {
        var screen=[{
            'img': '"/static/image/sc-asus.png"',
            'name':'ASUS 23.8" VA249HE',
            'tt1':'Kích thước: 23.8',
            'tt2':'Độ phân giải: 1920 x 1080 ( 16:9 )',
            'tt3':'Góc nhìn: 178 (H) / 178 (V)',
            'tt4':''
        },{
            'img': '"/static/image/sc-acer.png"',
            'name':'Acer Nitro 23.8" VG240Y',
            'tt1':'Kích thước: 23.8',
            'tt2':'Độ phân giải: 1920 x 1080 ( 16:9 )',
            'tt3':'Góc nhìn: 178 (H) / 178 (V)',
            'tt4':''
        },{
            'img': '"/static/image/sc-lg.png"',
            'name':'LG 24" 24MK600',
            'tt1':'Kích thước: 24',
            'tt2':'Độ phân giải: 1920 x 1080 ( 16:9 )',
            'tt3':'Góc nhìn: 178 (H) / 178 (V)',
            'tt4':''
        },{
            'img': '"/static/image/sc-dell.png"',
            'name':'Dell 23" P2319H',
            'tt1':'Kích thước: 23',
            'tt2':'Độ phân giải: 1920 x 1080 ( 16:9 )',
            'tt3':'Góc nhìn: 178 (H) / 178 (V)',
            'tt4':''
        },{
            'img': '"/static/image/sc-lcd.png"',
            'name':'LCD ACER R221QB',
            'tt1':'Kích thước: 23',
            'tt2':'Độ phân giải: 1920 x 1080 ( 16:9 )',
            'tt3':'Góc nhìn: 178 (H) / 178 (V)',
            'tt4':''
        },{
            'img': '"/static/image/sc-samsung.png"',
            'name':'LCD SAMSUNG LS22R350FHEXXV',
            'tt1':'Kích thước: 21.5',
            'tt2':'Độ phân giải: 1920 x 1080 ( 16:9 )',
            'tt3':'Góc nhìn: 178 (H) / 178 (V)',
            'tt4':''
        }]
        var text='';
        for(let i=0;i<screen.length;i++){
            console.log(i)
            if(i%3==0){
                text+='<tr>'
            }
            text+=`<td>
            <center><img style="max-width: 250px;min-width:250px;" src = `+screen[i].img+`></center>
            <h3>`+screen[i].name+`</h3>
            <ul style="list-style-type: circle;">
                <li>`+screen[i].tt1+`</li>
                <li>`+screen[i].tt2+`</li>
                <li>`+screen[i].tt3+`</li>
                <li>`+screen[i].tt4+`</li>
            </ul>
            </td>`
            if(i!=0 & (i+1)%3==0){
                text+='</tr>'
            }
            
        }
        // text=text.substring(0, text.length-4)
        console.log(text)
        return `
        <link rel="stylesheet" href="/static/css/screen.css">  
        <div id="main">
        <Center><h1 style="font-family:Courier New">Screen</h1></Center>
        <table style = "width:100%">
       `+text+`
    </table>  
    <div class="container" id="click"> 
        <button class="sw"><a href="/mouse" data-link>Mouse</a></button>               
        <button class="sw"><a href="/keyboard" data-link>Keyboard</a></button>    
        <button class="sw"><a href="/headphones" data-link>Head phones</a></button>  
        
    </div>
    </div>
        `;
    }
}