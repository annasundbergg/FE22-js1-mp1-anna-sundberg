let hue = 120;

for(let i = 1; i<6; i++){
    const h1Element = document.createElement('h3');
    h1Element.innerText = 'Rad ' + i;
    document.body.appendChild(h1Element);
    h1Element.style.textAlign = 'center';
    h1Element.style.color = 'hsl(240, 90%, 70%)';
    h1Element.style.fontWeight = 'lighter';
    let size = i * 0.5;
    h1Element.style.fontSize = size + "rem";
    h1Element.style.backgroundColor = `hsl(${hue}, 90%, 85%)`;
    hue = hue + 20; 
}

const article = document.createElement('article'); 
document.body.appendChild(article);
article.style.border = '1px solid black';
article.style.display = 'flex';
article.style.justifyContent = 'space-evenly';


for(let i = 0; i<3; i++){
    const olElement = document.createElement('ol');
    article.appendChild(olElement);
    olElement.style.border = '9px solid hsl(240, 71%, 80%)';
    

    for(let j = 0; j<10; j++){
        const liElement = document.createElement('li');
        olElement.appendChild(liElement);
        liElement.style.listStyle = 'none';
        liElement.style.width = '50px';
        liElement.style.marginLeft = '-40px';

        if (i == 0){
            liElement.innerText = j;

            if(j == 4){
                liElement.style.backgroundColor = 'hsl(240, 71%, 80%)';
                liElement.style.color = 'white'; 
            }

            else if(j%2 == 0){
                liElement.style.backgroundColor = 'black';
                liElement.style.color = 'white'; 
            }
        }

        if(i==1){
            liElement.innerText = 9+j - j*2;
            // loopen gör att det ökar, vill minska
            liElement.style.textAlign = 'center';
            
            if(j==1){
                liElement.style.backgroundColor = 'hsl(240, 71%, 80%)';
                liElement.style.color = 'white'; 
            }

            else if (j%2 == 1){
                liElement.style.backgroundColor = 'black';
                liElement.style.color = 'white'; 
            }
        }

        if(i==2){
            const numbers = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
            liElement.innerText = numbers[j];
            liElement.style.textAlign = 'right'; 

            if(j == 5){
                liElement.style.backgroundColor = 'hsl(240, 71%, 80%)';
            }

            else if(j%2 == 0){
                liElement.style.backgroundColor = 'black';
                liElement.style.color = 'white'; 
            }
            
        }
    
    }



}
