import { Link, useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an inexpected error has occurred.</p>
            <p>
                <i>
                    {error.status} {error.statusText || error.message}
                </i>
            </p>
            <Link to='/'>Home</Link>
        </div>
    );
};
