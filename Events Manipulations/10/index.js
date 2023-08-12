let first=document.getElementById('first-first');
let second=document.getElementById('first-second');
let heading=document.getElementById('heading');
let page=0;
let trueAsnwers=0;
first.addEventListener('click',function(event) {
    if(page==0) {
    heading.textContent='What function creating JSON to string';
    first.textContent='JSON.toString()';
    second.textContent='JSON.stringify()';
    page++;
    trueAsnwers++;
    console.log(`${page} and ${trueAsnwers}`)
    } else if(page==1) {
        first.style.height='90px';
        second.style.height="90px";
        heading.textContent='What is DOM';
        first.textContent='Programing API for HTML and XML documents';
        second.textContent='The DOm is your source HTML';
        page++;
        console.log(`${page} and ${trueAsnwers}`)
    } else if(page==2) {
        page++;
        trueAsnwers++;
        let main=document.getElementsByClassName('main')[0];
        let buttons=document.getElementsByClassName('buttons')[0];
        main.removeChild(buttons);
        console.log(`${page} and ${trueAsnwers}`)
        if(trueAsnwers==1) {
            heading.textContent=`You have `+trueAsnwers+` true aswer`; 
            } else {
                heading.textContent=`You have `+trueAsnwers+` true aswers`; 
            }
            setTimeout(3000,heading.textContent='You are JS fan');
    }
})
second.addEventListener('click',function(event) {
    if(page==0) {
        heading.textContent='What function creating JSON to string';
        first.textContent='JSON.toString()';
        second.textContent='JSON.stringify()';
        page++;
        console.log(`${page} and ${trueAsnwers}`)
        } else if(page==1) {
            heading.textContent='What is DOM';
            first.style.height='90px';
            second.style.height="90px";
            first.textContent='Programing API for HTML and XML documents';
            second.textContent='The DOM is your source HTML';
            page++;
            trueAsnwers++;  
            console.log(`${page} and ${trueAsnwers}`)
            } else if(page==2) {
                page++;
                let main=document.getElementsByClassName('main')[0];
                let buttons=document.getElementsByClassName('buttons')[0];
                main.removeChild(buttons);
                console.log(`${page} and ${trueAsnwers}`)
                if(trueAsnwers==1) {
                heading.textContent=`You have `+trueAsnwers+` true aswer`; 
                } else {
                    heading.textContent=`You have `+trueAsnwers+` true aswers`; 
                }
                setTimeout(function(){heading.textContent='You are JS fan'},5000);
            }
        
})