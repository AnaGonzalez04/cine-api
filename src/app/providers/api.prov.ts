import { Injectable } from "@angular/core";
import axios from "axios";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: "root",
})

export class ApiProvider {

    url = environment.apiURL;

    login(data:any): Promise<any>{
        return new Promise ((resolve, reject)=>{
            axios
                .post(this.url + "users/login", data)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    }

    isAuthenticatedUser(): boolean {
        const token = localStorage.getItem("token");
        return token? true : false;
    }

    logout(){
        localStorage.removeItem("token");
    }

    register(data: any):Promise<any>{
        return new Promise ((resolve, reject)=>{
            axios
                .post(this.url + "users", data)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    }

    // ------------------- MOVIES -------------------

    getMovies(): Promise<any> {
        return new Promise ((resolve, reject)=>{
            axios
                .get(this.url + "movies")
                .then((response) => {
                    resolve(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    }

    createMovie(data: any):Promise<any>{
        const token = localStorage.getItem("token");
        return new Promise ((resolve, reject)=>{
            axios
                .post(this.url + "movies", data, {
                    headers: {
                        Authorization: token
                    }
                })
                .then((response) => {
                    resolve(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    }
    getMoviesOne(movieId: string): Promise<any> {
        return new Promise ((resolve, reject)=>{
            axios
                .get(this.url + "movies/"+movieId)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    }
    deleteMovie(movieId : string): Promise<any> {
        const token = localStorage.getItem("token");
        return new Promise ((resolve, reject)=>{
            axios
            .delete(`${this.url}movies/${movieId}`, {
                headers: {
                    Authorization: token,
                },
            })
                .then((response) => {
                    resolve(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    }
    editMovie(movieId: string, data: any): Promise<any> {
        const token = localStorage.getItem("token");
        return new Promise((resolve, reject) => {
            axios
                .put(`${this.url}movies/${movieId}`, data, {
                    headers: {
                        Authorization: token,
                    },
                })
                .then((response) => {
                    resolve(response.data);
                })
                .catch((err) => {
                    console.log(err);
                    reject(err); 
                });
        });
    }

    // ------------------- FUNCIONES -------------------
    async getFuncion() {
        try {
            const response = await axios.get(this.url + "funcion");
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    createFuncion(data: any): Promise<any> {
        const token = localStorage.getItem("token");
        return new Promise((resolve, reject) => {
            axios
                .post(this.url + "funcion", data, {
                    headers: {
                        Authorization: token
                    }
                })
                .then((response) => {
                    resolve(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    }
    
    getFuncionOne(funcionId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            axios
                .get(this.url + "funcion/" + funcionId) 
                .then((response) => {
                    resolve(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    }
    
    deleteFuncion(funcionId: string): Promise<any> {
        const token = localStorage.getItem("token");
        return new Promise((resolve, reject) => {
            axios
                .delete(`${this.url}funcion/${funcionId}`, { 
                    headers: {
                        Authorization: token,
                    },
                })
                .then((response) => {
                    resolve(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    }
    
    editFuncion(funcionId: string, data: any): Promise<any> {
        const token = localStorage.getItem("token");
        return new Promise((resolve, reject) => {
            axios
                .put(`${this.url}funcion/${funcionId}`, data, { 
                    headers: {
                        Authorization: token,
                    },
                })
                .then((response) => {
                    resolve(response.data);
                })
                .catch((err) => {
                    console.log(err);
                    reject(err);
                });
        });
    }
    
}

