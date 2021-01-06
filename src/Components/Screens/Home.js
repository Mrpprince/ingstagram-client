import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <div className="card home-card">
                <h5>Noume</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1606938704652-3e588c2c9fd4?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGJvOGpRS1RhRTBZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div className="card-content">

                    <i className="material-icons" style={{ color: "red" }}>favorite</i>

                    <h5>title</h5>
                    <p>This is amazing post </p>
                    <input placeholder="add comment" type="text" />
                </div>
            </div>
            <div className="card home-card">
                <h5>Noume</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1606938704652-3e588c2c9fd4?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGJvOGpRS1RhRTBZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div className="card-content">
                    <i className="material-icons" style={{ color: "red" }}>favorite</i>
                    <h5>title</h5>
                    <p>This is amazing post </p>
                    <input placeholder="add comment" type="text" />
                </div>
            </div>
            <div className="card home-card">
                <h5>Noume</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1606938704652-3e588c2c9fd4?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGJvOGpRS1RhRTBZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div className="card-content">
                    <i className="material-icons" style={{ color: "red" }}>favorite</i>
                    <h5>title</h5>
                    <p>This is amazing post </p>
                    <input placeholder="add comment" type="text" />
                </div>
            </div>
        </div>
    );
};

export default Home;