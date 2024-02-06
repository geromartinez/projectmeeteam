export interface IJobOffer {

	id: number;

	profile: string;

	job_conditions: string;

	list_skills: Array<SkillsData>;

	applied: string;
	
	countReq: number;
	
	countPlus: number;

	large_image_url: string;
	
	english_level: string;

	experience_time: string;

}

interface SkillsData {
	
  groupType: string;
  
  skillName: number;
  
}