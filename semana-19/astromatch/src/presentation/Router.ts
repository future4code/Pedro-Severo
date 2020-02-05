export class ApiRouter {
    public static async handleRoute(path: string, event: any): Promise<any> {
        switch(path) {
            case 'signup':
                return {
                    message: ""
                };
            case 'password':
                return {
                    message: ""
                };
            case 'login':
                return {
                    message: ""
                };
            case 'users':
                return {
                    message: ""
                };
            case 'match':
                return {
                    message: ""
                };
            case 'unmatch':
                return {
                    message: ""
                };
            case 'matches':
                return {
                    message: ""
                };
        
            default:
                throw new Error("Rota não existe");            
        };
    };
};