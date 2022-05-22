let o_trong, i, j;
    o_trong = "<table style='background-color:' border='1' width='300' cellspacing='0' cellpadding='3'>";
    
    for(i=1;i<10;i++){
            o_trong = o_trong + "<tr>";
        for(j=1;j<10;j++){
            o_trong = o_trong + "<td>" + "*" + "</td>" // Muốn thêm nội dung thì ghi vào giữa "<td>" và "</td>", cách nhau bởi dấu cộng
             //o_trong += `<td> ${i} X ${j} = ${i*j}</td>`     //dòng trên có thể thay bằng dưới để gọn hơn, 
            }
            o_trong = o_trong + "</tr>";
    }
    o_trong = o_trong + "</table>";

    if(i<=j){
        document.write("*");
         } else (i>j)
       document.write('&nbsp');                  
 
   // document.write (o_trong);