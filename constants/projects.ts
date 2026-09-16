// 定義類型 (Type)，確保資料格式正確
export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubRepoOwner?: string; 
  githubRepo?: string; 
}

export const PROJECTS: Project[] = [

];