import Link from 'next/link';
import { useUser } from '../lib/hooks';
import AfterLogin from '../components/AfterLogin';
import { useState } from 'react';

export default function Home() {
    const [user, { mutate }] = useUser();
    const [loading, isLoading] = useState(false);
    const handleLogout = async () => {
        isLoading(true);
        await fetch('/api/auth', {
            method: 'DELETE',
        });
        // set the user state to null
        mutate(null);
        isLoading(false);
    };
    return (
        <>
       
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Handyman Services</h1>
            <p class="lead">Your local handyman providing professional services for all your home repairs, maintenance
                and installations.</p>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                       <img  class="card-img-top img-fluid" src="https://via.placeholder.com/350x150" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Home Repairs</h5>
                        <p class="card-text">We can fix any issues around your home, including plumbing, electrical,
                            drywall, painting and more.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                       <img  class="card-img-top img-fluid" src="https://via.placeholder.com/350x150" alt="Card image cap" />

                    <div class="card-body">
                        <h5 class="card-title">Home Maintenance</h5>
                        <p class="card-text">Regular home maintenance is important to keep your home in top shape. Let
                            us help you with tasks such as gutter cleaning, power washing, and HVAC maintenance.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img  class="card-img-top img-fluid" src="https://via.placeholder.com/350x150" alt="Card image cap" />

                    <div class="card-body">
                        <h5 class="card-title">Home Installations</h5>
                            <p class="card-text">Need something installed? We can help with projects like ceiling fans, light fixtures, and even
                                whole-house audio systems.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-8">
                <h2>About Us</h2>
                <p>We are a team of experienced handymen who are dedicated to providing quality services to our clients. With
                    over 10 years of experience in the industry, we have the skills and knowledge to handle any project, big or
                    small.</p>
                <p>We believe in providing personalized service and working closely with our clients to ensure that their needs
                    are met. Our goal is to make your life easier by taking care of all your home repair and maintenance needs.
                </p>
            </div>
            <div class="col-md-4">
               
            </div>
        </div>
    </div>     
        </>
    )
}
