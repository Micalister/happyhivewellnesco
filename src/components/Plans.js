import React, { useState } from 'react';
import '.././App.css';
import PlansBee from '.././assets/plans-bee.svg';
import PlansArrow from '.././assets/Arrow.svg';
import PlansBackground from '.././assets/the-plans-background.svg';
import BusyBee from '.././assets/busy-bee.svg';
import BeeStrong from '.././assets/bee-strong.svg';
import QueenBee from '.././assets/queen-bee.svg';
import BusyBeeActive from '.././assets/busy-bee-active.svg';
import BeeStrongActive from '.././assets/bee-strong-active.svg';
import QueenBeeActive from '.././assets/queen-bee-active.svg';
import ClosePlansButton from '.././assets/close-plans-button.svg'


function Plans() {

        const [isActive, setIsActive] = useState(false);
    
        /* onClick Statements */
        const handleClick1 = () => {
            setIsActive(prevState => !prevState); // Toggle the state immediately
            window.location.hash = '#plans-section';

            setTimeout(() => {
            window.history.replaceState(null, null, window.location.pathname); //resets button for reuse
        }, 1000);
        };


    return (
        <div id="plans-section">
        <div className={isActive ? 'plans-mobile-inactive' : 'plans-mobile-active'}>
            <img src={PlansBackground} alt="plans section background art" className="plans-background"/>
            <h1 className="plans-title">The Plans</h1>
            <img src={PlansBee} alt="little bee" className="plans-bee"/>
            <img src={PlansArrow} alt="pointer to the title" className="plans-arrow"/>

            <div className="plans-container">
                <div className="plans-container-child plans-container-child-a">
                    <div className="bee-background plans-bump"><img src={BusyBee} alt="testing" className="bee-icon"/></div>
                    <h3>Busy Bee DIY</h3>
                    <p className="plans-text">a self-paced 4-week fitness program designed for busy women who want structure without the pressure of traditional check-ins. You’ll get access to effective, easy-to-follow workouts, weekly mindset prompts, and simple nutrition guidance—all delivered right in the app. You’ll also have access to in-app messaging for questions or support as needed. No calls, no pressure—just a flexible plan to help you build consistency on your own terms</p>
                    
                        <div className="plans-button-decoration"></div><button className="plans-button" onClick={handleClick1}>Learn More!</button>
                    
                </div>
                <div className="plans-container-child plans-container-child-b">
                    <div  className="bee-background plans-bump"><img src={BeeStrong} alt="testing" className="bee-icon"/></div>
                    <h3>Bee Strong Challenge</h3>
                    <p className="plans-text">an 8-week program designed to help you build sustainable fitness habits, increase strength, and boost your overall well-being. Through a combination of mindful movement, nutrition education, and mindset practices, you’ll develop the tools and confidence to achieve lasting progress. This challenge is focused on consistency over perfection and celebrates every small victory along the way. Let’s get stronger, together!</p>
                    
                        <div className="plans-button-decoration"></div><button className="plans-button" onClick={handleClick1}>Learn More!</button>
                    
                </div>
                <div className="plans-container-child plans-container-child-c">
                    <div  className="bee-background plans-bump"><img src={QueenBee} alt="testing" className="bee-icon"/></div>
                    <h3>Queen Bee</h3>
                    <p className="plans-text">the ultimate coaching experience for women ready to fully commit to their fitness and wellness journey. This ongoing, month-to-month plan includes fully customized workouts, macro-based nutrition guidance, weekly mindset check-ins, and personalized support. You’ll have full app access and direct communication for feedback, motivation, and accountability—this is your space to grow, thrive, and take the lead in your health.</p>
                    
                        <div className="plans-button-decoration"></div><button className="plans-button" onClick={handleClick1}>Learn More!</button>
                    
                </div>
            </div>
        </div>

            <div className={isActive ? 'plans-comparison-container-active' : 'plans-comparison-container-inactive'}>

                <button className="close-plans-container" onClick={handleClick1}><img src={ClosePlansButton} alt="button" /></button>
                
                <div className="plans-comparison-chart">
                    <div className="info-chart">
                        <ul className="info-chart-categories">
                            <li>Plan</li>
                            <li>Plan Duration</li>
                            <li>Goal-Specific Progress</li>
                            <li>Personalized Workouts</li>
                            <li>Trainerize App Access</li>
                            <li>Habit Tracking</li>
                            <li>Community Support Chat</li>
                            <li>Custom Macro Guide</li>
                            <li>Meal Idea Guide</li>
                            <li>Mental Health Int</li>
                            <li>Check-Ins</li>
                            <li>Price</li>
                        </ul>
                    </div>

                    <div className="plans-chart">
                        <div className="active-plans-bee-icon-background"><img src={BusyBeeActive} alt="filler" className="active-plans-bee-icon busy-bee-small"/></div>
                        <ul className="plans-chart-categories">
                            <li>Busy Bee DIY</li>
                            <li>4 Weeks</li>
                            <li>Pre-Set Workout Structure</li>
                            <li>No</li>
                            <li>Yes</li>
                            <li>Yes</li>
                            <li>Yes</li>
                            <li>Yes</li>
                            <li>Yes</li>
                            <li>Limited</li>
                            <li>In-App Messaging</li>
                            <li>$75-$100</li>
                        </ul>
                        <div className="plan-selection-button-decoration"></div><a href="#plan" className="plan-selection-button">Select!</a>
                    </div>

                    <div className="first-plans-divide"></div>

                    <div className="plans-chart">
                        <div className="active-plans-bee-icon-background"><img src={BeeStrongActive} alt="filler" className="active-plans-bee-icon"/></div>
                        <ul className="plans-chart-categories">
                            <li>Bee Strong Challenge</li>
                            <li>8 Weeks</li>
                            <li>Challenge Focused</li>
                            <li>Limited</li>
                            <li>Yes</li>
                            <li>Yes</li>
                            <li>Yes</li>
                            <li>Yes</li>
                            <li>Yes</li>
                            <li>Weekly Themes</li>
                            <li>Bi-Weekly 1:1</li>
                            <li>$200-$225</li>
                        </ul>
                        <div className="plan-selection-button-decoration"></div><a href="#plan" className="plan-selection-button">Select!</a>
                    </div>

                    <div className="second-plans-divide"></div>

                    <div className="plans-chart">
                        <div className="active-plans-bee-icon-background"><img src={QueenBeeActive} alt="testing" className="active-plans-bee-icon"/></div>
                        <ul className="plans-chart-categories">
                            <li>Queen Bee</li>
                            <li>Ongoing (Monthly)</li>
                            <li>Adapted to evolving goals</li>
                            <li>Yes</li>
                            <li>Yes</li>
                            <li>Yes</li>
                            <li>Yes</li>
                            <li>Yes</li>
                            <li>Yes</li>
                            <li>Customized</li>
                            <li>Weekly 1:1</li>
                            <li>$150/Month or $400 for 3 months</li>
                        </ul>
                        <div className="plan-selection-button-decoration"></div><a href="#plan" className="plan-selection-button">Select!</a>
                    </div>

                    <button className="mobile-plans-close-button" onClick={handleClick1}>Back!</button>

                </div>
                
            </div>
            
           
            <svg className="plans-hero-bee"xmlns="http://www.w3.org/2000/svg" width="271" height="266" viewBox="0 0 271 266">
                <defs>
                    <clipPath id="clip-path">
                    <rect id="Rectangle_109" data-name="Rectangle 109" width="271" height="266" transform="translate(1649 4244)" fill="#fff" stroke="#707070" stroke-width="1"/>
                    </clipPath>
                    <clipPath id="clip-path-2">
                    <rect id="Rectangle_100" data-name="Rectangle 100" width="49.602" height="49.392" fill="#ed3a72"/>
                    </clipPath>
                    <clipPath id="clip-path-3">
                    <rect id="Rectangle_101" data-name="Rectangle 101" width="223.005" height="15.59" transform="translate(0 0)" fill="#ed3a72"/>
                    </clipPath>
                </defs>
                <g id="Mask_Group_6" data-name="Mask Group 6" transform="translate(-1649 -4244)" clip-path="url(#clip-path)">
                    <g id="Group_192" data-name="Group 192" transform="translate(98 94)">
                    <g id="Group_181" data-name="Group 181" transform="translate(1617.847 4193.39) rotate(-41)">
                        <g id="Group_173" data-name="Group 173" clip-path="url(#clip-path-2)">
                        <path id="Path_3936" data-name="Path 3936" d="M31.348,23.223a8.523,8.523,0,0,1-6.537,2.84,8.333,8.333,0,0,1-6.471-2.792,2.646,2.646,0,0,0-.381.8,56.825,56.825,0,0,1-5.035,10.387,11.2,11.2,0,0,1-5.864,4.776,7.583,7.583,0,0,1-3.745.412A3.841,3.841,0,0,1,.033,35.211a10.88,10.88,0,0,1,2.245-5.1A52.055,52.055,0,0,1,11.7,20.647q1.859-1.535,3.836-2.918a1.076,1.076,0,0,0,.514-.857,7.61,7.61,0,0,1,3.311-5.632c.356-.255.427-.417.177-.821A4.045,4.045,0,0,1,20.8,4.547a.622.622,0,0,0,.308-.785A2.532,2.532,0,0,0,18.6,1.528a12.648,12.648,0,0,0-1.823-.1,1.022,1.022,0,0,1-.667-.2.621.621,0,0,1-.253-.671.69.69,0,0,1,.571-.514,3.136,3.136,0,0,1,1.407.089,13.806,13.806,0,0,1,2.99,1.1A1.823,1.823,0,0,1,21.81,2.4c.107.356.236.706.342,1.062.087.292.244.361.531.251A6.228,6.228,0,0,1,27.005,3.7c.3.1.454.041.492-.267A3.211,3.211,0,0,1,30.1.675,14.38,14.38,0,0,1,32.39.044,3.243,3.243,0,0,1,33.1.016c.412.035.722.22.719.688a.688.688,0,0,1-.7.719c-.572.052-1.149.052-1.722.084a4.767,4.767,0,0,0-.653.086,2.5,2.5,0,0,0-2.261,2.434.268.268,0,0,0,.115.3c.084.057.169.112.252.17a4.144,4.144,0,0,1,1.24,5.977c-.2.326-.2.472.122.7a7.5,7.5,0,0,1,3.367,5.856c.027.4.289.549.542.73a78.314,78.314,0,0,1,8.721,7.277,34.778,34.778,0,0,1,4.8,5.49,10.114,10.114,0,0,1,1.944,4.839A3.832,3.832,0,0,1,45.8,39.7a9.655,9.655,0,0,1-7.323-3.045,21.334,21.334,0,0,1-3.854-5.869,72.749,72.749,0,0,1-3.046-7.022c-.065-.171-.141-.338-.228-.543" transform="translate(0 0)" fill="#ed3a72"/>
                        <path id="Path_3937" data-name="Path 3937" d="M342.643,779.893a23.644,23.644,0,0,1-8.979-1.656.92.92,0,0,1-.656-.789,8.892,8.892,0,0,1,.188-4.165c.115-.368.225-.381.545-.228a21.254,21.254,0,0,0,16.094.86,10.158,10.158,0,0,0,2.033-.911c.2-.115.279-.1.351.125a8.59,8.59,0,0,1,.112,4.706c-.073.3-.308.331-.518.413a23.993,23.993,0,0,1-9.17,1.644" transform="translate(-317.905 -738.227)" fill="#ed3a72"/>
                        <path id="Path_3938" data-name="Path 3938" d="M388.807,624.8a17.727,17.727,0,0,1-6.89-1.364c-.391-.164-.509-.3-.25-.71a15.381,15.381,0,0,0,1.368-2.714c.148-.385.314-.369.636-.241a14.59,14.59,0,0,0,11.265-.057c.255-.1.349-.067.444.182a14.229,14.229,0,0,0,1.531,3.025c.247.36-.045.388-.244.475a18.95,18.95,0,0,1-7.859,1.4" transform="translate(-364.398 -591.84)" fill="#ed3a72"/>
                        <path id="Path_3939" data-name="Path 3939" d="M402.018,987.3a12.715,12.715,0,0,1-2.108,2.462,11.058,11.058,0,0,1-5.058,2.554,1.764,1.764,0,0,1-.8,0,10.948,10.948,0,0,1-6.987-4.836.531.531,0,0,1-.04-.138,21.618,21.618,0,0,0,14.993-.039" transform="translate(-369.646 -942.966)" fill="#ed3a72"/>
                        </g>
                    </g>
                    <g id="Group_183" data-name="Group 183" transform="translate(1672.496 4215.809) rotate(40)">
                        <g id="Group_175" data-name="Group 175" transform="translate(0 0)" clip-path="url(#clip-path-3)">
                        <path id="Path_3940" data-name="Path 3940" d="M199.861,15.59a14.78,14.78,0,0,1-1.546-.079,1.479,1.479,0,1,1,.309-2.941,12.345,12.345,0,0,0,1.875.047,1.479,1.479,0,1,1,.152,2.953q-.386.02-.79.02m-176.34,0c-.409,0-.816-.016-1.211-.048a1.478,1.478,0,1,1,.239-2.947,12.529,12.529,0,0,0,1.877.005,1.479,1.479,0,0,1,.219,2.949c-.368.027-.746.041-1.124.041m133.045-.023a1.479,1.479,0,0,1-.084-2.955,10.387,10.387,0,0,0,1.823-.263,1.479,1.479,0,0,1,.688,2.876,13.42,13.42,0,0,1-2.341.339l-.087,0M66.439,15.54q-.064,0-.13-.005a13.059,13.059,0,0,1-2.337-.415,1.479,1.479,0,0,1,.787-2.851,10.052,10.052,0,0,0,1.805.32,1.479,1.479,0,0,1-.126,2.952m48.2-.292a1.479,1.479,0,0,1-.354-2.914,9.188,9.188,0,0,0,1.707-.605,1.479,1.479,0,0,1,1.26,2.676,12.122,12.122,0,0,1-2.258.8,1.465,1.465,0,0,1-.355.044m-6.251-.093a1.483,1.483,0,0,1-.4-.056,12.171,12.171,0,0,1-2.229-.877A1.479,1.479,0,0,1,107.1,11.59a9.068,9.068,0,0,0,1.686.663,1.479,1.479,0,0,1-.4,2.9M72.6,14.516a1.479,1.479,0,0,1-.64-2.813,10.121,10.121,0,0,0,1.579-.947,1.478,1.478,0,1,1,1.735,2.395,13.022,13.022,0,0,1-2.036,1.22,1.469,1.469,0,0,1-.637.145m77.846-.165a1.469,1.469,0,0,1-.682-.168,13.405,13.405,0,0,1-1.989-1.275,1.478,1.478,0,1,1,1.8-2.346,10.593,10.593,0,0,0,1.556,1,1.479,1.479,0,0,1-.684,2.79m56.035-.784a1.479,1.479,0,0,1-.847-2.691,13.673,13.673,0,0,0,1.475-1.2,1.479,1.479,0,0,1,2.011,2.168,16.613,16.613,0,0,1-1.795,1.459,1.472,1.472,0,0,1-.845.266m-176.1-.176a1.478,1.478,0,0,1-.875-2.671,14.617,14.617,0,0,0,1.461-1.239,1.479,1.479,0,1,1,2.045,2.137A17.463,17.463,0,0,1,31.257,13.1a1.47,1.47,0,0,1-.873.286M16.6,13.345a1.473,1.473,0,0,1-.88-.291,17.743,17.743,0,0,1-1.748-1.494,1.479,1.479,0,1,1,2.053-2.129,14.87,14.87,0,0,0,1.458,1.248,1.479,1.479,0,0,1-.882,2.666m176.1-.181a1.473,1.473,0,0,1-.906-.311,18.9,18.9,0,0,1-1.711-1.516,1.479,1.479,0,1,1,2.081-2.1,16.008,16.008,0,0,0,1.444,1.281,1.479,1.479,0,0,1-.908,2.646m-28.613-.985a1.479,1.479,0,0,1-1.011-2.558c.432-.4.875-.858,1.393-1.427a1.479,1.479,0,1,1,2.186,1.992c-.572.627-1.067,1.134-1.557,1.593a1.474,1.474,0,0,1-1.011.4M59.023,11.92a1.475,1.475,0,0,1-1.03-.418c-.467-.453-.952-.963-1.526-1.6a1.479,1.479,0,0,1,2.2-1.975c.528.589.969,1.052,1.386,1.457a1.479,1.479,0,0,1-1.031,2.539m62.5-1.309a1.479,1.479,0,0,1-1.094-2.473c.393-.433.778-.875,1.164-1.316l.215-.247a1.479,1.479,0,1,1,2.227,1.945l-.214.245c-.4.457-.8.913-1.2,1.36a1.475,1.475,0,0,1-1.095.484m-19.92-.271a1.475,1.475,0,0,1-1.1-.493c-.319-.356-.633-.717-.948-1.077L99.1,8.249A1.479,1.479,0,1,1,101.319,6.3l.462.528c.306.351.613.7.923,1.049a1.478,1.478,0,0,1-1.1,2.465M78.885,8.973a1.479,1.479,0,0,1-1.113-2.452c.531-.607.981-1.114,1.453-1.613a1.479,1.479,0,1,1,2.149,2.031c-.44.465-.868.947-1.376,1.528a1.476,1.476,0,0,1-1.114.505M144.246,8.7a1.475,1.475,0,0,1-1.111-.5c-.4-.456-.877-.991-1.376-1.506a1.479,1.479,0,0,1,2.123-2.059c.544.561,1.05,1.13,1.475,1.612a1.479,1.479,0,0,1-1.11,2.455M212.4,7.572a1.479,1.479,0,0,1-1.081-2.487c.568-.609,1.09-1.126,1.6-1.579a1.479,1.479,0,1,1,1.972,2.2c-.439.393-.9.848-1.405,1.392a1.475,1.475,0,0,1-1.082.47M36.267,7.351a1.479,1.479,0,0,1-1.072-2.5c.572-.6,1.1-1.115,1.626-1.565a1.479,1.479,0,1,1,1.933,2.238c-.448.387-.91.832-1.414,1.363a1.474,1.474,0,0,1-1.072.46M10.721,7.3a1.474,1.474,0,0,1-1.07-.458A19.449,19.449,0,0,0,8.234,5.482a1.479,1.479,0,1,1,1.923-2.247A22.381,22.381,0,0,1,11.791,4.8a1.479,1.479,0,0,1-1.07,2.5M186.852,7.08a1.475,1.475,0,0,1-1.058-.446,17.762,17.762,0,0,0-1.428-1.326,1.479,1.479,0,1,1,1.879-2.283,20.792,20.792,0,0,1,1.665,1.544,1.479,1.479,0,0,1-1.058,2.511M169.874,6.032a1.479,1.479,0,0,1-.981-2.585,15.465,15.465,0,0,1,1.847-1.418,1.479,1.479,0,0,1,1.611,2.48,12.539,12.539,0,0,0-1.5,1.15,1.475,1.475,0,0,1-.98.372M53.219,5.786a1.472,1.472,0,0,1-.955-.351,11.7,11.7,0,0,0-1.515-1.1A1.479,1.479,0,0,1,52.28,1.8a14.607,14.607,0,0,1,1.9,1.375,1.479,1.479,0,0,1-.957,2.607m74.305-1.08a1.479,1.479,0,0,1-.8-2.724A12.575,12.575,0,0,1,128.848.89a1.479,1.479,0,0,1,1.093,2.748,9.438,9.438,0,0,0-1.62.835,1.472,1.472,0,0,1-.8.233M95.536,4.515a1.474,1.474,0,0,1-.756-.209,9.268,9.268,0,0,0-1.642-.779,1.479,1.479,0,0,1,1-2.784,12.344,12.344,0,0,1,2.16,1.023,1.479,1.479,0,0,1-.759,2.749m-10.158-.8A1.479,1.479,0,0,1,84.84.859a12.363,12.363,0,0,1,2.3-.645,1.479,1.479,0,0,1,.521,2.911,9.363,9.363,0,0,0-1.749.489,1.474,1.474,0,0,1-.536.1m52.275-.127a1.477,1.477,0,0,1-.489-.084,9.539,9.539,0,0,0-1.769-.431,1.479,1.479,0,0,1,.429-2.926,12.551,12.551,0,0,1,2.317.566,1.479,1.479,0,0,1-.489,2.875m81.781-.4a1.479,1.479,0,0,1-.289-2.929,13.877,13.877,0,0,1,2.342-.258,1.479,1.479,0,1,1,.08,2.956,10.908,10.908,0,0,0-1.84.2,1.488,1.488,0,0,1-.292.029M43.387,3.137A1.479,1.479,0,0,1,43.137.2a14.238,14.238,0,0,1,2.34-.2,1.479,1.479,0,1,1,.016,2.957,11.27,11.27,0,0,0-1.852.157,1.465,1.465,0,0,1-.254.022M3.578,3.124a1.5,1.5,0,0,1-.244-.02,11.388,11.388,0,0,0-1.855-.147A1.479,1.479,0,0,1,1.479,0,14.332,14.332,0,0,1,3.818.187a1.479,1.479,0,0,1-.24,2.937m176.044-.045a1.471,1.471,0,0,1-.207-.014,12.014,12.014,0,0,0-1.865-.1A1.479,1.479,0,1,1,177.487,0a14.934,14.934,0,0,1,2.337.132,1.479,1.479,0,0,1-.2,2.943" transform="translate(0 0)" fill="#ed3a72"/>
                        </g>
                    </g>
                    <g id="Group_184" data-name="Group 184" transform="translate(1845.891 4360.577) rotate(40)">
                        <g id="Group_175-2" data-name="Group 175" transform="translate(0 0)" clip-path="url(#clip-path-3)">
                        <path id="Path_3940-2" data-name="Path 3940" d="M199.861,15.59a14.78,14.78,0,0,1-1.546-.079,1.479,1.479,0,1,1,.309-2.941,12.345,12.345,0,0,0,1.875.047,1.479,1.479,0,1,1,.152,2.953q-.386.02-.79.02m-176.34,0c-.409,0-.816-.016-1.211-.048a1.478,1.478,0,1,1,.239-2.947,12.529,12.529,0,0,0,1.877.005,1.479,1.479,0,0,1,.219,2.949c-.368.027-.746.041-1.124.041m133.045-.023a1.479,1.479,0,0,1-.084-2.955,10.387,10.387,0,0,0,1.823-.263,1.479,1.479,0,0,1,.688,2.876,13.42,13.42,0,0,1-2.341.339l-.087,0M66.439,15.54q-.064,0-.13-.005a13.059,13.059,0,0,1-2.337-.415,1.479,1.479,0,0,1,.787-2.851,10.052,10.052,0,0,0,1.805.32,1.479,1.479,0,0,1-.126,2.952m48.2-.292a1.479,1.479,0,0,1-.354-2.914,9.188,9.188,0,0,0,1.707-.605,1.479,1.479,0,0,1,1.26,2.676,12.122,12.122,0,0,1-2.258.8,1.465,1.465,0,0,1-.355.044m-6.251-.093a1.483,1.483,0,0,1-.4-.056,12.171,12.171,0,0,1-2.229-.877A1.479,1.479,0,0,1,107.1,11.59a9.068,9.068,0,0,0,1.686.663,1.479,1.479,0,0,1-.4,2.9M72.6,14.516a1.479,1.479,0,0,1-.64-2.813,10.121,10.121,0,0,0,1.579-.947,1.478,1.478,0,1,1,1.735,2.395,13.022,13.022,0,0,1-2.036,1.22,1.469,1.469,0,0,1-.637.145m77.846-.165a1.469,1.469,0,0,1-.682-.168,13.405,13.405,0,0,1-1.989-1.275,1.478,1.478,0,1,1,1.8-2.346,10.593,10.593,0,0,0,1.556,1,1.479,1.479,0,0,1-.684,2.79m56.035-.784a1.479,1.479,0,0,1-.847-2.691,13.673,13.673,0,0,0,1.475-1.2,1.479,1.479,0,0,1,2.011,2.168,16.613,16.613,0,0,1-1.795,1.459,1.472,1.472,0,0,1-.845.266m-176.1-.176a1.478,1.478,0,0,1-.875-2.671,14.617,14.617,0,0,0,1.461-1.239,1.479,1.479,0,1,1,2.045,2.137A17.463,17.463,0,0,1,31.257,13.1a1.47,1.47,0,0,1-.873.286M16.6,13.345a1.473,1.473,0,0,1-.88-.291,17.743,17.743,0,0,1-1.748-1.494,1.479,1.479,0,1,1,2.053-2.129,14.87,14.87,0,0,0,1.458,1.248,1.479,1.479,0,0,1-.882,2.666m176.1-.181a1.473,1.473,0,0,1-.906-.311,18.9,18.9,0,0,1-1.711-1.516,1.479,1.479,0,1,1,2.081-2.1,16.008,16.008,0,0,0,1.444,1.281,1.479,1.479,0,0,1-.908,2.646m-28.613-.985a1.479,1.479,0,0,1-1.011-2.558c.432-.4.875-.858,1.393-1.427a1.479,1.479,0,1,1,2.186,1.992c-.572.627-1.067,1.134-1.557,1.593a1.474,1.474,0,0,1-1.011.4M59.023,11.92a1.475,1.475,0,0,1-1.03-.418c-.467-.453-.952-.963-1.526-1.6a1.479,1.479,0,0,1,2.2-1.975c.528.589.969,1.052,1.386,1.457a1.479,1.479,0,0,1-1.031,2.539m62.5-1.309a1.479,1.479,0,0,1-1.094-2.473c.393-.433.778-.875,1.164-1.316l.215-.247a1.479,1.479,0,1,1,2.227,1.945l-.214.245c-.4.457-.8.913-1.2,1.36a1.475,1.475,0,0,1-1.095.484m-19.92-.271a1.475,1.475,0,0,1-1.1-.493c-.319-.356-.633-.717-.948-1.077L99.1,8.249A1.479,1.479,0,1,1,101.319,6.3l.462.528c.306.351.613.7.923,1.049a1.478,1.478,0,0,1-1.1,2.465M78.885,8.973a1.479,1.479,0,0,1-1.113-2.452c.531-.607.981-1.114,1.453-1.613a1.479,1.479,0,1,1,2.149,2.031c-.44.465-.868.947-1.376,1.528a1.476,1.476,0,0,1-1.114.505M144.246,8.7a1.475,1.475,0,0,1-1.111-.5c-.4-.456-.877-.991-1.376-1.506a1.479,1.479,0,0,1,2.123-2.059c.544.561,1.05,1.13,1.475,1.612a1.479,1.479,0,0,1-1.11,2.455M212.4,7.572a1.479,1.479,0,0,1-1.081-2.487c.568-.609,1.09-1.126,1.6-1.579a1.479,1.479,0,1,1,1.972,2.2c-.439.393-.9.848-1.405,1.392a1.475,1.475,0,0,1-1.082.47M36.267,7.351a1.479,1.479,0,0,1-1.072-2.5c.572-.6,1.1-1.115,1.626-1.565a1.479,1.479,0,1,1,1.933,2.238c-.448.387-.91.832-1.414,1.363a1.474,1.474,0,0,1-1.072.46M10.721,7.3a1.474,1.474,0,0,1-1.07-.458A19.449,19.449,0,0,0,8.234,5.482a1.479,1.479,0,1,1,1.923-2.247A22.381,22.381,0,0,1,11.791,4.8a1.479,1.479,0,0,1-1.07,2.5M186.852,7.08a1.475,1.475,0,0,1-1.058-.446,17.762,17.762,0,0,0-1.428-1.326,1.479,1.479,0,1,1,1.879-2.283,20.792,20.792,0,0,1,1.665,1.544,1.479,1.479,0,0,1-1.058,2.511M169.874,6.032a1.479,1.479,0,0,1-.981-2.585,15.465,15.465,0,0,1,1.847-1.418,1.479,1.479,0,0,1,1.611,2.48,12.539,12.539,0,0,0-1.5,1.15,1.475,1.475,0,0,1-.98.372M53.219,5.786a1.472,1.472,0,0,1-.955-.351,11.7,11.7,0,0,0-1.515-1.1A1.479,1.479,0,0,1,52.28,1.8a14.607,14.607,0,0,1,1.9,1.375,1.479,1.479,0,0,1-.957,2.607m74.305-1.08a1.479,1.479,0,0,1-.8-2.724A12.575,12.575,0,0,1,128.848.89a1.479,1.479,0,0,1,1.093,2.748,9.438,9.438,0,0,0-1.62.835,1.472,1.472,0,0,1-.8.233M95.536,4.515a1.474,1.474,0,0,1-.756-.209,9.268,9.268,0,0,0-1.642-.779,1.479,1.479,0,0,1,1-2.784,12.344,12.344,0,0,1,2.16,1.023,1.479,1.479,0,0,1-.759,2.749m-10.158-.8A1.479,1.479,0,0,1,84.84.859a12.363,12.363,0,0,1,2.3-.645,1.479,1.479,0,0,1,.521,2.911,9.363,9.363,0,0,0-1.749.489,1.474,1.474,0,0,1-.536.1m52.275-.127a1.477,1.477,0,0,1-.489-.084,9.539,9.539,0,0,0-1.769-.431,1.479,1.479,0,0,1,.429-2.926,12.551,12.551,0,0,1,2.317.566,1.479,1.479,0,0,1-.489,2.875m81.781-.4a1.479,1.479,0,0,1-.289-2.929,13.877,13.877,0,0,1,2.342-.258,1.479,1.479,0,1,1,.08,2.956,10.908,10.908,0,0,0-1.84.2,1.488,1.488,0,0,1-.292.029M43.387,3.137A1.479,1.479,0,0,1,43.137.2a14.238,14.238,0,0,1,2.34-.2,1.479,1.479,0,1,1,.016,2.957,11.27,11.27,0,0,0-1.852.157,1.465,1.465,0,0,1-.254.022M3.578,3.124a1.5,1.5,0,0,1-.244-.02,11.388,11.388,0,0,0-1.855-.147A1.479,1.479,0,0,1,1.479,0,14.332,14.332,0,0,1,3.818.187a1.479,1.479,0,0,1-.24,2.937m176.044-.045a1.471,1.471,0,0,1-.207-.014,12.014,12.014,0,0,0-1.865-.1A1.479,1.479,0,1,1,177.487,0a14.934,14.934,0,0,1,2.337.132,1.479,1.479,0,0,1-.2,2.943" transform="translate(0 0)" fill="#ed3a72"/>
                        </g>
                    </g>
                    </g>
                </g>
            </svg>


            
            

        </div>        
    )
}

export default Plans;