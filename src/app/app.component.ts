import { Component, OnInit } from '@angular/core';

import { GithubService } from "src/app/services/github.service"
import { FormGroup, FormBuilder } from "@angular/forms"
import { HttpErrorResponse } from '@angular/common/http';
// import {} from "src/assets/images"
import { gitUsers } from "src/app/model/gitUsers"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'GitHub-Users-Search';
  // infoUsers: any[] = []
  infoUsers: gitUsers | any
  inputSearch: FormGroup | any

  imageAvatar:string = "/assets/images/github.png"
  login: string = "GitHub Users"
  linkGit:string = "https://github.com/"
  lightMode:boolean = true;

  variavel1 = getComputedStyle(document.documentElement).getPropertyValue('--global-black-color')
  variavel2 = getComputedStyle(document.documentElement).getPropertyValue('--global-white-color')
  
  constructor(private service:GithubService, private formBuilder:FormBuilder) {}

  ngOnInit(): void {
    this.inputSearch = this.formBuilder.group({
      search: ['']
    }) 
    
    // this.service.getLinguagensProgramacao("Richarde16")

  }

  requisicaoAPI(usuario:string){
    // this.infoUsers.pop()

    this.service.getUsuarios(usuario).subscribe(
      {
        next: (resp)=>{
          this.infoUsers = resp
          // console.log(this.infoUsers[0].owner.avatar_url)
          // console.log(this.infoUsers[0].owner.login)
          console.log(this.infoUsers)

          this.login = this.infoUsers[0].owner.login
          this.imageAvatar = this.infoUsers[0].owner.avatar_url
          this.linkGit = this.infoUsers[0].owner.html_url
        },
        error: (err)=>{
          console.log(err.status)
        }
      })
        
  }

  pesquisar(event:KeyboardEvent){
    // console.log(event.key)
    // console.log(this.usuarioExist)
    if(event.key == "Enter" && this.inputSearch.get("search").value != ""){
      console.log(this.inputSearch.get("search").value)
      this.requisicaoAPI(this.inputSearch.get("search").value)
    }
  }

  pesquisarBtn(){
    if(this.inputSearch.get("search").value != ""){
      // console.log(this.inputSearch.get("search").value)
      this.requisicaoAPI(this.inputSearch.get("search").value)
    }
  }

  modoBlackLigth(){
    this.variavel1 = this.variavel1.toString()
    console.log(typeof(this.variavel1))
    // console.log(this.variavel2)
    // this.variavel1 = "#000";
    if(this.lightMode){
      document.documentElement.style.setProperty('--global-black-color', "#fff")
      document.documentElement.style.setProperty("--global-white-color", "#000")
      // this.lightMode = false
    }
    else{
      document.documentElement.style.setProperty('--global-black-color', "#000");
      document.documentElement.style.setProperty("--global-white-color", "#fff")
    }
    // console.log(this.variavel2)
    this.lightMode = !this.lightMode
  }
}
