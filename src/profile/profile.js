import React from 'react'
import PropTypes from "prop-types";
import './style.css'

const Profile = props => {
    return (
        <>
            <div className="container">
                <h3>P E R S O N A L_I N F O R M A T I O N S</h3>
                <div className='profile'>
                    <div className="image">{props.children}</div>
                    <div className='info'>
                        <div className="fullname">
                            <span><b>FullName</b> :</span> <span>{props.fullname}</span>
                        </div>
                        <div className='job'>
                            <span><b>Occupation</b> :</span> <span>{props.job}</span>
                        </div>
                        <div className='bio'>
                            <span><b>Biography </b> :</span> <span>{props.biography}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
// style inline image
const imgstyle = { height: 150, width: 150, marginRight: 10}

// set default props
Profile.defaultProps = {
    fullname: " Grimmjow JaggerJack ",
    job: "Fakhman",
    biography: "Fakhman forever",
    children: <img style={imgstyle} src="https://img.freepik.com/vecteurs-libre/crane-bandit-monochrome-vintage-fumer-cigare_225004-153.jpg?w=2000" alt="" />
};

// set default propTypes
Profile.propTypes = {
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    biography: PropTypes.string.isRequired,
};

export default Profile;