const logo=function(){
  
    
  return `
  
    \u001b[32m__________  ____  __________  ____  ____________
    / ____/ __ \/ __ \/ ____/ __ \/ __ \/  _/ /   / ____/
   / /   / /_/ / / / / /   / / / / / / // // /   / __/   
  / /___/ _, _/ /_/ / /___/ /_/ / /_/ // // /___/ /___   1.2
  \____/_/ |_|\____/\____/\____/_____/___/_____/_____/

  \u001b[31m ~by                                      
 ▄▀█ █▀█ █▀ █░░ ▄▀█ █▄░█ ▄▄ █▀▄▀█ █▀▄
 █▀█ █▀▄ ▄█ █▄▄ █▀█ █░▀█ ░░ █░▀░█ █▄▀ 
    \u001b[0m
    `
}
const menu=function(){

  return` 
  \u001b[32m
_______whatsapp tools_________
|                            |
| [1]=>wa.me                 | 
| [2]=>gerador de menu       |
| [3]=>gerador de aviso      |
| [4]=>Desativar numero      |
| [5]=>Desbanir numero       |
|____________________________|

\u001b[0m
  [9]=> criador
  [0]=>sair
  \u001b[0m`
}
const warking=(aviso)=>{
let avisoc=aviso.replace('.','\n')
  return `
  \u001b[31m
  @________________Aviso_______________@
  
  ${avisoc}
  
  
  ~by Arslan-MD
       @_________________________@
  \u001b[0m
       `
}

module.exports={logo:logo,menu:menu,aviso:warking}
