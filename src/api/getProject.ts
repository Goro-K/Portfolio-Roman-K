import { API_URL } from "../../config";
import { Project } from "./../../types";

export async function getProject(projectId: string): Promise<Project> {
  const response = await fetch(`${API_URL}/projects/${projectId}`);
  return response.json();
}