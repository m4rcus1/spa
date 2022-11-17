import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Keyboard");
        
    }
    
    async getHtml() {
        var kb =[{
            'img':` "/static/image/kb-log1.png"`,
            'name':`Logitech Gaming G213`,
            'tt1':`Bàn phím giả cơ`,
            'tt2':`Kết nối USB 2.0`,
            'tt3':`Kiểu switch Rubber Dome`,
            'tt4':`RPG`
        },{
            'img':`"/static/image/kb-asus1.png"`,
            'name':`ASUS Strix Flare`,
            'tt1':`Bàn phím cơ`,
            'tt2':`Kết nối USB 2.0`,
            'tt3':`Kiểu switch Cherry MX Red`,
            'tt4':`Phím chức năng Có`
        }, 
        {
            'img':`"/static/image/kb-cosair.png"`,
            'name':`CORSAIR K70 MK.2 RGB MX`,
            'tt1':`Bàn phím cơ`,
            'tt2':`Kết nối USB 2.0`,
            'tt3':`Thiết kế nút riêng biệt`,
            'tt4':`Kiểu switch Cherry MX`
        },{
            'img':`"/static/image/kb-corsair1.png"`,
            'name':`CORSAIR K70 MK.2 SE RGB MX`,
            'tt1':`Bàn phím cơ`,
            'tt2':`Kết nối USB 2.0`,
            'tt3':`Kiểu switch Cherry MX Speed`,
            'tt4':''
        },{
            'img':`"/static/image/kb-corsair2.png"`,
            'name':`CORSAIR K63`,
            'tt1':`Bàn phím cơ`,
            'tt2':`Kết nối USB 2.0`,
            'tt3':`Kiểu switch Cherry MX Red`,
            'tt4':`Phím chức năng Có`

        },
        {
            'img':`"/static/image/kb-ful.png"`,
            'name':`Fuhlen Destroyer`,
            'tt1':`Bàn phím cơ`,
            'tt2':`Kết nối USB 2.0`,
            'tt3':`Kiểu switch Cherry MX Red`,
            'tt4':`Phím chức năng Có`
        }
         
        ]
    
        var text='';
        for(let i=0;i<kb.length;i++){
            console.log(i)
            if(i%3==0){
                text+='<tr>'
            }
            text+=`<td>
            <center><img style="max-width: 250px;min-width:250px;" src = `+kb[i].img+`></center>
            <h3>`+kb[i].name+`</h3>
            <ul style="list-style-type: circle;">
                <li>`+kb[i].tt1+`</li>
                <li>`+kb[i].tt2+`</li>
                <li>`+kb[i].tt3+`</li>
                <li>`+kb[i].tt4+`</li>
            </ul>
            </td>`
            if(i!=0 & (i+1)%3==0){
                text+='</tr>'
            }
            
        }
        // text=text.substring(0, text.length-4)
        console.log(text)
        return `
        <link rel="stylesheet" href="/static/css/keyboard.css">  
        <div id="main">
        <Center><h1 style="font-family:Courier New">Keyboard</h1></Center>
        <table style = "width:100%">`+text+`
       
    </table>  
    <div class="container" id="click"> 
        <button class="sw"><a href="/mouse" data-link>Mouse</a></button>  
                  
        <button class="sw"><a href="/headphones" data-link>Head phones</a></button>     

        <button class="sw"><a href="/screen" data-link>Screen</a></button>     
               
    </div>
    </div>
        `;
    }
}