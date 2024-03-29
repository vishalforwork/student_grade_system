const handleClick = () => {
    const sub1 = parseInt(document.getElementById('sub1').value);
    const sub2 = parseInt(document.getElementById('sub2').value);
    const sub3 = parseInt(document.getElementById('sub3').value);
    const sub4 = parseInt(document.getElementById('sub4').value);

    let marks = sub1 + sub2 + sub3 + sub4;
    let percent = (marks / 400)*100 ;
    let grade, res;

    if(marks >= 360){
        grade = "A";
    }
    else if (marks < 320 && marks >= 240){
        grade = "B";
    }
    else if (marks < 240 && marks >= 200){
        grade = "C";
    }
    else if (marks < 200 && marks >= 140){
        grade = "D";
    }
    else if (marks < 140 ){
        grade = "F";
    }
    
    
    
    if(percent < 35){
        res = "FAILED";
    }
    else{
        res = "PASSED";
    }
    
    
    // console.log(marks);
    // console.log(percent);
    // console.log(grade);
    // console.log(res);


    document.getElementById('marks').innerHTML = "Out of 400, You got " + marks ;
    document.getElementById('percentage').innerHTML = "You got " + percent ;
    document.getElementById('grade').innerHTML = "Your grade is " + grade ;
    document.getElementById('res').innerHTML = "You " + res ;
}