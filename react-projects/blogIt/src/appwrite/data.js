import { Client, ID, Databases, Storage } from 'appwrite'
import conf from "../conf/conf"
export class Data {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId);
            this.databases=new Databases(this.client);
            this.storage=new Storage(this.client);

    }
    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,conf.appwriteCollectionId,
               slug,{
                title,content,featuredImage,status,userId
               }


            );

        }catch(error){
             return error;
        }

    }
    async updatePost(documentId,{title,content,featuredImage,status,userId}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,conf.appwriteCollectionId,
                documentId,{ title,content,featuredImage,status,userId}
            )
        }catch(error){
            return error;
        }
    }
    async deletePost(documentId){
        try{
                await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                documentId                                   
            );return true;

        }catch(error){return false;}
    }
    async getPost(documentId){
        try{
            return await this.databases.getDocument( conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                documentId)
        }catch(error){return error;}
    }
    async getAllPosts(queries=[Query.equal("status",["active"])]){
     try{
        return await this.databases.listDocuments(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,

        );
     }
     catch(error){return error;}
    }
    //file upload service
    async uploadFile(file){
        try{
            return await this.storage.createFile(
                conf. appwriteBucketId,
                ID.unique(),
                file
            )

        }
        catch(error){
            console.log("upload file appwrite error");
            return false;
        }

    }
    async deleteFile(fileId){
        try{
            await this.storage.deleteFile(
                 conf. appwriteBucketId,
                 fileId
            )
            return true;
        }catch(error){
            console.log("delete file appwrite error");
            return false;
        }
    }
    getFilePreview(fileId){
        try{
            return this.storage.getFilePreview(
                 conf.appwriteBucketId,
            fileId
            )
            return true;
        }catch(error){
            console.log("getFilePreview appwrite error");
            return error;
        }
    }
}
export default new Data();