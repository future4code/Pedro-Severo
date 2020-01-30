import { ApiRouter } from './presentation/Router';


export const handler = async (event: any) => {
    try {
        const pathParameter = event.pathParameters;
         
        if (!pathParameter) {
            throw new Error("It must to indicate a endpoint.")
        };

        const result = await ApiRouter.handleRoute(pathParameter.proxy, {
            body: JSON.parse(event.body),
            headers: event.headers,
            queryParams: event.queryStringParameters       
        })

        const response = { 
            statusCode: 200,
            body: JSON.stringify({
                result
            })
        };

        return response;
    } catch (err) {
        console.log("Err: ", err);
        const response = {
          statusCode: 400,
          body: JSON.stringify({
            errorMessage: err.message
          })
        };
        return response;
    };
};