import { issuesData } from '../data/issuesData';

export async function getIssues() {
  //api call for getting the fetched data /api/conflicts
  
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(issuesData);
    }, 500);
  });
}