import { dashboardData } from '../data/dashboardData';

export async function getDashboardData() {
    //api call for the admin dashboard here

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dashboardData);
    }, 500);
  });
}