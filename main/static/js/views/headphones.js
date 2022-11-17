import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Headphones");
    }

    async getHtml() {
    
        var headphone=[{
            'img': '"/static/image/hp-log1.png"',
            'name':'Logitech G435 Lightspeed Wireless Black ',
            'tt1':'LIGHTSPEED không dây: Cổng USB 2.0',
            'tt2':'Bluetooth: Các thiết bị có kết nối âm thanh Bluetooth',
            'tt3':'Tương thích với Dolby Atmos, Tempest 3D AudioTech và Windows Sonic Spatial Sound',
            'tt4':''
        },{
            'img': '"/static/image/hp-log2.png"',
            'name':'Logitech G335 White',
            'tt1':'Có dây',
            'tt2':'Độ nhạy 36 Ohms : 87.5 dB SPL/mW',
            'tt3':'Màng loa lớn 40 mm',
            'tt4':''
        },{
            'img': '"/static/image/hp-hyper.png"',
            'name':'HyperX Cloud II RED',
            'tt1':'Có dây',
            'tt2':'Độ nhạy 36 Ohms : 87.5 dB SPL/mW',
            'tt3':'Màng loa lớn 40 mm',
            'tt4':''
        },{
            'img': '"/static/image/hp-razer.png"',
            'name':'Razer Kraken V3',
            'tt1':'Razer TriForce Titanium',
            'tt2':'62 mm x 42 mm',
            'tt3':'Cardioid HyperClear có thể tháo rời',
            'tt4':''
           
        },{
            'img': '"/static/image/hp-dareU.png"',
            'name':'DareU A710 RGB Wireless',
            'tt1':'5.8GHz + Type-C + 3.5mm',
            'tt2':'24 +- 15% (Ohm)',
            'tt3':'Da mềm cao cấp',
            'tt4':''
        },{
            'img': '"/static/image/hp-ss.png"',
            'name':'DareU A710 RGB Wireless',
            'tt1':'5.8GHz + Type-C + 3.5mm',
            'tt2':'24 +- 15% (Ohm)',
            'tt3':'Da mềm cao cấp',
            'tt4':''}]
        var text='';
        for(let i=0;i<headphone.length;i++){
            console.log(i)
            if(i%3==0){
                text+='<tr>'
            }
            text+=`<td>
            <center><img style="max-width: 250px;min-width:250px;" src = `+headphone[i].img+`></center>
            <h3>`+headphone[i].name+`</h3>
            <ul style="list-style-type: circle;">
                <li>`+headphone[i].tt1+`</li>
                <li>`+headphone[i].tt2+`</li>
                <li>`+headphone[i].tt3+`</li>
                <li>`+headphone[i].tt4+`</li>
            </ul>
            </td>`
            if(i!=0 & (i+1)%3==0){
                text+='</tr>'
            }
            
        }
        // text=text.substring(0, text.length-4)
        console.log(text)
        return `
        
        <link rel="stylesheet" href="/static/css/headphonese.css">  
        <div id="main">
        <Center><h1 style="font-family:Courier New">HeadPhone</h1></Center>
        <table style = "width:100%">
        `+text+`
        </table>  
    <div class="container" id="click"> 
        <button class="sw"><a href="/mouse" data-link>Mouse</a></button>  
                  
        <button class="sw"><a href="/keyboard" data-link>Keyboard</a></button>    

        <button class="sw"><a href="/screen" data-link>Screen</a></button>     
      
    </div>
    </div>
        `;
    }
}