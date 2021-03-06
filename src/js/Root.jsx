var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Root = React.createClass({
    render: function() {
        return (
            <html>
                <body>
                    <div className="app">
                        <div className="container">
                            <nav>
                                <div id="name">
                                    <Link to="about">
                                        <h1>Keith Yong</h1>
                                    </Link>
                                </div>
                                <div className="headerlinks">
                                    <ul className="tabs">
                                        <li><Link to="projects">Projects</Link></li>
                                        <li><Link to="about">About</Link></li>
                                        <li><Link to="travel">Travel</Link></li>
                                        <li><a href="https://keithy.artstation.com/">Art</a></li>
                                        <li><a href="https://github.com/keithyong">GitHub</a></li>
                                    </ul>
                                </div>
                            </nav>
                            <RouteHandler />
                        </div>
                        <Footer />
                    </div>
                </body>
            </html>
        );
    }
})

module.exports = Root;
