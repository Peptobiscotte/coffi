// export { default } from "next-auth/middleware"
import { callback } from "chart.js/helpers";
import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
export default withAuth(
    function middleware(request: NextRequestWithAuth) {
        console.log(request.nextUrl.pathname)
    },
    {
        callbacks: {
        authorized: ({ token }) => !!token
        },
    }
)