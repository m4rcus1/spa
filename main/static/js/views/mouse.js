import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Mouse");
        
    }
   
    async getHtml() {
        var mouse=[{
            'img': '"/static/image/log1.jpg"',
            'name':'Logitech G102 Gen2 Lightsync',
            'tt1':'DPI tối đa 8000',
            'tt2':'Lightsync RGB chiếu sáng',
            'tt3':'Thiết kế cổ điển',
            'tt4':'Kết nối USB',
        },{
            'img': '"/static/image/ROG1.jpg"',
            'name':'GIGABYTE Aorus M5 Gaming',
            'tt1':'Thương hiệu: Gigabyte',
            'tt2':'Chuẩn kết nối: USB',
            'tt3':'Omron Switch',
            'tt4':'RGB Led tích hợp',
        },{
            'img': '"/static/image/ASUS1.JPG"',
            'name':'ASUS ROG Pugio',
            'tt1':'Chuyển đổi thiết kế ổ cắm để dễ dàng',
            'tt2':'7200 DPI, 150 IPS và tăng tốc 30g',
            'tt3':'Thiết kế nút riêng biệt',
            'tt4':'Giao diện trực quan ROG Armory',
        },{
            'img': '"/static/image/log2.jpg"',
            'name':'Logitech G502 HERO',
            'tt1':'Kiểu kết nối: Có dây',
            'tt2':'Cảm biến: HERO',
            'tt3':'Độ phân giải: 16000 DPI',
            'tt4':'Tốc độ phản hồi: 1000 Hz (1ms)',
        },{
            'img': '"/static/image/corsair1.jpg"',
            'name':'Corsair Harpoon PRO RGB',
            'tt1':'Kiểu dáng thể thao với hình dạng đường viền thoải mái',
            'tt2':'ay cầm bên cao su và có trọng lượng nhẹ chỉ 85g.',
            'tt3':'Cảm biến quang học 12.000 DPI',
            'tt4':'Độ bền lâu dài với các công tắc Omron',
        },{
            'img': '"/static/image/ASUS1.JPG"',
            'name':'Corsair Harpoon PRO RGB',
            'tt1':'Kiểu dáng thể thao với hình dạng đường viền thoải mái',
            'tt2':'ay cầm bên cao su và có trọng lượng nhẹ chỉ 85g.',
            'tt3':'Cảm biến quang học 12.000 DPI',
            'tt4':'Độ bền lâu dài với các công tắc Omron',
        }]
        var text='';
        for(let i=0;i<mouse.length;i++){
            console.log(i)
            if(i%3==0){
                text+='<tr>'
            }
            text+=`<td>
            <center><img style="max-width: 250px;min-width:250px;" src = `+mouse[i].img+`></center>
            <h3>`+mouse[i].name+`</h3>
            <ul style="list-style-type: circle;">
                <li>`+mouse[i].tt1+`</li>
                <li>`+mouse[i].tt2+`</li>
                <li>`+mouse[i].tt3+`</li>
                <li>`+mouse[i].tt4+`</li>
            </ul>
            </td>`
            if(i!=0 & (i+1)%3==0){
                text+='</tr>'
            }
            
        }
    
        console.log(text)
        return `
        <link rel="stylesheet" href="/static/css/mouse.css">  
        <Center><h1 style="font-family:Courier New">MOUSE</h1></Center>
        <table style = "width:100%">`+text+`
        
    </table>  
    <div class="container" id="click"> 
    <button class="sw"><a href="/keyboard" data-link>Keyboard</a></button>     
        <button class="sw"><a href="/headphones" data-link>Head phones</a></button>     
        <button class="sw"><a href="/screen" data-link>Screen</a></button>           
    </div>
        `;
    }
}