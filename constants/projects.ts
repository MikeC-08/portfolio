// 定義類型 (Type)，確保資料格式正確
export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubRepoOwner?: string; // 加入可選欄位，有些專案可能還沒開源
  githubRepo?: string; // 加入可選欄位，有些專案可能還沒開源
}

export const PROJECTS: Project[] = [

];