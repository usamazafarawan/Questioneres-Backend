import { Schema } from 'mongoose';


export interface IUser {
    name: {
        first: string;
        middle?: string;
        last?: string;
    };
    cellPhone?: string; //Currently a 10 digit string for US numbers
    email: string;
    password?: string ;  
    createdAt?: Date | number;
    updatedAt?: Date | number;
    token?: string;
    role?:string

}
