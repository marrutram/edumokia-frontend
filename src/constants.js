export const users = {
    admin: {
        username: "admin",
        nickname: "Admin Learning",
        password: "1234",
        menu: {
            home: true,
            charts: true,
            courses: true,
            dashboard: true,
            news: true,
            administratorOrganizational: true,
            administrationBenefits: true,
            library: true
        }
    },
    collaborator: {
        username: "collaborator",
        nickname: "collaborator Learning",
        password: "1234",
        menu: {
            home: true,
            charts: true,
            courses: true,
            dashboard: false,
            news: true,
            performance: true,
            weather: true,
            administratorOrganizational: false,
            administrationBenefits: false,
            library: true
        }
    }
}