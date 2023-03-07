import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
// import {} from "rxjs"
// import { environment } from "src/environments/environment"
import { Observable } from "rxjs"

import {gitUsers} from "src/app/model/gitUsers"

@Injectable({
    providedIn: 'root'
})
export class GithubService{
    private url:string = ""
    private githubModel: gitUsers | any

    constructor(private http:HttpClient) { 
        this.url = "https://api.github.com/users"
    }

    getUsuarios(userName:string):Observable<gitUsers>{
        return this.githubModel = this.http.get<gitUsers>(`${this.url}/${userName}/repos`)
        // return  this.githubModel
    }

}