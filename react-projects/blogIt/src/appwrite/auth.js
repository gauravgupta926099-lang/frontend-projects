import conf from "../conf/conf"
import {Account,Client,ID} from "appwrite"

export class AuthService{
    client=new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectId);
        this.account=new Account(this.client);
    }
    async createAccount({email,password,name}){
       try{
        acc=await this.account.create(ID.unique(),email,password,name);
        if(acc){
        return this.login({email,password});
        }
        else{
            throw acc   
        }
       }catch(error){
        throw error;
       }
    }
    async login({email,password}){
        try{
            return await this.account.createEmailPasswordSession(email,password);
        }
        catch(error){
            throw error;
        }
    }
    async getCurrentUser(){
        try{
            return await this.account.get();
        }
        catch(error)
        {throw error;}
    }
    async logOut(){
        try{
         
            this.account.deleteSessions();
          
        }
        catch(error){
            throw error;
        }
    }
}
export default new AuthService();