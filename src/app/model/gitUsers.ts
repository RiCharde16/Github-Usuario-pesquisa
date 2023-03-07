export type gitUsers = {
    id: number,
    name:string,
    description: string
    html_url: string
    owner: {
        login: String,
        avatar: string,
        url: string,
        htmlUrl: string
    }
}