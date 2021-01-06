import React from 'react';

const Profile = () => {
    return (
        <div style={{maxWidth:"800px",margin:"0 auto"}}>
            <div style={{ display: "flex", justifyContent: "space-around", margin: "18px 0px", borderBottom: "1px solid gray" }}>
                <div>
                    <img style={{ width: "160px", height: "160px", borderRadius: "80px" }}
                        src="https://images.unsplash.com/photo-1605471395053-29a60b996ab4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                </div>
                <div>
                    <h5>Momoniyo Hasan Noume</h5>

                    <div style={{ display: "flex", justifyContent: "space-between", width: "110%" }}>
                        <h5>40 posts</h5>
                        <h5>40 followers</h5>
                        <h5>40 following</h5>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <img className="item" src="https://images.unsplash.com/photo-1605471395053-29a60b996ab4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <img className="item" src="https://images.unsplash.com/photo-1605471395053-29a60b996ab4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <img className="item" src="https://images.unsplash.com/photo-1605471395053-29a60b996ab4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <img className="item" src="https://images.unsplash.com/photo-1605471395053-29a60b996ab4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <img className="item" src="https://images.unsplash.com/photo-1605471395053-29a60b996ab4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <img className="item" src="https://images.unsplash.com/photo-1605471395053-29a60b996ab4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            </div>


        </div>
    );
};

export default Profile;