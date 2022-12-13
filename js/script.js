let team = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        img: "wayne-barnet-founder-ceo.jpg",
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Chief",
        img: "angela-caroll-chief-chief.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        img: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        img: "scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg",
    }
]

let container = document.getElementById('container')

for (let i = 0; i < team.length; i++){
    for(let key in team[i]){
        console.log(team[i][key])
        const push = document.createElement('div')
        push.innerText = team[i][key]
        container.appendChild(push)
    }   
}