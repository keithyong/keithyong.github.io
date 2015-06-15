/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="row about">
                <img src="images/avatar.png" id="avatar" alt="avatar"></img>
                <h2>Hello!</h2>
                <p>My name is Keith. I am a senior Computer Science student at the <a href="http://www.udel.edu/">University of Delaware</a>. I focus on front-end web development using <a href="https://facebook.github.io/react/">React.js</a>, and I also do full stack work on <a href="https://nodejs.org/">Node</a> and <a href="http://flask.pocoo.org/">Flask</a>. My database of choice is PostgreSQL.</p>
                <p>In my free time you can find me buying a bag of Stumptown coffee in NYC, painting a still life oil, or playing some Dota 2.</p>
                <p>You can email me at <a href="mailto:terda12@gmail.com">terda12@gmail.com</a> and download my resume <a href="resume.pdf">here</a>.</p>
            </div>
        )
    }
});
