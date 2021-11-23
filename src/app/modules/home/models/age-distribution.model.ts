export type Option = 'cases' | 'critical' | 'deaths';

export interface AgeDistribution {
  "age_average": number,
  "average_death_age": number,
  "total_age_groups": TotalAgeGroups,
  "updated": string
}

export interface TotalAgeGroups {
  "cases": {
    "0-17": number,
    "18-39": number,
    "40-64": number,
    "65+": number
  },
  "critical": {
    "0-17": number,
    "18-39": number,
    "40-64": number,
    "65+": number
  },
  "deaths": {
    "0-17": number,
    "18-39": number,
    "40-64": number,
    "65+": number
  }
}