export interface ISkill {

	id: string;

	description: string;

	category: string;

	value: string;

	label: string;
}

export interface ISkillExperience {
    
    id:string;

    description:string;

    experience:number|string;
}

export interface ISkillJobCategory {
    
    id:number;

    name:string;

    active:boolean;

	created_timestamp:Date;

	updated_timestamp:Date;

}