import {useState, useEffect} from 'react'
import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

/*
HOOK - funções do react que voce importa que começam com use -- exemplo: useState
useState - gerencia estados
useEffect - para disparar função quando algo acontecer - variavel mudou
*/

export function RepositoryList(){
    const [repositories,setRepositories] = useState<Repository[]>([])
   
    /*Toda vez que a variavel repositories mudar a função executa - caso passe vazio só executa uma unica vez
     nao deixar sem segundo parametro pois entrará em loop
     nao atualizar variavel de controle dentro da função 
    */
    useEffect(()=> {
      fetch('https://api.github.com/users/elciocf/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    /* Sempre q desejar um elemento para cada posição do array
       para cada posição uma função - sem retorno forEach
       para cada posição uma funçao - com retorno - map*/
       
    /* 
      Cada elemento de uma lista gerada pelo map - eu preciso informar uma chave unica para cada elemento

    */   
    return (
       <section className="repository-list">
           <h1>Lista de repositórios</h1>
           <ul>
              {repositories.map(repository => {
                  return <RepositoryItem key={repository.name} repository={repository}/>
              })}
           </ul>
       </section> 
    )
}