import React from 'react';
import './assets/css/style.css'


const Home = () => {

    return (
        <div className='container'>
            <div className='post-container'>

                <div className='home-content first'>
                    <h1>JSONPlaceholder </h1>
                    <div className='subtitles'>
                        <p>Fake Online REST API for Testing and Prototyping</p>
                        <p><b>Serving ~350M requests per month</b></p>
                        <p>Powered by
                            <a href="https://github.com/typicode/json-server"> JSON Server </a>
                            <i>+</i>
                            <a href="https://github.com/typicode/lowdb"> LowDB</a>
                        </p>
                    </div>
                </div>

                <div className='home-content second'>
                    <h3>Gold Sponsors</h3>
                    <p>
                        <img src="https://i.imgur.com/IBItATn.png" alt={123} height="70px" />
                    </p>
                    <p>
                        <img src="https://i.imgur.com/qS8XyfG.png" alt={123} height="70px" />
                    </p>
                    <p>
                        <a href=" ">Your Company Logo Here</a>
                    </p>
                </div>

                <div className='home-content third'>
                    <div className='main'>
                        <h2>Intro</h2>
                        <p>JSONPlaceholder is a free online REST API that you can use whenever you need some fake data. </p>
                        <p>It's great for tutorials, testing new libraries, sharing code examples, ... </p>
                        <h2>Resources</h2>
                        <p>
                            JSONPlaceholder comes with a set of 6 common resources:
                        </p>

                        <table className="resources">
                            <tbody><tr>
                                <td>
                                    <a href=" ">/posts</a>
                                </td>
                                <td>100 posts</td>
                            </tr>
                                <tr>
                                    <td>
                                        <a href=" ">/comments</a>
                                    </td>
                                    <td>500 comments</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href=" ">/albums</a>
                                    </td>
                                    <td>100 albums</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href=" ">/photos</a>
                                    </td>
                                    <td>5000 photos</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href=" ">/todos</a>
                                    </td>
                                    <td>200 todos</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href=" ">/users</a>
                                    </td>
                                    <td>10 users</td>
                                </tr>
                            </tbody>
                        </table>

                        <h2>Routes</h2>
                        <p className='tables'>
                            All HTTP methods are supported.
                        </p>
                        <table className="resources">
                            <tbody><tr>
                                <td>GET</td>
                                <td>
                                    <a href=" ">/posts</a>
                                </td>
                            </tr>
                                <tr>
                                    <td>GET</td>
                                    <td>
                                        <a href=" ">/posts/1</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>GET</td>
                                    <td>
                                        <a href=" ">/posts/1/comments</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>GET</td>
                                    <td>
                                        <a href=" ">/comments?postId=1</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>GET</td>
                                    <td>
                                        <a href=" ">/posts?userId=1</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>POST</td>
                                    <td>/posts</td>
                                </tr>
                                <tr>
                                    <td>PUT</td>
                                    <td>/posts/1</td>
                                </tr>
                                <tr>
                                    <td>PATCH</td>
                                    <td>/posts/1</td>
                                </tr>
                                <tr>
                                    <td>DELETE</td>
                                    <td>/posts/1</td>
                                </tr>

                            </tbody>
                        </table>
                        <p className='tables'>
                            <strong>Note</strong>: you can view detailed examples
                                <a href=" "> here</a>.
                        </p>
                        <h2>Use your own data</h2>
                        <p className='tables'>
                            With <a href=" ">JSON Server</a> online service and a simple GitHub repo, you can have your own online fake REST server in seconds.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;