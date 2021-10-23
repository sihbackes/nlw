/*Variáveis Let e Const
Const é usado quando não se pretende mudar o conteúdo de uma variável
Se você pretende mudar você usa Let

Objeto: para criar o objeto vc usa {}

por exemplo: const objeto = {
name:"Simone",
phone: 154648646,
accept: true
}

DOM: What is the DOM? The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. ... As an object-oriented representation of the web page, it can be modified with a scripting language such as JavaScript. */

const linksSocialMedia = {
  github: 'sihbackes',
  youtube: 'divadepressao',
  facebook: 'sihbackes',
  instagram: 'sihbackes',
  twitter: 'twitter'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    alert(li.children[0].href)
  }
}
