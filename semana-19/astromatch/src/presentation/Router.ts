export class ApiRouter {
    public static async handleRoute(path: string, event: any): Promise<any> {
        switch(path) {
            case 'signup':
                return {
                    message: "SignUp done successfully"
                };
            default:
                throw new Error("Rota não existe");            
        };
    };
};