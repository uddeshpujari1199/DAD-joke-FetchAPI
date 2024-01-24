document.getElementById('btn').addEventListener('click',clickHandler)

let p=document.getElementById('dadjoke')

function clickHandler(){

    let joke=''

    const xhr=new XMLHttpRequest();
    xhr.open('GET', 'https://api.api-ninjas.com/v1/dadjokes?limit=1');
    xhr.setRequestHeader('X-Api-Key','1vq3uNb9aU8riNfTLXHt3Q==XwuEyqVeFYtMvkC5')
    xhr.send();
    xhr.onload =function(){
        if(xhr.status==200){
            const result=JSON.parse(xhr.response)
            joke=result[0].joke

            p.innerText=joke
        }
    }

}