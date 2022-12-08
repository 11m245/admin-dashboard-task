import './cards.css';

import { useState } from 'react';
import { SmallCards } from './SmallCards';


function Cards() {
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    return (
        <div className='cards-page-container'>
            <h1 className='heading'>Cards</h1>
            <SmallCards />
            <div className="section-3 mt-4">


                <div className="card">
                    <div className="card-header">
                        <h6 className="m-0 font-weight-bold text-secondary"> Default Card Example</h6>
                    </div>
                    <div className="card-body">
                        This card uses Bootstrap's default styling with no utility classes added. Global
                        styles are the only things modifying the look and feel of this default card example.
                    </div>
                </div>

                <div className="card shadow">
                    <div className="card-header">
                        <h6 className="m-0 font-weight-bold text-primary">Basic Card Example</h6>
                    </div>
                    <div className="card-body">
                        The styling for this basic card example is created by using default Bootstrap
                        utility classes. By using utility classes, the style of the card component can be
                        easily modified with no need for any custom CSS!
                    </div>
                </div>


                {/* card3 */}
                <div class="card shadow mb-4">
                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">Dropdown Card Example</h6>
                        <div onClick={() => setShow3(!show3)} onBlur={() => setShow3(!show3)} class="dropdown">
                            <a href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </a>


                            <div style={{ display: (show3) ? "block" : "none" }} class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                <div class="dropdown-header">Dropdown Header:</div>
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">
                        Dropdown menus can be placed in the card header in order to extend the functionality
                        of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis
                        icon in the card header can be clicked on in order to toggle a dropdown menu.
                    </div>
                </div>



                <div class="card shadow mb-4">
                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">Dropdown Card Example</h6>
                        <div onClick={() => setShow4(!show4)} onBlur={() => setShow4(!show4)} class="dropdown">
                            <a href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </a>


                            <div style={{ display: (show4) ? "block" : "none" }} class="dropdown-menu dropdown-menu-left shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                <div class="dropdown-header">Dropdown Header:</div>
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">
                        Dropdown menus can be placed in the card header in order to extend the functionality
                        of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis
                        icon in the card header can be clicked on in order to toggle a dropdown menu.
                    </div>
                </div>



            </div >
        </div >);
}

export { Cards }