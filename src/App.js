import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import { Fragment } from 'react';

function App() {
    return (
        <Routers>
            <div className="App">
                <header className="App-header">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Layout =
                                route.layout === null ? Fragment : route.layout || DefaultLayout;

                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </header>
            </div>
        </Routers>
    );
}

export default App;
