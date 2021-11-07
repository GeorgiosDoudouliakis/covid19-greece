export interface AgeDistribution {
    "age_distribution": {
        "age_average": number,
        "average_death_age": number,
        "total_age_groups": {
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
        },
        "updated": string
    } 
}