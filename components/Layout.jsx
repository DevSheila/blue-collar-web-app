import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { GrEmoji } from 'react-icons/gr';
import { AiTwotoneHome } from 'react-icons/ai';
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdNotifications } from 'react-icons/md';
import Router from 'next/router';
import { useUser } from "../lib/hooks";
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function Layout({ children }) {
    const [user, { mutate }] = useUser();
    const [loading, isLoading] = useState(false);
    const router = useRouter();
    const handleLogout = async () => {
        isLoading(true);
        await fetch('/api/auth', {
            method: 'DELETE',
        });
        // set the user state to null
        mutate(null);
        isLoading(false);
        router.push('/')
    };
    return (
        <>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
            </Head>
            <header>
                <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">HANDYMAN</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link class="nav-link" href="/"><a style={{ color: '#949585' }}>Home</a></Link>
                                </li>
                                <li>
                                    <a class="nav-link" >
                                        About
                                    </a>
                                </li>
                                    {!user ? (<>
                                        <Link class="nav-link"href="/login"><a class="nav-link">Log In</a></Link>
                                        <Link class="nav-link"href="/signup"><a class="nav-link">SignUp</a></Link>
                                    </>) : (
                                    <AfterLogin />)}
                            </ul>
                            {user && <button className='btn btn-primary' onClick={handleLogout}>Logout</button>}
                        </div>
                    </div>
                </nav>
            </header>
            <main className='d-flex justify-content-center align-items-center'>
                <div className="container mx-auto my-3 h-100">
                    <div className="row">
                        <div className="col-sm-12">
                            {children}
                        </div>
                    </div>
                </div>
                {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="" id="">About</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                      
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </main>

            <style jsx>{`
                    .container{
                        height:85vh;
                    }    
                    main{
                        min-height:85vh;
                    }
                `}</style>
        </>
    );
}
